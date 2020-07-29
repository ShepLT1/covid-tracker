var maskAdvisoryButton = $(".maskAdvisoryButton");
var socialDistancingButton = $(".socialDistancingButton");
var travelRestrictionsButton = $(".travelRestrictionsButton");
var newCasesButton = $(".newCasesTrendButton");
var stateName = $(".stateName");

function setStateName() {
    var stateAbbrev = localStorage.getItem("Abbreviation");

    if (stateAbbrev.length > 2) {
        stateAbbrev = stateAbbrev.substr(7, 2);
    }
    console.log(stateAbbrev);

    $(".selector-dropdown").each(function () {
        console.log($(this))
        // Find data-abbrev that matches stateAbbrev.
        if (stateAbbrev === this.dataset.stateAbbr) {
            var locationName = this.dataset.locationName;
            stateName.text(locationName);
            console.log(locationName);
        }
    })
    // Get state title from same element.
    // Display state title in stateName.  
}

// External Search Buttons for Alerts Bar
function runYourSearch(search) {
    var stateAbbrev = localStorage.getItem("Abbreviation");
    if (stateAbbrev.length > 2) {
        stateAbbrev = stateAbbrev.substr(7, 2);
    }
    var googleURL = "https://www.google.com/search?q=Covid+%2B+" + stateAbbrev + "+%2B+" + search;
    window.open(googleURL, '_blank');
}

maskAdvisoryButton.on("click", function () {
    runYourSearch("mask+advisory");
});
socialDistancingButton.on("click", function () {
    runYourSearch("social+distancing+requirements");
});
travelRestrictionsButton.on("click", function () {
    runYourSearch("travel+restrictions");
});
newCasesButton.on("click", function () {
    runYourSearch("new+cases+trend");
});

// This function needs to be called on page load and every time the state is updated.
setStateName();