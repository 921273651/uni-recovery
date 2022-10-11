const express = require('express');
const router = express.Router();
const db = require('../db.js');

//获取记账表数据
router.get('/getTaskList', (req, res) => {
  let sql = db.getTaskList(req.query.userId);
  console.log('sql', sql);
  db.Query(sql).then(data => {
    if (data.length) {
      const arr = [{ title: '收入', event: [] }, { title: '消费', event: [] }, { title: '理财', event: [] }];
      data.map(i => {
        let obj = { planId: i.id, title: i.detail, plan: i.plan, fact: i.cost }
        if (i.type == 1) {
          arr[0].event.push(obj);
        } else if (i.type == 2) {
          arr[1].event.push(obj);
        } else if (i.type == 3) {
          arr[2].event.push(obj);
        }
      })
      res.send({ "code": "2000", "message": "获取成功！", "data": arr });
    } else {
      res.send({ "code": "401", "error": "获取失败" });
    }
  }, err => {
    res.send({ "code": "401", "error": "获取失败" });
  })
})

//添加计划事务
router.post('/addTaskData', (req, res) => {
  let sql = db.addTaskData(req.body);
  console.log('sql', sql);
  db.Query(sql).then(data => {
    if (data) {
      console.log('更新成功！' + data);
      res.send({ "code": "2000", "message": "更新成功！", "data": data });
    } else {
      res.send({ "code": "401", "error": "更新失败！" });
    }
  }, err => {
    res.send({ "code": "401", "error": "更新失败！" + err });
  })
});

//处理事务
router.post('/solveTask', (req, res) => {
  let sql = db.solveTask(req.body);
  console.log('sql', sql);
  db.Query(sql.sql1).then(data => {
    console.log('插入账单记录成功');
    db.Query(sql.sql2).then(data => {
      if (data) {
        console.log('修改账务成功！' + data);
        res.send({ "code": "2000", "message": "修改账务成功！", "data": data });
      } else {
        res.send({ "code": "401", "error": "修改账务失败！" });
      }
    }, err => {
      res.send({ "code": "401", "error": "修改账务失败！" + err });
    })
  }, err => res.send({ "code": "401", "error": "插入账单记录失败！" + err }))
});

console.log('plan接口就绪');
module.exports = router;