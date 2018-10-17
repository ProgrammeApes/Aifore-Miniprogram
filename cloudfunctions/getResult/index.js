// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

const increment=10
const db=wx.cloud.database({
	env:'test-env'
})

// 云函数入口函数
exports.main = async (event, context) => {
	var {userInfo:{openId},quantity}=event
	var record=await db.collection('HealthResult')
	.where({
		_openid:openId
	})
	.orderBy('_data')
	.limit(quantity+increment)
	.get()

	return record
}