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

$username = isset($data->username) ? $data->username : null;
$email = isset($data->email) ? $data->email : null;
$password = isset($data->password) ? $data->password : null;
$permission = isset($data->permission) ? $data->permission : null;
$date_of_birth = isset($data->date_of_birth) ? $data->date_of_birth : null;

if (!$username || !$email || !$password || !$permission || !$date_of_birth) {
    echo json_encode(["message" => "Missing required fields"]);
    exit;
}

$password = password_hash($password, PASSWORD_DEFAULT); // Hachage pour sécuriser les mot de passes /!\

$sql = "INSERT INTO users (username, email, password, permission, date_of_birth) 
        VALUES ('$username', '$email', '$password', '$permission', '$date_of_birth')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "User created successfully"]);
} else {
    echo json_encode(["message" => "Error: " . $sql . "<br>" . $conn->error]);
}

$conn->close();
?>
