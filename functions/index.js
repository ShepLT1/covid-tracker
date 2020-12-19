const firebase = require("firebase");
const functions = require('firebase-functions');
const axios = require('axios');
const cors = require('cors')({ origin: true });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.getCovidData = functions.https.onRequest((req, res) => {
  const url = req.body.url;

  cors(req, res, () => {
    if (req.method !== "POST" || !url.startsWith("https://covidtracking.com/api/v1/")) {
      return res.status(401).json({
        message: "Not allowed"
      });
    }

    return axios.get(url)
      .then(response => {
        return res.status(200).json(response.data)
      })
      .catch(err => {
        return res.status(500).json({
          error: err
        })
      })
      .finally(() => res.end())
  })
})