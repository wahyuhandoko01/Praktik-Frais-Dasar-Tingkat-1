/* ==========================================================================
   DATA STORE & STATE MANAGEMENT
   ========================================================================== */
const TOTAL_MODULES = 14;

// DATA ALAT POTONG (CUTTING TOOLS) FROM PPT/PDF
const cuttingToolsData = [
    { id: 't1', name: 'End Mill Cutter', cat: 'Face Cutting', desc: 'Sisi potong pada ujung muka dan spiral. Tangkai lurus atau konus (Ø0.5-50mm).', img: 'assets/images/End_Mill_Finishing.png', img: 'assets/images/End_Mill_Roughing.png' },
    { id: 't2', name: 'Shell End Mill Cutter', cat: 'Face Cutting', desc: 'Memiliki lubang berpasak untuk dipasang pada arbor (Ø30-200mm).', img: 'assets/images/Shell_End_Mill_Roughing.png', img: 'assets/images/Shell_End_Mill_Finishing.png' },
    { id: 't3', name: 'Plain Mill Cutter', cat: 'Side Cutting', desc: 'Pengefraisan horisontal permukaan datar. Hanya memiliki sisi potong melingkar.', img: 'assets/images/Plain_Mill.png' },
    { id: 't4', name: 'Disk Cutter', cat: 'Side Cutting', desc: 'Bentuk pipih untuk pembuatan alur (slot) atau pemotongan (slitting).', img: 'assets/images/Disc_Cutter.png' },
    { id: 't5', name: 'Dove Tail Cutter', cat: 'Profil', desc: 'Menghasilkan profil ekor burung dengan sudut 45°, 60°, atau 90°.', img: 'assets/images/Dove_Tail.png' },
    { id: 't6', name: 'T-Slot Cutter', cat: 'Profil', desc: 'Membuat alur T. Sisi potong melingkar dengan sudut helix berlawanan.', img: 'assets/images/T_Slot_Mill.png' },
    { id: 't7', name: 'Prisma Cutter', cat: 'Profil', desc: 'Menghasilkan profil V pada benda kerja dengan sudut 45°, 60°, atau 90°.', img: 'assets/images/Prisma_Cutter.png' },
    { id: 't8', name: 'Hobbing Cutter', cat: 'Profil', desc: 'Digunakan pada mesin hobbing untuk profil roda gigi presisi.', img: 'assets/images/Hobbing_Cutter.png' },
    { id: 't9', name: 'Modul Cutter', cat: 'Profil', desc: 'Pembuatan roda gigi modul tertentu pada mesin konvensional.', img: 'assets/images/Modul_Cutter.png' },
    { id: 't10', name: 'Twist Drill', cat: 'Non-Cutter', desc: 'Membuat lubang awal pada benda kerja dengan tangkai silindris/konus.', img: 'assets/images/Twist_Drill.png' },
    { id: 't11', name: 'Reamer', cat: 'Non-Cutter', desc: 'Memperbesar lubang dengan tingkat ketelitian khusus (ISO).', img: 'assets/images/Reamer.png' },
    { id: 't12', name: 'Tap / Sney', cat: 'Non-Cutter', desc: 'Membuat ulir dalam (Tap) atau ulir luar (Sney) metric/Whitworth.', img: 'assets/images/Tap_Sney.png' },
    { id: 't13', name: 'Boring Tool', cat: 'Non-Cutter', desc: 'Memperbesar lubang presisi menggunakan Boring Head.', img: 'assets/images/Boring_Head.png' }
];

