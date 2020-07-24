$(document).ready(function() {

    $(".selector-dropdown").on("click", function(event) {

    event.preventDefault();

    var stateAbr = $(this).attr("data-state-abbr");

    var queryURL = "https://covidtracking.com/api/v1/states/" + stateAbr + "/current.json";

    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function(response) {

        console.log(response);

        var totDeaths = response.death;
        var dailyDeaths = response.deathIncrease;

        var totHospital = response.hospitalizedCumulative;
        var currHospital = response.hospitalizedCurrently;
        var incHospital = response.hospitalizedIncrease;

        var totICU = response.inIcuCumulative;
        var currICU = response.inIcuCurrently;

        var totNegative = response.negative;

        var totVent = response.onVentilatorCumulative;
        var currVent = response.onVentilatorCurrently;

        var totPositive = response.positive;
        var incPositive = response.positiveIncrease;

        var totTests = response.totalTestResults;
        var incTests = response.totalTestResultsIncrease;

        // find amount of ventilators or ICU beds available in each state, then compute current icu/availbe icu. ditto for ventilators

    })

    })

})