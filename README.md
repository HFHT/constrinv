# Construction Inventory
Redux navOpen is now deprecated, can use local state to minimize rerenders
Change of favorite, push to history, write to DB, and record status on conclusion of write.
###### Tasks
- [x] Refactor NavContext, I don't think we need NavCat anymore now that the navigation is in the OrgProfile 
- [x] Resizing of the Top Navigation bar
- [x] Merge in the Category bar
- [x] Category bar becomes drawer for small screens
- [x] Merge in the Category pulldown
- [x] Move graphData from Profile context and into Redux, refactor Profile context to just static content, use Redux to fetch initial values