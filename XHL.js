/*        
       [Easy系列通用VIP]

[rewrite_local] 
^https?:\/\/app\.yatiku\.com\/qk\/question\/portal url script-response-body https://raw.githubusercontent.com/iosDG001/_/refs/heads/main/XHL.js

[MITM]
app.yatiku.com

 */
let body=$response['\x62\x6f\x64\x79'];body=body['\x72\x65\x70\x6c\x61\x63\x65'](/("\x69\x73\x56\x69\x70"\s*:\s*)\w+/g,'\x24\x31\x31');body=body['\x72\x65\x70\x6c\x61\x63\x65'](/("\x6f\x75\x74\x54\x69\x6d\x65"\s*:\s*"\x29\x5b\x5e"]*"\x2f\x67\x2c\x27\x24\x31\x32\x30\x32\x36\x2d\x30\x32\x2d\x31\x39 \x30\x39\x3a\x30\x39\x3a\x30\x39"'\x29\x3b\x62\x6f\x64\x79\x3d\x62\x6f\x64\x79\x2e\x72\x65\x70\x6c\x61\x63\x65\x28\x2f\x28\x22\x6d\x65\x73\x73\x61\x67\x65\x22\s\x2a\x3a\s\x2a\x22\x29\x5b\x5e\x22\x5d\x2a\x22\x2f\x67\x2c'$1 SUCCESS"\x27\x29\x3b\x62\x6f\x64\x79\x3d\x62\x6f\x64\x79\x2e\x72\x65\x70\x6c\x61\x63\x65\x28\x2f\x28"data"\s\x2a\x3a\s\x2a\x29\w\x2b\x2f\x67\x2c\x27\x24\x31\x74\x72\x75\x65\x27\x29\x3b\x62\x6f\x64\x79\x3d\x62\x6f\x64\x79\x2e\x72\x65\x70\x6c\x61\x63\x65\x28\x2f\x28"code"\s\x2a\x3a\s\x2a\x29\d\x2b\x2f\x67\x2c\x27\x24\x31\x32\x30\x30\x27\x29\x3b\x24\x64\x6f\x6e\x65\x28\x7b\x62\x6f\x64\x79\x7d\x29\x3b