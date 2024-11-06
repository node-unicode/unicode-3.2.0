module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))