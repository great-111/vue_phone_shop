/*
 * @Description: 资源模块控制器
 * @Author: hahahah
 * @Date: 2020-02-07 16:51:56
 * @LastEditors: hahahah
 * @LastEditTime: 2020-02-27 14:33:10
 */
const resourcesDao = require('../models/dao/resourcesDao');
module.exports = {
  /**
   * 获取轮播图数据
   * @param {Object} ctx
   */
  Carousel: async ctx => {
    let carousel = await resourcesDao.Carousel();
    ctx.body = {
      code: '001',
      carousel
    }
  }
}