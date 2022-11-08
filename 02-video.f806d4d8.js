!function(){var e=document.querySelector("#vimeo-player"),t=new Vimeo.Player(e),r="videoplayer-current-time";t.on("timeupdate",(function(e){var t=e.seconds;localStorage.setItem(r,JSON.stringify(t))}));var n=JSON.parse(localStorage.getItem(r));t.setCurrentTime(n).then((function(){return t.play()}))}();
//# sourceMappingURL=02-video.f806d4d8.js.map
