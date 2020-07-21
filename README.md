# covid-tracker

### Team:

Benjamin Young

Julee Butler 

Robeil Aregawi 

George Felton

Luke Shepherd

Sarah Cowgill

# COVID-19 Dashboard

This COVID-19 tracking dashboard website will pull up-to-date covid-19 information via 3rd party APIs, then present the data in a cohesive, simple dashboard. Data is segmented into a few categories: Statistical Data, Interactive map, Latest News, & Government Announcements. The app will also give users a high-level, one-line assessment of the state of covid-19 containment in their area, allowing users to make informed decisions. The webpage will be responsive & each section will tell users the timing for each piece of data.

## User Story

``` 
AS A person concerned about COVID19 in my area,

I WANT to easily access up-to-date information in one page

SO THAT I can make informed decisions when planning my day.
```



User Flow - Landing Page, search for city, then pull up dashboard. 

![dashboard-screenshot](.\Assets\Images\dashboard-screenshot.jpg)

## APIs

* Postman COVID tracker API
* Postman USA Map API
* TrackCorona.live Heatmap API
* Google Map API
* Postman News API
* Postman Twitter Accounts for State Governors API
* Postman Twitter Accounts for County Health Departments API

## User Criteria:

GIVEN the glass is desktop or mobile,

WHEN the user interacts with the app
THEN the pages are responsive.



GIVEN The user lands on the page (Landing Page).

WHEN Location services is on or user searches for a city,
THEN Display dashboard for that location.



GIVEN the user views the dashboard,

WHEN the stats section loads,
THEN up-to-date statistics are presented.

WHEN they view the map
THEN the map has interactive elements.

WHEN the news section loads,
THEN latest news is shown.

WHEN external links are clicked
THEN the user is taken to supporting data/articles.

WHEN the regulations section loads
THEN up-to-date local government announcements are displayed (via twitter).