<?php
require 'koneksi.php';

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_id = $_POST['user_id'] ?? 0;
    $answers = json_decode($_POST['answers'] ?? '[]', true);
    $result = json_decode($_POST['result'] ?? '{}', true);

    if (!$user_id || empty($answers) || empty($result)) {
        echo json_encode(['success' => false, 'message' => 'Data tidak lengkap!']);
        exit;
    }

    try {
        // Simpan jawaban
        $sql_answer = "INSERT INTO answers (user_id, question_index, answer_text, scores_introvert, scores_extrovert, scores_ambivert) 
                       VALUES (:user_id, :question_index, :answer_text, :scores_introvert, :scores_extrovert, :scores_ambivert)";
        $stmt_answer = $conn->prepare($sql_answer);

        foreach ($answers as $index => $answer) {
            $stmt_answer->bindParam(':user_id', $user_id, PDO::PARAM_INT);
            $stmt_answer->bindParam(':question_index', $index, PDO::PARAM_INT);
            $stmt_answer->bindParam(':answer_text', $answer['text']);
            $stmt_answer->bindParam(':scores_introvert', $answer['scores']['introvert'], PDO::PARAM_INT);
            $stmt_answer->bindParam(':scores_extrovert', $answer['scores']['extrovert'], PDO::PARAM_INT);
            $stmt_answer->bindParam(':scores_ambivert', $answer['scores']['ambivert'], PDO::PARAM_INT);
            $stmt_answer->execute();
        }

        // Simpan hasil
        $sql_result = "INSERT INTO results (user_id, personality_type, introvert_percentage, extrovert_percentage, ambivert_percentage) 
                       VALUES (:user_id, :personality_type, :introvert_percentage, :extrovert_percentage, :ambivert_percentage)";
        $stmt_result = $conn->prepare($sql_result);
        $stmt_result->bindParam(':user_id', $user_id, PDO::PARAM_INT);
        $stmt_result->bindParam(':personality_type', $result['type']);
        $stmt_result->bindParam(':introvert_percentage', $result['introvert_percentage'], PDO::PARAM_INT);
        $stmt_result->bindParam(':extrovert_percentage', $result['extrovert_percentage'], PDO::PARAM_INT);
        $stmt_result->bindParam(':ambivert_percentage', $result['ambivert_percentage'], PDO::PARAM_INT);
        $stmt_result->execute();

        echo json_encode(['success' => true]);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Gagal simpan: ' . $e->getMessage()]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Metode salah!']);
}
?>