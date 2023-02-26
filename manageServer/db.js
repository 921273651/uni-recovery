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
  return new Promise(function (resolve, reject) {
    pool.getConnection(function (err, connection) {
      if (err) {
        return reject(err);
      }
      connection.query(sql, params, function (error, res) {
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
const login = function (reqBody) {
  const {
    cellphone,
    password,
  } = reqBody;
  const sql = `
        select
            *
        from
            tb_user
        where
        tb_user.phoneNum='${cellphone}' and tb_user.password='${password}'
        `;
  return sql;
}

//注册用户
const register = function (reqBody) {
  const {
    cellphone,
    password,
  } = reqBody;
  const sql =
    `INSERT into tb_user (phoneNum,password) values('${cellphone}','${password}');`
  return sql;
}
//商家登录
const manage = function (reqBody) {
  const {
    cellphone,
    password,
  } = reqBody;
  const sql = `
        select
            *
        from
            tb_business
        where
        tb_business.cellphone='${cellphone}' and tb_business.password='${password}'
        `;
  return sql;
}

//获取用户列表
const getTest = function (userId) {
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
const getCatesList = function (reqBody) {
  let sql = '';
  const { cateType, goodId } = reqBody;
  sql = `
          select
              *
          from
              tb_${cateType}
          ${goodId ? "where id=" + goodId : ""}
          `;

  return sql;
}

//获取订单列表
const getOrderList = function (reqBody, userId) {
  const {isAdmin} = reqBody;
  let sql = '';
  if(isAdmin) {
    sql = `
    SELECT * FROM tb_order
    left JOIN tb_address ON tb_order.address_id = tb_address.address_id 
    inner JOIN tb_goods ON tb_order.good_id = tb_goods.id
   left JOIN tb_user ON tb_order.user_id = tb_user.userId
   where isDelete='0' and tb_order.order_status !='0';
    `;
  }else{ sql = `
      SELECT * FROM tb_order 
      left JOIN tb_address ON tb_order.address_id = tb_address.address_id 
      inner JOIN tb_goods ON tb_order.good_id = tb_goods.id
      where tb_order.user_id = ${userId} and isDelete='0';
      
    `;
    }
  return sql;
}

//生成订单
const createOrder = function (reqBody, userId) {
  const { goodId } = reqBody;
  const sql = `INSERT into tb_order (user_id,good_id) values('${userId}','${goodId}');`
  return sql;
}

//检查是否已有待确认订单&生成回收订单
const createRecycleOrder = function (reqBody, userId) {
  const sql1 = `Select * from tb_recycle_order where user_id=${userId} and order_status=0;`
  const sql2 = `INSERT into tb_recycle_order (user_id) values('${userId}');`
  return {sql1,sql2};
}

//商家发货订单
const fahuo =function(reqBody){
  const { orderId } = reqBody;
  const sql = `UPDATE tb_order SET order_status='2' where order_id = '${orderId}'`
  return sql;
}
//选择地址
const selectAdress = function (reqBody) {
  const { orderId, addressId } = reqBody;
  const sql = `UPDATE tb_order SET address_id='${addressId}' where order_id = '${orderId}'`
  return sql;
}

//选择回收地址
const selectRecycleAddress = function (reqBody) {
  const { orderId, addressId } = reqBody;
  const sql = `UPDATE tb_recycle_order SET address_id='${addressId}' where order_id = '${orderId}'`
  return sql;
}

//提交订单
const submitOrder = function (reqBody) {
  const { orderId } = reqBody;
  const sql = `UPDATE tb_order SET order_status='1' where order_id = '${orderId}'`
  return sql;
}

//提交回收订单
const submitRecycleOrder = function (reqBody) {
  const { order_id, estimated_weight, call_date, call_time, remark, orderType } = reqBody;
  const sql = 
  `UPDATE 
    tb_recycle_order 
   SET 
    order_status='1',
    estimated_weight='${estimated_weight}',
    call_date='${call_date}',
    call_time='${call_time}',
    remark='${remark}',
    order_type='${orderType}'
    where order_id = '${order_id}'`
  return sql;
}

// 获取回收订单列表
const getRecycleOrderList = function (reqBody, userId) {
  const { orderId, isAdmin, pageCurrent, pageSize, searchData } = reqBody;
  console.log('searchData', searchData);
  let sql = '';
  if(isAdmin) {
    sql = `
    (select
        *
    from
        tb_recycle_order
    left JOIN tb_address ON tb_recycle_order.address_id = tb_address.address_id 
    left JOIN tb_user ON tb_recycle_order.user_id = tb_user.userId
    ${searchData.username ? 'where username='+searchData.username : ''}
    limit ${(pageCurrent-1)*pageSize},${pageSize})
    `;
  }else {
    sql = `
        select
            *
        from
            tb_recycle_order
        left JOIN tb_address ON tb_recycle_order.address_id = tb_address.address_id 
        where tb_recycle_order.user_id=${userId} ${orderId ? 'and tb_recycle_order.order_id =' + orderId : ''}
        `;
  }
  return sql;
}

const getorderTotal = function () {
  return 'select count(*) as total from tb_recycle_order'
}

//确认收货
const checkOrder = function (reqBody) {
  const { orderId } = reqBody;
  const sql = `UPDATE tb_order SET order_status='3' where order_id = '${orderId}'`
  return sql;
}

// 确认回收
const checkRecycle = function (reqBody) {
  const { orderId } = reqBody;
  const sql = `UPDATE tb_recycle_order SET order_status='3' where order_id = '${orderId}'`
  return sql;
}

// 接受回收订单
const againOrder = function (reqBody) {
  const { order_id } = reqBody;
  const sql = `UPDATE tb_recycle_order SET order_status='2' where order_id = '${order_id}'`
  return sql;
}

//删除商品购买订单
const deleteOrder= function (reqBody) {
  const { orderId } = reqBody;
  const sql = `UPDATE tb_order SET isDelete='1' where order_id = '${orderId}'`
  return sql;
}
//获取地址表数据
const getAddress = function (reqBody, userId) {
  const { addressId } = reqBody;
  let sql = `
        select
            *
        from
            tb_address
        where user_id=${userId} ${addressId ? 'and address_id =' + addressId : ''}
        `;
  return sql;
}

//插入地址数据
const getInsertAddress = function (reqBody, userId) {
  const {
    address_username,
    address_phoneNumber,
    address_city,
    address_information,
    address_default
  } = reqBody;
  const sql = `
        INSERT into 
        tb_address (user_id,address_username,address_phoneNumber,address_city,address_information,address_default) 
        values('${userId}','${address_username}','${address_phoneNumber}','${address_city}','${address_information}','${address_default}');
        `;
  return sql;
}
//获取分类列表
const getItemList = function () {
  let sql = `
        select
            *
        from
            tb_item
        `;
  return sql;
}
//获取分类列表下详细信息
const getInformation = function (reqBody) {
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
  manage,
  getTest,
  getCatesList,
  getAddress,
  getInsertAddress,
  getItemList,
  getInformation,
  createOrder,
  selectAdress,
  submitOrder,
  getOrderList,
  fahuo,
  checkOrder,
  createRecycleOrder,
  selectRecycleAddress,
  getRecycleOrderList,
  submitRecycleOrder,
  checkRecycle,
  getorderTotal,
  againOrder,
  deleteOrder
}
