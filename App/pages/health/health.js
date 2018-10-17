// pages/health/health.js
import tabbarData from '../../componentsData/tabbar.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
		healthRecord:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    const o = Object.assign(this.data, tabbarData)
    this.setData(o)
    this.setData({
      isIpx: app.isIpx
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: async function () {
    wx.showNavigationBarLoading()
		var record=await wx.cloud.callFunction({
			name:'getResult'
		})
		this.setData({
			healthRecord:record
		},wx.hideNavigationBarLoading())
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})