// DATA AKSESORI MESIN FRAIS
const aksesorisData = [
    { name: 'Drill Chuck Arbor', desc: 'Mencekam mata bor atau tool diameter kecil bertangkai silindris.', img: 'assets/images/Drill_Chuck.png' },
    { name: 'Sleeve Arbor', desc: 'Mencekam End Mill atau Twist Drill dengan tangkai taper/konus.', img: 'assets/images/Sleeve_Arbor.png' },
    { name: 'Collet Arbor', desc: 'Mencekam alat bertangkai silindris presisi tinggi (set kelipatan 0.5mm).', img: 'assets/images/Collet_Arbor.png' },
    { name: 'Stub / Short Arbor', desc: 'Mencekam Shell End Mill Cutter tanpa/dengan ring pemandu.', img: 'assets/images/Stub_Arbor.png' },
    { name: 'Long Arbor', desc: 'Digunakan pada mesin horisontal untuk pencekaman cutter melingkar.', img: 'assets/images/Long_Arbor.png' },
    { name: 'Side Lock Arbor', desc: 'Pencekaman simpel dengan sekrup pengikat pada tangkai rata.', img: 'assets/images/Side_Lock.png' },
    { name: 'Boring Head Arbor', desc: 'Pencekaman boring tool dilengkapi skala presisi pembuatan lubang.', img: 'assets/images/Boring_Head.png' },
    { name: 'Fixed Vice', desc: 'Tanggem tetap yang paling sering digunakan pada meja milling.', img: 'assets/images/Fix_Vice.png' },
    { name: 'Swivel Vice', desc: 'Tanggem yang dapat diputar sudutnya pada satu poros horizontal.', img: 'assets/images/Swivel_Vice.png' },
    { name: 'Compound Vice', desc: 'Tanggem dengan sudut putar ganda untuk profil miring rumit.', img: 'assets/images/Compound_Vice.png' },
    { name: 'Rotary Table', desc: 'Aksesori pemutar untuk pengerjaan radius luar benda kerja.', img: 'assets/images/Rotary_Table.png' },
    { name: 'Dividing Head', desc: 'Kepala pembagi untuk pembuatan segi banyak/hexagon atau roda gigi.', img: 'assets/images/Deviding_Head.png' }
];

// DATA ALAT UKUR
const measuringData = [
    { name: 'Square Line (SL)', desc: 'Mengecek kesikuan bidang terhadap bidang referensi.', img: 'assets/images/Square_Line.png' },
    { name: 'Dial & Vernier Caliper', desc: 'Mengukur ukuran benda kerja awal dan akhir.', img: 'assets/images/Dial_Caliper.png' },
    { name: 'Bevel Protractor', desc: 'Pengukuran dan setting sudut kemiringan secara presisi.', img: 'assets/images/Bevel_Protractor.png' },
    { name: 'Bevel Transfer', desc: 'Mentransfer sudut dari Bevel Protractor ke benda kerja/cekam.', img: 'assets/images/Bevel_Transfer.png' },
    { name: 'Outside Micrometer', desc: 'Mengukur dimensi dengan ketelitian khusus (0.01 mm).', img: 'assets/images/Outside_Micro.png' },
    { name: 'Rugo Test', desc: 'Membandingkan tingkat kekasaran permukaan benda kerja.', img: 'assets/images/Rugo_Test.png' },
    { name: 'Plug Thread Gauge', desc: 'Mengecek lubang ulir dengan sisi Go dan No-Go.', img: 'assets/images/PTG.png' },
    { name: 'Block Gauge', desc: 'Mengukur alur/slot dengan presisi tinggi.', img: 'assets/images/Block_Gauge.png' }
];

