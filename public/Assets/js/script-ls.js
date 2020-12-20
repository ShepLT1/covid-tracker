$(document).foundation();

$(document).ready(function() {

    var chart;

    var abbrev = localStorage.getItem("Abbreviation");

    var queryURL = "https://covidtracking.com/api/v1/" + abbrev + "/daily.json";

    var posTestRatio;

    var maskAdvisoryButton = $(".maskAdvisoryButton");

    var socialDistancingButton = $(".socialDistancingButton");

    var travelRestrictionsButton = $(".travelRestrictionsButton");

    var newCasesButton = $(".newCasesTrendButton");

    var stateName = $(".stateName");

    function getData() {

      $.ajax({
          url: "https://us-central1-covid-19-dashboard-e8d2b.cloudfunctions.net/getCovidData",
          // If in development environment, use below url for testing in conjunction with firebase emulators.
          // url: "http://localhost:5001/covid-19-dashboard-e8d2b/us-central1/getCovidData",
          method: "POST",
          data: {url: queryURL},
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

          // cumulative total of negative tests
          var todayTotNegative = response[0].negative;

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

          // States 'N/A' if no stat present
          function NA(x) {

            if (x === null) {
      
              x = "N/A"

              return x;
      
            } else if (x < 0) {

              x = 0;

              return x;

            }

            return x;
      
          }

          $("#updatedStatsDateSpan").text(NA(formatTodayDate));
          $(".todayTotPositiveSpan").text(NA(todayTotPositive));
          $("#todayIncPositiveSpan").text(NA(todayIncPositive));
          $("#todayTotDeathsSpan").text(NA(todayTotDeaths));
          $("#todayDailyDeathsSpan").text(NA(todayDailyDeaths));

          $(".todayTotPositiveSpan").text(NA(todayTotPositive));
          $("#todayTotNegativeSpan").text(NA(todayTotNegative));
          $("#todayTotTestsSpan").text(NA(todayTotTests));
          $("#todayIncTestsSpan").text(NA(todayIncTests));

          $("#todayCurrHospitalSpan").text(NA(todayCurrHospital));
          $("#todayIncHospitalSpan").text(NA(todayIncHospital));
          $("#todayTotHospitalSpan").text(NA(todayTotHospital));

          var dateArr = [];

          var posTestRatioArr = [];

          var posTestArr = [];

          var totTestArr = [];

          var upperLimit = 0;

          // Gets state/US data from past 30 days
          for (i = 31; i > 0; i--) {

            // number of new positive tests received on this day
            var incPositive = response[i].positiveIncrease;

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

            // Removes bad/missing chart data
            if (posTestRatio === 100 || posTestRatio > 100 || posTestRatio < 0 || incTests === 0) {

              incPositive = NaN;

            }

            // Grabs maximum y axis value while ignoring bad/missing data values
            if (incPositive !== NaN) {
              
              if (incPositive > upperLimit) {

              upperLimit = incPositive;

              }

            }

            posTestRatioArr.push(posTestRatio);

            posTestArr.push(incPositive);

            totTestArr.push(incTests);

          }

          // sets chart y axis step number dynamically
          var step = (upperLimit / 10).toFixed(0);

          // Removes previous chart if it exists
          if (chart) {
            
            chart.destroy();

          }

          // Creates new chart
          var ctx = $('#myChart');

          chart = new Chart(ctx, {
      
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
              labels: dateArr,
              datasets: [{
                  label: 'Daily Positive Tests',
                  backgroundColor: 'transparent',
                  borderColor: '#753C75',
                  data: posTestArr
              }]
            },
            // Configuration options go here
            options: {
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "Daily Positive Tests Over Last 30 Days",
                fontSize: 24
              },
              legend: {
                display: false,
              },
              scales: {
                yAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: "Daily Positive Tests",
                    fontSize: 16
                  },
                  ticks: {
                    stepSize: step
                  }
                }],
                xAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: "Date",
                    fontSize: 16,
                    padding: 0
                  }
                }]
              },
              // tooltip options here
              tooltips: {
                displayColors: false,
                callbacks: {
                    label: function(tooltipItem, data) {
                        
                      var percent =  posTestRatioArr[tooltipItem.index].toFixed(2);

                      var pos = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];

                      var tot = totTestArr[tooltipItem.index];

                      var multistringText = ["DPT per DTA: " + percent + "%"];
            
                      multistringText.push("DPT: " + pos);

                      multistringText.push("DTA: " + tot);
          
                      return multistringText;

                    }
                }
            }
            }
          });

      })
      .catch((error) => {
        console.error(error);
        // Getting the Error details.
        var code = error.code;
        var message = error.message;
        var details = error.details;
        console.log(code, message, details);
      })

    }

    // Checks local storage abbreviation against full state/country name
    function setStateName() {
        var stateAbbrev = localStorage.getItem("Abbreviation");

        if (stateAbbrev.length > 2) {
            stateAbbrev = stateAbbrev.substr(7, 2);
        }
        $(".selector-dropdown-country").each(function stateData() {
            if (stateAbbrev === this.dataset.stateAbbr) {
                var locationName = this.dataset.locationName;
                stateName.text(locationName);
            }
        });

        $(".selector-dropdown").each(function stateData() {
            if (stateAbbrev === this.dataset.stateAbbr) {
                var locationName = this.dataset.locationName;
                stateName.text(locationName);
            }
        });
    }

    // External Search Buttons for Alerts Bar
    function runYourSearch(search) {
        var fullName = localStorage.getItem("Full Name");
        var googleURL = "https://www.google.com/search?q=Covid+" + fullName + "+" + search;
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

    getData();

    // Runs data and state name retrieval/pasting on nav bar selection
    $(".selector-dropdown").on("click", function(event) {

        event.preventDefault();

        var stateAbr = $(this).attr("data-state-abbr");

        var state = $(this).attr("data-location-name");

        localStorage.setItem("Abbreviation", "states/" + stateAbr);

        localStorage.setItem("Full Name", state);

        queryURL = "https://covidtracking.com/api/v1/states/" + stateAbr + "/daily.json";

        setStateName();

        getData();

    })

    // Runs data and US name retrieval/pasting on nav bar selection
    $(".selector-dropdown-country").on("click", function(event) {

      event.preventDefault();

      localStorage.setItem("Abbreviation", "us");

      localStorage.setItem("Full Name", "United States");

      queryURL = "https://covidtracking.com/api/v1/us/daily.json";

      setStateName();

      getData();

    })

})