# Capital One Software Engineering Summit MindSumo Challenge 2020
<a href="https://danielbrod01.github.io/restaurant/index.html">My Web Application Submission</a>
for the final round of the application for Capital One's Software Engineering Summit. JavaScript/jQuery web app that allows you to decide good restaurants around them.

Website: https://danielbrod01.github.io/restaurant/index.html

The web app is not supported well on mobile devices. Request to see "Desktop Site" on the browser as it will provide a better user experience. 

It is advised that when prompted, you **allow** my web page to *access your geolocation* for appropriate search results to appear. It will default to San Francisco, CA as its location when geolocation access is blocked by the user.

# Project Details
This web application functions as an information service to good restaurants near you. Detailed below lists the technologies and tools used in the app.

# List of API's and tools used
* <a href="https://www.yelp.com/developers">Yelp Fusion API</a> for search queries
* <a href="https://leafletjs.com/index.html">Leaflet</a> JavaScript Library for interactive maps
* <a href="https://www.maptiler.com/cloud/">MapTiler cloud</a> for customizeable map tiles
* <a href="https://www.w3schools.com/html/html5_geolocation.asp">HTML5 Geolocation</a> API for grabbing user location
* <a href="https://getbootstrap.com/docs/3.4/">Bootstrap</a> with optional jQuery for frontend styling
* and of course HTML5, CSS, and JavaScript

*Note: The Yelp Fusion API key used in my js files are mine, but I am not familiar with using environment variables so do let me know if you have an idea as to how. Otherwise if cloning this repo and choosing to run it locally, you must register for an API key <a href="https://www.yelp.com/fusion">here</a>.*

# Build
### Features
* #### Default search
Users can get started by searching for nearby restaurants from a small number of **popular** categories compiled by Yelp Fusion API

![](default-search.gif)

* ### Preset categories and cuisines search
Users can select given preset options on the navigation bar to get them started on some search terms. 

![](preset-search.gif)

* ### Search using keyword terms
Users get more freedom to search using broad or narrow terms, for example "food", "restaurants", "spicy food" or "cheap", etc. Go crazy with the terms!

![](search-keyword.gif)

* ### Detailed page
Need to see when they are open until? Or where they are? Users can view more details of the particular restaurant. 

![](details.gif)

* ### Related search terms

Interested in a particular category after viewing a restaurant? Users can click the category next to the business name to look up more restaurants under that category!

![](related-search.gif)

*The list of search results was compiled by calling the Yelp Fusion API based on their 'keyword terms'. As such, hard coding was not an issue, but rather html templates were coded for data to simply fill in.*
