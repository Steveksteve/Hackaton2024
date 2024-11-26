<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_management";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

$data = json_decode(file_get_contents("php://input"));

$gameName = $data->GameName;
$gameCountry = $data->GameCountry;
$description = $data->Description;
$gameImage = $data->GameImage;
$players = $data->Players;
$age = $data->Age;

$stmt = $conn->prepare("INSERT INTO games (GameName, GameCountry, Description, GameImage, Players, Age) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssii", $gameName, $gameCountry, $description, $gameImage, $players, $age);

if ($stmt->execute()) {
    echo json_encode(["message" => "New record created successfully"]);
} else {
    echo json_encode(["error" => "Error: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
