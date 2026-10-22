/**
 * CabePedia - Varietas Data & Interactive Scripts
 * Ensiklopedia Cabe, Filter Scoville, Komparasi, dan Modal Detail
 */

const CHILI_DATA = [
  {
    id: "rawit-merah",
    name: "Cabe Rawit Merah (Bird's Eye)",
    latin: "Capsicum frutescens",
    origin: "Indonesia / Asia Tenggara",
    category: "lokal",
    heatLevel: "hot",
    shuMin: 50000,
    shuMax: 100000,
    shuDisplay: "50.000 - 100.000",
    image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=700&q=80",
    desc: "Cabe legendaris andalan kuliner Indonesia. Berukuran kecil namun memiliki sengatan pedas tajam langsung yang meledak di lidah.",
    flavorProfile: "Pedas tajam menusuk, aroma segar pekat, sedikit sentuhan asam alami.",
    culinaryUses: "Sambal bawang, sambal korek, gorengan cabe rawit, seblak, rica-rica.",
    characteristics: "Tumbuh tegak menghadap ke atas, kulit tipis mengkilap, berubah dari hijau tua ke merah menyala saat matang."
  },
  {
    id: "katokkon",
    name: "Cabe Katokkon (Toraja)",
    latin: "Capsicum chinense",
    origin: "Tana Toraja, Sulawesi Selatan",
    category: "lokal",
    heatLevel: "extreme",
    shuMin: 100000,
    shuMax: 290000,
    shuDisplay: "100.000 - 290.000",
    image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=700&q=80",
    desc: "Cabe bangsawan khas Toraja yang berbentuk bulat bergelombang menyerupai paprika mini dengan aroma wangi buah yang eksotis.",
    flavorProfile: "Aroma herbal aromatik kuat, fruity, pedas tebal membakar tenggorokan secara bertahan lama.",
    culinaryUses: "Pa'piong Toraja, masakan daging pedas khas Sulawesi, sambal katokkon tumbuk.",
    characteristics: "Hanya tumbuh optimal di dataran tinggi Toraja (>1000 mdpl), bentuk bulat gemuk bergelombang."
  },
  {
    id: "hiyung",
    name: "Cabe Hiyung (Tapin)",
    latin: "Capsicum frutescens L.",
    origin: "Tapin, Kalimantan Selatan",
    category: "lokal",
    heatLevel: "extreme",
    shuMin: 94000,
    shuMax: 170000,
    shuDisplay: "94.000 - 170.000",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=700&q=80",
    desc: "Salah satu cabe terpedas di Indonesia yang telah terdaftar sebagai varietas unggul nasional asal Desa Hiyung.",
    flavorProfile: "Tingkat kepedasan hingga 17 kali lipat cabe biasa, sedikit gurih dan tahan simpan lama.",
    culinaryUses: "Abon cabe Hiyung, sambal khas Banjar, bumbu dasar masakan pedas Kalimantan.",
    characteristics: "Tahan simpan hingga 10-14 hari tanpa membusuk, kandungan capsaicin mencapai 94.500 ppm."
  },
  {
    id: "keriting",
    name: "Cabe Merah Keriting",
    latin: "Capsicum annuum",
    origin: "Indonesia / Amerika Tropis",
    category: "lokal",
    heatLevel: "medium",
    shuMin: 20000,
    shuMax: 40000,
    shuDisplay: "20.000 - 40.000",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=700&q=80",
    desc: "Ratu bumbu dapur Indonesia. Berwarna merah cerah dengan permukaan bergelombang, memberikan warna merah memikat pada masakan.",
    flavorProfile: "Pedas moderat, aroma manis langu khas cabe segar, kaya pigmen capsanthin merah pekat.",
    culinaryUses: "Balado Minang, rendang, sambal terasi matang, gulai, tumisan harian.",
    characteristics: "Buah panjang ramping bergelombang meliuk, ujung runcing, kadar air lebih rendah dari cabe besar."
  },
  {
    id: "jalapeno",
    name: "Jalapeño Pepper",
    latin: "Capsicum annuum var. annuum",
    origin: "Meksiko (Xalapa)",
    category: "dunia",
    heatLevel: "mild",
    shuMin: 2500,
    shuMax: 8000,
    shuDisplay: "2.500 - 8.000",
    image: "https://images.unsplash.com/photo-1525607551316-4a8e16d1f9ba?auto=format&fit=crop&w=700&q=80",
    desc: "Cabe paling populer di dunia asal Meksiko dengan daging buah tebal, rasa renyah berair, dan tingkat pedas yang ramah di lidah.",
    flavorProfile: "Segar berair (juicy), renyah, earthy, pedas hangat yang cepat reda.",
    culinaryUses: "Pickled jalapeño (acar taco/burger), Jalapeño poppers isi keju, salsa verde.",
    characteristics: "Bentuk kerucut tumpul berdaging tebal, warna hijau zamrud saat muda lalu merah saat matang."
  },
  {
    id: "habanero",
    name: "Orange Habanero",
    latin: "Capsicum chinense",
    origin: "Amazon / Semenanjung Yucatán",
    category: "dunia",
    heatLevel: "extreme",
    shuMin: 150000,
    shuMax: 350000,
    shuDisplay: "150.000 - 350.000",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=700&q=80",
    desc: "Cabe berbentuk lampion oranye dengan rasa manis buah tropis yang memikat sebelum disusul ledakan pedas yang intens.",
    flavorProfile: "Floral, buah persik/aprikot, citrus, dengan sensasi pedas panas berkepanjangan.",
    culinaryUses: "Saus botolan hot sauce, salsa buah mangga pedas, marinasi daging panggang.",
    characteristics: "Buah menyerupai lentera mini dengan lekukan halus, warna transisi dari hijau ke oranye terang."
  },
  {
    id: "ghost-pepper",
    name: "Bhut Jolokia (Ghost Pepper)",
    latin: "Capsicum chinense x frutescens",
    origin: "Assam, India Timur Laut",
    category: "dunia",
    heatLevel: "insane",
    shuMin: 855000,
    shuMax: 1041427,
    shuDisplay: "855.000 - 1.040.000",
    image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=700&q=80",
    desc: "Mantan pemegang rekor dunia Guinness World Records. Pedasnya mampu melumpuhkan indra perasa bagi yang belum terbiasa.",
    flavorProfile: "Aroma asap manis samar, diiringi sensasi bakar membara yang meningkat selama 10-15 menit.",
    culinaryUses: "Extreme hot sauce, cabai bubuk ultra pedas, pengusir satwa liar di India Timur.",
    characteristics: "Kulit sangat berkerut kasar (bumpy), ujung meruncing, rapuh beraroma pekat."
  },
  {
    id: "carolina-reaper",
    name: "Carolina Reaper",
    latin: "Capsicum chinense",
    origin: "South Carolina, Amerika Serikat",
    category: "dunia",
    heatLevel: "insane",
    shuMin: 1500000,
    shuMax: 2200000,
    shuDisplay: "1.500.000 - 2.200.000+",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=700&q=80",
    desc: "Monster cabe kultus pencipta sensasi teror pedas dunia. Memiliki ekor runcing seperti sengat kalajengking.",
    flavorProfile: "Manis fruity sebentar di detik pertama, langsung meledak menjadi lava cair yang menyengat saraf.",
    culinaryUses: "Tantangan one chip challenge, saus ekstrem ekstrak capsaicin, pengobatan analgesik medis.",
    characteristics: "Kulit merah tua keriput ekstrem dengan ekor runcing mirip ekor kalajengking (scorpion tail)."
  }
];

