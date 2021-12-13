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
      remainder:false
    }
    const newMemo = await Memo.create(data)
    console.log(newMemo)
    res.status(200).send(newMemo)
  }catch(err){
    console.log(err)
  }
})

router.put('/',async (req,res)=>{
  try{
    const result = await Memo.findByIdAndUpdate(
      //id
      req.body.id,
      //update
      {remainder:req.body.remainder}
    )
    if(!result){
      return res.status(404).send();
    }
    res.send(result);
  }catch(err){
    console.log(err)
  }
})

router.delete('/',async (req,res)=>{
  try{
    const id = req.body.id;
    console.log(id)
    const remain = await Memo.findByIdAndDelete(id)
    console.log(remain)
    res.status(200).send(remain)
  }catch(err){
    console.log(err)
  }
})

module.exports = router;