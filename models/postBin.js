const mongoose = require('mongoose');

const postbinSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('postBin',postbinSchema);