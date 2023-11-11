#isa/note #time/future/min 

- [ ] add to: [[post.analysis.chessan]]

---

The exact technical details are unimportant for this analysis, but the general steps I took to collect the data were to:

1. Collect a set of usernames.
	- Total collected: ~10M
2. Resolve the username set into of profile data.
3. Determine what profiles had sufficiently inferentially useful names.
	- 'Inferentially useful' meaning that I could create Bayesian estimates of sex and nationality using [[input > names-dataset]]
4. Of the set of profiles with sufficiently useful names, pull the profile pictures for the profiles. If there was a face detected in them, then resolve basic demographic information. ()
5. Of the profiles that had both sufficiently useful names, and identifiable demographic information, pull the game archives.
6. Filter out the games where the player in question did not have an opponent also in our refined profile dataset.
7. Compile these into final datasets and build database interfaces for querying the data.

All data was collected from [[input > chess.com published data api docs]]