import throttle from "lodash.throttle";
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const currentTime = 'videoplayer-current-time';
const locStorSet = function(e) {
    console.log(e.seconds);
    const startSec = Number(e.seconds);
  localStorage.setItem(currentTime, startSec)
   
}
player.on('timeupdate', throttle(locStorSet, 1000));


player.setCurrentTime(localStorage.getItem(currentTime)).then(function(seconds) {
    // seconds = the actual time that the player seeked to
})
