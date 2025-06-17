<?php
$host = "localhost";
$username = "root"; // Username MySQL, biasanya "root" di XAMPP
$password = ""; // Password MySQL, kosongkan kalau default
$dbname = "tes-kepribadian";

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Gagal konek ke database: " . $e->getMessage());
}
?>