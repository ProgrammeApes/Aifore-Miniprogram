// 云函数入口文件
const cloud = require('wx-server-sdk')
const request = require('request')
const testUrl = 'http://www.isclab.org.cn/rsd/result_pred.php'

cloud.init()
const db = cloud.database()

function getRawResult(data) {
  var postData = {
    Name: data.username,
    Gender: data.gender,
    Age: data.age,
    Height: data.height,
    Weight: data.weight,
    Waist: data.waist,
    SBP: data.sbp,
    DBP: data.dbp,
    Glu: data.glu,
    Chol: data.chol,
    TG: data.tg,
    HDL: data.hdl,
    History: data.history,
    FamilyHistory: data.familyhistory,
  };
  return new Promise((resolve, reject) => {
    request.post({
      url: testUrl,
      form: postData
    }, (err, response, body) => {
      resolve(body);
    })
  })
}

function getResult(rawdata) {
  var result_str = rawdata.match(/data:\[.*\]/g);
  var result = {
    prediction: result_str[0].match(/\d\.\d?\d?/g),
    risk: result_str[1].match(/\d\.?\d?\d?/g)
  }
  return result
}

// 云函数入口函数
exports.main = async(event, context) => {
  var health_data = await db.collection('HealthData')
    .orderBy('date', 'desc')
    .limit(1)
    .where({
			_openid: event.userInfo.openId
    }).get().catch(err=>{
			console.error(err)
			return null
		})
	health_data=health_data.data[0]
	console.log(health_data)

  var rawResult = await getRawResult(health_data)
  var result = getResult(rawResult)

  var {
    weight,
    height,
		waist,
    age,
    gender
  } = health_data
  result.bmi = weight / ((height / 100) * (height / 100))
  if (gender == 0)
    result.fat_rate = (waist * 0.74 - weight * 0.082 + 34.89) / weight
  else if (gender == 1)
    result.fat_rate = (waist * 0.74 - weight * 0.082 + 44.74) / weight
	result._openid=event.userInfo.openId
	result.date=Date()

	console.log(result)
  db.collection('HealthResult').add(result)
	return result
}