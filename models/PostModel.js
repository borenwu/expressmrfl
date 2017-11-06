/**
 * Created by Administrator on 2017/11/6.
 */
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
    images: [{url: String}],
    date: Date,
    tag:String
});

module.exports = mongoose.model('Post', PostSchema);
