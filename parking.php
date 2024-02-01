<?php
// add_vehicle.php

// Connect to MySQL
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "parking_system";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare SQL statement
$vehicle_number = $_POST["vehicle_number"];
$sql = "INSERT INTO parked_vehicles (vehicle_number) VALUES ('$vehicle_number')";

// Execute SQL statement
if ($conn->query($sql) === TRUE) {
    echo "Vehicle added successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
