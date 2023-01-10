let mysql = require('mysql');
// 创建连接池，效率更高，不需要每次操作数据库都创建连接
let pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'zhangmyi.99',
  database: 'db_uni_recovery',
  port: 3306,
  connectionLimit: 50, //允许连接数
  multipleStatements: true, //是否允许执行多条sql语句
  timezone: "08:00"
})

let Query = (sql, ...params) => {
  return new Promise(function(resolve, reject) {
    pool.getConnection(function(err, connection) {
      if (err) {
        return reject(err);
      }
      connection.query(sql, params, function(error, res) {
        // console.log(res);
        pool.releaseConnection(connection)
        if (error) {
          return reject(error);
        }
        return resolve(res);
      });
    });
  });
};

/**
 * sql语句
 * */
//登录验证
const login = function(appid,secret) {
  const sql = `
        select
            *
        from
            tb_user
        where
            user.appid='${appid}' and user.secret='${password}'
        `;
  return sql;
}

// const login = function(username, password) {
//   const sql = `
//         select
//             *
//         from
//             user
//         where
//             user.username='${username}' and user.password='${password}'
//         `;
//   return sql;
// }

//注册用户
const register = function(reqBody) {
  const {
    nickname,
    username,
    password,
    imgSrc
  } = reqBody;
  const sql =
    `INSERT into tb_user (nickname,username,password,imgSrc) values('${nickname}','${username}','${password}','${imgSrc}');`
  return sql;
}

//获取用户列表
const getTest = function(userId) {
  const sql = `
        select
            *
        from
            tb_user
        where
            tb_user.userId='${userId}'
        `;
  return sql;
}
//获取商品列表
const getCatesList = function(cateType) {
  let sql = '';
  if (cateType === 'goods') {
    sql = `
          select
              *
          from
              tb_goods
          `;
  } else if (cateType === 'videos') {
    sql = `
          select
              *
          from
              tb_video
          `;
  }

  return sql;
}

//获取地址表数据
const getAddress = function() {
  let sql = `
        select
            *
        from
            tb_address
        `;
  return sql;
}

//插入地址数据
const getInsertAddress = function(reqBody) {
  const {
    address_name,
    address_phoneNumber,
    address_city,
    address_information,
    address_default
  } = reqBody;
  const sql = `
        INSERT into 
        tb_address (address_name,address_phoneNumber,address_city,address_information,address_default) 
        values('${address_name}','${address_phoneNumber}','${address_city}','${address_information}','${address_default}');
        `;
  return sql;
}
//获取分类列表
const getItemList = function() {
  let sql = `
        select
            *
        from
            tb_item
        `;
  return sql;
}
//获取分类列表下详细信息
const getInformation = function(reqBody) {
  console.log('reqBody11', reqBody)
  let sql = `
        select
            *
        from
            tb_recycle
            where
                tb_recycle.category_id='${reqBody.category_id}'
        `;
  return sql;
}

// 获取测试数据

// const getTest = function (userId) {
//   const sql = `
//         select
//             detail
//         from
//             plan
//         where
//             plan.userId='${userId}'
//         `;
//   return sql;
// }
//添加计划事务
// const addTaskData = function (reqBody) {
//   const { planId, userId, detail, type, plan, startTime } = reqBody
//   let sql;
//   console.log('planId', planId);
//   if (planId === 0) {
//     sql = `INSERT into plan (userId,detail,type,plan,startTime) values('${userId}','${detail}','${type}','${plan}','${startTime}');`
//   } else {
//     sql = `UPDATE plan SET detail='${detail}',plan='${plan}' where id = '${planId}'`
//   }
//   return sql;
// }



module.exports = {
  Query,
  login,
  register,
  getTest,
  getCatesList,
  getAddress,
  getInsertAddress,
  getItemList,
  getInformation,
}
