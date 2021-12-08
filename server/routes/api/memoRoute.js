const express = require('express');
const router = express.Router();

//Import model
const Memo = require('../../model/memoModel');

//get memos
router.get('/', async (req,res)=>{
  try{
    const memos = await Memo.find();
    console.log(memos)
    res.send(memos)
  }catch(err){
    console.log(err)
    res.status(500).send();
  }
});

router.post('/',async (req,res)=>{
  try{
    const data = {
      text:req.body.text,
      reminder:false
    }
    const newMemo = await Memo.create(data)
    console.log(newMemo)
    res.status(200).send(newMemo)
  }catch(err){
    console.log(err)
  }
})

module.exports = router;