var express = require('express');
var router = express.Router();
const chatApi = require("../service/chatgpt");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/chatgpt', async function(req, res, next) {
  let content = req.query.text;
  if(!content){
    return res.send({code:404,msg:"参数不全"});
  }

  try {
    let data = await chatApi.sendMsg(content);
    return res.send({code:200,msg:"success",data:data});
  }catch (err){
    return res.send({code:400,msg:"网络错误"});
  }
});

module.exports = router;
