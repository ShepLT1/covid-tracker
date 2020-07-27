$(document).foundation();

$(document).ready(function() {

    var chart;

    var stateAbr = localStorage.getItem("Landing State");

    var queryURL;

    var posTestRatio;

    function getData() {

      queryURL = "https://covidtracking.com/api/v1/states/" + stateAbr + "/daily.json";

      $.ajax({
          url: queryURL,
          method: "GET",
        }).then(function(response) {

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

          // pulls today's date from ajax call
          var todayDate = JSON.stringify(response[0].date);

          // grabs current year
          var currentYear = todayDate.slice(0,4);

          // grabs current month
          var currentMonth = todayDate.slice(4,6);

          // grabs current day of month
          var currentDay = todayDate.slice(6,8);

          // formats to user-friendly date
          var formatTodayDate = currentMonth + "/" + currentDay + "/" + currentYear;

          $("#updatedStatsDateSpan").text(formatTodayDate);
          $("#todayTotPositiveSpan").text(todayTotPositive);
          $("#todayIncPositiveSpan").text(todayIncPositive);
          $("#todayTotDeathsSpan").text(todayTotDeaths);
          $("#todayDailyDeathsSpan").text(todayDailyDeaths);

          $("#todayTotPositiveSpan").text(todayTotPositive);
          $("#todayTotNegativeSpan").text(todayTotNegative);
          $("#todayTotTestsSpan").text(todayTotTests);
          $("#todayIncTestsSpan").text(todayIncTests);

          $("#todayCurrHospitalSpan").text(todayCurrHospital);
          $("#todayIncHospitalSpan").text(todayIncHospital);
          $("#todayTotHospitalSpan").text(todayTotHospital);

          var dateArr = [];

          var posTestRatioArr = [];

          for (i = 31; i > 0; i--) {

            // cumulative death total
            var totDeaths = response[i].death;
            // new deaths for current day
            var dailyDeaths = response[i].deathIncrease;

            // cumulative hospitalized patient total
            var totHospital = response[i].hospitalizedCumulative;
            // current number of hospitalized patients
            var currHospital = response[i].hospitalizedCurrently;
            // number of new hospital patients admitted for this day
            var incHospital = response[i].hospitalizedIncrease;

            // cumulative ICU patient total
            var totICU = response[i].inIcuCumulative;
            // current number of ICU patients
            var currICU = response[i].inIcuCurrently;

            // cumulative total of negative tests
            var totNegative = response[i].negative;

            // cumulative total of patients put on ventilator
            var totVent = response[i].onVentilatorCumulative;
            // current number of patients on ventilator
            var currVent = response[i].onVentilatorCurrently;

            // cumulative total of positive tests
            var totPositive = response[i].positive;

            // number of new positive tests received on this day
            var incPositive = response[i].positiveIncrease;

            // cumulative total of number of tests administered
            var totTests = response[i].totalTestResults;
            // number of tests administered on this day
            var incTests = response[i].totalTestResultsIncrease;

            // pulls today's date from ajax call
            var date = JSON.stringify(response[i].date);

            // grabs current month
            var month = date.slice(4,6);

            if (month.charAt(0) == 0) {

              month = month.substring(1);

            }

            // grabs current day of month
            var day = date.slice(6,8);

            if (day.charAt(0) == 0) {

              day = day.substring(1);

            }

            // formats to user-friendly date
            var formatDate = month + "/" + day;

            dateArr.push(formatDate);

            posTestRatio = (incPositive/incTests) * 100;

            if (posTestRatio === 100 || posTestRatio > 100 || posTestRatio < 0 || incTests === 0) {

              posTestRatio = NaN;

            }

            posTestRatioArr.push(posTestRatio);

          }

          if (chart) {
            
            chart.destroy();

          }

          var ctx = $('#myChart');

          chart = new Chart(ctx, {
      
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
              labels: dateArr,
              datasets: [{
                  label: '',
                  backgroundColor: 'transparent',
                  borderColor: 'blue',
                  data: posTestRatioArr,
              }]
            },

            // Configuration options go here
            options: {
              title: {
                display: true,
                text: "Daily Positive Tests Per Daily Tests Administered",
                fontSize: 24
              },
              legend: {
                display: false,
              },
              scales: {
                yAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: "Percentage (%)",
                    fontSize: 16
                  },
                  ticks: {
                      stepSize: 2
                    }
                }],
                xAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: "Date (past 30 days)",
                    fontSize: 16,
                    padding: 0
                  }
                }]
              }
            }
          });

          // find amount of ventilators or ICU beds available in each state, then compute current icu/availbe icu. ditto for ventilators

      })

    }

    getData();

    $(".selector-dropdown").on("click", function(event) {

        event.preventDefault();

        // push selected state abbr to local storage to persist on reload

        stateAbr = $(this).attr("data-state-abbr");

        getData();

    })

})