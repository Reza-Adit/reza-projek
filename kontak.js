/**
 * CabePedia - Lab Pedas, Kuis Toleransi & Kontak Kami
 */

// 1. Kuis Toleransi Pedas Data
const QUIZ_QUESTIONS = [
  {
    question: "1. Saat makan mie goreng atau bakso, berapa sendok sambal yang biasa kamu tuang?",
    options: [
      { text: "Cuma ujung sendok teh atau tanpa sambal sama sekali", score: 1 },
      { text: "1 - 2 sendok makan sedang", score: 2 },
      { text: "3 - 5 sendok makan sampai kuah berubah merah", score: 3 },
      { text: "Bukan lagi sendok, cabenya lebih banyak daripada kuahnya!", score: 4 }
    ]
  },
  {
    question: "2. Bagaimana reaksimu saat memakan sebutir Cabe Rawit Merah utuh mentah?",
    options: [
      { text: "Panik mencari susu atau es teh, bibir serasa mati rasa", score: 1 },
      { text: "Keringat mulai bercucuran di dahi, tapi masih terkendali", score: 2 },
      { text: "Meringis nikmat, sensasi pedasnya bikin ketagihan", score: 3 },
      { text: "Biasa saja, dikunyah renyah seperti makan keripik", score: 4 }
    ]
  },
  {
    question: "3. Apa level seblak atau ayam geprek yang biasa kamu pesan?",
    options: [
      { text: "Level 0 - 1 (Manis gurih, cabe cuma hiasan visual)", score: 1 },
      { text: "Level 2 - 3 (Pedas nikmat standar manusia normal)", score: 2 },
      { text: "Level 5 - 10 (Cabe 20 biji ulek kasar)", score: 3 },
      { text: "Level Neraka / Cabe 50+ biji, kuah jadi pasta sambal", score: 4 }
    ]
  },
  {
    question: "4. Bagaimana kondisi perutmu keesokan harinya setelah pesta sambal pedas?",
    options: [
      { text: "Perut bergejolak dan bolak-balik ke kamar mandi seharian", score: 1 },
      { text: "Agak panas sedikit di lambung tapi cepat pulih", score: 2 },
      { text: "Aman terkendali tanpa keluhan apa pun", score: 3 },
      { text: "Pagi-pagi sudah sarapan sambal lagi tanpa masalah!", score: 4 }
    ]
  },
  {
    question: "5. Jika ditantang mencicipi saus Carolina Reaper (2.000.000 SHU), responmu?",
    options: [
      { text: "Tolak keras! Itu zat berbahaya bagi keselamatan lidah", score: 1 },
      { text: "Boleh setetes kecil di ujung tusuk gigi asal ada es krim", score: 2 },
      { text: "Tertantang! Berani cicip satu sendok teh", score: 3 },
      { text: "Bawa ke sini! Mau coba cocol pakai gorengan", score: 4 }
    ]
  }
];

let userAnswers = {};

function initQuiz() {
  const quizForm = document.getElementById('quizForm');
  const resultBox = document.getElementById('quizResultBox');
  if (!quizForm) return;

  quizForm.innerHTML = QUIZ_QUESTIONS.map((q, qIdx) => `
    <div style="margin-bottom: 28px;">
      <h4 style="font-size: 1.1rem; margin-bottom: 14px; color: #fff;">${q.question}</h4>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        ${q.options.map((opt, oIdx) => `
          <label class="quiz-option" id="opt-label-${qIdx}-${oIdx}">
            <span style="font-size: 0.95rem;">${opt.text}</span>
            <input type="radio" name="quiz-q-${qIdx}" value="${opt.score}" style="accent-color: var(--fire-primary);" onchange="selectQuizOption(${qIdx}, ${oIdx}, ${opt.score})" />
          </label>
        `).join('')}
      </div>
    </div>
  `).join('') + `
    <div style="text-align: center; margin-top: 32px;">
      <button type="button" class="btn btn-primary btn-lg" onclick="calculateQuizScore()">
        🔥 Analisis Toleransi Pedasku Sekarang!
      </button>
    </div>
  `;
}

