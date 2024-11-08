module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))