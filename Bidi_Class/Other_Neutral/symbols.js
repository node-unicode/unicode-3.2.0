module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,3,61,220,75,114,44,73,140,29,208,181,168,6,250,89,15,30,221,3,238,128,233,139,100,186,111,162,187,165,222,132,70,250,172,93,217,86,60,28,176,204,205,146,47,3,36,131,23,7,40,90,252,227,95,255,230,175,127,248,235,159,254,250,252,231,223,126,62,254,221,231,227,223,127,62,254,195,231,227,63,126,62,254,211,231,227,63,127,62,254,203,231,227,191,126,62,254,219,231,227,191,127,62,254,241,95,255,209,63,125,254,243,207,159,143,255,241,249,248,159,159,143,127,249,124,252,239,207,199,255,249,124,252,223,207,199,255,251,215,79,250,95,127,254,244,151,195,114,216,14,233,80,14,47,135,111,135,183,195,113,184,63,135,215,227,224,157,95,222,249,229,157,95,222,240,229,13,95,222,240,229,13,95,222,240,237,159,223,159,195,120,149,67,255,28,190,135,195,116,120,28,194,97,57,120,159,239,116,240,134,223,191,111,248,114,248,118,120,59,28,135,159,10,199,219,213,223,174,254,118,245,183,171,191,93,221,151,51,222,174,254,118,245,183,171,191,93,253,237,234,111,87,127,187,250,219,213,143,75,28,151,56,46,113,92,226,184,196,113,137,227,18,199,37,206,207,37,230,126,28,194,225,231,162,51,189,148,94,202,159,107,205,251,115,245,200,159,75,44,23,189,179,29,94,14,223,14,127,95,244,107,213,203,225,239,151,190,242,207,31,135,47,135,225,48,29,30,135,112,88,14,219,33,29,202,225,239,122,190,238,207,93,247,57,220,159,195,247,31,135,47,7,159,243,243,115,255,28,124,242,219,75,111,47,189,189,116,188,116,188,116,188,116,189,116,255,126,105,252,249,250,227,240,229,48,28,166,195,227,16,14,203,97,59,164,67,57,180,195,203,225,219,225,237,240,91,198,253,57,12,245,12,245,12,245,12,245,12,245,12,245,12,245,12,245,76,47,77,47,205,223,151,148,58,149,58,149,58,149,58,149,58,149,58,149,58,149,250,40,245,81,234,163,212,71,169,143,82,31,245,60,234,121,212,243,168,231,81,207,163,158,71,61,143,122,30,245,60,234,121,212,19,234,9,245,132,122,194,181,182,247,217,222,103,123,159,244,82,122,41,127,94,250,250,249,117,248,28,190,28,166,195,227,16,14,203,33,29,126,190,174,47,55,210,151,251,231,203,253,243,229,254,249,114,75,124,185,37,190,220,18,95,110,137,47,183,196,151,91,226,203,157,240,229,6,248,26,46,58,125,178,159,242,151,31,220,151,31,220,151,31,220,151,31,220,151,31,220,215,243,251,175,126,126,22,95,225,115,194,231,132,171,135,175,203,55,252,43,124,93,161,158,240,134,241,251,134,223,14,111,7,223,132,240,77,40,53,151,154,75,205,165,158,82,79,169,167,212,83,234,41,245,148,122,74,61,165,158,82,79,169,167,212,83,234,105,245,180,122,90,61,173,158,86,79,171,167,213,211,234,105,245,180,122,90,61,173,158,86,79,171,167,213,211,234,121,169,231,165,158,151,122,94,234,121,169,231,165,158,151,122,94,234,121,169,231,165,158,151,122,94,234,121,169,231,165,158,151,122,94,234,249,86,207,183,122,190,213,243,173,158,111,245,124,171,231,91,61,223,234,249,86,207,183,122,190,213,243,173,158,111,245,124,171,231,91,61,223,234,121,171,231,173,158,183,122,222,234,121,171,231,173,158,183,122,222,234,121,171,231,173,158,183,122,222,234,121,171,231,173,158,183,122,222,234,57,234,57,234,57,234,57,234,57,234,57,234,57,234,57,234,57,234,57,234,57,234,57,234,57,234,57,234,57,234,57,234,185,234,185,234,185,234,185,234,185,234,185,234,185,234,185,234,185,234,185,234,185,234,185,234,185,234,185,234,209,142,63,141,249,239,195,16,185,67,228,142,31,129,124,14,211,225,113,8,135,229,176,29,210,161,28,218,225,229,240,237,240,118,56,14,234,225,132,193,9,67,152,15,42,24,82,125,72,245,33,213,7,21,12,42,24,84,48,168,96,80,193,208,2,134,22,48,180,128,161,5,12,45,96,104,1,131,10,134,94,48,168,96,104,10,99,168,71,119,24,67,61,67,61,67,61,67,61,67,61,67,61,83,61,83,61,186,204,152,234,153,234,65,145,129,34,3,69,6,138,12,20,25,154,212,64,145,129,34,3,69,6,138,12,20,25,58,218,208,209,134,142,54,116,180,161,163,13,20,25,40,50,80,100,160,200,64,145,161,253,13,237,111,160,200,64,145,129,34,3,69,6,138,12,20,25,40,50,116,207,161,123,14,221,115,232,158,67,247,28,186,231,208,61,135,238,57,116,207,161,123,14,221,115,232,158,67,247,28,75,61,75,61,75,61,75,61,75,61,75,61,75,61,75,61,75,61,75,61,75,61,75,61,75,61,75,61,75,61,75,61,91,61,91,61,91,61,91,61,91,61,91,61,91,61,91,61,91,61,91,61,91,61,91,61,200,55,144,111,32,223,216,234,73,245,164,122,82,61,169,158,84,79,170,39,213,147,234,73,245,164,122,82,61,169,30,206,28,156,57,56,115,164,122,104,103,208,206,160,157,65,59,131,118,6,237,12,218,25,180,51,104,103,208,206,160,157,65,59,131,118,6,237,12,218,25,180,51,104,103,208,206,160,157,65,59,131,118,6,237,12,218,25,180,51,104,103,208,206,160,157,65,59,131,118,6,237,12,218,25,180,51,104,103,208,206,160,157,65,59,131,118,6,237,12,218,25,180,51,104,199,90,99,88,107,124,14,234,161,157,65,59,131,118,6,237,12,218,25,180,99,43,50,108,69,134,173,200,176,21,25,182,34,195,86,100,216,138,12,91,145,97,43,50,108,69,134,173,200,176,21,25,182,34,195,86,228,147,220,234,161,29,123,146,97,79,50,236,73,134,61,201,176,39,25,246,36,195,158,100,216,147,12,123,146,97,79,50,236,73,134,61,201,176,39,25,246,36,159,6,162,30,218,25,180,51,104,103,208,142,165,202,176,84,25,150,42,195,82,101,88,170,12,75,149,97,169,50,44,85,134,165,202,231,160,30,218,25,180,51,104,103,208,206,160,157,65,59,131,118,6,237,12,218,25,180,51,104,103,208,206,160,157,65,59,131,118,6,237,12,218,153,180,51,105,103,210,206,164,157,73,59,147,118,38,237,76,218,153,180,51,105,103,210,206,164,157,73,59,147,118,38,237,76,218,153,180,51,105,103,218,138,76,91,145,201,63,147,127,38,255,76,254,153,252,51,249,103,242,207,228,159,201,63,147,127,38,255,76,254,153,252,51,249,103,242,207,228,159,201,63,147,127,38,255,76,254,153,252,51,249,103,242,207,228,159,201,63,147,127,38,255,76,254,153,252,51,249,103,242,207,228,159,201,63,147,127,166,150,52,181,164,169,37,217,242,125,14,46,161,37,77,45,105,106,73,83,75,178,18,28,86,130,159,131,47,89,75,154,90,210,212,146,166,150,52,181,164,169,37,77,45,105,106,73,83,75,154,90,210,212,146,166,150,52,181,164,169,37,77,157,104,234,68,83,39,154,58,209,212,137,166,78,52,117,162,169,19,77,157,104,234,68,83,39,154,58,209,212,137,166,78,52,117,162,169,19,77,157,104,234,68,83,39,154,58,209,212,137,166,78,52,117,162,169,19,77,157,104,234,68,83,39,154,58,209,212,137,166,78,52,117,162,169,19,77,157,104,234,68,83,39,154,58,209,212,137,166,78,52,117,162,169,19,77,157,104,234,68,83,39,154,58,209,212,137,166,78,52,117,162,169,19,77,157,104,234,68,83,39,154,58,209,212,137,166,78,52,117,162,169,19,77,157,232,17,104,143,64,123,4,218,35,208,30,129,246,8,180,71,160,61,2,237,17,104,143,64,123,4,218,35,208,30,129,246,8,180,231,207,111,25,63,223,150,71,160,61,2,237,17,104,143,64,123,4,218,35,208,30,129,246,8,180,71,160,61,2,237,17,104,143,64,123,4,218,35,208,30,129,246,8,180,71,160,61,2,237,17,104,143,64,123,4,218,35,208,30,129,246,152,119,30,243,206,99,222,121,204,59,143,121,231,49,239,60,207,239,63,247,229,152,119,30,243,206,99,222,121,244,211,71,63,125,244,211,71,63,125,244,211,71,63,125,244,211,71,63,125,244,211,71,63,125,244,211,71,63,125,244,211,71,63,125,244,211,71,63,125,244,211,71,63,125,244,211,71,63,13,119,93,184,235,194,93,23,238,186,112,215,133,187,46,220,117,225,174,11,119,93,184,235,194,93,23,238,186,112,215,133,187,46,254,252,150,241,243,109,9,119,93,184,235,194,93,23,238,186,112,215,133,187,46,220,117,225,174,11,119,93,184,235,194,93,23,238,186,112,215,133,187,46,220,117,225,174,11,119,93,184,235,194,93,23,238,186,112,215,133,187,46,220,117,161,141,134,54,26,218,104,104,163,161,141,134,54,26,218,104,104,163,161,141,134,54,26,218,104,104,163,161,141,134,54,26,218,104,88,35,132,53,66,88,35,132,53,66,88,35,132,53,66,88,35,132,53,66,88,35,132,53,66,248,181,10,191,86,225,215,42,252,90,133,95,171,240,107,21,126,173,194,175,85,248,181,10,191,86,225,215,42,172,17,194,26,33,172,17,194,26,33,172,17,194,26,33,172,17,194,26,33,172,17,194,26,33,172,17,194,26,33,172,17,194,26,33,172,17,194,26,33,172,17,194,26,33,172,17,194,26,33,172,17,194,26,33,172,17,194,26,33,172,17,194,26,33,172,17,194,26,33,172,17,194,26,33,172,17,194,26,33,172,17,194,26,33,172,17,194,26,33,172,17,194,26,33,172,17,194,26,33,172,17,194,26,33,172,17,194,26,33,172,17,194,26,33,172,17,194,26,33,152,45,152,45,152,45,152,45,152,45,152,45,152,45,152,45,152,45,152,45,152,45,152,45,152,45,152,45,152,205,255,216,253,28,212,195,108,193,108,193,108,193,108,193,108,193,108,193,108,193,108,193,108,97,141,16,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,240,22,214,8,97,141,16,214,8,97,141,16,214,8,97,141,16,214,8,97,141,16,214,8,97,141,16,214,8,97,141,16,214,8,97,141,16,214,8,97,141,16,214,8,97,141,16,214,8,97,141,16,214,8,97,141,16,214,8,97,141,16,214,8,97,141,16,214,8,97,141,16,216,19,216,19,216,19,216,19,216,19,216,19,216,19,216,19,216,19,216,19,216,19,216,19,216,19,216,19,216,19,216,19,216,19,216,19,216,19,191,236,177,70,88,252,179,248,103,241,207,226,159,197,63,139,127,22,255,44,254,89,252,179,248,103,241,207,226,159,197,63,139,127,22,255,44,254,89,252,179,248,103,241,207,226,159,69,59,139,118,22,228,44,200,89,144,179,32,103,65,206,130,156,5,57,11,114,22,228,44,200,89,144,179,32,103,65,206,130,156,5,57,11,114,22,228,44,200,89,144,179,32,103,65,206,130,156,5,57,11,114,22,228,44,200,89,144,179,32,103,65,206,130,156,5,57,11,114,22,228,44,200,89,144,179,32,103,65,206,130,156,5,57,11,114,22,228,44,200,89,144,179,32,103,65,206,130,156,5,57,11,114,22,228,44,200,89,144,179,32,103,65,206,130,156,5,57,11,114,22,228,44,200,89,144,179,32,103,65,206,130,156,5,57,11,114,22,228,44,200,89,144,179,32,103,65,206,130,156,5,57,11,114,22,228,44,200,89,144,179,32,103,65,206,130,156,5,57,11,114,22,228,44,200,89,144,179,32,103,65,206,130,156,5,57,11,114,22,228,44,200,89,144,179,32,103,65,206,130,156,5,57,11,114,22,228,44,200,89,144,179,32,103,65,206,66,154,133,52,11,105,22,210,44,164,89,72,179,144,102,33,205,66,154,133,52,91,70,109,25,181,101,212,150,81,91,52,109,209,180,69,211,254,243,251,62,223,14,111,135,227,240,243,61,220,130,104,11,162,45,136,182,32,218,6,177,109,16,219,162,105,139,166,109,16,219,50,106,203,168,45,163,182,140,218,50,106,203,168,45,163,182,140,218,50,106,203,168,45,163,182,140,218,50,106,203,168,45,163,182,104,218,162,105,139,166,45,154,182,104,218,162,105,139,166,45,154,182,104,218,162,105,139,166,45,154,182,104,218,162,105,139,166,45,154,182,104,218,162,105,139,166,45,154,182,104,218,162,105,139,166,45,154,182,104,218,162,105,139,166,45,154,182,104,218,162,105,139,166,45,154,182,104,218,162,105,139,166,45,145,182,32,218,130,104,11,162,45,136,182,180,217,66,102,11,153,45,100,182,144,217,66,102,11,153,45,100,182,72,217,34,101,139,148,45,82,182,72,217,34,101,139,148,45,82,182,72,217,34,101,139,148,45,82,182,72,217,235,247,234,190,82,145,178,69,202,22,41,91,164,108,145,178,69,202,22,41,91,164,108,145,178,69,202,22,41,91,164,108,145,178,69,202,54,55,109,115,211,22,50,91,200,108,33,179,133,204,22,50,91,200,108,33,179,133,204,22,50,251,55,100,204,77,219,220,180,205,77,219,220,180,205,77,219,220,180,205,77,219,220,180,205,77,219,220,180,205,77,219,112,180,13,71,219,112,180,13,71,219,112,180,13,71,219,112,180,13,71,219,112,180,13,71,219,112,180,13,71,219,112,180,13,71,219,112,180,13,71,219,112,180,13,71,219,112,180,13,71,219,112,180,13,71,219,112,180,13,71,219,76,180,205,68,219,76,180,205,68,219,76,180,205,68,219,76,180,205,68,219,76,180,205,68,219,76,180,205,68,219,76,180,205,68,219,232,177,141,30,219,232,177,141,30,219,232,177,141,30,219,232,177,141,30,219,232,177,141,30,219,232,177,141,30,219,232,177,141,30,251,253,91,134,239,134,209,99,27,61,182,209,99,27,61,182,209,99,27,61,182,209,99,27,61,182,209,99,27,61,182,209,99,27,61,182,177,98,27,43,182,177,98,27,43,182,177,98,27,43,182,177,98,27,43,182,177,98,27,43,182,177,98,223,223,107,249,218,141,21,219,88,177,141,21,254,26,124,248,107,240,225,175,193,135,191,6,31,254,26,124,248,107,240,225,175,193,135,191,6,31,254,26,124,248,107,240,225,175,193,63,135,151,195,183,195,219,225,56,168,71,55,79,221,60,117,243,212,205,83,55,79,221,60,117,243,212,205,83,55,79,221,60,117,243,212,205,83,55,79,221,60,117,243,212,205,83,55,79,221,60,117,243,212,205,83,55,79,221,60,117,243,212,205,211,196,145,218,122,106,235,169,173,167,182,158,218,122,106,235,169,173,167,182,158,218,122,106,235,169,173,167,182,158,218,122,106,235,169,173,167,182,158,218,122,106,235,169,173,167,182,158,218,122,106,235,169,173,167,182,158,218,122,106,235,169,173,167,182,158,218,122,106,235,169,173,167,182,158,218,122,106,235,169,173,167,137,35,245,247,52,113,164,70,159,26,125,106,244,169,209,167,137,35,77,28,105,226,72,6,72,19,71,194,64,194,64,194,64,194,64,194,64,194,64,194,64,154,56,210,196,145,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,120,144,214,170,105,173,154,214,170,73,14,73,14,73,14,73,14,73,14,73,14,73,14,73,14,73,14,73,14,73,14,73,14,73,14,73,14,73,14,73,14,73,14,73,14,73,14,73,14,73,14,73,14,73,14,73,14,105,173,154,8,145,8,145,8,145,8,145,8,145,8,145,8,145,8,145,8,145,8,145,8,145,8,145,8,145,8,145,214,170,105,173,154,214,170,105,173,154,214,170,105,173,154,214,170,105,173,154,214,170,105,173,154,214,170,105,173,154,214,170,105,173,154,214,170,105,173,154,214,170,201,54,201,54,201,54,201,54,201,54,201,54,201,54,201,54,201,54,201,54,201,54,201,54,201,54,201,54,201,54,201,54,201,54,201,54,201,54,201,54,201,54,201,54,201,54,201,54,201,54,201,54,201,54,201,54,105,173,154,214,170,105,173,154,214,170,201,63,201,63,201,63,201,63,201,63,201,63,201,63,201,63,201,63,201,63,201,63,201,63,201,63,201,63,201,63,201,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,197,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,205,63,71,254,28,249,115,228,207,145,63,71,254,28,249,115,228,207,145,63,71,254,28,249,115,228,207,145,63,71,254,28,249,115,228,207,145,63,71,254,28,249,115,228,207,145,63,71,254,28,249,115,228,207,145,63,71,254,28,249,115,196,206,17,59,71,236,28,177,115,196,206,17,59,71,236,28,177,115,196,206,17,59,71,236,28,177,115,196,206,17,59,71,236,28,177,115,196,206,17,59,71,236,28,177,115,196,206,17,59,71,236,28,177,115,196,206,17,59,71,236,28,177,115,196,206,17,59,71,236,28,177,115,196,206,17,59,71,236,28,177,115,196,206,17,59,71,236,28,177,115,196,206,17,59,71,236,28,177,115,196,206,17,59,71,236,28,177,115,196,206,17,59,71,236,28,177,115,196,206,17,59,71,236,28,177,115,196,206,17,59,71,236,28,177,115,196,206,17,59,71,236,28,177,115,196,206,17,59,71,236,28,177,115,196,206,17,59,71,236,28,177,115,196,206,17,59,71,236,28,177,115,196,206,17,59,71,236,28,177,115,196,206,17,59,71,236,28,177,115,196,206,17,59,71,236,28,177,115,196,206,53,10,93,163,208,53,10,221,63,191,159,243,56,132,195,114,216,14,233,80,14,237,240,114,248,118,120,59,28,135,159,154,175,81,232,26,133,174,81,232,26,133,174,81,232,26,133,174,81,232,26,133,174,81,232,26,133,174,81,232,26,133,174,81,232,26,133,174,81,232,26,133,174,81,232,26,133,174,81,232,26,133,174,81,232,26,133,174,81,232,26,133,174,81,232,26,133,174,81,232,26,133,174,81,232,26,133,174,81,232,26,133,174,81,232,26,133,174,81,232,26,133,174,81,232,26,133,174,81,232,26,133,174,81,232,26,133,60,88,111,120,176,222,240,96,189,225,193,122,159,131,122,140,66,215,40,116,141,66,215,40,116,141,66,215,40,116,141,66,215,40,116,141,66,215,40,116,141,66,215,40,116,141,66,215,40,116,141,66,215,40,116,141,66,215,40,116,141,66,215,40,116,141,66,215,40,116,141,66,215,40,116,141,66,215,40,116,141,66,215,40,116,141,66,215,40,116,141,66,215,40,116,141,66,215,40,116,141,66,215,40,116,141,66,215,40,116,141,66,215,40,116,141,66,215,40,116,141,66,215,40,116,141,66,215,40,116,141,66,215,40,116,141,66,215,40,116,141,66,215,40,116,141,66,215,40,116,141,66,215,40,116,141,66,215,40,116,141,66,215,40,116,141,66,215,40,116,141,66,215,40,116,141,66,23,69,46,138,92,20,185,40,114,81,228,162,200,69,145,139,34,23,69,46,138,92,20,185,40,114,81,228,162,200,69,145,139,34,23,69,46,138,92,20,185,40,114,81,228,162,200,69,145,139,34,23,69,46,138,92,163,208,101,146,203,36,151,73,46,147,92,38,185,76,114,153,228,50,201,101,146,203,36,151,73,46,147,92,38,185,76,114,153,228,50,201,101,146,203,36,151,73,46,147,92,38,185,76,114,153,228,50,201,101,146,203,36,151,73,46,147,92,38,185,76,114,153,228,50,201,101,146,203,36,30,173,249,57,168,135,73,60,99,115,120,198,230,231,160,30,38,185,76,114,153,228,50,201,101,146,203,36,151,73,46,147,92,38,185,76,226,49,158,195,99,60,135,199,120,142,203,36,151,73,46,147,92,38,185,76,114,153,228,234,212,87,167,190,58,245,253,237,212,6,132,123,127,255,149,175,194,128,112,13,8,215,128,112,13,8,247,103,64,152,127,126,26,253,231,48,28,166,195,227,144,14,229,208,14,191,239,243,237,240,118,56,14,247,231,240,211,205,167,135,145,78,15,35,157,30,70,58,61,140,116,122,24,233,244,48,210,233,97,164,211,195,72,167,135,145,78,15,35,157,30,70,58,61,140,116,122,24,233,244,48,210,233,97,164,211,195,72,231,159,249,123,112,173,233,90,211,63,159,254,249,244,207,203,181,202,181,218,251,248,246,122,64,214,244,128,172,233,1,89,211,3,178,166,7,100,77,15,200,154,30,144,53,61,32,107,122,64,214,244,128,172,233,1,89,211,3,178,166,7,100,77,15,200,154,30,144,53,61,71,104,122,142,208,244,28,161,233,57,66,211,115,132,166,231,8,77,207,17,154,158,35,52,61,71,104,122,142,208,244,28,161,233,57,66,211,115,132,166,231,8,77,207,17,234,231,39,78,63,135,47,135,225,48,29,30,135,112,88,14,219,33,29,202,161,29,94,14,223,14,111,135,227,160,158,86,79,171,167,213,211,234,105,245,180,122,90,61,173,158,86,79,171,167,213,211,234,105,245,180,122,90,61,173,158,151,122,94,234,121,169,231,165,158,151,122,94,234,121,169,231,165,158,151,122,94,234,121,169,231,165,158,151,122,94,234,121,169,231,247,231,245,173,158,111,245,124,171,231,91,61,223,234,249,86,207,79,156,126,18,238,56,252,253,134,247,252,252,162,125,14,95,14,195,97,58,60,14,225,176,28,182,67,58,148,67,59,188,28,190,29,222,14,199,65,61,143,122,30,245,60,234,121,212,243,168,231,81,207,163,158,199,213,31,87,127,92,253,113,245,199,213,31,87,127,92,61,92,52,92,34,188,115,248,74,195,87,26,174,21,174,21,174,21,174,21,174,21,174,181,124,129,203,181,150,107,45,95,206,114,209,229,90,63,134,188,198,192,107,12,188,102,189,107,214,187,102,189,107,214,187,102,189,107,182,186,102,171,107,182,186,102,171,107,182,186,102,171,107,226,184,38,142,107,226,184,38,142,107,226,184,38,142,203,225,151,195,47,135,95,14,191,28,126,57,252,114,248,229,240,203,225,151,195,47,135,223,123,124,206,241,57,199,231,28,223,132,227,155,112,124,19,142,194,142,194,142,194,142,194,174,151,238,251,175,127,254,255,239,88,165,84,165,95,0,0])))