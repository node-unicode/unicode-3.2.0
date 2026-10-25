import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H/MAIEQBPc+r0tmk0gTCv+30LRp13QfkZFkTCzyWsAswcBsyycfbqI9jC7t6DfsJsZ/kOFTErv1+4NNI56yfBoitIvtzzU994nC23xj5aV4pS9qv3fL/6EHGhJDdKiy7OJfxeCXgUHk9uNsjKYf9zPdtXvy8Df77BfE//1i4Sb7lXPQ/PDilHi8u/Cjov7dJm2z3pvw4bMZFBQ==', 'base64')).toString());
