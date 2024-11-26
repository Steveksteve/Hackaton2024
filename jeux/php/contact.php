<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
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
    echo json_encode(["message" => "No data received", "success" => false]);
    exit;
}

$name = isset($data->name) ? $data->name : null;
$email = isset($data->email) ? $data->email : null;
$subject = isset($data->subject) ? $data->subject : null;
$message = isset($data->message) ? $data->message : null;

if (!$name || !$email || !$subject || !$message) {
    echo json_encode(["message" => "All fields are required", "success" => false]);
    exit;
}


$sql = "INSERT INTO contact (name, email, subject, message) VALUES ('$name', '$email', '$subject', '$message')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "Message sent successfully", "success" => true]);
} else {
    echo json_encode(["message" => "Error: " . $sql . "<br>" . $conn->error, "success" => false]);
}

$conn->close();
?>
