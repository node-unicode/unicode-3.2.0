import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAE0WRyZHFMAhEE+LAIrZYKOefxhQC/bm4XkMLtXAVOUKlfx8UeUApDiaU0sVQqJODBkV0yxYBRXiGE8poOLHrNkzt3zpDmciwNOvwgbIzM1Pbn8N9F9+6i/X8Ze/5MdwZSIez/Te9H4Qyu/4QPFAnlvsC1BX9XF7u98owIZSeZYLS9RNDqS0LlPpyX/DOKlQ471S6uZcd6uByQJ1X79w0jRPYJXBfyf1dSTy7zbR4mqAYdxut+fb//QLFzLPp1mf6P7/2eSR52qafTzuUICI/Hdevv/l5/bnnHTdfPt35OFif5tYyf6m13Py97O8PTGLmMosCAAA=', 'base64'))));
