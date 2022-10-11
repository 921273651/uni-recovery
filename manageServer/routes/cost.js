const express = require('express');
const router = express.Router();
const db = require('../db.js');

//获取账单记录
router.get('/getCostList', (req, res) => {
  let sql = db.getCostList(req.query.userId);
  console.log('sql', sql);
  db.Query(sql).then(data => {
    if (data.length) {
      res.send({ 
        "code": "2000", 
        "message": "获取成功！",
         "data": data ,
         });
    } else {
      res.send({ 
        "code": "401",
       "error": "获取失败",
       });
    }
  }, err => {
    res.send({ 
      "code": "401",
     "error": "获取失败" ,
     });
  })
})

console.log('cost接口就绪');
module.exports = router;