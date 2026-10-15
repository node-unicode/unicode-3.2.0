import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAE03QSw4EIQhF0Q05QEQ+ayHufxsdpJ7piZVDhXhj5mQRG/VhGXXqOcUt607VaupeU91kPNKZA1zFyaBcTnCPjA3oP2ykEOAj5e1EXbs+Od0WaN5/hBjnNmp8tQWW9tvfZY63r+23b22FvW1wtxHCg9poj68PzxFf3zrn/ABgOyCSagEAAA==', 'base64'))));