// Inisialisasi Tampilan Varietas
function initVarietasPage() {
  const container = document.getElementById('chiliCardsContainer');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('searchChili');
  const compareSelectA = document.getElementById('compareChiliA');
  const compareSelectB = document.getElementById('compareChiliB');

  let currentCategory = 'all';
  let currentSearch = '';

  function renderCards() {
    if (!container) return;

    const filtered = CHILI_DATA.filter(item => {
      const matchCat = currentCategory === 'all' || 
                       (currentCategory === 'lokal' && item.category === 'lokal') ||
                       (currentCategory === 'dunia' && item.category === 'dunia') ||
                       (item.heatLevel === currentCategory);

      const matchSearch = item.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
                          item.latin.toLowerCase().includes(currentSearch.toLowerCase()) ||
                          item.origin.toLowerCase().includes(currentSearch.toLowerCase());

      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
          <p style="font-size: 1.2rem; color: var(--text-muted); margin-bottom: 12px;">Tidak ditemukan varietas cabe yang cocok.</p>
          <button class="btn btn-secondary btn-sm" onclick="resetFilters()">Reset Filter</button>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(chili => {
      let badgeClass = 'mild';
      let badgeText = 'Ringan';
      if (chili.heatLevel === 'medium') { badgeClass = 'medium'; badgeText = 'Sedang'; }
      if (chili.heatLevel === 'hot') { badgeClass = 'hot'; badgeText = 'Pedas'; }
      if (chili.heatLevel === 'extreme') { badgeClass = 'extreme'; badgeText = 'Sangat Pedas'; }
      if (chili.heatLevel === 'insane') { badgeClass = 'insane'; badgeText = 'Ekstrem Brutal'; }

      return `
        <div class="card-glass chili-card" data-id="${chili.id}">
          <div class="chili-card-img">
            <img src="${chili.image}" alt="${chili.name}" loading="lazy" />
            <span class="badge badge-heat ${badgeClass} heat-tag">${badgeText}</span>
            <span class="origin-tag">${chili.origin}</span>
          </div>
          <div class="chili-card-body">
            <span style="font-size: 0.8rem; color: var(--fire-accent); font-style: italic; margin-bottom: 4px;">${chili.latin}</span>
            <h3>${chili.name}</h3>
            <div class="shu-display">
              <span class="val">${chili.shuDisplay}</span>
              <span class="unit">SHU</span>
            </div>
            <p>${chili.desc}</p>
            <div class="card-footer">
              <button class="btn btn-secondary btn-sm" onclick="openChiliModal('${chili.id}')">
                Detail Lengkap
              </button>
              <button class="btn btn-primary btn-sm" onclick="quickCompare('${chili.id}')" title="Bandingkan">
                Bandingkan
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Filter Buttons Event
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter') || 'all';
      renderCards();
    });
  });

  // Search Input Event
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim();
      renderCards();
    });
  }

  // Reset helper
  window.resetFilters = function() {
    currentCategory = 'all';
    currentSearch = '';
    if (searchInput) searchInput.value = '';
    filterBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-filter') === 'all'));
    renderCards();
  };

  // Populate Comparator Selects
  function populateComparator() {
    if (!compareSelectA || !compareSelectB) return;

    const options = CHILI_DATA.map(c => `<option value="${c.id}">${c.name} (${c.shuDisplay} SHU)</option>`).join('');
    compareSelectA.innerHTML = options;
    compareSelectB.innerHTML = options;

    // Set defaults: Rawit Merah vs Carolina Reaper
    compareSelectA.value = 'rawit-merah';
    compareSelectB.value = 'carolina-reaper';

    function updateComparison() {
      const chiliA = CHILI_DATA.find(c => c.id === compareSelectA.value);
      const chiliB = CHILI_DATA.find(c => c.id === compareSelectB.value);

      const previewA = document.getElementById('previewCompareA');
      const previewB = document.getElementById('previewCompareB');

      if (previewA && chiliA) {
        previewA.innerHTML = renderCompareCard(chiliA);
      }
      if (previewB && chiliB) {
        previewB.innerHTML = renderCompareCard(chiliB);
      }
    }

    compareSelectA.addEventListener('change', updateComparison);
    compareSelectB.addEventListener('change', updateComparison);

    updateComparison();
  }

  function renderCompareCard(chili) {
    const maxReference = 2200000;
    const pct = Math.min(100, Math.max(5, (chili.shuMax / maxReference) * 100));

    return `
      <div>
        <img src="${chili.image}" alt="${chili.name}" style="width: 100%; height: 140px; object-fit: cover; border-radius: var(--radius-sm); margin-bottom: 12px;" />
        <h4 style="margin-bottom: 4px;">${chili.name}</h4>
        <p style="font-size: 0.82rem; color: var(--fire-accent); margin-bottom: 12px;">${chili.origin}</p>
        <div style="margin-bottom: 12px;">
          <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 4px;">
            <span>Level Scoville:</span>
            <strong style="color: var(--fire-secondary);">${chili.shuDisplay} SHU</strong>
          </div>
          <div style="height: 8px; border-radius: 4px; background: rgba(255,255,255,0.1); overflow: hidden;">
            <div style="width: ${pct}%; height: 100%; background: var(--fire-gradient);"></div>
          </div>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-muted);">${chili.flavorProfile}</p>
      </div>
    `;
  }

  window.quickCompare = function(id) {
    if (compareSelectA && compareSelectB) {
      compareSelectB.value = id;
      const event = new Event('change');
      compareSelectB.dispatchEvent(event);
      document.getElementById('comparatorSection')?.scrollIntoView({ behavior: 'smooth' });
      window.showToast(`Membandingkan dengan ${CHILI_DATA.find(c => c.id === id)?.name}`);
    }
  };

  renderCards();
  populateComparator();
}

// Modal Detail Popup
window.openChiliModal = function(id) {
  const chili = CHILI_DATA.find(c => c.id === id);
  if (!chili) return;

  const modalBackdrop = document.getElementById('chiliModal');
  const modalContent = document.getElementById('modalContent');
  if (!modalBackdrop || !modalContent) return;

  modalContent.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr; gap: 20px;">
      <div style="position: relative; border-radius: var(--radius-md); overflow: hidden; height: 260px;">
        <img src="${chili.image}" alt="${chili.name}" style="width: 100%; height: 100%; object-fit: cover;" />
        <div style="position: absolute; bottom: 12px; left: 12px; background: rgba(0,0,0,0.7); backdrop-filter: blur(8px); padding: 6px 14px; border-radius: 20px; font-size: 0.85rem;">
          📍 Asal: ${chili.origin}
        </div>
      </div>
      <div>
        <span style="font-size: 0.9rem; color: var(--fire-accent); font-style: italic;">${chili.latin}</span>
        <h2 style="font-size: 2rem; margin: 4px 0 16px;">${chili.name}</h2>
        
        <div style="background: rgba(255, 42, 75, 0.08); border: 1px solid rgba(255, 42, 75, 0.3); border-radius: var(--radius-md); padding: 16px; margin-bottom: 20px;">
          <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 4px;">Kadar Kepedasan Scoville (SHU):</div>
          <div style="font-size: 1.8rem; font-family: var(--font-heading); font-weight: 800; color: var(--fire-secondary);">
            ${chili.shuDisplay} <span style="font-size: 1rem; color: var(--text-muted);">SHU</span>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 14px; font-size: 0.95rem;">
          <div>
            <strong style="color: #fff; display: block; margin-bottom: 4px;">📖 Deskripsi Varietas:</strong>
            <p style="color: var(--text-muted);">${chili.desc}</p>
          </div>
          <div>
            <strong style="color: #fff; display: block; margin-bottom: 4px;">👅 Karakter Rasa & Aroma:</strong>
            <p style="color: var(--text-muted);">${chili.flavorProfile}</p>
          </div>
          <div>
            <strong style="color: #fff; display: block; margin-bottom: 4px;">🍳 Rekomendasi Olahan Kuliner:</strong>
            <p style="color: var(--text-muted);">${chili.culinaryUses}</p>
          </div>
          <div>
            <strong style="color: #fff; display: block; margin-bottom: 4px;">🌿 Karakteristik Tanaman:</strong>
            <p style="color: var(--text-muted);">${chili.characteristics}</p>
          </div>
        </div>
      </div>
    </div>
  `;

  modalBackdrop.classList.add('show');
};

window.closeChiliModal = function() {
  const modalBackdrop = document.getElementById('chiliModal');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('show');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initVarietasPage();

  // Close modal when clicking outside
  const modalBackdrop = document.getElementById('chiliModal');
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeChiliModal();
      }
    });
  }
});
