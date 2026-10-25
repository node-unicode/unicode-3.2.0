import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('HwUKAARKGkupCOV0m2dQQMk9Quf/cnpr0NkG26BHes8PaDcnYBrY2DbBitIssNBLKNSviYVjQ7mxmyroIuClrQKpq08i4LamV679avctk1p8/WFI0nm3y3Y4ei8ri5uO9m3PWC9V2fWksR5JrcqSZmLdHuh6NFvD61YSys/NvbE+Prq5ftYSy6Iq3KVeGvx6Qh7VMSE7e7wHShbT7i1+RVy0TbMu/1IObdcstklE2YiilDcSXDwIYPvsAjP7GU3wL+3BLc9U+MGrcZDBc2pq1JtcN+iSXBcbsM1IyBrUBscAJ/vnQvlJ6uGHJrKES58u/5k2MvnrVeK/iAxHd2qCmjaaupvdeQzqJ006vDOdej619Mgs/15okw4iNSr5Rc6CK8m5qSp9FgMhX2fWrsv//iPPc+ZHPKsUe9zFbb+Oqviz+Onv4+aSQDw213WZqAs=', 'base64')).toString());
