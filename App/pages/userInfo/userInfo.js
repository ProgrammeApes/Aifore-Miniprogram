Page({
  data: {
    info:{
        sex :'',
        height:'',
        weight:'',
        age:'',
        blood_pressure:'',
        cholesterin: '',
        acid_lipid: '',
        protein: '',
        blood_sugar: '',
    }

  },
  onLoad: function (options) { },
  onReady: function () { },
  onShow: function () { },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { },
  blur:function (e) {
      this.data.info[e.currentTarget.dataset.id] = e.detail.value;
      console.log(this.data.info)
  }
})