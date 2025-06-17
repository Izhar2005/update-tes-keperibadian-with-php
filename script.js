const questions = [
  {
    question: "Saat berada di sebuah pesta, kamu biasanya...",
    answers: [
      { text: "Lebih suka berbicara dengan beberapa orang dekat saja", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Berinteraksi dengan banyak orang dan merasa berenergi", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Tergantung suasana hati dan situasi", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Kamu merasa lebih nyaman saat...",
    answers: [
      { text: "Menghabiskan waktu sendiri atau dengan beberapa teman dekat", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Bersosialisasi dengan banyak orang", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Kombinasi antara sendiri dan bersama orang lain", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Ketika dihadapkan pada tugas baru di tempat kerja, kamu cenderung...",
    answers: [
      { text: "Memikirkan dan merencanakan sendiri sebelum mendiskusikan dengan tim", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Langsung berkolaborasi dengan orang lain untuk mencari ide", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Menggabungkan refleksi pribadi dan diskusi kelompok sesuai kebutuhan", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Saat merasa stres, kamu lebih memilih...",
    answers: [
      { text: "Menarik diri untuk merenung dan memproses perasaan secara pribadi", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Mengobrol dengan orang lain untuk mencari perspektif baru", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Terkadang menyendiri, terkadang mencari dukungan sosial", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Dalam pengambilan keputusan, kamu biasanya...",
    answers: [
      { text: "Mengandalkan refleksi mendalam dan analisis pribadi", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Mencari masukan dari banyak orang sebelum memutuskan", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Menggabungkan intuisi pribadi dan pendapat orang lain", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Ketika menghadiri acara sosial besar, kamu merasa...",
    answers: [
      { text: "Lebih nyaman di sudut ruangan dengan percakapan mendalam", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Semangat untuk bertemu banyak orang dan menciptakan koneksi baru", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Bisa menikmati keduanya tergantung pada suasana acara", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Saat bekerja pada proyek penting, kamu lebih suka...",
    answers: [
      { text: "Fokus pada detail secara individu untuk hasil terbaik", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Berdiskusi secara aktif dengan tim untuk menyelesaikannya", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Mengkombinasikan kerja individu dan kolaborasi tim", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Setelah hari yang panjang, kamu merasa paling segar dengan...",
    answers: [
      { text: "Waktu tenang untuk membaca atau menikmati hobi sendiri", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Bertemu teman atau keluarga untuk mengobrol", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Fleksibel antara waktu sendiri atau bersama orang lain", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Dalam situasi konflik, kamu cenderung...",
    answers: [
      { text: "Memikirkan solusi secara internal sebelum menyampaikannya", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Mengungkapkan pendapat secara terbuka untuk mencari solusi cepat", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Menggabungkan refleksi pribadi dan diskusi terbuka", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Saat mempelajari sesuatu yang baru, kamu lebih suka...",
    answers: [
      { text: "Mempelajarinya sendiri melalui buku atau sumber tertulis", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Belajar melalui diskusi kelompok atau seminar", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Kombinasi belajar mandiri dan interaksi dengan orang lain", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Saat menghadiri rapat, kamu biasanya...",
    answers: [
      { text: "Mendengarkan dengan saksama dan berbicara saat benar-benar perlu", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Aktif berpartisipasi dan sering menyampaikan ide", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Berpartisipasi sesuai kebutuhan dan suasana rapat", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Ketika merencanakan liburan, kamu lebih suka...",
    answers: [
      { text: "Pergi sendiri atau dengan kelompok kecil ke tempat yang tenang", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Pergi dengan banyak orang ke tempat yang ramai dan penuh aktivitas", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Fleksibel antara destinasi tenang atau ramai sesuai mood", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Saat menerima kritik, kamu cenderung...",
    answers: [
      { text: "Memprosesnya secara internal sebelum menanggapi", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Langsung berdiskusi untuk menjelaskan atau mencari solusi", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Menganalisis sendiri lalu mendiskusikannya jika perlu", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Dalam kelompok pertemanan, kamu biasanya...",
    answers: [
      { text: "Menjadi pendengar yang baik dan jarang memulai percakapan", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Sering memulai percakapan dan menjaga suasana tetap hidup", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Bisa menjadi pendengar atau penggerak percakapan sesuai situasi", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Saat menangani masalah pribadi, kamu lebih suka...",
    answers: [
      { text: "Memikirkan solusi sendiri tanpa banyak berbagi", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Berdiskusi dengan orang lain untuk mendapatkan saran", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Kombinasi antara refleksi pribadi dan meminta masukan", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Dalam situasi baru yang tidak dikenal, kamu cenderung...",
    answers: [
      { text: "Mengamati dulu sebelum terlibat aktif", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Langsung terjun dan beradaptasi dengan cepat", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Menyesuaikan diri berdasarkan situasi yang ada", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Saat merayakan keberhasilan, kamu lebih suka...",
    answers: [
      { text: "Merayakan secara pribadi atau dengan orang-orang terdekat", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Mengadakan acara besar dengan banyak orang", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Fleksibel antara perayaan kecil atau besar sesuai suasana", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Ketika mencari inspirasi, kamu biasanya...",
    answers: [
      { text: "Merenung sendiri atau mencari di buku dan sumber tertulis", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Berdiskusi dengan orang lain untuk mendapatkan ide baru", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Menggabungkan refleksi pribadi dan interaksi sosial", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Saat menghabiskan akhir pekan, kamu lebih suka...",
    answers: [
      { text: "Bersantai di rumah dengan aktivitas pribadi", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Pergi keluar dan bertemu banyak orang", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Kombinasi antara waktu di rumah dan keluar sesuai mood", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
  {
    question: "Dalam presentasi di depan umum, kamu cenderung...",
    answers: [
      { text: "Mempersiapkan secara mendetail dan berbicara dengan tenang", scores: { introvert: 2, extrovert: 0, ambivert: 1 } },
      { text: "Menikmati sorotan dan berbicara dengan penuh semangat", scores: { introvert: 0, extrovert: 2, ambivert: 1 } },
      { text: "Menyesuaikan gaya sesuai audiens dan situasi", scores: { introvert: 1, extrovert: 1, ambivert: 2 } },
    ],
  },
];

const personalityDescriptions = {
  introvert: "Kamu adalah seorang Introvert yang cenderung lebih suka menyendiri dan mendapatkan energi dari waktu sendiri. Kamu menikmati kedalaman dan refleksi pribadi.",
  extrovert: "Kamu adalah seorang Ekstrovert yang energik dan mendapatkan energi dari interaksi sosial. Kamu suka bergaul dan menjadi pusat perhatian.",
  ambivert: "Kamu adalah seorang Ambivert yang fleksibel, bisa menyesuaikan diri antara menjadi introvert dan ekstrovert sesuai situasi. Kamu memiliki keseimbangan yang baik.",
};

const personalityIcons = {
  introvert: "🧘‍♂️",
  extrovert: "🎉",
  ambivert: "⚖️",
};

const startTestBtn = document.getElementById("startTestBtn");
const landingPage = document.getElementById("landing");
const quizPage = document.getElementById("quiz");
const resultPage = document.getElementById("result");
const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answers");
const progressBar = document.getElementById("progressBar");
const resultTypeElem = document.getElementById("resultType");
const resultDescriptionElem = document.getElementById("resultDescription");
const resultPercentagesElem = document.getElementById("resultPercentages");
const resultIconElem = document.getElementById("resultIcon");
const retryBtn = document.getElementById("retryBtn");
const shareBtn = document.getElementById("shareBtn");
const darkModeToggle = document.getElementById("darkModeToggle");
const userInfoForm = document.getElementById("userInfoForm");
const userNameInput = document.getElementById("userName");
const userAgeInput = document.getElementById("userAge");
const userGenderInputs = document.getElementsByName("userGender");

let currentQuestionIndex = 0;
let scores = { introvert: 0, extrovert: 0, ambivert: 0 };
let userAnswers = [];
let userId = null;

function showPage(page) {
  [landingPage, quizPage, resultPage].forEach((p) => {
    p.classList.remove("active");
  });
  page.classList.add("active");
}

function animateQuestion(newIndex) {
  const questionContainer = document.getElementById("questionContainer");
  questionContainer.classList.remove("slide-in-right");
  questionContainer.classList.add("slide-out-left");

  setTimeout(() => {
    currentQuestionIndex = newIndex;
    displayQuestion(currentQuestionIndex);
    questionContainer.classList.remove("slide-out-left");
    questionContainer.classList.add("slide-in-right");
  }, 400);
}

function displayQuestion(index) {
  const q = questions[index];
  questionText.textContent = q.question;
  answersContainer.innerHTML = "";

  q.answers.forEach((answer) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = answer.text;
    btn.addEventListener("click", () => {
      userAnswers[index] = answer;
      scores.introvert += answer.scores.introvert;
      scores.extrovert += answer.scores.extrovert;
      scores.ambivert += answer.scores.ambivert;

      const progressPercent = ((index + 1) / questions.length) * 100;
      progressBar.style.width = progressPercent + "%";

      if (index + 1 < questions.length) {
        animateQuestion(index + 1);
      } else {
        showResult();
      }
    });
    answersContainer.appendChild(btn);
  });
}

function showResult() {
  showPage(resultPage);

  const total = scores.introvert + scores.extrovert + scores.ambivert;
  const introPercent = Math.round((scores.introvert / total) * 100);
  const extroPercent = Math.round((scores.extrovert / total) * 100);
  const ambiPercent = Math.round((scores.ambivert / total) * 100);

  let maxScore = Math.max(scores.introvert, scores.extrovert, scores.ambivert);
  let resultType = "";
  let maxCount = 0;
  [scores.introvert, scores.extrovert, scores.ambivert].forEach((score) => {
    if (score === maxScore) maxCount++;
  });

  if (maxCount > 1) {
    resultType = "ambivert";
  } else if (maxScore === scores.introvert) {
    resultType = "introvert";
  } else if (maxScore === scores.extrovert) {
    resultType = "extrovert";
  } else {
    resultType = "ambivert";
  }

  resultTypeElem.textContent = resultType.charAt(0).toUpperCase() + resultType.slice(1);
  resultDescriptionElem.textContent = personalityDescriptions[resultType];
  resultPercentagesElem.innerHTML = `
    Introvert: ${introPercent}%<br />
    Ekstrovert: ${extroPercent}%<br />
    Ambivert: ${ambiPercent}%
  `;
  resultIconElem.textContent = personalityIcons[resultType];

  const resultData = {
    type: resultType,
    introvert_percentage: introPercent,
    extrovert_percentage: extroPercent,
    ambivert_percentage: ambiPercent
  };

  fetch('save_quiz.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `user_id=${userId}&answers=${encodeURIComponent(JSON.stringify(userAnswers))}&result=${encodeURIComponent(JSON.stringify(resultData))}`
  })
  .then(response => response.json())
  .then(data => {
    if (!data.success) {
      Swal.fire('Error', data.message || 'Gagal menyimpan data kuis', 'error');
    }
  })
  .catch(error => {
    Swal.fire('Error', 'Gagal menyimpan data: ' + error.message, 'error');
  });
}

function resetQuiz() {
  scores = { introvert: 0, extrovert: 0, ambivert: 0 };
  userAnswers = [];
  currentQuestionIndex = 0;
  progressBar.style.width = "0%";
  showPage(landingPage);
}

function validateUserInfo() {
  const name = userNameInput.value.trim();
  const age = userAgeInput.value.trim();
  let gender = null;
  for (const input of userGenderInputs) {
    if (input.checked) {
      gender = input.value;
      break;
    }
  }

  if (!name) {
    Swal.fire("Error", "Masukkan nama kamu!", "error");
    return false;
  }
  if (!age || isNaN(age) || age < 1 || age > 120) {
    Swal.fire("Error", "Masukkan usia yang valid (1-120)!", "error");
    return false;
  }
  if (!gender) {
    Swal.fire("Error", "Pilih jenis kelamin!", "error");
    return false;
  }
  return { name, age, gender };
}

startTestBtn.addEventListener("click", () => {
  const userInfo = validateUserInfo();
  if (userInfo) {
    const formData = new FormData();
    formData.append('userName', userInfo.name);
    formData.append('userAge', userInfo.age);
    formData.append('userGender', userInfo.gender);

    fetch('save_user.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        userId = data.user_id;
        showPage(quizPage);
        displayQuestion(currentQuestionIndex);
        progressBar.style.width = "0%";
      } else {
        Swal.fire('Error', data.message || 'Gagal menyimpan data pengguna', 'error');
      }
    })
    .catch(error => {
      Swal.fire('Error', 'Terjadi kesalahan: ' + error.message, 'error');
    });
  }
});

retryBtn.addEventListener("click", () => {
  resetQuiz();
});

shareBtn.addEventListener("click", async () => {
  const personality = resultTypeElem.textContent || "Kepribadian";
  const description = resultDescriptionElem.textContent || "";
  const percentages = resultPercentagesElem.textContent || "";
  const url = "https://web-test-personal.vercel.app/";

  const shareText = `Hasil Tes Kepribadian saya adalah ${personality}!\n${description}\n${percentages}\nCek di ${url}`;

  if (navigator.share) {
    try {
      await navigator.share({
        title: "Hasil Tes Kepribadian",
        text: shareText,
        url: url,
      });
      console.log("Berhasil membagikan hasil");
    } catch (error) {
      console.error("Gagal membagikan:", error);
    }
  } else {
    Swal.fire({
      title: "Bagikan Hasil Tesmu!",
      html: `
        <p>Bagikan hasil kepribadianmu ke platform berikut:</p>
        <div style="display: flex; justify-content: center; gap: 15px; margin-top: 15px;">
          <a href="https://wa.me/?text=${encodeURIComponent(`Hasil Tes Kepribadian saya adalah ${personality}! Cek di ${url}`)}" target="_blank" title="Bagikan ke WhatsApp">
            <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp" />
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}"e=${encodeURIComponent(`Hasil Tes Kepribadian saya adalah ${personality}!`)}" target="_blank" title="Bagikan ke Facebook">
            <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(`Hasil Tes Kepribadian saya adalah ${personality}! Cek di ${url}`)}" target="_blank" title="Bagikan ke Twitter">
            <img src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="Twitter" />
          </a>
          <button id="copyInstagram" style="background: none; border: none; cursor: pointer;" title="Salin hasil untuk Instagram Stories">
            <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="Instagram Stories" />
          </button>
        </div>
      `,
      showCloseButton: true,
      showConfirmButton: false,
      background: '#fff',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://sweetalert2.github.io/images/nyan-cat.gif")
        left top
        no-repeat
      `,
      didOpen: () => {
        const copyBtn = Swal.getPopup().querySelector('#copyInstagram');
        copyBtn.addEventListener('click', () => {
          navigator.clipboard.writeText(shareText).then(() => {
            Swal.fire({
              icon: 'success',
              title: 'Teks hasil berhasil disalin!',
              timer: 1500,
              showConfirmButton: false,
            });
          }).catch(() => {
            Swal.fire({
              icon: 'error',
              title: 'Gagal menyalin teks',
              timer: 1500,
              showConfirmButton: false,
            });
          });
        });
      }
    });
  }
});

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

showPage(landingPage);