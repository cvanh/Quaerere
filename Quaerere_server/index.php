<?php
require './database.php';
OpenCon();
$guid = $_GET['guid'];

$sql = "SELECT * FROM `skrot` WHERE id='". $guid ."'" ;
$result = $conn->query($sql);
// print_r($sql);

if ($result->num_rows > 0){
    while($row = $result->fetch_assoc()){
        /* yes this could be done in one line but i thought it would be essiest,
        to make it in seprate values.*/
        $id = $row['id'];
        $name = $row['name'];
        $instagram = $row['instagram'];
        $snapchat = $row['snapchat'];
        $whatsapp = $row['whatsapp'];
        
        $json = array(
            "id"=> $id,
            "name"=>$name,
            "instagram"=>$instagram,
            "snapchat"=>$snapchat,
            "whatsapp"=>$whatsapp
        );
        echo json_encode($json, JSON_PRETTY_PRINT);
    }
}else{
    echo "did you chose the right user?";
}

closecon($conn);
?>