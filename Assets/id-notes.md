# Notes for IDs
*These are the JS hooks in index.html. They are inside standard jQuery notation for easy copy & pasting.*

---
#### NavBar
* Search Input Field: `$("#searchBarInput")`
* Search Button: `$("#searchBarButton")`

#### Top Alerts
* Mask Advisory Cell (to toggle cell display if no information): `$("#maskAdvisoryCell")`
* Mask Advisory Alert Span: `$("#maskAdvisorySpan")`
* Social Distancing Cell (to toggle cell display if no information): `$("#socialDistancingCell")`
* Social Distancing Advisory Alert Span: `$("#socialDistancingSpan")`
* Travel Restrictions Cell (to toggle cell display if no information): `$("#travelRestrictionsCell")`
* Travel Restrictions Alert Span: `$("#travelRestrictionsSpan")`
* New Cases Cell (to toggle cell display if no information): `$("#newCasesCell")`
* New Cases Trend Alert Span: `$("#newCasesTrendSpan")`

#### Stats Sidebar
* Updated Stats Date Span (to let user know how recent data is): `($"#updatedStatsDate")`
* Confirmed Total Cases Span: `($"#totalCasesSpan")`
* Daily New Cases Span: `($"#newCasesSpan")`
* Confirmed Total Deaths Span: `($"#totalDeathsSpan")`
* Daily New Deaths Span: `($"#newDeathsSpan")`

#### Map Area
* Map Display Area: `$("#mapDisplayArea")`
* The map area has a placeholder image, inside of the div labeled `#mapDisplayArea`. It is described by the following code:
```
<div class="media-object stack-for-small" id="mapPlaceholder">
    <div class="media-object-section">
        <img src="https://github.com/ShepLT1/covid-tracker/blob/master/Assets/Images/map-example.jpg?raw=true"
        width="100%" alt="Map">
    </div>
</div>
```
Note that the placeholder div has the ID `$("#mapPlaceholder")`, so if the map fails to load, we could use this as a backup.

#### Gov Announcements (Tweets)
* I don't know the format that embedded tweets will take. For now, There are ID hooks for the whole area (to dynamically generate cards?) and for each of the three cards (to fill each card?).
* Gov Announcements Area: `$("#govAnnouncementsArea")`
* Gov Announcements Card 1: `$("#announcementCard1")`
* Gov Announcements Card 2: `$("#announcementCard2")`
* Gov Announcements Card 3: `$("#announcementCard3")`