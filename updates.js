'use strict';
// The hosted build replaces this ID with a hash of this release's game assets.
const UPDATE_ID="9d9031a7725b8eed";
const UPDATE_HIDE_KEY='cato-hidden-update';
function showUpdates(){
 panel(`<h2>Ready, set, pew! ✦</h2><p>The mobile comfort update.</p><ul class="updateList"><li><strong>Your aim, your speed:</strong> choose Slow, Normal, or Fast touch sensitivity in Settings.</li><li><strong>Quick settings:</strong> open Settings from the solo pause menu without restarting your round.</li><li><strong>Phone controls:</strong> drag the left stick, swipe to aim, hold FIRE, and tap RUN. The large arrow button jumps.</li><li><strong>Less menu scrolling:</strong> shorter update notes and easier-to-reach menu buttons.</li></ul><div class="updateActions"><button id="closeUpdate" class="primary">Close · let’s play</button><button id="hideUpdate" class="secondary">Don’t show again for this update</button></div><p id="updateNotice" role="status">Only this update will be hidden. Future updates still appear.</p>`);
 $('closeUpdate').onclick=resume;
 $('hideUpdate').onclick=()=>{try{localStorage.setItem(UPDATE_HIDE_KEY,UPDATE_ID);resume()}catch{$('updateNotice').textContent='Your browser could not save this choice. You can still close this popup.'}};
}
let updateHidden=false;try{updateHidden=localStorage.getItem(UPDATE_HIDE_KEY)===UPDATE_ID}catch{}
if(!updateHidden)showUpdates();
