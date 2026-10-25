import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H44A+GVsXUwnxQfXGQFALo63YRjK3yVholwc8KYecLrbGy1nyLqDF/tg8/JLnAiZbp/V+/qKupnILf6YCWfeww4=', 'base64')).toString());
