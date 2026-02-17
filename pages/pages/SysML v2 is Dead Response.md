---
search:
  exclude: true
---

# SysML v2 is Dead Response

This is an uncensored stream of consciousness point by point response to the post: SysML v2 is Dead ([Linkedin](https://www.linkedin.com/posts/innosol-tech_sysml-v2-is-dead-you-just-dont-see-the-activity-7422089891942965248-NFm1/) | [Article](https://limewire.com/d/l6sKG#yMXRgcPD6t))

I tried to make up for the length with the humor.

As a quick note, it seems like the article I'm responding to is AI generated, partially due to the em-dashes, but mostly due to the confidently stated but extremely basic falsehoods. I think one of the reasons I get somewhat heated at some points is because it feels like confidently incorrect GenAI slop is polluting the internet with noise, and given that it took me 10 hours to go through and write a point by point response, and probably only 20 minutes for the guy to generate the original article - if that, I feel like I am on the losing team of a competition that is trying to infect something I love (the internet) with a digital version of cultural alzheimers.

Also as a disclaimer I have been developing a SysML v2 tool for two years now, so I'm not an unbiased observer!

Anyways, on to the article.

---

*The original article is included paragraph by paragraph to facilitate a point by point response. If there is No Response I will simply add NR.*

> The systems engineering community has spent over a decade waiting for SysML v2 to revolutionize how we design complex systems. We've attended conferences, participated in pilot programs, and invested countless hours learning the new syntax. Meanwhile, the world moved on. The problems SysML v2 was designed to solve have either been addressed by other tools or rendered obsolete by fundamental shifts in how we build systems. What remains is an elegant solution to yesterday's challenges—a beautifully engineered corpse that few have the courage to pronounce dead.

> This isn't a hit piece on the dedicated professionals who poured their expertise into SysML v2's development. It's a reality check. After three decades of modeling complex systems across defense, aerospace, automotive, and medical devices, I've watched the gap between MBSE promises and engineering reality grow wider, not narrower. The issues aren't bugs to be fixed in the next release. They're fundamental mismatches between what formal modeling languages can deliver and what modern engineering actually needs.

> Let's examine why SysML v2, despite its technical sophistication, arrived too late to matter.

NR

> SysML v2's development began in earnest around 2015, with requirements heavily influenced by pain points from the 2000s and early 2010s. Think about what engineering looked like then. Teams struggled with inconsistent tool chains. Document- based requirements lived in separate databases from design models. Verification matrices were maintained manually in Excel. These were real problems that needed solving.

When I was at the INCOSE conference in Hawaii a few years ago, I distinctly remember a guy working on the Artemis program giving a rundown of their processes. They were still using Excel - I think unfortunately a lot of stuff still uses Excel to track this kind of stuff.

> But here's what happened while we perfected the solution: The problems evolved faster than the standard could be finalized.

> Cloud-native development changed everything. By the time SysML v2 reached its 1.0 release in 2023, most engineering organizations had already adopted integrated platforms that solved the traceability and collaboration problems SysML v2 was designed to address. Companies like SpaceX, Tesla, and modern defense contractors weren't waiting for a modeling language standard—they built their own tool ecosystems that married requirements, design, analysis, and verification in ways that actually matched their workflows.

I've never worked at SpaceX or Tesla, so I can't attest to this. For what its worth, my boss is an ex-SpaceX employee, and he founded the company we work at to help address the issues he was running into at SpaceX.

> The automotive industry provides a stark example. When SysML v2 development started, AUTOSAR was the dominant framework for vehicle architecture. Today, software-defined vehicles require continuous integration and deployment pipelines that update over-the-air. The idea of maintaining a formal SysML model that accurately represents a system receiving weekly software updates is absurd. The model would be obsolete before the diagram finished rendering.

I'm not entirely convinced that it would be absurd, but supposing we entertain it would be absurd: as I understand one of the goals of MBSE and digital engineering is to create models of physical systems before the systems have ever been constructed, so that the digital version of the system can be used to identify issues with the physical system before it is physically built. In this context, you might use a SysML model to coordinate a team to design a car, but once the car is making it's way out of the factory, yeah you wouldn't really need the digital model anymore if you're pushing patches and software updates. That said, it still might be useful to have the model around, for when you develop the next generation car.

One of the issues I've seen people encounter is traceability of information across long time horizons. We want to go back to the moon, and we should be able to, sure, because we did before, but so much of the engineering knowledge that was acquired decades ago is gone, or siloed in strange places in poor PDF scans of paper documents - at best. When someone used a particular type of paint for an internal component, was it an arbitrary decision or did that paint have desirable radiative cooling properties? What were these properties? Is the decision linked to a study that describes these properties? Are these properties machine readable in a format such that the prior properties can be easily pulled into modern analysis pipelines to see if the properties meet our requirements today? Granted, this particular type of problem could be solved by better documentation, but supposing you did have better documentation, it would still likely not be standardized. One point of SysML (ideally) to be that lingua franca of that documentation, while maintaining some incremental degree of interoperability (more on that later).

> Consider the rise of DevOps and continuous delivery. Modern development teams deploy code multiple times per day. They use lightweight architecture decision records, living documentation generated from code, and automated testing suites that verify behavior at the component and system level. Where does a heavyweight modeling language fit in that world? It doesn't— at least not in the way SysML v2 envisions.

This point doesn't follow to me. The logic seems to be:

- DevOps and CI/CD processes are established and working well.
- ?
- SysML doesn't work with that system.

Why?

> The emergence of generative AI over the past two years has accelerated this obsolescence. Large language models can now generate documentation, trace requirements to tests, and even suggest design patterns based on natural language descriptions. These tools are imperfect, but they're improving at a rate that formal modeling languages can't match. When an engineer can describe a system architecture in plain English and get a working prototype in minutes, the value proposition of learning a complex graphical modeling language collapses. 

One of the key premises across this article that must be granted as true in order to accept many of the arguments is that LLMs have advanced enough to do stuff correctly. I do not believe this to be the case at all.

In relation to the premise: "LLMs are advanced enough to do our work for us, and not mess tons of stuff up" - insofar as that premise is not true, DSLs and modeling languages like SysML can serve as special role in restricting the space of possible system designs that an LLM can create to the subspace of system designs that would be valid.

Now, we haven't solved intelligence if our "intelligence" is just a brute forced pseudo-random walk through a space of possible designs, but insofar as we rely on that strategy, it would be if the space is that of valid designs, and not valid+invalid designs. More on that later, but here I'll respond to each point in more detail:

> Large language models can now generate documentation.

Yeah, pretty well. One problem is that if you overly rely on them to generate documentation, they will occasionally mess stuff up, and those mistakes get propagated to the next iteration of generation when the next LLM assumes the prior documentation is entirely correct. This leads to the accumulation of noise not unlike the accumulation of plaques in the brain, in which the descriptions of the system get more and more out of sync with the actual system. Anecdotally, just the other day I received a Claude Code generated table of all the elements in SysML v2 that was generated from a codebase I'm developing. It classified elements based on whether or not they had a corresponding specific syntax for declaring them in SysML, or were just part of the inheritance hierarchy. About 10% - 20% of the entires in the table were wrong. If I had just accepted its result as true, that would have poisoned all future work that depended on this artifact. I digress.

>> trace requirements to tests

This is kind of one of the points of SysML v2, or any formal modeling language for that matter. Do you want to rely on an LLM to do that job, or a deterministic system? Even if the LLM is right 99% of the time, why take 99% when the option to take a verifiable and traceable 100% is on the table? Furthermore, it's a false dichotomy to suggest we must choose between LLMs and modeling languages like SysML. My formal job title is "Machine Learning Engineer" and a decent chunk of what I do actually relates to figuring out how to help agents operate on system models - wherein SysML v2 serves the purpose of being a harness to ensure they can't make rash decisions or implement impossible designs.

>> and even suggest design patterns based on natural language descriptions

NR

>> These tools are imperfect, but they're improving at a rate that formal modeling languages can't match.

Is it a race? Also is the implication that language models will make modeling languages redundant? Why? If you're using LLMs to traverse your requirements documents to convert them into custom python scripts and CSV files doesn't that just make the problem of interoperability worse? Now the barrier to entry to creating your own arcane siloed repository of inscrutable and intractable data is even lower. Even if SysML v2 isn't the solution, it seems like having some kind of standardized glue to bridge the gap between these systems would be prudent.

>> When an engineer can describe a system architecture in plain English and get a working prototype in minutes, the value proposition of learning a complex graphical modeling language collapses. 

This point doesn't follow to me. Get a working prototype in what? In rust? In python? Of what system - an airplane? For the record, I'm not a huge fan of the graphical aspect of SysML v2 personally either, but I think this point needs more detail.

> SysML v2 solved the wrong problem at the wrong time. The community needed an agile, lightweight way to capture system intent and enable collaboration. What we got was a comprehensive language designed for rigor and completeness—qualities that made sense for the challenges of 2010 but are increasingly irrelevant in 2026.

There's always some tension between how simple we want the world to be and how complex we need to make our systems to actually work inside of it. I don't think SysML is perfect, but it's pretty good. Why it wouldn't be relevant now (only 16 years later) is unclear to me. Is it because of LLMs? Well, that hinges on whether you believe LLMs can actually get stuff right consistently. There are several factually incorrect statements about SysML v2 in the article I'm responding to, and the anomalously high rate of em-dashes leads me to believe that the article in question is a self-evident proof of the notion that indeed, we are not there yet (sorry!). Plus, tons of recent progress in getting there (fully autonomous trustworthy intelligent systems) comes from restricting the paths and dead ends that LLMs would otherwise go down. I repeat myself, but SysML can serve a role in that.

> SysML v2 aimed for something ambitious: a complete, mathematically rigorous language for describing any conceivable system. This sounds appealing until you understand the fundamental trade-off embedded in the goal. Any language that is complete is inflexible. Any language that is flexible is incomplete. This isn't an opinion—it's mathematics.

What?

> Gödel's incompleteness theorems tell us that in any consistent formal system capable of expressing basic arithmetic, there are true statements that cannot be proven within that system. Additionally, such a system cannot prove its own consistency. In simpler terms: no complete and consistent set of axioms can exist for all of mathematics.

Oh no.

> Apply this to systems modeling and the implications become clear. SysML v2 attempts to be a complete formal language for systems engineering. But the moment you make the language complete enough to rigorously describe all system aspects, you make it too rigid to adapt to the creative chaos of actual engineering. Engineers constantly encounter situations the language designers didn't anticipate—novel architectures, emerging technologies, domain-specific patterns that don't fit the standard metamodel.

OK. So there are a few points made here that are tangled together and we need to unpack them to address them one by one. I will lay out my thought process as I read this.

>> SysML v2 aimed for something ambitious: a complete, mathematically rigorous language for describing any conceivable system.

Yes.

>> This sounds appealing until you understand the fundamental trade-off embedded in the goal.

Ok?

>> Any language that is complete is inflexible. Any language that is flexible is incomplete.

Ok, so "completion" in this context I'm assuming means "able to comprehensively represent all of reality". "Flexibility" in this context means "able to represent reality in the way that people want to represent it" - I think. Representing reality (in text no less!) is a hard problem. This point is sufficiently vague enough, however, that it is difficult to respond to, and it's not immediately clear to me why it is assumed there is a negative correlation between those two things.

>> This isn't an opinion—it's mathematics.

Ah, here we go, the mathematical explanation explaining how completeness is negatively correlated with flexibility.

>> Gödel's incompleteness theorems tell us that in any consistent formal system capable of expressing basic arithmetic, there are true statements that cannot be proven within that system. Additionally, such a system cannot prove its own consistency. In simpler terms: no complete and consistent set of axioms can exist for all of mathematics.

No. Ok. So the notion that there are true statements that cannot be proven within the system that formalizes a symbolic expression of those statements does NOT say anything about how completeness is negatively correlated with flexibility. At best, they are loosely related, and if the point is that "you can't make a language that can fully represent reality" - which is true, then that would be a straw man fallacy, because the goal of SysML isn't to create a language without true but unprovable statements, it's to make a language that let's you see whether your aircraft is going to fall out of the sky on a transcontinental flight because you only allotted a fuel tank with a capacity of a gallon of jet fuel. Furthermore, Godel's theorem is a statement about ALL POSSIBLE LANGUAGES, so even if it WAS a valid point, it would also hold for every other conceivable symbolic representation of any language - regardless of whether SpaceX or Tesla or Vulkans invented it.

>> Apply this to systems modeling and the implications become clear.

They do not.

>> SysML v2 attempts to be a complete formal language for systems engineering.

Yes.

>> But the moment you make the language complete enough to rigorously describe all system aspects, you make it too rigid to adapt to the creative chaos of actual engineering. Engineers constantly encounter situations the language designers didn't anticipate—novel architectures, emerging technologies, domain-specific patterns that don't fit the standard metamodel.

This does not follow from Godels incompleteness theorem, but regardless, there is an interesting point here about standardization enforcing design patterns that do not adhere to reality. There isn't a clean solution there, and I will speak more on that later.

> I've seen this play out repeatedly in real projects. An aerospace team tries to model a hybrid propulsion system that combines electric motors with traditional turbines. The standard has constructs for electrical systems and constructs for mechanical systems, but the unique interactions of the hybrid design require workarounds and extensions. The model becomes increasingly awkward, festooned with stereotypes and custom properties that undermine the very standardization the language promised.

> I've seen this play out repeatedly in real projects. An aerospace team tries to model a hybrid propulsion system that combines electric motors with traditional turbines. The standard has constructs for electrical systems and constructs for mechanical systems, but the unique interactions of the hybrid design require workarounds and extensions. The model becomes increasingly awkward, festooned with stereotypes and custom properties that undermine the very standardization the language promised.

Yeah that's a problem. The broader point that SysML is too rigid to adapt to all the custom solutions that people will need to implement is interesting, but worth considering in detail from a computational perspective.

*We might start from the position that whatever language we're using needs to be Turing complete. Then we could contrast SysML with another language (eg: python) - and qualify whether that language is good enough to do the necessary tasks (no: eg, for massive simulations) - and if not, then arrive at the conclusion that sometimes a specific tool is needed for the job - but that doesn't make a standardized tool for bridging the results from those tools together no longer useful - it simply doesn't track, it's an invalid syllogism, like: "all men are mortal, socrates is a man, thus socrates requires his apples be skinned before eating them" kind of stuff.*

> Or consider software-hardware co-design in modern embedded systems. SysML v2 has blocks and activities and state machines, all beautifully defined. But when you're optimizing a machine learning inference pipeline that spans custom silicon, FPGA acceleration, and CPU processing, the standard constructs feel like forcing a square peg into a round hole. You can make it work, but the effort required exceeds the value delivered.

SysML v2 does not have blocks. SysML v1 has blocks. As specified [here](https://www.incose.org/wp-content/uploads/legacy/working-groups/mbse-initiative/sysml-2-documents/sysml_v2_overview_demo.pdf?sfvrsn=50b971c7_2) the Part Definition has replaced the block in SysML v1.

Is this saying that you shouldn't use SysML to optimize a machine learning inference pipeline? Agreed. Is this saying you shouldn't use it to model the inference pipeline? Debatable, but I happen to agree, although the reason it's forcing a square peg into a round hole is not clear to me. As it happens, SysML could be used to ensure that you aren't forcing any square pegs into round holes in the ship you're designing though.

> The alternative—making the language flexible enough to handle these cases elegantly—means making it incomplete. You add extension mechanisms, customization points, and domain-specific language capabilities. Suddenly your standard isn't standard anymore. Different organizations extend it in incompatible ways. The promise of universal interoperability vanishes.

Yeah, this is a good point. I will add, however, that incremental progress towards standardization can still be good. Just because we don't have perfect universal interoperability doesn't mean we have to abandon good faith efforts to move in that direction.

> This is the completeness trap, and SysML v2 walked right into it.

I've felt this way sometimes when working with SysML v2, but I don't think we need to throw the baby out with the bathwater.

> Engineering is fundamentally a creative activity. We combine physics, mathematics, economics, and human ingenuity to solve novel problems. We need languages that get out of our way, not languages that demand we conform our thinking to predefined patterns.

Kind of agree. It's a nice sentiment, but literally every language forces you to conform your thinking to predefined patterns - that is unescapable. Tangentially related, most language follow one of two major patterns, one of functions that accept input and output and can be stitched together into networks of black boxes, which can then be composed into new higher level functions, and another in which we pass around objects with internal state that is observed and mutated as the object is passed around the system. SysML v2 is no exception. The point being that there are already design decisions across all major languages, and specific nuanced design decisions within languages that force you to conform your thinking to predefined, generalizable patterns, which are composable, decomposable, and reusable across contexts.

> A truly useful modeling approach embraces incompleteness—it provides just enough structure to facilitate communication while leaving room for innovation and domain expertise.

I think that's kind of what the SysML designers were going for. Whether they hit the nail on the head is up to debate, but it certainly can't be said that they *failed* at this endeavor. At least not without specific examples of failure points / cases.

> SysML v2's designers chose rigor over adaptability. In doing so, they created a language that's theoretically sound but practically stifling. The corpse is beautifully dressed, but it's still a corpse.

I don't intrinsically disagree with this point but I think it is inconsistent with other points across the article. At some points the author states that the standard is not rigorous enough - leaving tools vendors to decide precise implementation, and here it states that it is too rigorous and not adaptable enough. Again, I think there is a common fallacy invoked across the article starts with:

- Engineering and MBSE needs the right language to model the complexity of reality

And goes in one of two directions:

1. SysML isn't that language, so we shouldn't use it.

To which one might respond that just because it isn't perfect doesn't mean it shouldn't be used/can't be useful. I mean, Javascript was invented in a week by a dude who explicitly stated no-one should seriously use it and now it powers the web. The fact that an imperfect thing can still be useful should carry weight, especially when we consider that significantly more effort has gone into getting SysML v2 right than JS.

2. That language doesn't exist, so we should just stick with custom domain specific solutions that engineers create internally at the organizations they work at.

Again, the fact that custom solutions are used at specific companies for specific tasks doesn't obviate the utility of a common language to glue those processes together, even if it isn't perfect, the perfect is the enemy of the good, and certainly the enemy of incremental progress.

Personally, I think the appropriate metaphor for SysML isn't a corpse, but a fetus that genetic tests have shown to be hyper-autistic. There's a chance we get something that just slows us down and requires extra effort to maintain without providing value, but there's also a chance we get some hyper-intelligent Good Will Hunting savant that accelerates engineering processes.

> Here's a truth that should be obvious but somehow isn't: MBSE models must increase in fidelity as development progresses. You start with a rough concept—major subsystems, key interfaces, critical requirements. As you learn more about the design, you add detail where it matters. This is how every successful modeling effort actually works.

Yes.

> But here's where SysML v2 and MBSE evangelists go wrong: they confuse selective fidelity increases with comprehensive model completion. The result is gold-plating—adding detail everywhere because the methodology says you should, not because anyone actually needs it.
> 
> Let me be specific. At project kickoff, your model might show five major subsystems and their primary interfaces. This is appropriate. You don't know enough yet to model the internal architecture of each subsystem in detail. You're still figuring out which subsystem handles which functions. Your model is low-fidelity, and that's exactly what it should be at this stage.
> 
> Three months later, you've hit a thermal management problem in Subsystem A. The cooling approach you sketched out isn't going to work. So you increase the fidelity of Subsystem A's model—you add heat sources, heat sinks, thermal paths, and control loops. You run thermal analyses. You validate the new approach. This fidelity increase is targeted and valuable.
> 
> But here's what happens in practice with comprehensive MBSE programs: someone decides that if Subsystem A needs detailed modeling, all subsystems need detailed modeling. After all, the methodology calls for a "complete system model." So teams spend weeks adding detail to Subsystems B through E, even though those subsystems are performing fine with the current design. The model grows. The maintenance burden increases. The value delivered? Approximately zero.
> 
> I've seen programs where 70% of the model detail was never used for any analysis, never informed any decision, and never caught any problem. It existed because the model was "supposed to be complete." This is gold-plating, and it's worse than wasteful—it's actively harmful. Every piece of unnecessary detail is another thing to maintain, another source of potential inconsistency, another barrier to understanding the system.
>
> The reality is that different questions require different levels of fidelity. If you're analyzing electromagnetic interference, you need detailed information about circuit layouts and shielding. If you're analyzing thermal performance, you need heat loads and cooling paths. If you're analyzing cost, you need parts counts and manufacturing processes. No single model can or should capture all this detail simultaneously.

This is an organizational issue not specific to SysML and any tool is liable to have it.

> SysML v2 doesn't cause this problem—the problem is human nature combined with methodology zealotry. But the language's comprehensiveness enables the worst impulses. When your modeling language can represent anything, there's a temptation to model everything. And that's when the model stops being a tool and becomes a burden.

Humans are imperfect. This seems to be making the case that we should limit that capability of our tools so as to not enable bad human impulses. You could make the same case many other programming languages. I would add that a valid critique of the language is that there should be many ways to do the same thing - creating a language capable of modeling everything isn't a bad idea, but making it possible to do the same thing many ways is not great, and SysML v2 is guilty of that certainly.

> Smart engineering teams maintain multiple models at different fidelity levels, each optimized for specific questions. They use rough block diagrams for architecture discussions. They build detailed simulation models for performance analysis. They maintain separate cost models and reliability models and manufacturing models. These models may not be perfectly synchronized, and that's fine. They serve different purposes.

Agreed. That is fine. But is it not also fine to attempt to synchronize them from the outset and thus avoid later headache during eventual re-synchronization stages? I mean, debatable TBH, I'm not sure what the answer is but I don't think this means we have to abandon SysML v2.

> The MBSE vision of one model to rule them all is appealing but wrong. SysML v2's technical sophistication makes this vision seem more achievable than ever, but it's still wrong. We don't need comprehensive models. We need just-enough models, maintained only where they deliver value.

Agreed, but as a minor point you can have just-enough models in SysML.

> After thirty years of building models and working with dozens of engineering organizations, I have yet to meet a data engineer, software engineer, hardware engineer, human factors engineer, or simulation engineer who wants a detailed model from systems engineering. Let me repeat that for emphasis: not one.

Yeah, that tracks. I don't think the value prop for SysML v2 is a bunch of dudes drawing boxes and lines and distributing those to engineering teams to execute on.

> This isn't because these engineers are lazy or don't understand the value of modeling. It's because they understand something fundamental that many systems engineers refuse to accept: domain expertise matters more than generic models.

Agreed. But domain expertise and modeling don't have to be separate. Ideally we get to the point where SysML is well documented enough, and the tool support is good enough that someone can pick it up and start using it to communicate with other engineers and validate their designs in an afternoon.

> Here's what happens when you give a software architect a detailed SysML sequence diagram showing exactly how every object should interact: they ignore it. Not out of disrespect, but because the SysML model can't capture the nuances of their specific technology stack, design patterns, and performance requirements. They need to know what the software should accomplish, not how to accomplish it. The "how" is their job, and they're better at it than the systems engineer who made the model.

I would certainly ignore it too. But like, what if the software architect is using SysML to model the sequence diagram? And communicate it to other software architects on their team? People are perfectly happy using mermaid diagrams to do that... Also, why can't the model capture the specific nuances of their specific technology stack, design patterns, and performance requirements? I struggle to believe that. Granted, the SysML ecosystem is not advanced enough yet to do that without a hassle, but that will change with focused effort, and the software architect was using Excalidraw or Mermaid or diagrams.net or something before, I bet SysML would be up to the task.

This does expose a real criticism of the SysML ecosystem though. There need to be more real world examples of application of SysML to modeling physical systems. I'm hoping I get the chance to work on a project creating an RAV with a coil gun by modeling it in SysML first at some point in the next year or so (time permitting) and would publish the results, but it would be nice if the community were actively maintaining open source projects that illustrated with benefits of MBSE.

> Or consider a hardware engineer receiving a detailed block diagram showing component selection and circuit topology. If they're any good at their job, they'll use the diagram to understand the intent, then design the actual circuit based on current component availability, cost constraints, thermal considerations, and electromagnetic compatibility requirements that weren't captured in the SysML model. The model provides direction, not prescription.

Could you not capture that in a SysML model? I've been kind of thinking about SysML like a version of structured markdown that's precise enough to be a replacement for many Excel workflows, and has enough of a formal syntax/semantics to be used like a programming language where required (tool support pending).

I mean, I'm just thinking - you could have a circuit design with the various parts, and then track the available suppliers, along with metadata about the cost per part and documentation as to minimum order requirements along with resources to supplier contacts inline with the performance characteristics in a SysML model, and that seems like it would be really useful for an engineer, let alone an agent you want to delegate work to.

> What these engineers actually want from systems engineering is simple: a low-fidelity guiding model that points the direction while leaving them free to provide details based on their expertise.

You can do that in SysML.

> What functions does my subsystem need to provide?

You can do that in SysML.

> What are the critical interfaces to other subsystems?

You can do that in SysML.

> What are the key performance requirements I must meet?

You can do that in SysML.

> What are the major constraints I must work within?

That is literally the point of SysML.

> They don't want:
> Detailed design decisions in their domain

Then don't provide them.

> Prescriptive allocation of every requirement to every component

Then don't provide them.

> Exhaustive behavioral models that will be wrong anyway 

Then don't provide them.

> Translation of their domain knowledge into generic SysML constructs

Then don't provide them!

> I've watched this pattern repeat across industries. A well-intentioned systems engineering team creates a comprehensive SysML model. They allocate requirements. They define detailed behaviors. They specify interfaces down to individual data elements. Then they hand it off to the subsystem teams.
> 
> And those teams promptly build something different—better suited to the actual constraints they face, informed by domain knowledge the SysML model couldn't capture, and optimized for factors the systems engineers didn't consider. The detailed model becomes shelfware while the low-fidelity sketches pinned to the wall actually guide development.

Why not reverse the direction. A subsystem team creates a SysML model of the requirements of their subsystem. They qualify the constraints their subsystem, and other subsystems must adhere to in order to be compliant, and the interfaces to the other subsystems. They hand off those interfaces to other subsystem teams. Those teams design around the interfaces without consideration to the underlying complexity. When they are completed, they run the constraints developed by another team in a CI/CD pipeline. Some of them fail. They can go directly into the design of the other team and identify the specific parts that are causing constraints to fail, create a pull request with the relevant changes, and notify the first subsystem team of the changes - or hash it out with them.

I'm not sure that this article is an argument against SysML so much as it is against bureaucracy.

> This creates a vicious cycle. Systems engineers, seeing their detailed models ignored, conclude that the engineering teams "don't get MBSE" and need more training. So they invest in tool training and methodology workshops. Meanwhile, the engineering teams conclude that MBSE creates busy work without adding value, and resistance hardens.

Yeah, bureaucracy...

> The solution isn't more detailed models or better tools. It's recognizing that systems engineering's value comes from integration and coordination, not from detailed design in every domain.

Why not better tools and integration/coordination? A desire to create the platonic ideal of a perfect model/codebase/system will afflict every autistic engineer until the end of time (myself included), but the solution is personal psychological development and is largely uncorrelated with the tools we use.

> The best systems engineers I've worked with create sparse models that capture the essential system structure and let domain experts fill in their areas. They use the model as a communication tool, not a design prescription.

Agreed.

> SysML v2's comprehensiveness works against this reality. The language can represent almost anything, which encourages systems engineers to try representing everything. But more capability doesn't always mean more value. Sometimes it means more waste.

Good point but again it comes down to whether we should restrict the capability of the tools engineers can use in the name of not trusting that they won't over-obsess over detail. They will no matter what tools they have!

Also, this point is inconsistent with earlier points that state that SysML is too restrictive. Either it can represent almost anything or it's insufficient to represent what engineers actually want to represent. Pick one.

> When SysML v2 proponents tout its benefits, they inevitably mention tool interoperability. Finally, we'll have true model exchange! No more vendor lock-in! Universal standards enabling seamless collaboration! This sounds wonderful until you look at what's actually happening in the SysML v2 tool ecosystem.
> 
> As of 2026, we have roughly a dozen SysML v2 tools in various states of maturity. Some are commercial products from established vendors. Others are open-source initiatives. A few are research prototypes. They all claim SysML v2 compliance, yet good luck moving a non-trivial model between any two of them without losing information, breaking relationships, or encountering import errors.

SysML has a standard syntax. The features that extend the syntax may differ between vendors, but you can literally just copy and paste a SysML model into a plaintext file. Is this assuming that the JSON representation would be used? How would you lose information? This point is genuinely unclear to me.

Perhaps the author is stating that some features that extend or enhance the language that are available on one tool would not be available on another, or that not all language features are supported on all tools yet, so something that works in one might not work in another? This is a real problem, but it will get better, and again, we must consider the alternative(s). Those will vary depending on the organization, but we might assume the worst case is some kind of network of interlinked excel spreadsheets (which would be its own hell to transcribe), and I'm not actually sure what the best case would be. I'm sure there are good alternatives to SysML out there, but the presence of those alternatives does not imply that another alternative (SysML) that attempts to standardize this all is itself a bad idea, let alone a corpse.

> Why? Because while SysML v2 defines the language, it doesn't define the complete user experience, storage format details, or numerous implementation decisions that tool vendors must make.

So, SysML v2 does define the storage format details. Or at least it's implied by the entirety of the standard. I may be missing something here, but isn't that the whole point of having a plaintext syntax with a ton of [examples](https://github.com/Systems-Modeling/SysML-v2-Release/tree/master/sysml/src/examples)? 

> Each vendor interprets gray areas differently. Each adds proprietary extensions to differentiate their product. Each implements the standard incrementally, prioritizing different features based on their customer base.

This is happening a bit, for instance with the execution and evaluation of models. But that doesn't mean there is information loss when you take a model from one place to another. It just means that features that are available in one place might not be available in another, and vice versa.

> The result is the same balkanization we saw with SysML v1, just with a newer standard.

I haven't been in this game long enough to remember this balkanization, so I will leave this point untouched.

> I recently attempted to migrate a medium-sized model between two supposedly compatible SysML v2 tools. The basic block structure survived. About 60% of the relationships transferred correctly. Custom properties were lost. Parametric constraints needed to be recreated manually. Diagram layouts had to be rebuilt from scratch. Several hours of work later, I had a model that was technically valid but practically useless without significant cleanup.

SysML v2 doesn't have blocks, that's SysML v1. Also, again, literally all you would need to do is copy and paste the textual notation. I would be interested in getting more details on how this information loss occurred.

> This is better than incompatible formats from different eras, but it's nowhere near the seamless interoperability promised. And it reveals a deeper problem: standardization is hard when you're standardizing something as complex as a general-purpose systems modeling language.

NR

> Compare this to the software development world. Git has become the universal version control standard not because it's a comprehensive spec covering every conceivable scenario, but because it's a focused tool that does one thing well. Developers collaborate across organizations, tools, and platforms using Git as the common foundation. They layer different tools on top— GitHub, GitLab, Bitbucket—but the underlying format is truly portable.

I may be nitpicking but you can literally [send emails](https://git-scm.com/docs/git-send-email) via git. That said, I agree with this point broadly, and yeah definitely focusing on doing one thing well is important, and a weakness of SysML. The problem is that the "one thing" that SysML is supposed to do well is to "be a language for everything in reality" and that is a pretty broad goal. I think one could levy similar criticisms against C++, but in spite of the fact that it C++ does a lot of things OK, and the same thing in many different ways (often), it's still one of the most widely used programming languages. It is TBD whether SysML will go the way of C++ or Visual Basic.

> SysML v2 tried to standardize too much. It specifies not just a exchange format but a complete metamodel, execution semantics, and behavior modeling capabilities. This comprehensiveness makes implementation difficult and interpretation subjective. Tool vendors face hundreds of decisions where the spec is ambiguous or silent, and different choices lead to incompatibility.

Yeah there is definitely some ambiguity hidden deep inside SysML v2 which is frustrating to deal with. Implementation is insanely difficult. Interpretation can certainly be subjective. I will say that *most* of that ambiguity and subjectiveness is pretty deep in the standard at levels that would not inhibit the portability of models across vendors, however, and would be more at the level of how you interpret, analyze, and operate on SysML models. There is a formal grammar for the syntax, and although it has some kinks that need to be worked out, the actually standard isn't AFAIK worse than other programming language standards when they just left beta.

> The practical consequence is that organizations choosing SysML v2 still face vendor lock-in, just with different vendors than before. Once you've built a significant model in Tool A, switching to Tool B requires enough effort that you're effectively committed to your original choice. The switching costs might be lower than with proprietary formats, but they're still high enough to lock you in.

Insofar as you would be locked into a vendor, it would be because you depend on a feature that builds on top of SysML or enables some language feature (eg: automatic validation of constraints across a model) but the SysML v2 models themselves are very straightforward to transfer.

Criticism of lack of collaboration between tool vendors, however, is a valid point. Even if you can easily transfer the model text, if multiple vendors build interpreters for the language, or subsets of the language, they could differ in subtly different ways that might be a pain - and more work should be done to synchronize implementation on this front. I repeat myself, but the question that one should ask isn't whether SysML v2 is perfect (it certainly is not), but whether it is a preferable choice to the available alternatives for MBSE.

> Meanwhile, lighter-weight alternatives have emerged that take a different approach. Architecture-as-code tools let you describe systems in simple text files using domain-specific languages. These files live in version control alongside your actual code. They're human-readable, easily diffable, and trivially portable. They don't try to model everything, but they capture what matters and integrate seamlessly with development workflows.

SysML v2 is an architecture as code tool that lets you describe systems in simple text files using domain specific languages that live in version control alongside your actual code, soon it might even serve as your actual code. It's human readable, easily diffable, and trivially portable. You don't have to try and model everything in it.

> Or consider modern requirements management platforms that use APIs and webhooks to integrate with everything else in your tool chain. They don't try to be complete models of your system. They focus on traceability and change management, then let other tools handle what they're good at.

You can still use APIs and webhooks even if you use SysML. It's not one or the other.

> The SysML v2 tool ecosystem will probably improve over time. Implementations will mature. Compatibility will increase. But by then, will anyone still care? Or will engineering teams have already adopted approaches that deliver 80% of the value with 20% of the complexity?

Depends how good the SysML v2 ecosystem is. I feel like we need some concrete examples of these 80% of the value with 20% of the complexity approaches. Like I said earlier, some of the limited experience I have in this involves seeing engineers do everything  excel, and that reads to me as the exact same amount of complexity in a structure that is only intelligible to the team that built it.

Also, I'm not stating that SysML solves those problems perfectly. It doesn't. But to call it a corpse? That's premature.

> Let's talk about the investment required to become productive with SysML v2. A competent systems engineer needs roughly 40-80 hours of focused training to understand the language's core concepts—blocks, requirements, activities, state machines, parametrics, and their interactions. Add another 40-80 hours of hands-on practice before you can build non-trivial models without constantly referencing the spec.

Blocks are not in SysML v2! The KerML spec has 0 matches for "block" and the SysML spec has four, which all relate to a block of text.

Putting that aside, I agree there is a severe lack of quality documentation making it easy to get start quickly with SysML v2. This is something that can be solved, and indeed, my company is working on solving.

> So we're looking at 80-160 hours, roughly 2-4 weeks of full-time effort, to develop basic proficiency. For an experienced SysML v1 user, the learning curve is less steep but still significant—many familiar concepts work differently, and new capabilities require new ways of thinking.
> 
> That's a substantial investment, but it would be worthwhile if the expertise remained valuable for years.
> 
> Here's the problem: it doesn't. SysML v2 is evolving rapidly. The specification is large and complex, with ambiguities that get clarified through implementation experience and community discussion. Tools are implementing features incrementally, often in different orders. Best practices are still emerging. The landscape shifts faster than most engineers can keep up.

Either this is claiming that the language is constantly introducing breaking changes (it is not), or that engineers can't keep up with the relatively minor changes in SysML.

Front-end devs have been keeping up with a steady stream of new JS/TS frameworks for years now and they seem to be flourishing, so I think we can handle it. IMHO if anything the landscape is shifting too slowly now.

> I've seen this pattern before with earlier modeling languages. You invest months becoming expert in a tool or methodology, then a new version arrives with breaking changes. Or your organization switches tools and your hard-won expertise doesn't transfer cleanly. Or the industry moves in a different direction and suddenly your specialized knowledge is less relevant.

Yeah, this is a risk.

> The shelf life of SysML v2 expertise is particularly short because the broader context is changing so fast. Three years ago, generative AI couldn't write coherent paragraphs. Today it writes working code. Two years from now, will we still need formal modeling languages at all, or will natural language interfaces to AI design tools make graphical modeling languages obsolete?

If anything, I would say that the unreliability of LLMs means we need formal languages for constraining their behavior more than ever.

Case in point, [lean](https://lean-lang.org/) is a programming language for mathematics that has bootstrapped agentic R&D in the field of formal mathematics, precisely because there is an unambiguous syntax for expressing facts about the mathematical world in a way that can be validated and verified with classical computational methods (see: [Terrance Tao thread on Erdos problem](https://mathstodon.xyz/@tao/115855840223258103)).

> Organizations face the same calculation at scale. Training an engineering team of fifty people means 8,000 hours of training— the equivalent of four person-years. The opportunity cost is enormous. What else could those engineers accomplish in that time? What other skills could they develop that would deliver more enduring value?

> The MBSE community's response is typically that this investment pays for itself through improved quality, better traceability, and reduced rework. But where's the evidence? I've seen many anecdotal success stories, but precious few rigorous studies showing that SysML adoption delivers measurable ROI that justifies the investment.

This seems more like a criticism of MBSE entirely... I can't authoritatively respond as I'm still pretty early in my career, but I will say that my interest in SysML derives from the notion that we can treat reality like code, adopting software engineering practices in physical reality. It seems self-evident that the adoption of other programming languages like python, C, and rust, drive ROI, so the addition of SysML to that mix (if done well, and useful for validating entities in reality like we do with data structures and software) would be a boon, but honestly I don't know of any studies either.

> Meanwhile, other approaches require minimal training. Architecture decision records are just markdown files with a simple template. Living documentation generated from code requires learning your programming language better, which has value beyond modeling. API-first development needs understanding of interface design, which is universally applicable.

Good point. I'm all for markdown! I think the point of using SysML though is that you can't interpret or easily analyze a markdown file, so if you have like a million markdown files documenting your system, they're difficult to analyze. You could use an LLM, but then you need to completely trust it. Or you could have everyone learn the specific language that your API's use, but that might impose a burden onto non-programmer engineers who just want to see high level descriptions of the system so they can make design decisions from a few abstract layers above the folks implementing the APIs.

> The learning curve matters because engineering time is finite and precious. Every hour spent learning SysML v2 is an hour not spent learning something else—perhaps something with broader applicability and longer shelf life. When expertise expires faster than milk, the investment becomes hard to justify.

Not sure about this. A lot of the core concepts (eg: control flow, OOP paradigms) in SysML v2 mirror other programming languages, so the knowledge is transferable. Also, why is it assumed that expertise will expire faster than milk?

> Modern engineering happens in rapid, iterative cycles. Developers push code multiple times per day. Automated tests run on every commit. Integration happens continuously. Deployment is automated. This is DevOps, and it has fundamentally changed how we build complex systems.

Yeah, it's great.

> Now try to fit traditional MBSE into this picture. You have a SysML model that represents your system architecture. How often do you update it? Daily? Weekly? After each sprint? Every major release? 

Whenever you want to, just like with code.

> Be honest: you update it when someone has time and remembers, which is usually after the code has already diverged significantly from the model. The model becomes a lagging indicator at best, complete fiction at worst.

Ah. Yeah, it would feel like a pretty bad idea to precisely model your codebase in SysML. That would be duplicative. There is a pattern of doing something like this with header files in some languages, but it's not a great one. I imagine there will be some people who do model their codebase (or subsets of it) in SysML, just as they would with UML or mermaid, but it's not great.

I think the ideal case would be one where you're modeling a physical system that doesn't have a direct corollary in code though, like an aircraft or a submarine.

> The problem isn't that engineers are lazy. It's that the friction of updating a SysML model doesn't fit the velocity of modern development. When I make a small architectural change—say, splitting a monolithic service into microservices—I can update the code and have it running in production within hours. Updating the SysML model to reflect this change requires: 
> 
> - Opening the modeling tool
> - Finding the relevant diagrams
> - Updating the block structure
> - Fixing broken relationships
> - Updating interface definitions
> - Regenerating derived documentation
> - Committing the model changes
> - Resolving merge conflicts if someone else also updated the model

It's unclear whether the point here is about having to keep a SysML model in sync with a codebase. If so, I agree that you shouldn't - just write the code. If it's about the steps that one has to take to update a model, and how it is easier to split up a monolithic service into microservices, all of the same steps apply! Suppose you do that, you would have to:

- Open your code editor
- Find the relevant classes and functions
- Split them into separate modules
- Fix broken APIs
- Regenerate documentation
- Commit the changes
- Resolve merge conflicts if someone else also updated the codebase

> This might take 30 minutes for a simple change. That's faster than code-to-deployment, but it's slow enough that it interrupts flow. And because it feels like overhead rather than direct value delivery, it gets deferred.

Dude if you're refactoring a monolith into a bunch of microservices I hope you're taking longer than 30 minutes before pushing to prod.

> Multiply this across dozens of engineers making hundreds of small changes, and the model quickly falls behind reality. Then someone needs to make a decision based on the model, discovers it's outdated, and loses trust in the entire MBSE approach.

I'm going to assume that we're referring to models that reflect hardware and not software. In this case, this would be a process issue. Say you're working on a boat and you are using a particular type of bolt. At some point, an engineer realizes that that bolt would not work, because it does not have the tolerance for the amount of stress that would be exerted on it. They find another material, make a change in the model, and provide inline documentation for that change. Someone else needs to make a change to the model, so they look at the model and see the commit history, who made the change, along with their justification in the inline documentation. A logistics guy looks at the model, see the required bolt, and starts reaching out to potential suppliers, recording the potential suppliers in the model and linking them along with their contact info. Maybe he gives that to an agent. The agent reviews the SysML model and sends emails to all the potential suppliers, explaining the exact materials and quantity for the part, referencing the SysML model.

If the model lags behind the implementation of the system, then yes, MBSE is useless. If the model is the common source of truth for the system - the digitally embodied brain of process, then it can serve as a computationally tractable replacement for a collection of Jira tickets, random emails, and sticky notes scattered throughout an organization.

> Compare this to architecture-as-code approaches. You describe your architecture in simple text files that live right next to your code. When you make an architectural change, you update both in the same commit. The architecture description is versioned, reviewable, and diffable using the same tools you use for code. Diagrams can be auto-generated from the text description, so they're always consistent.

This whole frame seems to be based on the notion that SysML would be used to model codebases that are already computationally tractable.

> Or consider OpenAPI specifications for APIs. You define your interfaces in YAML files. From these files, you can generate client libraries, server stubs, documentation, and test cases. The spec lives in version control and evolves alongside the implementation. When the two diverge, automated checks catch the inconsistency. 

We're working on a tool to do this with SysML. SysML and web APIs / OpenAPI specs serve different purposes though, so this is like comparing apples and oranges.

> These approaches aren't complete system models—they focus on specific aspects like architecture or interfaces. But they integrate seamlessly with modern development workflows because they're lightweight, text-based, and tool-friendly.

Yeah but SysML shouldn't be used for modeling code already. And insofar as it is used for modeling systems, it is lightweight, text-based, and tool friendly.

> SysML v2 models, by contrast, are heavyweight, binary or XML-based, and require specialized tools. Yes, some tools now support Git integration and model comparison, but it's always awkward. Merging concurrent model changes is painful. Reviewing model changes in a pull request is nearly impossible without the modeling tool installed.

This is simply factually incorrect. SysML models are plaintext files. There is an optional XML based XMI format, but that is a second citizen to the plaintext syntax.

> The DevOps revolution succeeded because it reduced friction in the software delivery pipeline. Every manual step was automated. Every delay was eliminated. Every handoff was streamlined. MBSE, as typically practiced, adds friction. It creates a parallel workflow that's out of sync with the actual development process.

Problem with MBSE not SysML.

> Some organizations try to bridge this gap with model-driven code generation. The idea is appealing: maintain the definitive design in the model, generate implementation artifacts automatically, and keep everything synchronized. In practice, this works well for constrained domains with stable requirements—think embedded control systems or data processing pipelines. For anything more dynamic, generated code becomes a straightjacket that forces workarounds and exceptions that undermine the whole approach.

OK, criticism of model-driven code generation. Personally, not a fan either.

> Until SysML-based modeling can match the velocity and integration of modern development practices, it will remain a separate, parallel activity that provides occasional insights but doesn't drive the actual engineering work. And by the time it catches up, the world will have moved on to something else.

I don't understand why it can't, given it's already effectively code. The prediction that the world will move on is mighty confident.

> The modern engineering landscape is obsessed with digital transformation. Every organization wants digital threads connecting requirements to design to manufacturing to sustainment. Digital twins promise to simulate system behavior in real- time. AI and machine learning need vast amounts of engineering data to train models and optimize designs. Cloud platforms enable collaboration across global teams working with shared data.
>
> All of this requires one fundamental thing: open, accessible, machine-readable data that can flow freely between tools and systems.

Yep.

> SysML v2's rigorous approach to modeling creates the exact opposite—locked-down data structures that resist integration, frustrate interoperability, and become prisons rather than platforms.

How precisely are the data structures locked down? How do they frustrate interoperability?

> Here's the fundamental tension: rigorous modeling requires controlled data structures with well-defined semantics, strict relationships, and formal constraints. You lock down the metamodel so tools can reliably interpret the model. You enforce consistency so automated reasoning is sound. You maintain referential integrity so the model remains coherent. This rigor is precisely what makes formal modeling "formal."
> 
> But digital pipelines—the data flows that enable modern engineering—require the opposite characteristics. They need data that's easily extracted, transformed, and loaded into different systems. They need flexible schemas that can accommodate new attributes without breaking existing integrations. They need open APIs that let any tool consume and contribute data. They need data that's "good enough" to be useful, not "perfect enough" to be formally verified.

An assumed premise here is that the following two groups of things are mutually exclusive to each other:

1. Controlled data structures, well defined semantics, strict relationships, formal constraints.
2. Data that easily extracted, transformed, and can be loaded into different systems.

Controlled data structures with well defined semantics, and everything else in group (1), facilitate everything in group (2). The claim that they are somehow mutually exclusive is genuinely ludicrous.

> I recently watched an organization struggle with this exact conflict. They had invested heavily in a SysML v2 model as their "single source of truth" for a complex avionics system. Simultaneously, they were building a digital thread to connect requirements, design, simulation, test, and manufacturing. The vision was beautiful: every piece of engineering data traced through the lifecycle, accessible via APIs, flowing seamlessly between systems.
>
> The reality was painful. The SysML model's data was locked inside the modeling tool. Yes, the tool had an API, but it returned data in the tool vendor's proprietary format that required complex transformations to use elsewhere. Want to feed design data into your simulation tool? You need a custom adapter. Want to pull test results back into the model? Another custom integration. Want manufacturing to access design parameters? Yet another bespoke connector.
>
> Each integration was brittle. When the model structure changed—and it did frequently during development—the integrations broke. Someone had to update the adapter code, test it, and redeploy it. What should have been a fluid digital pipeline became a collection of fragile point-to-point connections that required constant maintenance.

The SysML model's data shouldn't be locked inside the modeling tool unless the vendor is acting extremely unethically - the models are in plaintext. Maybe what is meant is that the proprietary systems built around the modeling tool which the client came to depend on functioned as a kind of lock in?

This does seem kind of like a criticism of the vendor in question.

> Compare this to modern data engineering practices. Organizations build data lakes or data meshes where engineering data flows in common formats—JSON, Parquet, Avro. Different systems contribute data with flexible schemas.

When I think of SysML, I think of modeling an aircraft. Is the author suggesting we author aircraft models in JSON, Parquet, or Avro?

> New attributes can be added without breaking existing consumers. Analytics tools, AI platforms, and simulation engines can all access the same data without custom adapters. The data is "loosely coupled"—systems depend on the data they need, not on rigid structures.

This is a seriously misleading statement. Creating custom adapters to access data is ubiquitous, no matter the format. Stating that "systems depend on the data they need, not rigid structures" doesn't even make sense. Most data sources will need some kind of custom adapter, or some kind of cleaning pipeline to convert it into more malleable/queryable structure.

> SysML v2 models are "tightly coupled" by design. Everything connects to everything else through formal relationships. This makes internal model consistency checkable, but it makes external data integration nightmarish. You can't just grab a subset of the data—you need to understand the entire metamodel to interpret it correctly. You can't easily extend the data—the formal language defines what's allowed. You can't casually integrate with new tools—you need deep knowledge of both the SysML metamodel and the target system.

External data integration is difficult, yes. There is no silver bullet for the complexity inherent to reality.

> The emerging needs problem is even worse. Engineering organizations constantly encounter new analysis needs, new tools, new techniques they want to apply to their systems. Maybe you want to try a new optimization algorithm on your design parameters. Maybe you want to apply machine learning to predict failure modes based on test data. Maybe you want to build a custom dashboard showing project health metrics.
> 
> With open, flexible data, you can try these things quickly. Export the relevant data, run your experiment, see if it provides value. If it works, integrate it properly. If it doesn't, you've lost a few hours, not months.

There are two points here:

1. You would likely not want to use a SysML model to represent a machine learning pipeline in it's entirety, except perhaps to convey to stakeholders the general structure of the problem. The lower level implementation details can be done in Python or C, and that would suffice. I repeat myself: the primary target of SysML is not software systems, but physical systems which are not already represented in code.
2. What is this flexible open data? If it is JSON data tracking health metrics, then yeah, SysML would be the wrong tool for the job for storing those literal JSON blobs. To criticize SysML v2 on this basis is like discounting a knife on the basis it does not work great for driving nails into a two by four. Also, as a side note, simply saying "open, flexible data" is a reductive view of the complexity of wrangling even computationally tractable data. It is often extremely complex. This doesn't make SysML better, but the dichotomy is false, and it seems relevant to point out.

> With locked-down SysML models, every new need becomes a project. You need to understand the metamodel well enough to extract the right data. You need to transform it into a format your new tool can consume. You need to figure out how to get results back into the model if you want them integrated. The activation energy for experimentation is so high that most ideas never get tried.

You don't strictly speaking have to model every experiment in SysML v2 before you try it out. Just do the experiment.

> I've seen this pattern kill innovation repeatedly. A creative engineer has an idea for a new analysis approach that could identify problems earlier or optimize performance better. But implementing it requires weeks of model integration work before they can even test if the idea is valid. So they don't bother, and the organization loses the potential insight.

A creative engineer who wants to test a new analysis approach to optimize performance should not model the approach before doing it. They should just do it. The point here seems to be that SysML is in some way blocking them from doing work. There is a case in which they might be required to model every single thing they do before they do it, but I find that unlikely, and I think that the issue is rooted in a culture problem.

> The irony is that SysML v2 was supposed to enable better integration through standardization. If everyone uses the same modeling language, surely integration would be easier, right? But standardizing the modeling language doesn't standardize how tools store data, expose APIs, or handle extensions. Each tool vendor interprets the standard differently and adds proprietary features. The result is a Tower of Babel where everyone claims to speak SysML v2 but mutual understanding still requires translation.

This is a valid criticism, but again, it boils down to whether the alternatives are better or worse.

> Meanwhile, in the software world, open data formats have won. REST APIs with JSON payloads are ubiquitous. GraphQL lets clients query for exactly the data they need. Protocol Buffers and Apache Avro provide efficient binary formats with schema evolution. These aren't formal modeling languages—they're pragmatic data exchange standards that prioritize interoperability over rigor.

Yeah. They're a completely different tool for a completely different job. Again, knife != hammer.

> The digital thread vision that many organizations pursue requires this kind of data fluidity. Engineering data needs to flow from CAD tools to simulation tools to manufacturing execution systems to field service platforms. Locking that data inside rigorous formal models creates bottlenecks, not bridges.

NR

> Some will argue that SysML v2's exchange formats (like XMI) enable data sharing. Technically true, but practically useless for most integration scenarios. XMI exports are massive XML files that capture the entire model structure. They're not designed for selective data access or real-time integration. They're designed for wholesale model transfer between compatible tools—a use case that happens occasionally, not continuously.

You can also just share the plaintext `.sysml` files.

> Others will point to efforts like the Open API Initiative for SysML or model-based API generation. These are steps in the right direction, but they're bolting flexibility onto a fundamentally rigid foundation. The underlying problem remains: formal modeling languages optimize for internal consistency and formal verification, not for external integration and data fluidity.

NR

> The future of engineering is data-driven. 

Agreed.

> AI models will learn from millions of design decisions, simulations, and test results.

AI is a broad umbrella. Some AI models, like deep reinforcement learning algorithms, may learn from simulations, but that is not easily translatable into a human readable format and requires domain specific expertise to interpret. LLMs/transformer models - a subset of AI models - do not yet have the capacity for continual learning, and largely rely on in-context learning, which is subject to context rot. Suppose, however, that AI models could ingest all that information. That does not imply that a language for modeling complex systems is dead in the water. In fact, that language simply becomes another medium for AI to learn from.

> Digital twins will update in real-time as systems operate.

What will those digital twins be represented with? Python? Rust? Stating this without presenting a clear alternative, while implying it is a reason that SysML is a corpse does not follow. The point of SysML v2 is to become a medium for the representation of digital twins.

> Optimization algorithms will explore vast design spaces automatically.

One way that we can help search algorithms explore design spaces is by creating a framework for them to explore those spaces. This point is true, and works in favor of SysML v2.

> Manufacturing systems will adapt to design changes instantaneously.

Perhaps. This is a statement about something that might happen though, and doesn't work in favor or against SysML v2.

> All of this requires engineering data to be open, accessible, and flexible.

The exact concern that SysML v2 was designed to address, yes. Additionally, the existence of SysML v2 does not preclude the co-existence of other engineering data that is open, accessible, and flexible.

> SysML v2's rigorous approach—locking down data structures to enable formal reasoning—is fundamentally at odds with this future.

The data structures are not really "locked down". We've been working on a python package for working on SysML v2 models for some time, and you could, for example, use it to export a bunch of requirements to a CSV file.

> You can have model rigor or data fluidity, but achieving both simultaneously is extraordinarily difficult and expensive. Most organizations can't afford the custom integration infrastructure required to bridge the gap.

The premise that these two things are mutually exclusive is poorly supported. Additionally, models and raw data serve different needs, so grouping them together and stating that models fail where raw data succeeds for tasks that raw data is suited for is disingenuous. A JSON file would be a poor fit for modeling an airplane.

> This is why lighter-weight approaches are gaining traction. Architecture decision records are just markdown files—any tool can read them.

Markdown files are good, and in some contexts SysML could serve as a more structured format for meeting the needs that markdown meets, but markdown is not a silver bullet, and is too loosely structured and non-standardized to meet all the needs that SysML was designed to meet.

> OpenAPI specifications are YAML or JSON—easily consumed by thousands of tools.

Neither YAML nor JSON can be used to effectively model an aircraft. They were not designed to do that. An aircraft and an web API are too entirely different classes of systems.

> Code itself is increasingly the model, with documentation and diagrams generated automatically from the source of truth. 

Yes, this is the gap that SysML fills. A model as code for physical systems, with documentation and diagrams generated automatically from the source of truth.

> These approaches sacrifice formal rigor for practical flexibility, and the trade-off is paying off.

It is possible this is true, however, it is not clearly substantiated. SysML is a language designed for modeling systems. JSON is a format for exchanging blobs of data on the internet, and YAML is a format for configuration files, and markdown is a markup standard not unlike HTML.

That said, I think that in all likelihood markdown, YAML, JSON (and I would add python) are probably working a lot better for a lot of people right now. As progress continues on SysML implementation, we hope to qualitatively and quantitatively demonstrate that a better alternative is available.

> The locked-down model is a relic of an era when engineering data stayed in isolated tools and manual document reviews ensured consistency. That era is ending.

SysML v2 models are designed to not be locked down. I sincerely hope that era is ending but given the intractability of lossless PDF parsing I sincerely expect it will be with us for a while longer.

> The organizations that will thrive are those that embrace open data architectures where engineering information flows freely, tools integrate easily, and new capabilities can be added without comprehensive re-engineering.

Engineering information flowing freely is not mutually exclusive to the use of SysML v2. To state that the solution is for "tools to integrate easily" is reductive when that is a difficult problem for all organizations regardless of what tools they use. Adding new capabilities without comprehensive re-engineering is a culture and psychology problem as much as it is a tool problem - if not more.

> SysML v2 pulls in the opposite direction—toward more rigor, more formalism, more lock-down.

SysML v2 does push towards more rigor and formalism. I sit on the other side of the aisle here. I believe this is good. It does not push toward more lock-down, given the standard is open, although there is admittedly a dearth of open-source tools.

> It's a beautiful prison, but it's still a prison. And in the age of digital engineering, prisons are getting escaped, not expanded.

The prison that is complexity is a synonymous with the planet known as Earth. Attempts to escape it via JSON will invariably end in [disaster](https://thedailywtf.com/articles/the-inner-json-effect).

> Walk into any engineering organization implementing SysML v2 and you'll find a familiar pattern: management enthusiastically supports the initiative while engineers quietly resist. This isn't because engineers oppose modeling or structured thinking. It's because there's a fundamental mismatch between what MBSE promises to management and what it delivers to engineers.

This is a real problem and it's our responsibility as tool vendors to make the tools fun and easy enough to use the engineering enthusiastically jumps on board.

> Management sees MBSE as a solution to long-standing problems: inconsistent documentation, poor traceability, late- discovered integration issues, difficulty onboarding new team members. These are real problems that cost real money. MBSE vendors present compelling pitches showing how comprehensive models address these issues. Management makes a rational decision to invest.

Agreed.

> Engineers see something different. They see new tools to learn, new processes to follow, new artifacts to maintain—all while their actual workload doesn't decrease. The code still needs to be written. The circuits still need to be designed. The tests still need to run. Now they also need to keep models updated, often with information that's already captured elsewhere in more useful forms.

Agreed. This is a problem. Ideally we can get SysML to the point where it is like python, so engineers enthusiastically adopt it in their native workflows because it is really valuable for them and not because it is mandated by the suits.

> The benefits management expects are long-term and organizational. Better traceability helps during audits and reviews. Comprehensive documentation helps new team members. Formal verification catches integration problems early—sometimes. These benefits are real but diffuse and delayed.

Yes.

> The costs engineers experience are immediate and personal. Learning the tools takes time away from their actual work. Maintaining models feels like additional overhead. When the model is out of sync with reality (which happens frequently), it becomes a source of confusion rather than clarity.

Yes. See earlier point.

> This creates a cultural chasm. Management mandates MBSE adoption and measures success by model completeness metrics —number of requirements traced, percentage of system modeled, compliance with methodology standards. Engineers game these metrics, creating models that satisfy the checklist without delivering real value. Or they maintain parallel documentation systems that are actually useful, relegating the official MBSE model to compliance theater.

Metrics that at best are gamed and at worst become perverse incentives are terrible. It is not our intent to perpetuate this system. Again, if SysML is not useful in day to day workflows, it should not be pushed on anyone. Our challenge is to make it useful.

> I've seen organizations spend millions on MBSE infrastructure and training, only to discover that the models are maintained by a small cadre of systems engineers while the broader engineering team continues working the way they always have. The models exist, they're technically correct, they satisfy audit requirements—but they don't actually guide engineering decisions or improve product quality.

Yep, real problem.

> The cultural problem is compounded by the way MBSE is often taught and advocated. The emphasis is on methodology compliance rather than practical value delivery. Newcomers learn the "right way" to build models according to the standard, not how to build useful models that solve real problems. The focus is on modeling rigor rather than modeling pragmatism.

Yes.

> Contrast this with how successful engineering practices spread. Agile software development wasn't mandated from above—it spread because developers found it solved their problems better than waterfall approaches. Test-driven development gained adoption because engineers who tried it found it helped them write better code. Version control with Git became universal because it made collaboration easier.

Yes.

> These practices spread bottom-up because they delivered immediate, tangible value to the people doing the work. MBSE, as typically implemented, spreads top-down as a mandate. The people pushing for adoption aren't the people who will spend hours maintaining models. This creates built-in resistance. 

Yes.

> Can this be fixed? Maybe, but it requires a fundamental shift in how we approach MBSE. 
> Instead of comprehensive models that capture everything, we need focused models that solve specific problems.

Yes.

> Instead of methodology compliance, we need value delivery.

[Yes](https://www.youtube.com/watch?v=DYvhC_RdIwQ).

> Instead of specialized modeling tools that only systems engineers use, we need lightweight approaches that integrate with the tools domain engineers already rely on.

Specialized modeling tools that integrate with the tools that domain engineers already rely is an available path.

> SysML v2 makes none of these shifts. It's a more sophisticated version of the same top-down, comprehensive modeling approach that has struggled with cultural adoption for decades. Better tools and clearer standards won't overcome the fundamental mismatch between what management wants and what engineers need.

This is TBD. It's premature to call it dead in the water.

> Nothing in this analysis matters if generative AI makes the entire premise of formal modeling languages obsolete. And there's a strong possibility it will.

TBD.

> Consider what large language models can already do in 2026. You can describe a software architecture in plain English and get working code. You can paste error messages and receive debugging suggestions. You can ask for design patterns appropriate to your problem domain and get reasonable recommendations. The quality isn't perfect, but it's improving rapidly.

Yes, but the target of SysML v2 is not to model existing software systems. It's to model physical systems. If anything, the prevalence of LLMs is a good case for SysML, as there isn't a good standardized way to debug a physical system for being physically impossible, pasting an error message into an LLM. That is part of the point of developing SysML v2.

> Now extrapolate this forward two to three years. We'll have AI assistants that can:
> - Generate system architectures from natural language requirements

What the system architectures would be generated in is not stated, but I don't see many great alternatives to SysML v2 when it comes to physical system architectures.

> - Automatically trace requirements through design, implementation, and test
> - Identify inconsistencies and integration issues across subsystems
> - Generate documentation in multiple formats from a single source of truth
> - Refactor designs in response to changing requirements
> - Suggest optimizations based on learned patterns from thousands of projects

The use of SysML v2 as a medium for agents to operate on for all the aforementioned points would enhance the capabilities of the agents in these pursuits.

> These capabilities don't require formal modeling languages. They work from natural language, code, CAD files, test results, and other artifacts that engineers already create. 

As covered earlier, restricting the paths AI takes through design space is a cheap way to vastly enhance their capabilities. Formal modeling languages can serve as the framework for that restriction in addition to these other tools, although I would add that I would personally group SysML under the "code" category.

> The AI learns the patterns and relationships, tracks changes over time, and provides the integration and traceability that MBSE promises—without requiring engineers to learn specialized modeling languages.

An LLM will not learn patterns nor relationships without considerable effort (eg: fine-tuning) and even when it does perform well in demos, that does not guarantee the performance in a demo is transferable to real world situations. You could make the argument that in-context learning is type of learning, but then you need a structure to surface the relevant information to the LLM. Vector databases are a good candidate, and work well, but SysML v2 would not detract from that paradigm but enhance it. An LLM does not automatically track changes over time. The claim that LLMs provide integration is unsubstantiated, and traceability is TBD unless you are absolutely sure you trust everything returned by an agent.

> The fundamental advantage of AI over traditional MBSE is adaptability. 

AI is not a replacement for engineering practices established over decades. It is a wonderful tool to extend and enhance existing capabilities.

>  A formal modeling language like SysML v2 requires that you structure your thinking according to predefined metamodels and relationships. It's rigid by design—that's what makes it formally verifiable and tool-processable.

Yes. I would use the word "standard" instead of "rigid" though. In my experience SysML v2 is not rigid enough. All programmatic languages require you to structure your thinking in accordance with the language.

> LLMs are fluid. They can work with messy, incomplete, ambiguous information and still extract useful patterns.

Yes.

> They don't require that you translate your domain knowledge into a standard notation. They meet you where you are, working with whatever artifacts and descriptions you naturally produce.

Earlier, it was stated that LLMs can be used to generate code - which is the translation of domain knowledge into standard notation. Would this point not then equally apply to all code generation? Also, the artifacts and descriptions one naturally produces are often too ambiguous to be converted directly into engineering artifacts or formal descriptions of complex systems - hence, formal notations.

> I can already see this playing out in practice. Development teams are using ChatGPT and Claude to explain codebases, suggest refactoring, and generate documentation. They're not waiting for formal models to be updated—they're querying the AI about the current state of the system as reflected in the actual code.

This may work for codebases, but it does not work for physical systems. There is no clear way to query a bridge for information about the distribution of force exerted across it, so we rely on representations of the bridge to record information, included by other people, for us to reference. Standardizing and enhancing the format of that information is directly useful, when it would otherwise be scattered.

> Some will argue that AI can help with MBSE by generating models from requirements or checking model consistency. This is true but misses the larger point. If AI can extract system understanding directly from code, requirements, and documentation, why do we need the intermediate modeling step at all? What value does the formal model add if the AI can work without it?

Here's a concrete example. Often in PDFs, when an AI transcribes the PDF text it will use something like docling, kreuzberg, or tesseract (or any other PDF reader/parser) to extract the text. I've noticed that no solution I've found is capable of transcribing equations particularly well. A common culprit is the loss of information relating to superscript, say in the equation $x^2$ - where the resulting output text is just `x2`. If you directly rely on an AI without passing the equations through a formal verification and validation system, your data will be corrupted. In this specific case, you could create something like an equation parser with sympy, but that would only verify that the syntax of a mathematical equation is valid, not its validity in the context of the whole system. To validate the equation in the context of the system, you would need to actually formally interpret it in the context of the system. The formal model is actually a critical part of the pipeline to avoid data corruption. It doesn't have to be a SysML model, but SysML is developing fast, and is a good fit for the job attributing to its generalizability, though it won't be the only I'm sure.

> The modeling provides human comprehension, one might argue. But modern AI can generate human-readable documentation, architecture diagrams, and explanations on demand, customized to the reader's needs and background. It can show the same system at different levels of abstraction, emphasizing different aspects based on what you're trying to understand. This is more flexible and more accessible than static models in specialized notations.

It can, but if you try and generate the same architecture diagram twice using an LLM, you're liable to get two different results.

> The modeling enables formal verification and analysis, one might counter. But AI is increasingly capable of sophisticated analysis too—simulating system behavior, identifying potential failure modes, checking consistency across specifications. These capabilities will only improve.

Speak of the devil! Insofar as AI is doing this it is using *existing tools* to do so. It's capabilities will only improve if we enhance those capabilities by giving it more tools.

> The modeling creates a source of truth, others might say. But if the actual code and artifacts diverge from the model (which they inevitably do), which is really the source of truth? AI working from the actual artifacts has an advantage here—it's analyzing what was actually built, not what was intended.

The premise that all models are models of codebases must be assumed for the validity of this point, but it is false.

> I'm not claiming that generative AI will completely replace human systems engineering or structured thinking about architectures. Complex systems still require careful design, analysis, and integration. But the tools we use for these activities are likely to shift dramatically. Formal modeling languages optimized for machine processing may give way to natural language augmented by AI that understands context, intent, and relationships. SysML v2 arrived just as this technological shift was accelerating. It's a sophisticated answer to the question "how do we create better formal models?" when the more important question has become "do we need formal models at all?"

This chain of logic goes:

1. Generative AI will not replace human systems engineering.
	- Agreed.
2. The tools we use for systems engineering are likely to change.
	- Agreed. Generative AI will be one of those tools.
3. Formal languages will be replaced by natural languages.
	- Hard disagree. Also, this doesn't follow from the previous points and is inconsistent with the rest of the article. If you're generating code from natural language with GenAI, you're creating an artifact in a formal language.
4. SysML v2 is a formal language, and because formal language will be replaced with natural languages, we don't need SysML v2.
	- This point follows from the prior point if and only if you accept the prior point.

Reasoning across complex physical systems is not going to be replaced by LLMs, but we can help those systems do a better job by extending them with formal tools - the lean language as a proven example, and SysML v2 to follow. Furthermore, natural language is not a good vector for precise descriptions of physical systems, which is precisely why we have code - and SysML is code.

> The death of SysML v2—or at least its failure to become the transformative standard its proponents envisioned—offers important lessons for the systems engineering community. We need to acknowledge these if we hope to develop better approaches.

Dude how can you say it's dead when it got out of beta a few months ago?

> Lesson 1: Timing is everything. A technically excellent solution delivered after the problem has evolved is worthless. SysML v2 addressed pain points from 2010-2015 but arrived when the engineering landscape had fundamentally changed. Future standards need shorter development cycles and more agile evolution processes.

Agree with the first two sentences. I'm not sure the engineering landscape has changed as radically as you may think, and insofar as it that change is strongly localized in software engineering. Agree with the last sentence.

> Lesson 2: Completeness is a trap. The drive for comprehensive, rigorous languages that can model anything leads to complexity that outweighs utility. We need focused languages that do specific things well, not universal languages that try to do everything.

Agree in spirit. There are a number of successful general purposes languages however, and I don't think there's a one-size fits all solution, so sometimes being a jack of all trades can be good. TBD as to whether SysML will hit the spot like python though.

> Lesson 3: Tool ecosystems matter more than standards. SysML v2 is a well-designed language, but the fragmented tool ecosystem undermines its value. Successful standards need reference implementations and strong ecosystem governance from day one.

Strongly agree. I think one of the big areas that SysML is failing right now is the ecosystem around the language.

> Lesson 4: Cultural adoption requires bottom-up value. Top-down mandates create compliance theater, not genuine adoption. Engineers will only embrace modeling if it makes their work easier or better, not just to satisfy process requirements.

Strongly agree.

> Lesson 5: Integration trumps sophistication. A simple approach that fits seamlessly into existing workflows beats a sophisticated approach that requires parallel processes. Lightweight, text-based formats that work with standard version control and review processes have won in software; the same principle applies to systems engineering.

Strongly agree. KISS right? In this case though it's worth mentioning that SysML is a text-based format that works with git and can be reviewed. SysML v2 is a prime candidate to fill those needs.

> Lesson 6: Expertise must have enduring value. If learning a language requires months of investment but the expertise becomes obsolete in years, rational engineers will avoid the investment. Future approaches need lower learning curves and longer shelf lives.

Agreed but the implication that expertise will become obsolete in years in respect to SysML v2 is an assumed premise that doesn't hold up. Learning control flow for any programming language is easily transferable to virtually all other programming languages, so even if SysML completely fails as a project (still TBD), it isn't a waste of time to learn it. Also, I am reminded of Rule 38 in the SQLite code of ethics.

> Lesson 7: Domain experts know their domains. Systems engineers should guide and integrate, not prescribe detailed designs in domains where others have deeper expertise. Models should be sparse and directional, not comprehensive and prescriptive.

Agreed.

> Lesson 8: Fidelity should be selective, not universal. Adding detail everywhere creates maintenance burden without proportional value. Smart modeling means knowing what to model in detail and what to keep abstract.

Agreed. I don't feel like this is a point against SysML v2 though.

> Lesson 9: The world won't wait. While committees debate specifications, engineers solve problems with whatever tools are available. By the time the perfect standard arrives, ad-hoc solutions have already become entrenched.

Agreed.

> Lesson 10: Disruption comes from unexpected directions. SysML v2's real competitor wasn't an alternative modeling language—it was cloud platforms, DevOps practices, architecture-as-code, and generative AI. Future planning must account for technological shifts in adjacent domains.

No. Comparing cloud platforms to SysML models is apples to oranges. DevOps practices are not contrary to SysML models. Architecture as code is sufficiently vague to be difficult to respond to, but terraform and boto3 scripts are again, apples to oranges when compared to models of an aircraft carrier. Generative AI is not a silver bullet. Accounting for technological shifts in future planning is necessary, but also impossible to do perfectly unless you are literally a precog. Is the implication that if you assume the premise that GenAI has killed SysML v2 (it hasn't) that the SysML v2 developers should learn from their mistakes for not predicting ChatGPT 10 years ago? This is completely unactionable advice.

> So where does this leave systems engineering? If SysML v2 is dead, if comprehensive MBSE has fundamental limitations, if generative AI is disrupting the entire paradigm—what should we actually do?

NR

> First, acknowledge reality. SysML v2 isn't going to save systems engineering. Neither is any other comprehensive modeling language. The problems we face—complex systems, distributed teams, rapid change, emerging technologies—require different solutions.

What are these solutions? So far I have: YAML, JSON, OpenAI, markdown, and "AI".

> Second, embrace pragmatism over purity. Use the lightest-weight approaches that solve your actual problems. If simple diagrams on whiteboards keep your team aligned, that's valid systems engineering. If architecture decision records in markdown files provide sufficient traceability, that's enough. Don't let methodology zealots convince you that real systems engineering requires sophisticated tooling and comprehensive models.

Strongly agree. You should only use a tool if it's actually useful and demonstrates real value.

> Third, focus on integration and communication, not documentation. The value of systems engineering comes from ensuring that different subsystems work together, that requirements flow down appropriately, that interfaces are well-defined, and that risks are identified early. These activities don't require formal models—they require smart engineers who understand the system holistically and can facilitate communication across disciplines.

I get that like, this is a bit of a jump on my side, but the "no documentation" approach works well for React apps and starts to run into limitations at manhattan projects.

> Fourth, let domain experts do detailed design. Provide direction and constraints, then trust people who actually understand electrical engineering or software architecture or thermal dynamics to make detailed decisions in their domains. Your role is integration, not dictation.

Great idea.

> Fifth, experiment with new approaches. Architecture-as-code shows promise for software-intensive systems. Digital thread platforms might provide traceability without heavyweight modeling. Generative AI could enable new forms of system understanding and analysis. Be willing to try tools and methods that don't fit traditional MBSE patterns.

Great idea but does not support the central case of this article that SysML v2 is a corpse.

> Sixth, measure value, not compliance. Stop evaluating systems engineering effectiveness by model completeness metrics or methodology adherence. Ask whether the systems engineering activities are actually helping teams build better products faster. If not, change what you're doing.

Measuring compliance sucks, but if it was as simple as just deciding to measure value (an abstract and difficult to quantify and often subjective quality) instead, people would be doing that in droves. Anyways, again, why does this mean SysML is a corpse?

> Seventh, invest in skills that endure. Deep technical knowledge, effective communication, systems thinking, risk assessment— these capabilities remain valuable regardless of which tools and methodologies come and go. Investing in these fundamentals provides better long-term returns than investing in mastery of specific modeling languages.

Agreed.

> Eighth, stay current with technological change. Generative AI, cloud platforms, digital twins, model-based simulation—these technologies are reshaping engineering. Systems engineers need to understand these trends and adapt approaches accordingly, not retreat into methodology orthodoxy.

SysML v2 is new technology for creating digital twins of systems...

> Finally, be honest about what works and what doesn't. We've spent decades pushing MBSE with mixed results. Some organizations have found value. Many haven't. Rather than doubling down on approaches that aren't working, we should learn from failures and pivot.

Agreed.

> The death of SysML v2 as a transformative standard doesn't mean the death of systems engineering. It means the death of a particular vision of how systems engineering should be performed—one centered on comprehensive formal models maintained in specialized tools using rigorous methodologies.

I feel like I am misunderstanding systems engineering. For over two years I've been working on a language that I envisioned as code for reality and now I'm reading about how people drawing boxes and lines realized that isn't productive. Yeah. Was that the goal? I thought the goal was to create a computationally tractable language for capturing the essence of reality in a way that allows us to synchronize the brain of the firm and understand complex systems before they're baptized in steel. And if it works, then hell we can bootstrap generative AI into the real world and have it start exploring design spaces of science fiction technology. If it was all just a pretext for drawing lines between boxes I'm gonna be really damn disappointed.

> What replaces that vision remains to be seen. Perhaps something lighter and more integrated. Perhaps something AI-enabled that works from natural language and actual artifacts rather than formal models. Perhaps multiple different approaches optimized for different domains and scales.
> 
> Whatever emerges, it will need to solve the actual problems engineers face in 2026 and beyond, not the problems we faced in 2015. It will need to integrate with modern engineering workflows rather than create parallel processes.

This dude be like: "well, we're two months into the official release thing that took a bunch of experts years to design, and it's dead, so we should replace it with speculative AI and vague cloud technologies!"

> It will need to deliver value to the engineers doing the work, not just to managers and auditors.

Aye.

> The corpse of SysML v2 should teach us to be suspicious of grand visions and comprehensive solutions. Engineering is messy, contextual, and constantly evolving. Our methods and tools need to embrace that messiness rather than try to eliminate it through formal rigor.

NR

> We tried to build the perfect modeling language. We failed, not because we did it wrong, but because the premise was flawed. That's okay. Failure teaches better than success—if we're willing to learn.

This level of defeatism two months of the beta release has actually motivated me to work harder on implementing the language on the basis of obstinate stubbornness. I will take is as a good sign that this was published, as Bjarne Stroustrup famously once said: "There are only two kinds of languages: the ones people complain about and the ones nobody uses".

> SysML v2 represents over a decade of work by dedicated professionals trying to advance systems engineering practice. The people who developed the standard, built the tools, and advocated for adoption genuinely believed they were improving how we engineer complex systems. Their intentions were good, their expertise was real, and their effort was substantial. 
> 
> But good intentions and hard work don't guarantee success. SysML v2 arrived too late, aimed at the wrong problems, and embodied fundamental trade-offs that limit its utility. The comprehensiveness that makes it formally rigorous makes it practically inflexible. The standard that should enable interoperability has spawned a fragmented tool ecosystem. The methodology that promises efficiency creates overhead that doesn't fit modern development workflows.

Already made my point.

> Meanwhile, the world moved on. Generative AI, cloud platforms, DevOps practices, and lightweight alternative approaches are addressing the integration and traceability challenges that motivated SysML v2's development. They're doing so in ways that integrate better with how engineers actually work and deliver value faster with lower barriers to adoption.

SysML is struggling with adoption, but the vision is beautiful and we're working hard to make it work.

Repeatedly invoking cloud computing as an alternative doesn't make sense, it really doesn't. Suppose I asked you how you're modeling a drone and you said "cloud computing". I would not know what to do with that information. It's like being asked for a wrench by a mechanic and giving him a JPEG of a screwdriver.

> The corpse is still fresh enough that many don't recognize it's dead. Training continues. Tool development proceeds. Organizations launch MBSE initiatives with SysML v2 at the core. Some will find value—there are contexts where rigorous modeling still makes sense. But these will be niches, not the mainstream transformation that was envisioned.

Cool it with the gory metaphors.

> For the broader systems engineering community, it's time to move beyond the model-centric vision that SysML v2 represents. We need approaches that are lighter, more integrated, more adaptable, and more aligned with how modern engineering actually happens.
> 
> This doesn't mean abandoning structured thinking about systems. It doesn't mean giving up on traceability or integration or verification. It means being honest about what works and what doesn't, letting go of solutions that aren't serving us, and being willing to explore alternatives even if they don't fit our preconceptions of what systems engineering should look like.

I get that you don't necessarily have to provide a viable alternative with criticism - criticism can stand on it's own. Nonetheless, the total lack of concrete alternatives besides vague hand wavy solutions is a weakness of this criticism. I can think of some! Python. Python is an alternative. GenAI, "cloud computing", and JSON are not alternatives. Python is. You can make a lot of stuff work in python that you could make work in SysML. Plus python is widely known. Plus LLMs are great at generating it. Plus it's got a great ecosystem. You could totally make a digital twin in python. That's a valid criticism. The question: "what does SysML provide that python doesn't" is a real and interesting question, and while the long answer is out of scope the short answer is that it was built to map onto physical reality and not programmatic constructs. But that's a good criticism!

> SysML v2 is dead. We just don't see the corpse yet because we're still invested in pretending it's alive. The sooner we acknowledge reality, the sooner we can move forward with approaches that actually serve the needs of modern engineering.

Premature. yada yada yada. i repeat myself.

> The funeral will be quiet—no grand announcements, no formal burial. SysML v2 will simply fade into irrelevance as engineers vote with their actions, quietly choosing other paths while nodding politely at MBSE presentations. That's how most failed standards die: not with a bang, but with benign neglect.

Yeah I guess it's up to us to make sure it doesn't die. Us and a bunch of old school systems engineers. Also Lockheed Martin and JPL. But I have devolved to appeals to authority. Alas we are close to the conclusion.

> What rises from these ashes remains to be seen. But whatever it is, it will need to solve today's problems with today's technologies while staying adaptable enough to evolve with tomorrow's changes. It will need to deliver value to engineers, not just compliance to managers. It will need to integrate seamlessly with modern workflows rather than creating parallel processes.

[Relevant XKCD](https://xkcd.com/927/)

> The age of comprehensive formal modeling languages as the foundation of systems engineering is ending. A new age is beginning. We should embrace it rather than clinging to the corpse of approaches that no longer serve us.

The age of man is ending. THE AGE OF THE ORC HAS BEGUN.

> Rest in peace, SysML v2. Your death teaches better lessons than your life ever could have.

RIP.







