/* Accessible motion controls for an optional decorative video. */
(()=>{'use strict';
const vid=document.querySelector('.hero-film');
const control=document.getElementById('filmControl');
if(!vid||!control)return;
const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const label=()=>{const isPaused=vid.paused;control.innerHTML=isPaused?'<span aria-hidden="true">▶</span> 영상 재생':'<span aria-hidden="true">Ⅱ</span> 영상 일시정지';control.setAttribute('aria-label',isPaused?'배경 영상 재생':'배경 영상 일시정지');control.setAttribute('aria-pressed',String(isPaused));};
if(reduce){vid.pause();label();}else{vid.play().catch(()=>{label();});}
control.addEventListener('click',()=>{if(vid.paused){vid.play().catch(()=>{});}else{vid.pause();}label();});
vid.addEventListener('pause',label);vid.addEventListener('play',label);label();
})();
