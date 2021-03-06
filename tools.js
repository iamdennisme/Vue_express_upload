const multer = require('multer')
const mkdirp = require('mkdirp')
const path = require("path");
const upload = (req,res)=>{
    const storage  = multer.diskStorage({
        destination:async (req,file,cb)=>{
            await mkdirp(`./upload`)
            cb(null,`upload`)
        },
        filename:(req,file,cb)=>{
            let extname = path.extname(file.originalname);
            let fileName = uuid()
            let label = req.query["label"]
            cb(null,`${label}-${fileName}-${Date.now()}${extname}`)
        }
    })

    return multer( {storage})
}

function uuid() {
    const s = [];
    const hexDigits = "0123456789abcdef";
    for (let i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";
    return s.join("");

}

module.exports ={
    upload
}