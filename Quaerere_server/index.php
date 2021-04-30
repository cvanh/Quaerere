<?php
require './database.php';
OpenCon();
$id = $_GET['id'];

$sql = "SELECT * FROM `skrot` WHERE id='". $id  ;
$result = $conn->query($sql);
// print_r($sql);

if ($result->num_rows > 0){
    while($row = $result->fetch_assoc()){
        /* yes this could be done in one line but i thought it would be essiest,
        to make it in seprate values.*/
        $id = $row['id'];
        $name = $row['name'];
        $link1 = $row['link1'];
        $link2 = $row['link2'];
        $link3 = $row['link3'];
        
        $json = array(
            "id"=> $id,
            "name"=>$name,
            "link1"=>$link1,
            "link2"=>$link2,
            "link3"=>$link3
        );
        echo json_encode($json, JSON_PRETTY_PRINT);
	}
}else{
    echo "did you chose the right user?";
}

closecon($conn);
?>
