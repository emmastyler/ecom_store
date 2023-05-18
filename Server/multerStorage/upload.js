const multer = require('multer');
const path = require('path');
const express = require('express');
const app = express();



//! Use of Multer
var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './Images')     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({
    storage: storage,
    limits: {fileSize: 1000000},
    fileFilter: (req, file, callBack) => {
        const filetypes = /jpeg|jpg|png|gif/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if(extname && mimetype) {
            return callBack(null, true);
        }
        else {
            return callBack(null, false);
        }
       
    },
}).single('image');;

module.exports = upload;