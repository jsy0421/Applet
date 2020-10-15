Page({
  onShow: function() {
    wx.setNavigationBarTitle({
      title: '设置'
    })
    this.setData({
    	workTime: wx.getStorageSync('workTime'),
      restTime: wx.getStorageSync('restTime'),
      red: wx.getStorageSync('red'),
      green: wx.getStorageSync('green'),
      blue: wx.getStorageSync('blue'),
      check:wx.getStorageSync('check')
    })
  },
  changeWorkTime: function(e) {
  	wx.setStorage({
  		key: 'workTime',
  		data: e.detail.value
  	})
  },
  changeRestTime: function(e) {
  	wx.setStorage({
  		key: 'restTime',
  		data: e.detail.value
  	})
  },
  changeRed: function(e) {
  	wx.setStorage({
  		key: 'red',
  		data: e.detail.value
    })
  },
  changeGreen: function(e) {
  	wx.setStorage({
  		key: 'green',
  		data: e.detail.value
    })
  },
  changeBlue: function(e) {
  	wx.setStorage({
  		key: 'blue',
  		data: e.detail.value
    })
  },
  sure: function(e){
    this.onShow();
  },
  
checkedTap: function (e) {
	wx.setStorage({
    key: 'check',
    data: e.detail.value
  })
 }
})
