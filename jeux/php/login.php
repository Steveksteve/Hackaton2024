<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

session_start();
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

$email = isset($data->email) ? $data->email : null;
$password = isset($data->password) ? $data->password : null;

if (!$email || !$password) {
    echo json_encode(["message" => "Email or password missing"]);
    exit;
}

// Debug:
error_log("Email received: " . $email);
error_log("Password received: " . $password);

$sql = "SELECT id, username, email, password, permission FROM users WHERE email='$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    // Debug
    error_log("User found: " . json_encode($user));
    if (password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        $_SESSION['permission'] = $user['permission'];
        echo json_encode(["message" => "Connexion établie", "user" => $user]);
    } else {
        echo json_encode(["message" => "Invalid password"]);
    }
} else {
    echo json_encode(["message" => "User not found"]);
}

$conn->close();
?>
