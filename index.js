const express = require( 'express' );
const app = express();
const my_client_id = '5da38576975e4705976cf5174775d9a5';
const redirect_uri = 'http://localhost:3000/callback';

app.use( express.static( 'public' ));

app.listen( 3000, function() {
  console.log( 'Listening on port 3000!' );
});

app.get( '/', ( req, res ) => {
  res.sendFile( 'index.html' );
});

app.get( '/login', (req, res) => {
  let scopes = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize' +
  '?response_type=code' +
  '&client_id=' + my_client_id +
  (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
  '&redirect_uri=' + encodeURIComponent(redirect_uri));
});

app.get( '/callback', (req, res) => {
  res.redirect( '/' );
});