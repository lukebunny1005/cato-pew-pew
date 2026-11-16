'use strict';
// The hosted build replaces this ID with a hash of this release's game assets.
const UPDATE_ID="99e16e84303f5b6c";
const UPDATE_HIDE_KEY='cato-hidden-update';
function showUpdates(){
 panel(`<h2>Ready, set, pew! ✦</h2><p>The arena upgrade.</p><ul class="updateList"><li><strong>Nearby radar:</strong> see health packs and cats with a clear line of sight. Turn it off in Settings.</li><li><strong>Smoother online cats:</strong> movement blends between server updates.</li><li><strong>Combat feedback:</strong> hit sounds, headshot notices, and a red edge when you take damage.</li><li><strong>Switch weapons:</strong> tap your weapon name or press X to cycle your unlocked guns.</li><li><strong>Round results:</strong> see accuracy, headshots, time, and earned XP after solo rounds.</li></ul><div class="updateActions"><button id="closeUpdate" class="primary">Close · let’s play</button><button id="hideUpdate" class="secondary">Don’t show again for this update</button></div><p id="updateNotice" role="status">Only this update will be hidden. Future updates still appear.</p>`);
 $('closeUpdate').onclick=resume;
 $('hideUpdate').onclick=()=>{try{localStorage.setItem(UPDATE_HIDE_KEY,UPDATE_ID);resume()}catch{$('updateNotice').textContent='Your browser could not save this choice. You can still close this popup.'}};
}
let updateHidden=false;try{updateHidden=localStorage.getItem(UPDATE_HIDE_KEY)===UPDATE_ID}catch{}
if(!updateHidden)showUpdates();
