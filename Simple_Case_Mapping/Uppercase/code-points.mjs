import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('HzYKABRKq5bOcS7QqCg+JykQ+b8Ili1nZ/8fmKPE4+wJQzzKEVS1rQhDELZ1I+hGNu2xGnkWicQhS9V1tT3rNafgERHcvCf2c/urlsZnULf+MeNLDf3PhEDS54ZrtDHXW6YUNeI6iKcRoxpUeG6WcRBdgzK0ob4qsM8MIpRRa1mCcJtbRTeQuAds3+sMOHkGV6JGhEiHvTJHyk2ZRnWsQuXKe1/9VcoQ9SXqW1PHE9zF12EVmjsxQFpuCiXGjFYJwgL5jbnhxPcuqRLuLjtuNPKSLnc/J0Lmdt3uGOmejpujbxaxNFviqXEH2I76cvmHaQSCShWWwrkHgrB1NIm2hhP3q9vPYZgQtr2y4LoMzcPvY/8BAb+3imPpnt3PHRS0+/hbUkZ7CXt7zGLU12jf89hR7vtn6bD/U68hu2p/Ptzn5nNawxoE', 'base64')).toString());
