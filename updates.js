'use strict';
// The hosted build replaces this ID with a hash of this release's game assets.
const UPDATE_ID="c2931250b2367832";
const UPDATE_HIDE_KEY='cato-hidden-update';
function showUpdates(){
 panel(`<h2>What’s new! ✦</h2><p>The playtester fixes update.</p><ul class="updateList"><li><strong>Spread-out bots:</strong> cats spawn across the map on clear ground, away from you and each other.</li><li><strong>Clear knockouts:</strong> defeated cats stop chasing, get knocked back, and shrink away before respawning.</li><li><strong>Consistent SMG:</strong> online firing no longer waits for each network reply. Server fire-rate checks remain active.</li><li><strong>Better chases:</strong> hold Shift to sprint, manage your stamina, watch the escape meter, and look for ! or ? above alerted cats.</li><li><strong>Hide and escape:</strong> solo cats must spot you before shooting. Break their line of sight for three seconds to lose them. SPOTTED and the escape check mark each last five seconds.</li><li><strong>Christmas Village is free:</strong> falling snow, snowy trees, a lodge, presents, snowmen, and Santa hats. Press Play Christmas Village for solo play.</li><li><strong>Renderer fix:</strong> corrected a WebGL shader compatibility problem that could force the slower fallback renderer.</li><li><strong>Performance mode is now the default:</strong> lower rendering resolution, lighter scenery, and GPU projection. Choose Performance or Detail in Settings.</li><li><strong>Less background work:</strong> covered scenes update less often and hidden tabs stop rendering.</li><li><strong>Less rendering work:</strong> hidden objects are skipped, distant cats use lighter meshes, and graphics buffers are reused.</li><li><strong>GitHub multiplayer fix:</strong> the GitHub Pages copy now connects to the hosted arena. Connection errors show useful messages.</li><li><strong>A more realistic arena:</strong> natural fur colors, fine coat markings, smooth lighting, sunlit water, textured surfaces, shadows, and brushed-metal weapons.</li><li><strong>More life:</strong> blinking cats, breathing, collars, paw details, moving weapon sway, and punchier muzzle flashes.</li><li><strong>Richer places:</strong> benches, flowers, waving pennants, floating pool rings, patterned decks, and distance haze.</li>
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
