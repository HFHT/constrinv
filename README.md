# Construction Inventory
- Small screen mode, click on drawer item and the header shrinks. Setting the width to the viewport fixes it, innerWidth?
- Need to get the profile picture either thru RTK Query or ??'
- Profile picture getting created 8 times!!! Still don't have it in usable format!
###### Tasks
- [x] Refactor NavContext, I don't think we need NavCat anymore now that the navigation is in the OrgProfile 
- [x] Resizing of the Top Navigation bar
- [x] Merge in the Category bar
- [x] Category bar becomes drawer for small screens
- [x] Merge in the Category pulldown
- [ ] Move graphData from Profile context and into Redux, refactor Profile context to just static content, use Redux to fetch initial values