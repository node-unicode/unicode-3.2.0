import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('HyEKAARKkq2ywqxchuBS/fvlUJv/y+ktOjvbdrhBN8HRCYzdpgXUS2hsW2K9LIxiSCjUnxVYGI4J/+76tV0ohyebIG4+IpfOdd1bYFrza3AT4Hd9E1BD16CG3dZaP6mdlnYbNoH/UN99QTUNxT+0mw0totFfH961I6JVNp5MuwunqabpYg2Uygt6aXD2gJYYyRDW+nx+riFj+9ZV5HeuaN5NLWXP6SDvmbwDSVMU4QlAthcXvDyzX7vXk+dWigFerEvr9CjMoRk4JnAa3xFqTTMKPzXekAf4cnnXZ8IArU7d5BiChkATDWZeZHcfg1apocuZKwivpbqzapzSdbxSPFMbr6y8bjL/Gkn/KeivtP4AKx1b4+NM71OhpXS9gtJ0/aQQ0H1/fA0U0uiv578nG7nQc/PY9eQjBA==', 'base64')).toString());
