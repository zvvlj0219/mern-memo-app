const mongoose = require('mongoose');

const memoSchema = new mongoose.Schema(
  {
    text:{
      type:String,
      required:true,
    },
    reminder:{
      type:Boolean,
      required:true,
    },
  },
  {
    collection:'memos'
  }
);

module.exports = mongoose.model('Memo',memoSchema)