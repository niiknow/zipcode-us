<?php

$zipcode = preg_replace('/[^0-9]/i', '', $_SERVER['REQUEST_URI']);
if (!isset($zipcode) || strlen($zipcode) != 5) {
    return;
}
$zip2 = substr($zipcode, 0, 2);
$rst = file_get_contents('./db/' . $zip2 . '/' . $zipcode . '.json');
$callback = $_GET['callback'];

header("access-control-allow-origin: *");

if (isset($callback)) {
    header('Content-type: application/javascript; charset=utf-8');
    echo $callback . '(' . $rst . ');';
    return;
}

header('Content-type: application/json; charset=utf-8'); 
echo $rst;
