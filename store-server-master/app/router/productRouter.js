/*
 * @Description: 商品模块路由
 * @Author: hahahah
 * @Date: 2020-02-07 16:51:56
 * @LastEditors: hahahah
 * @LastEditTime: 2020-02-25 22:36:05
 */
const Router = require('koa-router');
const productController = require('../controllers/productController')

let productRouter = new Router();

productRouter
  .post('/product/getAllProduct', productController.GetAllProduct)
  .post('/product/getPromoProduct', productController.GetPromoProduct)
  .post('/product/getHotProduct', productController.GetHotProduct)
  .post('/product/getProductByCategory', productController.GetProductByCategory)
  .post('/product/getCategory', productController.GetCategory)
  .post('/product/getProductBySearch', productController.GetProductBySearch)
  .post('/product/getDetails', productController.GetDetails)
  .post('/product/getDetailsPicture', productController.GetDetailsPicture)
  
module.exports = productRouter;