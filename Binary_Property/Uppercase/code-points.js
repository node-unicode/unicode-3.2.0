module.exports=JSON.parse(require('zlib').gunzipSync(Buffer([31,139,8,0,0,0,0,0,0,3,45,88,75,150,237,40,12,219,80,6,215,127,123,45,239,244,254,183,209,18,170,65,204,173,56,82,144,0,67,234,95,215,215,253,245,124,189,95,223,55,191,111,236,27,255,38,190,201,111,234,155,254,102,190,217,111,238,219,223,183,246,173,127,27,223,230,183,245,109,127,59,223,238,183,247,221,239,179,115,92,129,43,113,21,174,198,53,184,22,215,125,254,251,225,50,92,142,43,112,37,174,194,213,184,6,215,226,194,115,134,231,12,207,25,158,51,60,103,120,206,240,140,225,25,195,51,134,103,28,207,56,158,113,60,83,200,21,238,55,238,53,254,110,60,15,93,14,85,14,77,14,69,14,61,14,53,14,45,14,37,14,29,14,21,14,13,14,5,142,254,59,250,239,232,187,163,223,142,62,7,250,27,232,107,160,159,129,62,6,250,23,232,91,160,79,97,133,107,112,221,23,232,71,56,238,57,238,57,238,5,158,9,224,2,184,0,46,128,75,220,75,220,75,220,75,220,75,220,43,220,43,220,43,220,131,134,128,134,128,134,128,134,128,134,128,134,128,134,128,134,128,134,128,134,128,134,192,144,4,6,36,48,28,129,97,8,104,8,104,8,104,136,195,61,140,65,64,71,96,12,130,58,224,125,66,75,194,251,132,239,9,61,9,61,9,207,19,154,18,62,39,52,37,52,37,124,78,120,156,240,55,225,109,66,87,66,87,58,238,65,87,6,56,2,247,160,45,3,247,3,28,1,126,232,75,104,75,232,201,194,125,104,201,198,179,141,103,49,205,18,147,44,49,197,18,19,44,49,189,18,147,43,49,22,137,177,72,140,69,98,44,18,58,18,58,18,58,18,99,145,208,144,152,63,133,190,23,198,161,208,247,66,223,11,125,47,244,187,48,22,133,190,23,230,71,161,223,133,126,23,250,93,232,119,57,238,57,238,161,223,133,126,23,198,163,208,231,194,120,20,198,163,208,223,194,120,20,250,92,24,143,194,120,20,198,163,208,255,194,120,20,198,163,160,161,48,30,133,241,184,31,175,196,85,184,26,215,126,135,247,31,230,233,193,187,67,31,14,254,29,250,113,152,23,103,204,99,89,160,63,135,249,113,232,211,193,203,67,191,14,126,30,250,118,152,43,135,254,157,227,57,248,122,232,227,193,219,67,63,15,222,30,250,122,240,247,208,223,131,199,7,191,14,227,126,240,236,224,215,193,175,131,95,7,191,14,126,29,252,58,204,221,227,122,251,193,52,4,103,72,6,172,197,159,241,79,231,159,232,2,2,239,161,19,8,68,160,27,246,11,194,208,25,4,62,140,238,32,16,17,68,4,17,65,68,16,17,68,36,17,73,68,18,145,68,36,17,73,68,18,145,68,36,17,73,68,17,81,68,20,17,69,68,17,81,68,20,17,69,68,17,81,68,52,17,77,68,19,209,68,52,17,77,68,19,209,68,52,17,77,196,16,129,201,102,134,17,64,112,134,100,104,6,60,103,148,106,84,105,20,104,212,102,148,101,84,100,20,99,212,97,148,96,236,189,177,227,198,62,91,191,192,44,95,110,124,175,241,149,54,76,12,19,195,196,48,177,76,44,19,203,196,50,177,76,176,104,190,170,249,74,230,171,151,175,88,178,82,26,203,164,177,70,26,11,164,177,58,26,75,163,177,46,26,139,162,177,42,26,203,162,177,38,26,11,34,66,48,20,3,19,28,85,167,74,167,74,167,74,167,74,167,74,167,74,167,74,167,74,167,74,167,74,167,74,231,160,176,186,26,203,171,177,190,26,11,172,177,194,26,75,172,177,198,26,11,172,177,170,26,203,170,177,174,26,11,171,177,178,26,75,171,177,182,26,139,43,12,71,135,88,34,17,140,193,25,130,129,89,78,51,22,77,132,97,88,6,34,216,221,224,52,99,25,69,32,130,29,15,78,51,150,84,4,34,40,33,56,205,88,94,17,136,160,152,224,52,99,169,69,32,130,178,130,211,140,101,23,129,8,10,12,78,51,150,96,4,34,40,53,56,205,88,142,147,110,32,12,3,171,36,96,73,95,16,140,129,21,147,37,143,14,33,176,112,62,24,203,31,189,66,32,98,136,96,41,164,117,8,68,12,17,44,139,220,167,16,136,96,133,244,33,130,117,210,151,8,86,75,95,34,88,51,125,95,113,38,98,137,96,253,244,37,130,85,212,143,8,214,82,199,166,48,13,22,4,103,72,134,102,192,238,222,199,196,49,113,76,28,19,152,137,51,152,137,8,206,144,12,60,16,252,152,48,38,140,9,99,194,152,48,38,156,9,103,194,153,112,38,156,137,96,34,152,8,38,130,137,96,34,153,72,38,146,137,100,34,153,40,38,138,137,98,162,152,40,38,154,137,102,162,153,104,38,154,9,30,97,134,39,152,225,1,102,222,249,133,199,151,161,242,161,242,161,242,161,242,161,242,161,242,161,242,161,242,161,242,161,242,165,242,165,242,165,242,165,242,165,242,165,242,165,242,165,242,165,242,165,242,165,242,165,242,165,242,165,242,165,242,165,192,165,192,165,192,165,192,165,192,165,192,165,192,165,192,165,192,165,192,165,192,165,192,165,192,165,192,165,192,165,192,165,192,165,192,165,192,165,192,165,192,165,192,165,192,165,192,165,192,165,192,165,192,165,192,165,192,165,192,163,64,238,107,195,141,109,184,171,13,183,181,225,190,134,192,4,5,114,75,27,238,103,195,205,108,184,147,13,183,177,225,30,54,220,192,224,28,255,196,66,68,224,61,44,68,132,151,192,169,242,168,242,176,16,97,46,127,245,251,69,22,172,20,4,98,155,88,138,57,158,55,239,157,56,135,88,202,186,37,130,218,110,137,160,152,187,247,139,216,35,150,178,238,136,125,218,142,231,85,136,65,224,47,40,66,48,6,103,192,9,150,91,224,114,247,91,110,124,203,61,111,185,151,45,247,178,229,94,182,220,203,150,123,217,114,47,91,238,101,203,189,108,185,167,32,24,131,51,224,57,238,31,8,204,98,82,35,128,148,123,5,2,179,24,95,4,176,112,175,64,96,118,200,50,100,25,62,199,67,181,241,88,205,29,2,1,84,9,235,150,231,41,4,32,178,249,39,252,67,72,6,38,48,55,150,71,171,229,185,10,129,137,97,98,152,24,178,144,153,167,171,229,241,106,121,190,66,32,11,156,68,32,236,152,61,62,76,235,120,180,66,48,6,220,227,41,9,161,24,154,225,221,91,6,62,204,78,86,241,97,234,45,234,229,25,10,129,136,34,162,136,40,34,138,135,157,123,39,26,252,226,185,244,120,48,69,112,134,96,72,134,98,104,134,97,88,6,34,120,234,74,30,187,120,110,61,30,92,17,136,224,241,139,231,87,4,34,120,2,75,30,193,120,150,69,32,130,167,48,30,105,187,120,136,103,204,23,235,197,126,113,94,220,23,143,17,112,70,123,209,95,124,88,127,88,127,88,127,88,127,88,127,88,127,216,120,216,120,216,120,216,120,216,120,216,120,216,120,216,120,88,76,157,110,30,58,25,237,69,127,49,94,204,23,235,197,126,113,94,20,234,24,231,97,231,97,231,97,231,97,231,97,231,97,231,97,231,97,231,97,231,97,247,97,247,97,247,97,247,97,247,97,247,97,247,97,247,97,247,97,247,97,239,97,239,97,239,97,239,97,239,97,239,97,239,97,249,73,136,99,206,111,213,220,107,236,167,198,212,184,154,80,147,106,74,141,78,73,38,22,19,139,137,197,197,226,98,113,177,184,88,92,44,46,22,23,139,139,197,197,226,98,9,177,132,88,66,44,33,150,86,174,149,107,229,250,47,167,55,180,222,208,122,67,235,13,173,55,180,222,48,98,25,177,140,88,70,44,35,150,17,203,136,101,196,50,98,25,177,172,88,86,44,43,150,21,203,138,101,31,203,201,207,147,159,39,63,207,254,114,173,102,212,172,154,247,134,147,159,39,63,79,126,158,252,60,249,121,242,243,228,231,201,207,147,159,39,63,79,126,158,252,60,249,121,242,243,66,44,33,150,16,75,136,69,126,158,140,60,25,121,178,238,100,214,201,172,155,191,156,94,43,123,78,246,156,124,57,249,114,242,229,254,124,89,81,175,224,58,147,223,222,59,129,191,179,53,154,81,163,99,185,41,231,63,53,166,198,213,132,154,84,83,106,196,226,98,113,177,184,88,66,44,33,150,16,75,136,37,196,18,98,9,177,132,88,66,44,33,150,20,75,138,165,149,107,229,70,55,71,212,35,234,17,245,136,108,4,24,1,86,100,43,220,10,183,194,173,112,171,190,172,224,43,248,159,103,39,248,9,254,206,252,63,147,89,38,179,76,46,153,92,50,185,100,114,201,100,143,201,30,147,61,38,123,76,246,152,124,49,89,96,178,192,100,129,201,130,247,229,198,70,47,74,1,100,129,201,2,155,191,155,122,251,232,237,50,196,100,136,201,16,147,33,38,67,76,134,152,12,49,25,194,45,251,53,98,145,47,38,95,76,190,152,124,49,249,98,127,190,156,88,78,44,39,150,19,203,61,22,151,75,250,154,67,211,106,254,114,171,230,189,193,101,150,203,44,125,239,161,9,53,98,209,92,210,23,32,26,177,200,72,151,145,250,38,68,35,22,25,233,50,82,95,137,104,196,146,98,73,177,164,88,82,44,242,211,229,167,203,79,151,159,250,74,252,185,252,212,231,226,207,229,167,190,27,127,46,63,245,1,249,115,249,169,47,201,159,203,79,125,82,254,92,126,234,219,242,231,242,211,229,167,203,79,151,159,254,231,167,62,174,253,30,75,232,43,59,126,143,37,228,103,200,207,144,159,33,63,67,126,134,252,12,249,25,242,51,228,103,200,207,144,159,33,63,67,126,134,252,12,249,25,242,51,228,103,200,207,144,159,33,63,67,126,134,252,124,31,178,108,196,82,98,41,177,200,207,144,159,33,63,99,255,114,122,131,252,12,249,25,242,51,228,103,200,207,144,159,33,63,67,126,134,252,12,249,25,242,51,228,103,200,207,144,159,33,63,83,126,166,252,204,191,127,95,252,66,77,170,121,44,41,63,83,126,166,252,204,248,203,181,154,81,179,106,244,6,249,153,242,51,229,103,202,207,148,159,41,63,83,126,166,252,76,249,153,242,51,229,103,202,207,148,159,41,63,179,196,82,98,41,177,148,88,228,89,202,179,148,103,41,207,82,158,165,60,75,121,150,242,44,229,89,202,179,148,103,41,207,74,158,149,60,43,121,86,242,172,228,89,201,179,210,63,129,234,55,106,86,141,88,76,44,38,22,19,139,44,40,89,80,178,160,100,65,201,130,146,5,37,11,74,22,148,44,40,89,80,178,160,100,65,149,88,74,44,45,150,22,75,139,165,197,210,98,105,177,180,88,90,44,218,164,74,155,20,79,172,104,250,239,63,93,82,219,82,219,82,219,82,219,82,219,82,219,82,219,82,219,22,106,196,98,98,209,30,222,218,195,91,123,120,107,15,111,109,75,173,109,169,181,135,183,118,167,86,221,109,213,221,86,221,109,213,221,86,157,104,169,109,169,109,169,109,169,109,169,109,169,237,254,3,232,181,127,106,181,51,183,182,165,214,182,212,218,150,90,219,82,171,140,182,202,104,171,140,182,202,104,107,217,183,150,125,107,217,183,150,125,107,217,183,150,125,107,217,143,212,142,212,142,212,142,212,142,212,142,212,142,255,1,70,205,170,121,175,29,85,197,81,85,28,173,226,209,42,30,173,226,209,42,30,173,226,209,42,30,173,226,209,42,30,173,226,209,42,30,173,226,209,42,158,204,255,254,7,100,73,72,242,151,26,0,0])))