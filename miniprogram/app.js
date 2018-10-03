//app.js
App({
  isIpx: false,
  onLaunch: function() {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    wx.getSystemInfo({
      success: res => {
        const model = res.model.substring(0, res.model.indexOf("X")) + "X";
        this.isIpx = model == 'iPhone X'
      }
    })
  },
  globalDate: {
    userInfo: null,
  }
})