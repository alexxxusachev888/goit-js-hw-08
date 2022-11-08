/* import Player from '../../node_modules/@vimeo/player/dist/player.min.js'; */

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

const CURRENT_TIME = 'videoplayer-current-time';

player.on('timeupdate', function (data) {
  const breakePoint = data.seconds;

  localStorage.setItem(CURRENT_TIME, JSON.stringify(breakePoint));
});

const savedTime = JSON.parse(localStorage.getItem(CURRENT_TIME));

player.setCurrentTime(savedTime).then(function () {
  return player.play();
});