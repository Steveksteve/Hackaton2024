<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(204); // Si pas de réponse
    exit;
}

session_start();
session_destroy();


echo json_encode(["message" => "Logged out successfully"]);
?>