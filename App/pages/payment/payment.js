// pages/payment/payment.js
Page({
  data: {

    aCount:0,
    aCost:0,
    count:0,
    cost:0,
  },
  onLoad: function (options) {
    var data = wx.getStorageSync('array');
    var aCount = 0;
    var aCost = 0;
    wx.removeStorageSync('array');
    if(data){
        for(var i = 0; i < data.length; i++){
            var a = data[i].prod;
            for(var j = 0; j < a.length; j++){
                aCount = aCount+data[i].sNum[j]+data[i].bNum[j];
                aCost = aCost + data[i].sNum[j] * data[i].s$[j] +  data[i].bNum[j] * data[i].b$[j]
            }
        }
    }

    var data_1 = wx.getStorageSync('card');
    var count = 0;
    var cost = 0;
    wx.removeStorageSync('card');
    if(data_1){
        for(var k = 0; k < data_1.prod.length; k++){
            count = count + data_1.sNum[k] + data_1.bNum[k];
            cost = cost + data_1.sNum[k] * data_1.s$[k] + data_1.bNum[k] * data_1.bNum[k];
        }
    }
    this.setData({
        aCount: aCount,
        aCost: aCost,
        cost:cost,
        count:count
      });


  },
  onReady: function () {


  },
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {},

})