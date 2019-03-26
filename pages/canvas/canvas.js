Page({

  /**
   * 页面的初始数据
   */
  data: {
    sx:0,
    sy:0,
    ex:0,
    ey:0,
    angle:0,
    array:[],
    x:0,
    y:0,
    scale:1,
    width:50,
    height:50
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  // touchStart:function(e){
  //   // console.log(e)
  //   let sx = e.changedTouches[0].clientX;
  //   let sy = e.changedTouches[0].clientY;
  //   let array=[];

  //    array.push([sx,sy])
  //   console.log("sx:"+sx+"sy:"+sy);
  //   this.setData({
  //     array: array
  //   })
  // },
  // move:function(e){
  //   // console.log(e)
  //   let mx = e.changedTouches[0].clientX;
  //   let my = e.changedTouches[0].clientY;
  //   let array = this.data.array;
  //   let num=array[array.length-1]
  //   console.log(num)
  //   console.log("mx:" + mx + "my:" + my);
  //   let angle = this.getAngle(num[0], num[1], mx, my);
  //   array.push([mx, my]);
  //   console.log(angle)
  //   this.setData({
  //     angle: angle,
  //     array:array
  //   })
  // },
  // end:function(e){
  //   // console.log(e)
  //   let ex = e.changedTouches[0].clientX;
  //   let ey = e.changedTouches[0].clientY;
  //   let array = this.data.array;
  //   let num = array[array.length - 1]
  //   let angle = this.getAngle(num[0], num[1], ex, ey);
  //   array.push([ex, ey]);
  //   // console.log("ex:" + ex + "ey:" + ey)
  //   this.setData({
  //     angle: angle,
  //     array: array
  //   })
  // },
  getAngle: function (x1, y1, x2, y2) {
    // 直角的边长
    var x = Math.abs(x1 - x2);
    var y = Math.abs(y1 - y2);
    var z = Math.sqrt(x * x + y * y);
    var rotat = Math.round((Math.asin(y / z) / Math.PI * 180));
    // 第一象限
    if (x2 >= x1 && y2 <= y1) {
      rotat = rotat;
    }
    // 第二象限
    else if (x2 <= x1 && y2 <= y1) {
      rotat = 180 - rotat;
    }
    // 第三象限
    else if (x2 <= x1 && y2 >= y1) {
      rotat = 180 + rotat;
    }
    // 第四象限
    else if (x2 >= x1 && y2 >= y1) {
      rotat = 360 - rotat;
    }
    return rotat;
  },
  onChange:function(e){
    console.log(e)
    
  },
  touchStart:function(e){
    console.log(e)

  },
  move:function(e){
    console.log(e)
  },
  end:function(e){
    console.log(e)

  }
 
})