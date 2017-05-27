const app = require('express')();
const functions = require('firebase-functions');
const request = require('request-promise-native');

const TMDB_ROOT = 'https://api.themoviedb.org/3';

app.get('/api/upcoming', (req, res) => {
  res.set('Cache-Control', 'public, max-age=86400, s-maxage=86400');
  const options = {
    uri: TMDB_ROOT + `/movie/upcoming?api_key=${functions.config().tmdb.key}&language=en-US&page=1`,
    json: true,
  };
  request(options)
      .then(data => res.json(data))
      .catch(error => res.status(error.statusCode).send());
});

exports.api = functions.https.onRequest(app);
