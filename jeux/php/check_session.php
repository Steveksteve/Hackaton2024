<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

session_start();

if (isset($_SESSION['user_id'])) {
    echo json_encode([
        "logged_in" => true,
        "user_id" => $_SESSION['user_id'],
        "username" => $_SESSION['username'],
        "permission" => $_SESSION['permission']
    ]);
} else {
    echo json_encode(["logged_in" => false]);
}
?>
