// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

const increment=10
const db=wx.cloud.database({
	env:'test-env'
})

// 云函数入口函数
exports.main = async (event, context) => {
	return await db.collection('HealthResult')
	.where({
		_openid:event.userInfo.openId
	})
	.orderBy('date','desc')
	.get()
}