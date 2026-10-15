import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAE03PuQ3CQBCF4V5eBNJ0tFpRCEJa1gTG3AJiInKwOWzOXtgCaAHx9ITI/m+SmXEOKW5gSDFPsYA3h5Q9OahSlnPwrncwvMJW2lMrqaSWUgVDR3346yMMLfUJhrb6DENXXcPQUzffE347LtRaulJz6UYtpDtVSA9qJPGtoJ+aQA2lPjWWIjWRMmoqDagZvP8AOjA0Kj0BAAA=', 'base64'))));
