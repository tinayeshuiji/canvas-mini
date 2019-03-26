
var httpRequest=function(url,data) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      data: data,
      method: 'POST',
      header: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      success: function (res) {
        resolve(res);
      },
      fail: function (res) {
        reject(res);
      }
    });
  });
 

 
};
// var httpRequest = function (url,data){
//    wx.showLoading({
//     title: '加载中',
//     success:function(){
//      return this.http(url, data)

//     },
//     complete:function(){
//       wx.hideLoading()
//     }
//   })
// }
module.exports.httpRequest = httpRequest