// SOAL KUIS EVALUASI (20 SOAL ACCORDING TO PPT/PDF)
const quizQuestions = [
    { q: '1. Apa prinsip kerja dasar pemesinan milling?', a: ['Benda kerja berputar, cutter diam', 'Cutter berputar, benda kerja bergerak mendekati cutter', 'Cutter dan benda kerja berputar bersamaan', 'Cutter bergerak naik turun tanpa berputar'], correct: 1 },
    { q: '2. Gerakan berputarnya alat potong pada spindle utama dinamakan...', a: ['Feeding', 'Depth of Cut', 'Gerakan Utama (Spindle Rotation)', 'Side Cutting'], correct: 2 },
    { q: '3. Arah putaran cutter searah dengan arah pemakanan (feeding) disebut...', a: ['Conventional Milling', 'Climbing Milling', 'Face Cutting', 'Up Milling'], correct: 1 },
    { q: '4. Satuan dari Kecepatan Pemakanan (Feeding per minute / s) adalah...', a: ['rpm', 'm/menit', 'mm/menit', 'mm/rev'], correct: 2 },
    { q: '5. Rumus mencari Putaran Spindle Utama (n) adalah...', a: ['n = (1000 x Cs) / (π x d)', 'n = (π x d x Cs) / 1000', 'n = z x s x Sz', 'n = L / s'], correct: 0 },
    { q: '6. Cutter yang memiliki sisi potong pada bagian depan dan spiral melingkar adalah...', a: ['Plain Mill Cutter', 'End Mill Cutter', 'Disk Cutter', 'Prisma Cutter'], correct: 1 },
    { q: '7. Denda kompensasi akibat meninggalkan kunci spindle di head machine dan terlempar adalah...', a: ['10 Jam', '20 Jam', '25 Jam', '50 Jam'], correct: 3 },
    { q: '8. Toleransi tingkat kekasaran (Rugo) untuk pengerjaan UMUM adalah...', a: ['10-0', '10-4-1', '10-5-1', '10-1'], correct: 2 },
    { q: '9. Aksesori yang digunakan untuk membuat profil segi-6 (Hexagon) adalah...', a: ['Rotary Table', 'Dividing Head', 'Angle Plate', 'Fixed Vice'], correct: 1 },
    { q: '10. Jenis cutter yang digunakan untuk membuat alur berbentuk T adalah...', a: ['Dove Tail Cutter', 'T-Slot Cutter', 'Disk Cutter', 'Prisma Cutter'], correct: 1 },
    { q: '11. Langkah pertama pada Work Preparation (WP) pengefraisan blok adalah...', a: ['Sayat bidang 6', 'Memasukkan ukuran panjang', 'Sayat bidang 1 (referensi tebal)', 'Sayat bidang 2 (referensi lebar)'], correct: 2 },
    { q: '12. Denda kompensasi jika tidak menggunakan kacamata pelindung saat proses penyayatan adalah...', a: ['5 Jam', '10 Jam', '20 Jam', '25 Jam'], correct: 2 },
    { q: '13. Pengencangan alat potong dan benda kerja pada mesin frais hendaknya dilakukan dengan...', a: ['Dipukul dengan palu besi', 'Hanya dengan kekuatan tangan', 'Menggunakan pipa perpanjangan', 'Ditendang dengan kaki'], correct: 1 },
    { q: '14. Briefing praktik dimulainya berapa menit sebelum bel masuk?', a: ['15 Menit', '10 Menit', '5 Menit', 'Tepat saat bel'], correct: 2 },
    { q: '15. Alat ukur yang digunakan untuk mengecek kesikuan bidang adalah...', a: ['Bevel Protractor', 'Square Line (SL)', 'Rugo Test', 'Micrometer'], correct: 1 },
    { q: '16. Cutter type H (Keras) memiliki sudut potong sebesar...', a: ['± 57°', '± 73°', '± 81°', '± 90°'], correct: 2 },
    { q: '17. Formula perhitungan Nilai Akhir Praktik Frais Dasar adalah...', a: ['0.5 CP + 0.5 PP', '0.9 CP + 0.1 PP', '0.8 CP + 0.2 PP', '1.0 CP'], correct: 1 },
    { q: '18. Target kompetensi Non-Seamless prodi TMI/RTM adalah...', a: ['3 Latihan, 5 Kompetensi, 1 UK, 3 Produksi', '1 Latihan, 1 Kompetensi', '3 Latihan, 3 Kompetensi', '2 Latihan, 2 Produksi'], correct: 0 },
    { q: '19. Alat pencekam arbor yang menggunakan kelipatan collet 0.5 mm adalah...', a: ['Side Lock Arbor', 'Collet Arbor', 'Stub Arbor', 'Sleeve Arbor'], correct: 1 },
    { q: '20. Berapa kompensasi terlambat mengumpulkan logbook melebihi 1 bulan?', a: ['-5 Jam / halaman', '-10 Jam / halaman', '-30 Jam / halaman', '-50 Jam / halaman'], correct: 2 }
];

/* ==========================================================================
   INITIALIZATION & EVENT LISTENERS
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderCuttingTools();
    renderAksesoris();
    renderMeasuringTools();
    renderQuiz();
    updateProgressUI();
    loadK3Status();

    // Theme Toggle Event
    document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);
});

// THEME MANAGEMENT (LOCALSTORAGE)
function initTheme() {
    const savedTheme = localStorage.getItem('milling_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('milling_theme', newTheme);
}

// NAVIGATION HANDLER
function navigateToSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(sec => sec.classList.remove('active-section'));
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active-section');
        const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        if (activeLink) activeLink.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').replace('#', '');
        navigateToSection(targetId);
    });
});

/* ==========================================================================
   DYNAMIC RENDERING FUNCTIONS
   ========================================================================== */
