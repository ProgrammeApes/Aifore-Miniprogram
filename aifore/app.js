//app.js
App({
  isIpx: false,
  onLaunch: function () {
    wx.getSystemInfo({
      success: res => {
        const model = res.model.substring(0, res.model.indexOf("X")) + "X";
        this.isIpx = model == 'iPhone X'
      }
    })
  },
  globalData: {
    userInfo: null,
  }

})