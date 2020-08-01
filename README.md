# covid-tracker

### Team:
| Frontend:      | Backend:       |
| -------------- | -------------- |
| George Felton  | Benjamin Young |
| Robeil Aregawi | Julee Butler   |
| Sarah Cowgill  | Luke Shepherd  |

# COVID-19 Dashboard

This COVID-19 tracking dashboard website will pull up-to-date covid-19 information via 3rd party APIs, then present the data in a cohesive, simple dashboard. Data is segmented into a few categories: Statistical Data, Interactive map, Latest News. The app will also give users a high-level, one-line assessment of the state of covid-19 containment in their area, allowing users to make informed decisions. The webpage will be responsive & each section will tell users the timing for each piece of data.

[Link to Deployed Page](https://sheplt1.github.io/covid-tracker/)

[Link to License](./LICENSE)

## User Story

``` 
AS A person concerned about COVID19 in my area,

I WANT to easily access up-to-date information in one page

SO THAT I can make informed decisions when planning my day.
```
![index-page-screenshot](https://github.com/ShepLT1/covid-tracker/blob/master/Assets/Images/index.png)
![dashboard-page-screenshot](https://github.com/ShepLT1/covid-tracker/blob/master/Assets/Images/dashboard.png)

## Tools Used:

* HTML
* CSS
* JavaScript
* Foundation
* SimpleMaps.com

## APIs

* TrackCorona.live  API (City Level Data)
* Google Map API
* COVID Tracking Project API (Historical US Data & Historical State Data)
* New York Times API (Article Search)

## User Criteria:

GIVEN The glass is desktop or mobile,

​	WHEN The user interacts with the app

​	THEN The pages are responsive.

GIVEN The user lands on the page (Landing Page).

​	WHEN User click for the state,

​	THEN Display dashboard for that location.

GIVEN The user views the dashboard,

​	WHEN The stats section loads,

​	THEN Up-to-date statistics are presented.

​	WHEN User views the map

​	THEN The map has interactive elements.

​	WHEN The news section loads,

​	THEN Latest news is shown related with COVID-19.

​	WHEN External links are clicked,

​	THEN The user is taken to supporting data/articles.

​	WHEN The regulations section loads,

​	THEN Search results on Google for the state will show related with regulation.



## Directions for Future Development:

For future development we would like to add government data, add possibly Twitter announcements from the selected state’s Governor, and make it have a customizable dashboard. The customizable dashboard would give the user the option to select whether they want to select from only seeing news, statistics or other specific information on their screen. 

We would also make our tabs for “Mask Advisories”, “Social Distancing Requirements”, “Travel Restrictions Info” and “Trend in New Cases” actually display the data for the particular selected state within the tabs, instead of being a link for the user. 

Finally, we would like to be able to pull the user’s location to automatically let the user know about any Covid-19 related alerts and spikes in their area, and be able to have world information and statistics as an option on the index and dashboard pages. 





##### API ©Copyright

* TrackCorona
* Google Map
* New York Times
* The COVID Tracking Project
