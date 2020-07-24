$(document).ready(function() {

    $(".selector-dropdown").on("click", function(event) {

    event.preventDefault();

    var stateAbr = $(this).attr("data-state-abbr");

    var dailyURL = "https://covidtracking.com/api/v1/states/" + stateAbr + "/current.json";

    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function(response) {

        console.log(response);

        // cumulative death total
        var totDeaths = response.death;
        // new deaths for current day
        var dailyDeaths = response.deathIncrease;

        // cumulative hospitalized patient total
        var totHospital = response.hospitalizedCumulative;
        // current number of hospitalized patients
        var currHospital = response.hospitalizedCurrently;
        // number of new hospital patients admitted today
        var incHospital = response.hospitalizedIncrease;

        // cumulative ICU patient total
        var totICU = response.inIcuCumulative;
        // current number of ICU patients
        var currICU = response.inIcuCurrently;

        // cumulative total of negative tests
        var totNegative = response.negative;

        // cumulative total of patients put on ventilator
        var totVent = response.onVentilatorCumulative;
        // current number of patients on ventilator
        var currVent = response.onVentilatorCurrently;

        // cumulative total of positive tests
        var totPositive = response.positive;
        // number of new positive tests received today
        var incPositive = response.positiveIncrease;

        // cumulative total of number of tests administered
        var totTests = response.totalTestResults;
        // number of tests administered today
        var incTests = response.totalTestResultsIncrease;

        // find amount of ventilators or ICU beds available in each state, then compute current icu/availbe icu. ditto for ventilators

    })

    })

})