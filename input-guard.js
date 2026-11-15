'use strict';
// Keyup can be lost when focus moves between an embedded game and browser chrome.
// Held keys do not expire: pressing another key can stop their OS repeat events.
function clearMovement(){keys.clear();mouseDown=false;lookDrag=false;if(typeof player!=='undefined'){player.moveX=0;player.moveZ=0}}
addEventListener('keyup',e=>{keys.delete(e.code)},true);
addEventListener('blur',clearMovement,true);
addEventListener('pagehide',clearMovement);
document.addEventListener('visibilitychange',()=>{if(document.hidden)clearMovement()});
document.addEventListener('pointerlockchange',()=>{if(document.pointerLockElement!==canvas)clearMovement()});
document.addEventListener('focusout',e=>{if(e.target===canvas)clearMovement()});