function renderCuttingTools() {
    const container = document.getElementById('toolsGrid');
    container.innerHTML = cuttingToolsData.map(tool => `
        <div class="content-card">
            <span class="badge">${tool.cat}</span>
            <h3 class="margin-top">${tool.name}</h3>
            <p>${tool.desc}</p>
            <div class="image-container-box">
                <img src="${tool.img}" alt="${tool.name}" onerror="this.src='https://via.placeholder.com/300x180?text=${encodeURIComponent(tool.name)}';">
            </div>
        </div>
    `).join('');
}

function renderAksesoris() {
    const container = document.getElementById('aksesoriGrid');
    container.innerHTML = aksesorisData.map(item => `
        <div class="content-card">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <div class="image-container-box">
                <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/300x180?text=${encodeURIComponent(item.name)}';">
            </div>
        </div>
    `).join('');
}

function renderMeasuringTools() {
    const container = document.getElementById('measuringGrid');
    container.innerHTML = measuringData.map(item => `
        <div class="content-card">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <div class="image-container-box">
                <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/300x180?text=${encodeURIComponent(item.name)}';">
            </div>
        </div>
    `).join('');
}

/* ==========================================================================
   INTERACTIVE CALCULATOR
   ========================================================================== */
function calculateMilling() {
    const d = parseFloat(document.getElementById('calcDiameter').value);
    const cs = parseFloat(document.getElementById('calcCs').value);
    const z = parseFloat(document.getElementById('calcZ').value) || 0;
    const sz = parseFloat(document.getElementById('calcSz').value) || 0;

    if (!d || !cs || d <= 0 || cs <= 0) {
        alert('Mohon masukkan Diameter dan Cutting Speed yang valid!');
        return;
    }

    // Formula n = (1000 * Cs) / (pi * d)
    const n = Math.round((1000 * cs) / (Math.PI * d));
    
    // Formula s = z * n * sz
    const s = Math.round(z * n * sz);

    document.getElementById('resN').innerText = `${n} RPM`;
    document.getElementById('resS').innerText = `${s} mm/menit`;
}

/* ==========================================================================
   PROGRESS & COMPLETION TRACKER (LOCALSTORAGE)
   ========================================================================== */
function toggleModuleCompletion(moduleId) {
    let completedModules = JSON.parse(localStorage.getItem('milling_completed_modules')) || [];
    
    if (completedModules.includes(moduleId)) {
        completedModules = completedModules.filter(id => id !== moduleId);
    } else {
        completedModules.push(moduleId);
    }

    localStorage.setItem('milling_completed_modules', JSON.stringify(completedModules));
    updateProgressUI();
}

function updateProgressUI() {
    const completedModules = JSON.parse(localStorage.getItem('milling_completed_modules')) || [];
    const count = completedModules.length;
    const percentage = Math.round((count / TOTAL_MODULES) * 100);

    document.getElementById('progressFill').style.width = `${percentage}%`;
    document.getElementById('progressPercentageText').innerText = `${percentage}% Selesai (${count} / ${TOTAL_MODULES} Modul)`;

    // Update button states
    document.querySelectorAll('.mark-complete-btn').forEach(btn => {
        const onClickAttr = btn.getAttribute('onclick');
        if (onClickAttr) {
            const modId = onClickAttr.match(/'([^']+)'/)[1];
            if (completedModules.includes(modId)) {
                btn.classList.add('completed');
                btn.innerHTML = '<i class="fas fa-check-circle"></i> Selesai';
            } else {
                btn.classList.remove('completed');
                btn.innerHTML = '<i class="fas fa-check-circle"></i> Tandai Selesai';
            }
        }
    });
}

/* ==========================================================================
   K3 ACKNOWLEDGEMENT TRACKER
   ========================================================================== */
function toggleK3Ack(isChecked) {
    localStorage.setItem('milling_k3_ack', isChecked ? 'true' : 'false');
}

function loadK3Status() {
    const status = localStorage.getItem('milling_k3_ack') === 'true';
    const chk = document.getElementById('k3Check');
    if (chk) chk.checked = status;
}

/* ==========================================================================
   EVALUATION QUIZ SYSTEM
   ========================================================================== */
