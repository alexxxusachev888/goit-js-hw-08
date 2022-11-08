const e=document.querySelector("#vimeo-player"),t=new Vimeo.Player(e);t.on("timeupdate",(function(e){const t=e.seconds;localStorage.setItem("videoplayer-current-time",JSON.stringify(t))}));const r=JSON.parse(localStorage.getItem("videoplayer-current-time"));t.setCurrentTime(r).then((function(){return t.play()}));
//# sourceMappingURL=02-video.87e3361a.js.map
