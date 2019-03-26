var host = "http://ktxx.syj.in";
var hostName = "http://ktxx.syj.in";
var hostCate = "http://ktxx.syj.in/public";


var config = {
  designPic: `${host}/api/DesignImg/insertImg`,
  showPhoneList: `${host}/api/Phoneinfo/showPhoneList`,
  addressList: `${host}/api/ShippingAddress/showlist`,
  delAddress: `${host}/api/ShippingAddress/delAddress`,
  addAddress: `${host}/api/ShippingAddress/insertAddress`,
  setDefaultAddress: `${host}/api/ShippingAddress/setDefaultAddress`,
  updateAddress: `${host}/api/ShippingAddress/updateAddress`,
  material: `${host}/api/Material/materiallist`,
  templatelist: `${host}/api/Material/templatelist`,
  stickerlist: `${host}/api/Material/stickerlist`,
  fontlist: `${host}/api/Material/fontlist`,
  homeBg: `${host}/api/HomeImg/showHomeImgList`,
  showCateList: `${host}/api/Cate/showCateList`,
  showOneCate: `${host}/api/Cate/showOneCate`,
  showOnePhone: `${host}/api/Phoneinfo/showOnePhone`,
  hostName: hostName,
  hostCate: hostCate

}
module.exports = config;
