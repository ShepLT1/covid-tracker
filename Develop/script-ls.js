$(document).ready(function() {

    $(".selector-dropdown").on("click", function(event) {

    event.preventDefault();

    var stateAbr = $(this).attr("data-state-abbr");

    var queryURL = "https://covidtracking.com/api/v1/states/" + stateAbr + "/daily.json";

    $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function(response) {

        console.log(response[0]);

        // cumulative death total
        var todayTotDeaths = response[0].death;
        // new deaths for current day
        var todayDailyDeaths = response[0].deathIncrease;

        // cumulative hospitalized patient total
        var todayTotHospital = response[0].hospitalizedCumulative;
        // current number of hospitalized patients
        var todayCurrHospital = response[0].hospitalizedCurrently;
        // number of new hospital patients admitted today
        var todayIncHospital = response[0].hospitalizedIncrease;

        // cumulative ICU patient total
        var todayTotICU = response[0].inIcuCumulative;
        // current number of ICU patients
        var todayCurrICU = response[0].inIcuCurrently;

        // cumulative total of negative tests
        var todayTotNegative = response[0].negative;

        // cumulative total of patients put on ventilator
        var todayTotVent = response[0].onVentilatorCumulative;
        // current number of patients on ventilator
        var todayCurrVent = response[0].onVentilatorCurrently;

        // cumulative total of positive tests
        var todayTotPositive = response[0].positive;
        // number of new positive tests received today
        var todayIncPositive = response[0].positiveIncrease;

        // cumulative total of number of tests administered
        var todayTotTests = response[0].totalTestResults;
        // number of tests administered today
        var todayIncTests = response[0].totalTestResultsIncrease;

        // find amount of ventilators or ICU beds available in each state, then compute current icu/availbe icu. ditto for ventilators

    })

    })

})