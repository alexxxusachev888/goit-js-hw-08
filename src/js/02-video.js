import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const CURRENT_TIME = 'videoplayer-current-time';

throttle(player.on('timeupdate', function (data) {
  const breakePoint = data.seconds;

  localStorage.setItem(CURRENT_TIME, JSON.stringify(breakePoint));
}), 1000);

const savedTime = JSON.parse(localStorage.getItem(CURRENT_TIME));

player.setCurrentTime(savedTime || 0);