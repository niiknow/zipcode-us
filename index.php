<?php
 
// get the HTTP method, path and body of the request
$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
 
 
// retrieve the table and key from the path
$zipcode = preg_replace('/[0-9]{5}/i','',array_shift($request));
$zip2 = substr($zipcode, 2);
$rst = file_get_contents('./db/' . $zip2 . '/' . $zipcode . '.json');
$callback = $_GET['callback'];

header("content-type: application/json");  
header("access-control-allow-origin: *");  
if (isset($callback))
{
  echo $callback . '(' . $rst . ');';
  return;
}

echo $rst;
?>