function renderQuiz() {
    const quizBody = document.getElementById('quizBody');
    quizBody.innerHTML = quizQuestions.map((item, qIdx) => `
        <div class="quiz-question-box margin-top">
            <p><strong>${item.q}</strong></p>
            <div class="options-group">
                ${item.a.map((opt, oIdx) => `
                    <label class="option-label">
                        <input type="radio" name="q_${qIdx}" value="${oIdx}">
                        ${opt}
                    </label>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function submitQuiz() {
    let score = 0;
    quizQuestions.forEach((item, qIdx) => {
        const selected = document.querySelector(`input[name="q_${qIdx}"]:checked`);
        if (selected && parseInt(selected.value) === item.correct) {
            score += 5; // 20 * 5 = 100
        }
    });

    document.getElementById('quizScoreText').innerText = `Skor Anda: ${score} / 100`;
    alert(`Evaluasi Selesai! Skor Anda: ${score} / 100`);
}

function resetQuiz() {
    renderQuiz();
    document.getElementById('quizScoreText').innerText = `Skor: 0`;
}

/* ==========================================================================
   PRACTICE MODAL SYSTEM
   ========================================================================== */
function openPracticeModal(practiceNum) {
    const modal = document.getElementById('practiceModal');
    const modalBody = document.getElementById('modalBody');

    const practiceDetails = {
        1: { title: 'PRACTICE 1 – BLOCKING', desc: 'Pembuatan benda kerja balok presisi.', steps: ['Persiapan bahan mentah.', 'Pengerjaan bidang 1 sampai bidang 6 sesuai WP.', 'Target utama: Kesikuan (Perpendicular) & Kesejajaran (Parallelism).'] },
        2: { title: 'PRACTICE 2 – STEPPING & DRILLING', desc: 'Pengerjaan bertingkat dan pengetapan.', steps: ['Membuat step/tingkat sesuai ukuran gambar.', 'Pengerjaan chamfering sudut.', 'Pengeboran (Drilling) dan pembuatan ulir (Tapping).'] },
        3: { title: 'PRACTICE 3 – STEPPING ISO & BORING', desc: 'Pengerjaan presisi tinggi.', steps: ['Pembuatan step dengan toleransi ISO.', 'Pengerjaan slotting.', 'Pengeboran presisi dengan Boring Head.'] },
        4: { title: 'PRACTICE 4 – HEXAGON PROFILE', desc: 'Penggunaan piring pembagi.', steps: ['Pemasangan benda kerja pada Dividing Head.', 'Perhitungan putaran engkol pembagi.', 'Penyayatan 6 bidang simetris (Hexagon).'] }
    };

    const details = practiceDetails[practiceNum];
    modalBody.innerHTML = `
        <h2>${details.title}</h2>
        <p>${details.desc}</p>
        <h4 class="margin-top">Langkah Pengerjaan Utama:</h4>
        <ul>
            ${details.steps.map(s => `<li>${s}</li>`).join('')}
        </ul>
    `;

    modal.classList.remove('hidden');
}

function closePracticeModal() {
    document.getElementById('practiceModal').classList.add('hidden');
}

/* ==========================================================================
   GLOBAL SEARCH SYSTEM
   ========================================================================== */
function handleSearch() {
    const query = document.getElementById('globalSearch').value.toLowerCase();
    const dropdown = document.getElementById('searchResults');

    if (query.length < 2) {
        dropdown.classList.add('hidden');
        return;
    }

    const matches = [
        ...cuttingToolsData.map(t => ({ name: t.name, target: 'cutting-tools' })),
        ...aksesorisData.map(a => ({ name: a.name, target: 'aksesori' })),
        ...measuringData.map(m => ({ name: m.name, target: 'alat-ukur' }))
    ].filter(item => item.name.toLowerCase().includes(query));

    if (matches.length > 0) {
        dropdown.innerHTML = matches.map(m => `
            <div class="search-result-item" onclick="navigateToSection('${m.target}'); document.getElementById('searchResults').classList.add('hidden');">
                <i class="fas fa-search"></i> ${m.name}
            </div>
        `).join('');
        dropdown.classList.remove('hidden');
    } else {
        dropdown.innerHTML = `<div class="search-result-item">Tidak ditemukan materi terkait.</div>`;
        dropdown.classList.remove('hidden');
    }
}
