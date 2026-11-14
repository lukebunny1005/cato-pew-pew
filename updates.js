'use strict';
// The hosted build replaces this ID with a hash of this release's game assets.
const UPDATE_ID='invite-rooms-2026-11-13';
const UPDATE_HIDE_KEY='cato-hidden-update';
function showUpdates(){
 panel(`<h2>What’s new! ✦</h2><p>The natural lighting & materials update.</p><ul class="updateList"><li><strong>A more realistic arena:</strong> natural fur colors, fine coat markings, smooth lighting, sunlit water, textured surfaces, shadows, and brushed-metal weapons.</li><li><strong>More life:</strong> blinking cats, breathing, collars, paw details, moving weapon sway, and punchier muzzle flashes.</li><li><strong>Richer places:</strong> benches, flowers, waving pennants, floating pool rings, patterned decks, and distance haze.</li>
 <li><strong>Create a server:</strong> get a fresh eight-letter uppercase invite code.</li>
 <li><strong>Join other:</strong> find it beside Settings. Type a code and press Enter. Codes expire when everyone leaves.</li>
 <li><strong>Walking cats:</strong> alternating paw steps and arm movement, including other players online.</li>
 <li><strong>No accounts:</strong> join as a guest. Progress saves in your browser.</li>
 <li><strong>Bigger maps:</strong> more than six times the area, with extra buildings, hiding spots, and 13 health packs.</li>
 <li><strong>First-person aiming:</strong> fixed center crosshair, mouse look, double-damage headshots, and damage numbers for three seconds.</li>
 <li><strong>Press 2:</strong> pause, hide the crosshair, and free your mouse. Press 2 again to resume.</li>
 <li><strong>More to unlock:</strong> six guns, dances, three maps, and difficulty-based XP bonuses in solo play.</li>
 </ul><div class="updateActions"><button id="closeUpdate" class="primary">Close · let’s play</button><button id="hideUpdate" class="secondary">Don’t show again for this update</button></div><p id="updateNotice" role="status">Future updates will still appear.</p>`);
 $('closeUpdate').onclick=resume;
 $('hideUpdate').onclick=()=>{try{localStorage.setItem(UPDATE_HIDE_KEY,UPDATE_ID);resume()}catch{$('updateNotice').textContent='Your browser could not save this choice. You can still close this popup.'}};
}
let updateHidden=false;try{updateHidden=localStorage.getItem(UPDATE_HIDE_KEY)===UPDATE_ID}catch{}
if(!updateHidden)showUpdates();
