<?php
require 'koneksi.php';

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST['userName'] ?? '';
    $usia = $_POST['userAge'] ?? '';
    $jenis_kelamin = $_POST['userGender'] ?? '';

    if (empty($nama) || empty($usia) || empty($jenis_kelamin)) {
        echo json_encode(['success' => false, 'message' => 'Isi semua kolom!']);
        exit;
    }

    if (!is_numeric($usia) || $usia < 1 || $usia > 120) {
        echo json_encode(['success' => false, 'message' => 'Usia harus antara 1-120!']);
        exit;
    }

    try {
        $sql = "INSERT INTO users (nama, usia, jenis_kelamin) VALUES (:nama, :usia, :jenis_kelamin)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':nama', $nama);
        $stmt->bindParam(':usia', $usia, PDO::PARAM_INT);
        $stmt->bindParam(':jenis_kelamin', $jenis_kelamin);
        $stmt->execute();

        $user_id = $conn->lastInsertId();
        echo json_encode(['success' => true, 'user_id' => $user_id]);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Gagal simpan: ' . $e->getMessage()]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Metode salah!']);
}
?>