window.bpm = 1

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
        bpmDance();
      },
      error: function (errorMessage) {
        $("feedback").text(errorMessage)
      }
    });
    console.log(state);
    $('#current-track-name').text(state.track_window.current_track.name);
    $('#current-track-id').text(state.track_window.current_track.id);
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
var images = ["../images/plant4.png", "../images/plant5.png"]

function plantChange() {
    if (++currentPos >= images.length)
        currentPos = 0;

    image.src = images[currentPos];
}

function bpmDance() {
  window.interval = (60 / window.bpm * 1000);
  plantChange();
  window.timeout = setTimeout(function() { bpmDance(); }, window.interval);
}
