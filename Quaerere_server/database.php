<?php
function OpenCon()
 {
 $dbhost = "localhost";
 $dbuser = "cvanh";
 $dbpass = "XJeuLU75Vp2EZbM";
 $db = "skrot";

  global $conn;
  $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
 }


function closecon($conn){
    $conn -> close();
}
?>