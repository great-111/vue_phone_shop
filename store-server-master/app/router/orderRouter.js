/*
 * @Description: 订单模块路由
 * @Author: hahahah
 * @Date: 2020-02-24 16:29:26
 * @LastEditors: hahahah
 * @LastEditTime: 2020-02-25 22:35:49
 */
const Router = require('koa-router');
const orderController = require('../controllers/orderController')

let orderRouter = new Router();

orderRouter
  .post('/user/order/getOrder', orderController.GetOrder)
  .post('/user/order/addOrder', orderController.AddOrder)

module.exports = orderRouter;