window.selectQuizOption = function(qIdx, oIdx, score) {
  userAnswers[qIdx] = score;

  // Highlight selected
  QUIZ_QUESTIONS[qIdx].options.forEach((_, idx) => {
    const lbl = document.getElementById(`opt-label-${qIdx}-${idx}`);
    if (lbl) lbl.classList.toggle('selected', idx === oIdx);
  });
};

window.calculateQuizScore = function() {
  const answeredCount = Object.keys(userAnswers).length;
  if (answeredCount < QUIZ_QUESTIONS.length) {
    alert("Harap jawab semua 5 pertanyaan kuis sebelum melihat hasil ya!");
    return;
  }

  let total = 0;
  for (let key in userAnswers) {
    total += userAnswers[key];
  }

  let title = "";
  let badgeColor = "";
  let shuEquivalent = "";
  let desc = "";

  if (total <= 7) {
    title = "🍼 Tingkat: Lidah Pemula (Milk Defender)";
    badgeColor = "var(--heat-mild)";
    shuEquivalent = "Maksimal 1.000 - 2.500 SHU (Paprika / Pimiento)";
    desc = "Lidahmu sangat sensitif terhadap senyawa capsaicin. Rasa pedas sedikit saja bisa membuatmu berkeringat dingin. Selalu siapkan susu UHT atau es krim vanilla sebagai teman makanmu!";
  } else if (total <= 12) {
    title = "🌶️ Tingkat: Penikmat Pedas Santai (Casual Pepper)";
    badgeColor = "var(--heat-medium)";
    shuEquivalent = "10.000 - 30.000 SHU (Cabe Keriting / Jalapeño)";
    desc = "Kamu berada di tingkat rata-rata penikmat makanan Nusantara. Masakan tanpa cabe terasa hambar, tetapi kamu tetap mengutamakan kenikmatan rasa tanpa harus menyiksa diri.";
  } else if (total <= 17) {
    title = "🔥 Tingkat: Pendekar Sambal Nusantara (Capsaicin Slayer)";
    badgeColor = "var(--heat-hot)";
    shuEquivalent = "50.000 - 150.000 SHU (Cabe Rawit Merah / Hiyung)";
    desc = "Luar biasa! Reseptor lidahmu sudah terbiasa dengan konsentrasi tinggi capsaicin. Cabe rawit sudah seperti lalapan buah harian bagimu. Kamu adalah incaran teman-teman saat mencari kuliner pedas!";
  } else {
    title = "🌋 Tingkat: Dewa Cabe Api Abadi (Scoville Overlord)";
    badgeColor = "var(--fire-primary)";
    shuEquivalent = "300.000 - 2.000.000+ SHU (Habanero hingga Carolina Reaper)";
    desc = "Kamu adalah anomali langka! Endorfin dan saraf lidahmu sudah kebal terhadap panasnya capsaicin tingkat monster. Makanan yang membakar orang lain justru membuat harimu semakin bertenaga dan bahagia!";
  }

  const resultBox = document.getElementById('quizResultBox');
  if (resultBox) {
    resultBox.style.display = 'block';
    resultBox.innerHTML = `
      <div style="font-size: 0.85rem; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">
        Hasil Analisis Laboratorium Rasa:
      </div>
      <h3 style="font-size: 1.8rem; color: ${badgeColor}; margin-bottom: 8px;">${title}</h3>
      <p style="font-size: 0.95rem; color: var(--fire-accent); font-weight: 600; margin-bottom: 16px;">
        Kapasitas SHU yang mampu ditoleransi: ${shuEquivalent}
      </p>
      <p style="color: var(--text-muted); max-width: 600px; margin: 0 auto 24px; font-size: 1rem; line-height: 1.7;">
        ${desc}
      </p>
      <button class="btn btn-secondary btn-sm" onclick="resetQuiz()">Ulangi Kuis 🔄</button>
    `;
    resultBox.scrollIntoView({ behavior: 'smooth' });
    window.showToast("Hasil kuis toleransi pedasmu siap!");
  }
};

