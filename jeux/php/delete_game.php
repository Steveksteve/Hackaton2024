<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization');


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_management";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"));

if (isset($data->GameId)) {
    $gameId = $data->GameId;

    $sql = "DELETE FROM games WHERE GameId = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $gameId);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Game deleted successfully"]);
    } else {
        echo json_encode(["message" => "Failed to delete game"]);
    }

    $stmt->close();
} else {
    echo json_encode(["message" => "GameId not provided"]);
}

$conn->close();
?>
