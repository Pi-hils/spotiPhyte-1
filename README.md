# spotiphyte()
Welcome to spotiPhyte! 

[![Image from Gyazo](https://i.gyazo.com/218e9afacdd68d657640f4e9cdb4d401.png=50x50)](https://gyazo.com/218e9afacdd68d657640f4e9cdb4d401)
(https://spotiphyte.herokuapp.com/)

## What is spotiPhyte
This is an <strong>entertaining and therapeutic game</strong> which allows you to play your own choice of music from your spotify account. Whilst the music is playing, watch a beautiful, green plant dance to the beat of your song. To get to the optimal growth of the plant, play a few songs and watch it transform to the rhythm of the beat. 
<br>
<br>
Why not acquire useful items to speedup the growth of your plant by visiting the shop? To accumulate gems, harvest your plant when you see it growing. To gain more points, let your plant bloom before harvesting.	🌻

#link to the wiki and team charter

## How it works
(video snippet of final work)


Team SpotiPhyte: <br>
[Ralph Mallett](https://github.com/ralphm10)<br>
[Hilda Amponsah](https://github.com/Pi-hils)<br>
[Jake Cummings](https://github.com/SilverLongjohns)<br>
[Alexis Simonian](https://github.com/Alexisimonian)<br>
[Paul Humphreys](https://github.com/phump81)<br>

- [Trello](https://trello.com/b/JJHYRzFI/finalproject2020)

## MVP
 - Spotify Integration
 - Plant Sprite
 - Interactivity with plant Sprite
 - Get a basic layout of web

[![Image from Gyazo](https://i.gyazo.com/9d680cf991b8f7c6607243d03bf26947.png)](https://gyazo.com/9d680cf991b8f7c6607243d03bf26947)

## Technologies

| Area  |    Technology    |
|----------|:-------------|
| Languages |  JavaScript, Node, Spotify API, Express |
| Front End | JavaScript, Bootstrap, Ajax, Jquery   | 
| CI/CD |  Travis CI | 
| Hosting |    Heroku  | 
| Coverage | Jest |
| Testinng framework |  Jest  | 
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
- You can setup and input your own client crendentials by visiting [spotify developer](https://developer.spotify.com/dashboard/login). <br>
- On your spotify developer, click <strong>Edit Setting</strong> and change your redirect to http://localhost:3000.<br>
- Once you have the credentials, paste the client_id and client_secret next to the correct variable in script.js
