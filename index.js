const express = require( 'express' );
const app = express();

app.use( express.static( 'public' ));

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);

app.get( '/', ( req, res ) => {
  res.sendFile( 'index.html' );
});
