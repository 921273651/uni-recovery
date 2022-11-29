const express = require('express');
const router = express.Router();
const db = require('../db.js');

//获取
router.get('/getAddress', (req, res) => {
    let sql = db.getAddress(req.query);
    console.log('sql', sql);
    db.Query(sql).then(data => {
      if (data) {
        res.send({ "code": "2000", "message": "获取成功！", "data": data });
      } else {
        res.send({ "code": "401", "error": "获取失败" });
      }
    }, err => {
      res.send({ "code": "401", "error": "获取失败" });
    })
  })
  
  //修改
 router.post('/getInsertAddress', (req, res) => {
   let sql = db.getInsertAddress(req.body);
   console.log('sql', sql);
   db.Query(sql).then(data => {
     if (data) {
       console.log('插入新地址成功！' + data);
       res.send({ "code": "2000", "message": "插入新地址成功！", "data": data });
     } else {
       res.send({ "code": "401", "error": "插入新地址失败！" });
     }
   }, err => {
     res.send({ "code": "401", "error": "插入新地址失败！" + err });
   })
 });

  
  console.log('address接口就绪');
module.exports = router;