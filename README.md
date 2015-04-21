## Website Performance Optimization portfolio project

To view web pages you can either fork and clone the repository or visit live demo pages at 
http://kleinbottled.github.io/frontend-nanodegree-mobile-portfolio/ for pagespeed project. Or,
http://kleinbottled.github.io/frontend-nanodegree-mobile-portfolio/views/pizza.html for 60 fps 
Challenge project. 

For the first project many optimizations towards page loading speed were implemented. Css was inlined. Fonts were loaded after render. Scripts were run asyncronously. Images resized and compressed. 

The second project was largly about avoiding forced synchronous layouts, particularly in loops. Refactored the way the backround pizzas animate as well as the way the menu pizzas resize. Reduced number of backround pizzas being rendered. Inlined css. Unblocked scripts. Minified JS.