window.resetQuiz = function() {
  userAnswers = {};
  initQuiz();
  const resultBox = document.getElementById('quizResultBox');
  if (resultBox) resultBox.style.display = 'none';
};

// 2. Interactive Capsaicin Neutralizer Tester
function initReliefSimulator() {
  const reliefBtns = document.querySelectorAll('.relief-item-btn');
  const reliefOutput = document.getElementById('reliefExplanation');

  const reliefFacts = {
    susu: {
      title: "🥛 Susu / Produk Olahan Susu (Efektivitas: 98% - Terbaik!)",
      color: "#34d399",
      text: "Susu mengandung protein bernama KASEIN. Capsaicin adalah molekul non-polar berminyak yang tidak larut air, tetapi kasein mampu mengikat molekul capsaicin dan melarutkannya dari reseptor TRPV1 di lidahmu seperti sabun membersihkan minyak."
    },
    gula: {
      title: "🍯 Gula Pasir / Madu (Efektivitas: 85%)",
      color: "#fbbf24",
      text: "Sukrosa dan fruktosa menyerap minyak capsaicin serta memberikan stimulasi sensorik manis yang bersaing dengan sinyal pedas ke otak, memberikan peredaan sensasi bakar yang signifikan."
    },
    air_dingin: {
      title: "🧊 Air Es / Air Dingin (Efektivitas: 20% - Hanya Sementara)",
      color: "#f87171",
      text: "Air dingin hanya mendinginkan reseptor temperatur untuk beberapa detik. Karena capsaicin adalah zat minyak yang tidak larut air, meminum air justru menyebarkan molekul pedas ke seluruh rongga mulut!"
    },
    hangat: {
      title: "☕ Teh Hangat / Air Hangat (Efektivitas: 60% - Efek Katarsis)",
      color: "#fb923c",
      text: "Awalnya akan terasa lebih menyiksa karena panas menambah rangsangan reseptor TRPV1, namun air hangat membantu mencairkan minyak cabe lebih cepat lalu mengalirkannya ke lambung."
    }
  };

  reliefBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      reliefBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const key = btn.getAttribute('data-relief');
      const data = reliefFacts[key];
      if (reliefOutput && data) {
        reliefOutput.innerHTML = `
          <h4 style="color: ${data.color}; margin-bottom: 8px;">${data.title}</h4>
          <p style="font-size: 0.95rem; color: #d1d5db; line-height: 1.6;">${data.text}</p>
        `;
      }
    });
  });
}

// 3. Contact Form Submission
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('nameInput')?.value.trim();
    const email = document.getElementById('emailInput')?.value.trim();
    const message = document.getElementById('messageInput')?.value.trim();

    if (!name || !email || !message) {
      alert("Mohon lengkapi semua kolom formulir.");
      return;
    }

    // Success notification
    window.showToast(`Terima kasih, Kak ${name}! Pesan dan ulasanmu telah kami terima.`);
    form.reset();

    // Show modal thank you
    const modalBackdrop = document.getElementById('chiliModal');
    const modalContent = document.getElementById('modalContent');
    if (modalBackdrop && modalContent) {
      modalContent.innerHTML = `
        <div style="text-align: center; padding: 20px;">
          <div style="width: 70px; height: 70px; border-radius: 50%; background: var(--fire-gradient); display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 2rem;">
            🌶️
          </div>
          <h2 style="font-size: 1.8rem; margin-bottom: 12px;">Pesan Berhasil Terkirim!</h2>
          <p style="color: var(--text-muted); margin-bottom: 24px; font-size: 1rem;">
            Halo <strong>${name}</strong>, salam hangat dari komunitas CabePedia. Tim kurator cabe kami akan meninjau saran dan pertanyaanmu via email <strong>${email}</strong> dalam 1x24 jam.
          </p>
          <button class="btn btn-primary" onclick="closeChiliModal()">Tutup Pesan</button>
        </div>
      `;
      modalBackdrop.classList.add('show');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initQuiz();
  initReliefSimulator();
  initContactForm();
});
