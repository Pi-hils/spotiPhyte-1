const express = require( 'express' );
const request = require( 'request' );
const querystring = require( 'querystring' );
const cookieParser = require( 'cookie-parser' );
const cors = require( 'cors' );
const client_id = '5da38576975e4705976cf5174775d9a5';
const client_secret = 'ADD HERE';
// const client_secret = process.env.CLIENT_SECRET; UNCOMMENT TO DEPLOY ON HEROKU

const redirect_uri = 'http://localhost:3000/callback';
// const redirect_uri = 'https://spotiphyte.herokuapp.com/callback'; UNCOMMENT TO DEPLOY ON HEROKU

const https = require("https");

let generateRandomString = function (length) {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

let stateKey = "spotify_auth_state";

const app = express();

app.use(express.static("public")).use(cors()).use(cookieParser());

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.get( '/player', ( req, res ) => {
  res.sendFile(__dirname + '/public/player.html');
});


app.get("/login", (req, res) => {
  let state = generateRandomString(16);
  res.cookie(stateKey, state);

  let scope =
    "user-read-playback-state streaming user-read-private user-read-email";
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
      })
  );
});

app.get("/callback", (req, res) => {
  let code = req.query.code || null;
  let state = req.query.state || null;
  let storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect(
      "/#" +
        querystring.stringify({
          error: "state_mismatch",
        })
    );
  } else {
    res.clearCookie(stateKey);
    let authOptions = {
      url: "https://accounts.spotify.com/api/token",
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: "authorization_code",
      },
      headers: {
        Authorization:
          "Basic " +
          new Buffer(client_id + ":" + client_secret).toString("base64"),
      },
      json: true,
    };

    request.post(authOptions, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        let access_token = body.access_token,
          refresh_token = body.refresh_token;

        let options = {
          url: "https://api.spotify.com/v1/me",
          headers: { Authorization: "Bearer " + access_token },
          json: true,
        };


        request.get(options, function (error, response, body) {
          // console.log(body);
        });

        res.redirect(
          "/player/#" +
            querystring.stringify({
              access_token: access_token,
              refresh_token: refresh_token,
            })
        );
      } else {
        res.redirect(
          "player/#" +
            querystring.stringify({
              error: "invalid_token",
            })
        );
      }
    });
  }
});

app.get("/refresh_token", function (req, res) {
  let refresh_token = req.query.refresh_token;
  let authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        new Buffer(client_id + ":" + client_secret).toString("base64"),
    },
    form: {
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      let access_token = body.access_token;
      res.send({
        access_token: access_token,
      });
    }
  });
});
