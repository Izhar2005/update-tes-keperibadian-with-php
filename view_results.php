<?php
require 'koneksi.php';
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Data Hasil Tes Kepribadian</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background: #f2f2f2; }
        a { color: #007bff; }
    </style>
</head>
<body>
    <h2>Data Hasil Tes Kepribadian</h2>
    <table>
        <tr>
            <th>Nama</th>
            <th>Usia</th>
            <th>Jenis Kelamin</th>
            <th>Tipe Kepribadian</th>
            <th>Persentase Introvert</th>
            <th>Persentase Ekstrovert</th>
            <th>Persentase Ambivert</th>
            <th>Jawaban</th>
        </tr>
        <?php
        try {
            $sql = "SELECT u.nama, u.usia, u.jenis_kelamin, r.personality_type, 
                           r.introvert_percentage, r.extrovert_percentage, r.ambivert_percentage,
                           GROUP_CONCAT(a.answer_text SEPARATOR '; ') as answers
                    FROM users u
                    LEFT JOIN results r ON u.id = r.user_id
                    LEFT JOIN answers a ON u.id = a.user_id
                    GROUP BY u.id";
            $stmt = $conn->query($sql);
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                echo "<tr>";
                echo "<td>" . htmlspecialchars($row['nama']) . "</td>";
                echo "<td>" . htmlspecialchars($row['usia']) . "</td>";
                echo "<td>" . htmlspecialchars($row['jenis_kelamin']) . "</td>";
                echo "<td>" . htmlspecialchars($row['personality_type'] ?? '-') . "</td>";
                echo "<td>" . htmlspecialchars($row['introvert_percentage'] ?? '-') . "%</td>";
                echo "<td>" . htmlspecialchars($row['extrovert_percentage'] ?? '-') . "%</td>";
                echo "<td>" . htmlspecialchars($row['ambivert_percentage'] ?? '-') . "%</td>";
                echo "<td>" . htmlspecialchars($row['answers'] ?? '-') . "</td>";
                echo "</tr>";
            }
        } catch(PDOException $e) {
            echo "<tr><td colspan='8'>Gagal ambil data: " . $e->getMessage() . "</td></tr>";
        }
        ?>
    </table>
    <br>
    <a href="index.html">Kembali ke Tes</a>
</body>
</html>