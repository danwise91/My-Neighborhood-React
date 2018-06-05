# Welcome To My Neighborhood!
This is a project done for Udacity's Front end nanodegree track. In this project I utilized the Google Maps and Wikipedia APIs to build an interactive map of one of my favorite places, Raleigh NC!

# How To Setup
Clone or download this project then cd into the directory and run NPM install and NPM start

Use the dropdown side bar at the top left hand corner to filter out some of my favorite places in Raleigh

Click on one of the markers or the name in the panel to view more information about the destination (info provided from the Wikipedia API)

Have fun exploring!

# How to run application in production mode
This app has offline capabilities but only in production mode. 
In order to run this application in production mode please refer to the following steps:
1) Download or clone this repo
2) Run NPM install and then NPM start to launch the local server
3) When testing this app in production mode for offline capabilities, open the Chrome dev tools and head to the Application panel
4) Click the "Service Workers" tab and select "Offline"
5) Now My Neighborhood is running in offline mode! You can tell by clicking on the markers and seeing the returned error message as well as noticing that the map will no longer render further than the locations you have previously scrolled over. 

While running this app in production mode to test offline capabilities you will still be able to interact with the sorting list and map markers, however new data will not be able to be retreived from any APIs. 
