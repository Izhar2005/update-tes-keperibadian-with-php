# update-tes-keperibadian-with-php
Temukan Kepribadian Aslimu! 🌟

Selamat datang di Personality Test, sebuah aplikasi web interaktif yang membantu kamu menemukan apakah kamu seorang Introvert, Ekstrovert, atau Ambivert! Dibuat oleh izhar2005, proyek ini menggabungkan desain modern, kuis seru, dan penyimpanan data ke database MySQL menggunakan PHP. Dengan fitur seperti tema gelap/terang, animasi halus, dan integrasi SweetAlert2, aplikasi ini cocok untuk siapa saja yang ingin mengeksplorasi kepribadian mereka dengan cara yang menyenangkan!
✨ Fitur Utama

Kuis Interaktif: 20 pertanyaan yang menentukan tipe kepribadian berdasarkan jawaban pengguna.
UI Modern: Desain responsif dengan gradien pastel, animasi slide, dan tema gelap/terang.
Database MySQL: Simpan data pengguna, jawaban kuis, dan hasil kepribadian (Introvert, Ekstrovert, Ambivert) dengan PHP.
Hasil Visual: Tampilan hasil dengan persentase kepribadian dan ikon yang sesuai.
Fitur Berbagi: Bagikan hasil ke WhatsApp, Facebook, Twitter, atau salin untuk Instagram Stories.
Admin View: Lihat semua hasil tes dalam tabel rapi (view_results.php).
Validasi Input: Pastikan data pengguna valid sebelum disimpan.

🚀 Teknologi yang Digunakan

Frontend: HTML5, CSS3, JavaScript, SweetAlert2
Backend: PHP 8.2, PDO untuk koneksi MySQL
Database: MySQL (dijalankan via XAMPP)
Font: Google Fonts (Poppins)
Styling: Custom CSS dengan variabel dan animasi
Server: Apache (XAMPP)

📂 Struktur Proyek
personality-test/
├── index.html          # Halaman utama (landing, kuis, hasil)
├── style.css           # Styling untuk UI
├── script.js           # Logika kuis dan interaksi
├── koneksi.php         # Koneksi ke database MySQL
├── save_user.php       # Simpan data pengguna
├── save_quiz.php       # Simpan jawaban dan hasil kuis
├── view_results.php    # Tampilan data hasil tes
└── assets/
    └── favicon.ico     # Ikon website

🛠️ Cara Menjalankan Proyek
Ikuti langkah-langkah ini untuk menjalankan aplikasi di lokalmu:
Prasyarat

XAMPP terinstal (Apache dan MySQL)
Browser modern (Chrome, Firefox, dll.)
Editor kode (VS Code direkomendasikan)

Langkah Instalasi

Clone Repositori
git clone https://github.com/izhar2005/personality-test.git
cd personality-test


Pindahkan ke Folder XAMPP

Salin folder personality-test ke C:\xampp\htdocs\ (Windows) atau sesuai direktori htdocs di sistemmu.


Konfigurasi Database

Buka XAMPP Control Panel, start Apache dan MySQL.
Buka http://localhost/phpmyadmin di browser.
Buat database baru bernama tes_kepribadian.
Jalankan kode SQL berikut di tab SQL untuk membuat tabel:

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    usia INT NOT NULL,
    jenis_kelamin VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE answers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    question_index INT NOT NULL,
    answer_text TEXT NOT NULL,
    scores_introvert INT NOT NULL,
    scores_extrovert INT NOT NULL,
    scores_ambivert INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE results (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    personality_type VARCHAR(20) NOT NULL,
    introvert_percentage INT NOT NULL,
    extrovert_percentage INT NOT NULL,
    ambivert_percentage INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);


Konfigurasi Koneksi Database

Buka koneksi.php, pastikan pengaturan sesuai:$host = "localhost";
$username = "root";
$password = ""; // Sesuaikan kalau ada password
$dbname = "tes_kepribadian";




Jalankan Aplikasi

Buka http://localhost/personality-test/index.html di browser.
Isi form, mulai tes, dan lihat hasilnya!
Untuk lihat data hasil, buka http://localhost/personality-test/view_results.php.



🎨 Pratinjau
Catatan: Ganti URL placeholder dengan screenshot asli di repositorimu.
🤝 Cara Berkontribusi
Ingin bantu improve proyek ini? Yuk, ikut!

Fork repositori ini.
Buat branch baru: git checkout -b fitur-baru.
Commit perubahan: git commit -m "Tambah fitur X".
Push ke branch: git push origin fitur-baru.
Buat Pull Request di GitHub.

Ide kontribusi:

Tambah pertanyaan kuis baru.
Tingkatkan UI/UX dengan animasi tambahan.
Tambah fitur analitik untuk admin.
Dukungan multi-bahasa.

📜 Lisensi
Proyek ini dilisensikan di bawah MIT License. Silakan gunakan dan modifikasi sesuai kebutuhan!
🙌 Terima Kasih
Terima kasih telah mengunjungi proyek ini! Jangan lupa beri ⭐ di GitHub kalau suka, dan bagikan hasil tes kepribadianmu! Dibuat dengan ❤️ oleh izhar2005.

Kontak: GitHub Issues untuk pertanyaan atau bug.
