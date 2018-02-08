<?php
// retrieve the table and key from the path
$zipcode = preg_replace('/[^0-9]/i','',$_SERVER['REQUEST_URI']);
$zip2 = substr($zipcode, 0, 2);
$rst = file_get_contents('./db/' . $zip2 . '/' . $zipcode . '.json');
$callback = $_GET['callback'];

header('Content-type: application/json; charset=utf-8'); 
header("access-control-allow-origin: *");  
if (isset($callback))
{
  echo $callback . '(' . $rst . ');';
  return;
}

echo $rst;
?>