import plotly.graph_objects as graph_objects
import plotly.express as px
import pandas as pd


class Simulation:
    def __init__(
        self,
        starting_infected,
        infected_growth_rate,
        awareness,
        awareness_growth_rate,
        mortality_day_rate,
        recovery_day_rate,
        recovery_multiplier,
        containment_effectiveness,
        cycles,
    ):
        self.infected = [starting_infected]
        self.infected_growth_rate = infected_growth_rate
        self.known = [0]
        self.dead = [0]
        self.recovered = [0]
        self.awareness = awareness
        self.awareness_growth_rate = awareness_growth_rate
        self.mortality_day_rate = mortality_day_rate
        self.recovery_day_rate = recovery_day_rate
        self.recovery_multiplier = recovery_multiplier
        self.containment_effectiveness = containment_effectiveness
        self.cycles = cycles

    def change(self):
        new_recovered = self.infected[-1] * (
            self.recovery_day_rate
            + (self.recovery_day_rate * self.awareness * self.recovery_multiplier)
        )
        new_dead = self.infected[-1] * self.mortality_day_rate
        # containment effectiveness [0,1], 0: not effective, 1: totally effective
        new_infected = (
            self.infected[-1] - (self.known[-1] * self.containment_effectiveness)
        ) * self.infected_growth_rate
        new_infected = new_infected - new_dead - new_recovered

        self.dead.append(self.dead[-1] + new_dead)
        self.recovered.append(self.recovered[-1] + new_recovered)
        self.infected.append(self.infected[-1] + new_infected)

    def discovery(self):
        not_discovered = self.infected[-1] - self.known[-1]
        found = self.awareness * not_discovered
        self.known.append(self.known[-1] + found)

    def awareness_growth(self):
        if self.awareness + (self.awareness * self.awareness_growth_rate) > 1:
            self.awareness = 1
        else:
            self.awareness = self.awareness + (
                self.awareness * (self.awareness_growth_rate)
            )

    def update(self):
        self.discovery()
        self.awareness_growth()
        self.change()

    def go(self):
        for i in range(self.cycles):
            self.update()
        return True

    def export(self):
        return pd.DataFrame(
            {
                "INFECTED": self.infected,
                "KNOWN": self.known,
                "RECOVERED": self.recovered,
                "DEAD": self.dead,
            }
        ).astype(int)

    def plot(self):
        fig = graph_objects.Figure()
        data = [self.infected, self.known, self.dead, self.recovered]
        labels = ["INFECTED", "KNOWN INFECTED", "DEAD", "RECOVERED"]
        colors = ["red", "blue", "black", "green"]
        for i in range(4):
            fig.add_trace(
                graph_objects.Scatter(
                    x=list(range(len(data[i]))),
                    y=data[i],
                    mode="lines",
                    name=labels[i],
                    line=dict(color=colors[i], width=3),
                )
            )

        fig.show()

    def bar(self):
        df = self.export().copy(deep=True)
        infected = df["INFECTED"]
        known = df["KNOWN"]
        recovered = df["RECOVERED"]
        dead = df["DEAD"]
        infected = infected.reset_index()
        infected["metric"] = "INFECTED"
        infected.columns = ["TIME", "COUNT", "METRIC"]

        known = known.reset_index()
        known["metric"] = "KNOWN"
        known.columns = ["TIME", "COUNT", "METRIC"]

        recovered = recovered.reset_index()
        recovered["metric"] = "RECOVERED"
        recovered.columns = ["TIME", "COUNT", "METRIC"]

        dead = dead.reset_index()
        dead["metric"] = "DEAD"
        dead.columns = ["TIME", "COUNT", "METRIC"]

        df = infected.append(known).append(recovered).append(dead)  # type: ignore

        df.reset_index(inplace=True, drop=True)

        fig = px.bar(
            df,
            x="METRIC",
            y="COUNT",
            color="METRIC",
            animation_frame="TIME",
            range_y=[0, df["COUNT"].max() + round(df["COUNT"].max() * 0.1)],
        )
        fig.layout.updatemenus[0].buttons[0].args[1]["frame"]["duration"] = 10  # type: ignore
        fig.show()
