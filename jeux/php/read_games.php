<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_management";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM games";
$result = $conn->query($sql);

$games = array();
while($row = $result->fetch_assoc()) {
    $games[] = $row;
}

echo json_encode($games);

$conn->close();
?>
