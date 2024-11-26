<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_management";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"));

if (!$data) {
    echo json_encode(["message" => "No data received"]);
    exit;
}

$GameId = isset($data->GameId) ? $data->GameId : null;
$GameName = isset($data->GameName) ? $data->GameName : null;
$GameCountry = isset($data->GameCountry) ? $data->GameCountry : null;
$Description = isset($data->Description) ? $data->Description : null;
$GameImage = isset($data->GameImage) ? $data->GameImage : null;
$Players = isset($data->Players) ? $data->Players : null;
$Age = isset($data->Age) ? $data->Age : null;

if (!$GameId || !$GameName || !$GameCountry) {
    echo json_encode(["message" => "Missing required fields"]);
    exit;
}

$stmt = $conn->prepare("UPDATE games SET GameName=?, GameCountry=?, Description=?, GameImage=?, Players=?, Age=? WHERE GameId=?");
$stmt->bind_param("ssssiii", $GameName, $GameCountry, $Description, $GameImage, $Players, $Age, $GameId);

if ($stmt->execute()) {
    echo json_encode(["message" => "Game updated successfully"]);
} else {
    echo json_encode(["message" => "Error: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
