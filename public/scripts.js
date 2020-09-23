window.bpm = 1
window.growthLimit = 3
window.growthVariable = 10
window.fertilized = false
const fullyGrown = 32

const hash = window.location.hash
.substring(1)
.split('&')
.reduce(function (initial, item) {
  if (item) {
    var parts = item.split('=');
    initial[parts[0]] = decodeURIComponent(parts[1]);
  }
  return initial;
}, {});
window.location.hash = '';

let token = hash.access_token;

if (!token) {
  console.log("Not logged in");
} else {

window.onSpotifyWebPlaybackSDKReady = () => {
  const player = new Spotify.Player({
    name: 'Web Playback SDK Quick Start Player',
    getOAuthToken: cb => { cb(token); }
  });

  // Error handling
  player.addListener('initialization_error', ({ message }) => { console.error(message); });
  player.addListener('authentication_error', ({ message }) => { console.error(message); });
  player.addListener('account_error', ({ message }) => { console.error(message); });
  player.addListener('playback_error', ({ message }) => { console.error(message); });

  // Playback status updates
  player.addListener('player_state_changed', state => {
    $.ajax({
      url: `https://api.spotify.com/v1/audio-features/${state.track_window.current_track.id}`,
      headers: { Authorization: "Bearer " + token },
      success: function (response) {
        window.bpm = response.tempo;
        $("#feedback").text(response.tempo);
        clearTimeout(window.timeout);
        if (state.paused === false) {
          bpmDance();
        }
      },
      error: function (errorMessage) {
        $("feedback").text(errorMessage)
      }
    });
    console.log(state);
    $('#current-track-name').text(state.track_window.current_track.name);
    $('#current-track-artist').text(state.track_window.current_track.artists[0].name);
    });

  // Ready
  player.addListener('ready', ({ device_id }) => {
    console.log('Ready with Device ID', device_id);
  });

  // Not Ready
  player.addListener('not_ready', ({ device_id }) => {
    console.log('Device ID has gone offline', device_id);
  });

  // Connect to the player!
  player.connect();
};
};

var image = document.getElementById("image");
var currentPos = 0;
var stage1 = ["../images/plant2.png", "../images/plant3.png"]
var stage2 = ["../images/plant4.png", "../images/plant5.png"]
var stage3 = ["../images/plant6.png", "../images/plant7.png"]
var stage4 = ["../images/plant8.png", "../images/plant9.png"]
var stage5 = ["../images/plant10.png", "../images/plant11.png"]
var gems = 0
var counter = 0

function plantChange(array) {
    if (++currentPos >= array.length)
        currentPos = 0;
        image.src = array[currentPos];
        counter ++;
      }

function bpmDance() {
  window.interval = (60 / window.bpm * 1000);
  if (counter < (fullyGrown * 0.2)) {
    plantChange(stage1);
  } else if (counter < (fullyGrown * 0.4)) {
    plantChange(stage2);
  } else if (counter < (fullyGrown * 0.6)) {
    plantChange(stage3);
  } else if (counter < fullyGrown * 0.8) {
    plantChange(stage4);
  } else {
    plantChange(stage5);
  }

  window.timeout = setTimeout(function() { bpmDance(); }, window.interval);
}

function fertilizer() {
  if (window.fertilized === true) {
    window.growthLimit = 7
    window.growthVariable = 5
  } else {
    window.growthLimit = 3
    window.growthVariable = 10
  }
}

function harvest() {
  if (counter < fullyGrown) {
  gems += Math.floor(counter / window.growthVariable);
  } else {
    gems += window.growthLimit
  }
  counter = 0;
  $('#gems').text(gems);
}
