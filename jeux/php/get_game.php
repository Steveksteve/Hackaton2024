<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_management";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$id = isset($_GET['id']) ? intval($_GET['id']) : null;

if (!$id) {
    echo json_encode(["message" => "Invalid game ID"]);
    exit;
}

$sql = "SELECT * FROM games WHERE GameId = $id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $game = $result->fetch_assoc();
    echo json_encode($game);
} else {
    echo json_encode(["message" => "Game not found"]);
}

$conn->close();
?>
