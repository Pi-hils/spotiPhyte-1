<<<<<<< HEAD
# spotiphyte()
Welcome to spotiPhyte. Enjoy the app [here](ttps://spotiphyte.herokuapp.com/)!
<br>

<img align="center" margin-left="50px" alt="logo" width="182px" height="152" src="./public/images/logo.png">
=======
# spotiPhyte
[![Build Status](https://travis-ci.com/SilverLongjohns/spotiPhyte.svg?branch=master)](https://travis-ci.com/SilverLongjohns/spotiPhyte)
<br> 
Welcome to spotiPhyte. Enjoy the app [here](https://spotiphyte.herokuapp.com/)!

<br>
<img align="center" margin-left="50px" alt="logo" width="182px" height="152" src="https://i.gyazo.com/218e9afacdd68d657640f4e9cdb4d401.png=50x50">
>>>>>>> 0a4f7b0640d6ab095b79009a6f441095565d755a
<br>
<br>

Listen to the presentation [here](https://www.youtube.com/watch?v=fmWeT5R_0PY).

## What is spotiPhyte
This is an <strong>entertaining and therapeutic game</strong> which allows you to play your own choice of music from your spotify account. Whilst the music is playing, watch a beautiful, green plant dance to the beat of your song. To get to the optimal growth of the plant, play a few songs and watch it transform to the rhythm of the beat. 
<br>
<br>
Why not acquire useful items to speedup the growth of your plant by visiting the shop? To accumulate gems, harvest your plant when you see it growing. To gain more points, let your plant bloom before harvesting.	🌻


## How it works
[Check out the game](https://drive.google.com/file/d/1hT5LIN7-z8IEAKjaXbtwqmnDPzZvPeQX/view?usp=sharing)

### The webapp

[![Image from Gyazo](https://i.gyazo.com/6d8d3c92f1a61f8c12371e603c658df4.png)](https://gyazo.com/6d8d3c92f1a61f8c12371e603c658df4)

### Your song

[![Image from Gyazo](https://i.gyazo.com/e088d8c9414e1e240219e4db2bb0abf3.png)](https://gyazo.com/e088d8c9414e1e240219e4db2bb0abf3)

### The shop

[![Image from Gyazo](https://i.gyazo.com/626357c4703e9dced32d2b1f07f226f8.png)](https://gyazo.com/626357c4703e9dced32d2b1f07f226f8)


## Team spotiPhyte: <br>
[Ralph Mallett](https://github.com/ralphm10)<br>
[Hilda Amponsah](https://github.com/Pi-hils)<br>
[Jake Cummings](https://github.com/SilverLongjohns)<br>
[Alexis Simonian](https://github.com/Alexisimonian)<br>
[Paul Humphreys](https://github.com/phump81)<br>

For a detailed account of how the agile working environment and sprints involved in creating this project, please visit our [sprints](https://github.com/SilverLongjohns/spotiPhyte/wiki) and the [team charter](https://github.com/SilverLongjohns/spotiPhyte/blob/master/team_charter.md). <br>

- [Trello](https://trello.com/b/JJHYRzFI/finalproject2020)

## MVP
 - Spotify Integration
 - Plant Sprite
 - Interactivity with plant Sprite
 - Get a basic layout of web

## Planning 
<u><strong>Initial Planning</strong></u>
<br>

[![Image from Gyazo](https://i.gyazo.com/9d680cf991b8f7c6607243d03bf26947.png)](https://gyazo.com/9d680cf991b8f7c6607243d03bf26947)

<u><strong> Miro Planning</strong></u>
<br>

[![Image from Gyazo](https://i.gyazo.com/d5778c662213a6eeaeb60fb853371bbf.png)](https://gyazo.com/d5778c662213a6eeaeb60fb853371bbf)

## Technologies

| Area  |    Technology    |
|----------|:-------------|
| Languages |  JavaScript, Node, Spotify API, Express |
| Front End | JavaScript, Bootstrap, Ajax, Jquery   | 
| CI/CD |  Travis CI | 
| Hosting |    Heroku  | 
| Coverage | Jest |
| Testing framework |  Jest  | 
| Styling |  CSS  | 


## Installing Locally
To run this game locally, you must:<br>
- Clone the repo onto your local machine
```
git clone git@github.com:...
```
- Install [node.js](https://nodejs.org/en/download/) and all dependencies with

```
npm install
```
- Run the app on your local machine with:
```
node index.js
```
- Go to your local server
```
http://localhost:3000/
```
- To run test
```
npm test
```

- You can setup and input your own client crendentials by visiting [spotify developer](https://developer.spotify.com/dashboard/login). <br>
- On your spotify developer, click <strong>Edit Setting</strong> and change your redirect to http://localhost:3000/callback <br>
- Once you have the credentials, paste the client_id and client_secret next to the correct variable in script.js
