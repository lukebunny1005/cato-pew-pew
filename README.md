# Cato pew pew — Christmas Edition

A first-person cat arena game with a free snowy Christmas Village.

[Play Cato pew pew](https://lukebunny1005.github.io/cato-pew-pew/)

## Controls

- WASD or arrow keys: move
- Mouse: look; click or F: shoot
- Space: jump; Shift: sprint
- E: dance
- 2: pause/resume and release the mouse

## Game modes

Solo: pick a map, unlock weapons, earn XP, and escape cats by hiding for three seconds. Christmas Village includes snow, Santa hats, trees, presents, and a lodge.

Multiplayer: create a room or enter a friend's eight-letter code under Join other. The public multiplayer backend is hosted separately; no account is needed.

## Files

| File | Purpose |
| --- | --- |
| index.html | Page and menus |
| style.css | Christmas theme and interface styles |
| game.js | Rendering, maps, movement, weapons, and solo gameplay |
| multiplayer.js | Connection to the hosted multiplayer backend |
| input-guard.js | Key release and focus handling |
| updates.js | Current-release update popup |
| release.json | File checksums for this release |
| .nojekyll | Serves these files directly through GitHub Pages |

This release includes the fix for walking and sprinting while jumping. The game remembers progress and settings in each browser. Performance graphics are the default.

To update, replace the complete frontend release together. Keep index.html at the repository root. Asset version tags prevent mixing cached files from different releases.
