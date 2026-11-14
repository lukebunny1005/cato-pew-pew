'use strict';
// Keyup can be lost when focus moves between an embedded game and browser chrome.
const keyTimes=new Map();
function clearMovement(){keys.clear();keyTimes.clear();mouseDown=false;lookDrag=false;if(typeof player!=='undefined'){player.moveX=0;player.moveZ=0}}
addEventListener('keydown',e=>{if(mode==='play')keyTimes.set(e.code,Date.now())},true);
addEventListener('keyup',e=>{keys.delete(e.code);keyTimes.delete(e.code)},true);
addEventListener('blur',clearMovement,true);
addEventListener('pagehide',clearMovement);
document.addEventListener('visibilitychange',()=>{if(document.hidden)clearMovement()});
document.addEventListener('pointerlockchange',clearMovement);
document.addEventListener('focusout',e=>{if(e.target===canvas)clearMovement()});
const beforeGuardUpdate=update;
update=function(dt){for(const [key,when] of keyTimes)if(Date.now()-when>1200){keys.delete(key);keyTimes.delete(key)}beforeGuardUpdate(dt)};
