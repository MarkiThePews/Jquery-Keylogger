<?php 
if(!empty($_GET['confirm'])) {
    $logfile = fopen('logged.html', 'w');
    fwrite($logfile, '<meta charset="utf-8"/>');
    fclose($logfile);
}
?>