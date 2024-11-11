module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))