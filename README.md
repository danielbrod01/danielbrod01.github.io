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
## Important to note
**It is recommended for users to accept the prompted HTML5 geolocation access on their screen for better user experience. Due to how Yelp API endpoints work, I am required to provide location coordinates regardless. If the user blocks geolocation access, results are default to businesses near San Francisco, CA.**

With Geolocation: 

![](acceptlocation.gif)

Without Geolocation:

![](blocklocation.gif)

## Features
* #### Default search
Users can get started by searching for nearby restaurants from a small number of **popular** categories compiled by Yelp Fusion API



* ### Preset categories and cuisines search
Users can select given preset options on the navigation bar to get them started on some search terms. Yelp API endpoint queries are made based on the category or cuisine selected and will return the appropriate results.



* ### Search using keyword terms
Users get more freedom to search using broad or narrow terms, for example "food", "restaurants", "spicy food" or "cheap", etc. Go crazy with the terms! The terms are saved as keywords to be inserted into the Yelp API endpoint for query and a compiled list of results will be returned.



* ### Detailed page
Need to see when they are open until? Or where they are? Users can view more details of the particular restaurant. A Yelp API call is made to return more details of a particular restaurant business given their unique id. Leaflet JS and MapTiler were also used to display the location of the restaurant on an interactive map.



* ### Related search terms

Interested in a particular category after viewing a restaurant? Users can click the category next to the business name to look up more restaurants under that category!



*The list of search results was compiled by calling the Yelp Fusion API based on their 'keyword terms'. As such, hard coding was not an issue, but rather html templates were coded for data to simply fill in.*

# Challenges
* Given my lack in HTML, CSS and JavaScript background. I was tasked to build a web app in a short amount of time as a coding challenge. The biggest hurdle for me was learning the required tools needed to make this happen. As such, there were also a lot of bugs I encountered when making this web application.
* One of the noticeable bugs was that sometimes the details.html page will not successfully load all the necessary information for the user to see. This is caused by the lack of existence of a particular keyword in the JSON object data returned by the Yelp API call. Some businesses would have their business hours in the JSON data, while others do not. I have not yet figure out with my JavaScript code a way to check for those data key existence. As such, a small portion of those business results will have an incomplete details page.
* When making an API call using Yelp Fusion API's endpoints, latitude & longitude coordinates must be included. This led me to insert a default location (being San Francisco, CA) to the endpoints if user has blocked HTML5 Geolocation access, which also does not present a good user experience. As such, I recommend users to accept geolocation access for the best user experience.
* When making API calls, I would need the keywords the users choose in order to make the appropriate calls. As we are tasked to worry only about the frontend, It was difficult to store those 'keywords' for later calls. My workaround was using HTML web storage API. localStorage allows me to store a key to a value. This allowed me to save all the necessary information needed for later use such as latitude and longitude of the user in order to avoid asking the user for their location everytime they load into the results.html page and last search term submitted by the user.

# Accomplishments
* Presenting to users an enjoyable experience to look up good restaurants to help in their decision for their next lunch with easy to navigate interface.
* Building a web application from scratch involved a lot of different roles played by various tools, packages and APIs and I was able to integrate all the parts together to work responsively.
* Exposure to JavaScript semantics, as well as understand what asynchronous calls and callbacks
* Gained a better sense of value of time in regards to building web applications. I was tasked to integrate what was already the backend from APIs into the frontend. Having to imagine building a web application with my own APIs will definitely take longer and I am able to value the importance of APIs.
