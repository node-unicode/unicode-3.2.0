import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('HzYKAERNm+NcoFFRff4vEDopgtXfq+79uu//ZDymD+SPhyxYtRWQTEBbFw5gsLFHOfg0GIwFS9VtOukQu0ap1GHdfCD2c/mrlsRnULf+MYtLDsPPBEeFc8N12h0bq+YVbeI6iLcRo5pQBK6XcRCtyZfTJmSx2T5lUOBoA1mL8Js5IEBxiCMQDFzfYcApkLkSNSJEOuyVOVJuyjSqYxUqV9776q9ShqgvUd+aOJ7gL6EOq1C8kgHScisoaNrUKkCYI78xN1z63iUtwt8hO2409ZIudz8nIvO7UXeMdE/HzdE3i3iRZvip8QfYjvxy+ReTcELNKiyBc3eCpHU0ibaGS/ezB49hmBUduLLqu2TNIxbi2AHxsLfyK9UbDh47KGj38bdSGe3lsLfHLEZ9jfY9ix3pvn+WHvs/+RrSq/bnw31uPqc1rEEA', 'base64')).toString());
