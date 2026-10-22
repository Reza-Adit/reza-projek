/**
 * CabePedia - Kuliner & Resep Sambal Interactive Scripts
 * Porsi Dinamis, Checklist Memasak, dan Filter Resep Sambal
 */

const RECIPES_DATA = [
  {
    id: "sambal-bawang",
    title: "Sambal Bawang Gurih Pedas Nampol",
    category: "matang",
    origin: "Jawa Timur (Khas Surabaya)",
    prepTime: "10 menit",
    cookTime: "5 menit",
    heatLevel: "Pedas Membara (🔥 85.000 SHU)",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=700&q=80",
    desc: "Sambal bawang legendaris dengan aroma bawang putih yang gurih harum, disiram minyak panas yang mengeluarkan sari pedas cabe rawit secara sempurna.",
    baseServings: 4,
    ingredients: [
      { name: "Cabe rawit merah segar", baseQty: 100, unit: "gram" },
      { name: "Bawang merah kupas", baseQty: 80, unit: "gram" },
      { name: "Bawang putih", baseQty: 4, unit: "siung" },
      { name: "Minyak goreng kelapa panas", baseQty: 80, unit: "ml" },
      { name: "Garam halus", baseQty: 1, unit: "sdt" },
      { name: "Kaldu jamur / penyedap", baseQty: 0.5, unit: "sdt" },
      { name: "Gula pasir", baseQty: 0.5, unit: "sdt" }
    ],
    steps: [
      "Cuci bersih cabe rawit merah dan bawang, tiriskan hingga benar-benar kering.",
      "Ulek kasar cabe rawit, bawang merah, dan bawang putih bersama garam dan gula pasir.",
      "Panaskan minyak kelapa di wajan hingga benar-benar panas berasap tipis.",
      "Siramkan minyak panas langsung ke atas cobek berisi ulekan sambal, aduk cepat.",
      "Koreksi rasa gurihnya. Sambal siap disantap dengan ayam goreng, tempe, atau bebek!"
    ]
  },
  {
    id: "sambal-matah",
    title: "Sambal Matah Khas Bali Asli",
    category: "mentah",
    origin: "Bali",
    prepTime: "15 menit",
    cookTime: "2 menit",
    heatLevel: "Pedas Segar (🔥 65.000 SHU)",
    image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=700&q=80",
    desc: "Sambal mentah tanpa ulekan dengan rajangan halus serai, daun jeruk, dan perasan jeruk limau yang menyatu dalam minyak kelapa panas.",
    baseServings: 4,
    ingredients: [
      { name: "Cabe rawit merah iris tipis", baseQty: 15, unit: "butir" },
      { name: "Bawang merah iris halus", baseQty: 10, unit: "siung" },
      { name: "Batang serai bagian putih (iris sangat halus)", baseQty: 3, unit: "batang" },
      { name: "Daun jeruk buang tulang iris tipis", baseQty: 4, unit: "lembar" },
      { name: "Terasi bakar haluskan", baseQty: 0.5, unit: "sdt" },
      { name: "Minyak kelapa asli / coconut oil", baseQty: 50, unit: "ml" },
      { name: "Jeruk limau (peras airnya)", baseQty: 2, unit: "buah" },
      { name: "Garam secukupnya", baseQty: 0.75, unit: "sdt" }
    ],
    steps: [
      "Campur semua bahan iris (cabe, bawang merah, serai, daun jeruk) dalam satu mangkuk kaca/keramik.",
      "Tambahkan terasi bakar, garam, dan sedikit gula. Remas-remas lembut dengan sendok/sarung tangan agar sari aromatiknya keluar.",
      "Panaskan minyak kelapa hingga harum dan panas.",
      "Tuangkan minyak kelapa panas ke atas racikan sambal, lalu aduk rata.",
      "Beri perasan air jeruk limau, aduk kembali. Nikmati dengan ikan bakar atau ayam betutu."
    ]
  },
  {
    id: "sambal-terasi",
    title: "Sambal Terasi Goreng Juara",
    category: "matang",
    origin: "Jawa Barat / Sunda",
    prepTime: "10 menit",
    cookTime: "12 menit",
    heatLevel: "Pedas Gurih Terasi (🔥 45.000 SHU)",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=700&q=80",
    desc: "Sambal terasi goreng bertekstur legit dengan tomat merah masak yang memberi sensasi manis gurih asam pedas yang seimbang.",
    baseServings: 4,
    ingredients: [
      { name: "Cabe merah keriting", baseQty: 12, unit: "buah" },
      { name: "Cabe rawit merah", baseQty: 10, unit: "buah" },
      { name: "Bawang merah", baseQty: 6, unit: "butir" },
      { name: "Tomat merah ukuran sedang", baseQty: 1.5, unit: "buah" },
      { name: "Terasi udang berkualitas", baseQty: 1.5, unit: "sdt" },
      { name: "Gula merah sisir", baseQty: 1.5, unit: "sdm" },
      { name: "Minyak untuk menumis", baseQty: 40, unit: "ml" },
      { name: "Garam & kaldu bubuk", baseQty: 1, unit: "sdt" }
    ],
    steps: [
      "Goreng sebentar cabe keriting, cabe rawit, bawang merah, tomat, dan terasi hingga layu dan harum.",
      "Angkat dan pindahkan ke cobek batu.",
      "Ulek semua bahan bersama gula merah, garam, dan kaldu bubuk hingga tekstur yang diinginkan.",
      "Tumis kembali sambal ulek di sisa minyak goreng dengan api kecil hingga warna berubah menjadi merah tua mengkilap berminyak.",
      "Sajikan bersama lalapan segar, ikan asin, atau nasi liwet hangat."
    ]
  },
  {
    id: "sambal-ijo",
    title: "Sambal Ijo Khas Rumah Makan Padang",
    category: "daerah",
    origin: "Minangkabau, Sumatera Barat",
    prepTime: "15 menit",
    cookTime: "15 menit",
    heatLevel: "Pedas Sedang Harum (🔥 30.000 SHU)",
    image: "https://images.unsplash.com/photo-1525607551316-4a8e16d1f9ba?auto=format&fit=crop&w=700&q=80",
    desc: "Sambal ijo legendaris beraroma minyak kelapa dan asam kandis yang tidak langu karena teknik kukus sebelum ditumis lembut.",
    baseServings: 5,
    ingredients: [
      { name: "Cabe hijau besar", baseQty: 200, unit: "gram" },
      { name: "Cabe rawit hijau", baseQty: 50, unit: "gram" },
      { name: "Tomat hijau muda", baseQty: 3, unit: "buah" },
      { name: "Bawang merah", baseQty: 8, unit: "siung" },
      { name: "Bawang putih", baseQty: 2, unit: "siung" },
      { name: "Minyak kelapa untuk menumis", baseQty: 60, unit: "ml" },
      { name: "Air jeruk nipis", baseQty: 1, unit: "sdm" },
      { name: "Garam halus", baseQty: 1.25, unit: "sdt" }
    ],
    steps: [
      "Kukus cabe hijau, rawit hijau, bawang merah, bawang putih, dan tomat hijau selama 7 menit hingga layu.",
      "Ulek kasar cabe dan bumbu kukus secara bertahap (jangan terlalu halus agar bertekstur otentik).",
      "Panaskan minyak kelapa di wajan, masukkan ulekan sambal ijo.",
      "Tambahkan garam dan perasan air jeruk nipis. Tumis dengan api sedang cenderung kecil hingga minyak meresap.",
      "Angkat saat aroma harum khas Minang tercium pekat. Nikmati dengan dendeng batokok atau ayam pop!"
    ]
  }
];

let currentRecipeServings = {};

function initKulinerPage() {
  const container = document.getElementById('recipesContainer');
  const filterBtns = document.querySelectorAll('.recipe-filter-btn');

  // Initialize servings default
  RECIPES_DATA.forEach(r => {
    currentRecipeServings[r.id] = r.baseServings;
  });

  let activeCategory = 'all';

  function renderRecipes() {
    if (!container) return;

    const filtered = RECIPES_DATA.filter(r => {
      if (activeCategory === 'all') return true;
      return r.category === activeCategory;
    });

    container.innerHTML = filtered.map(recipe => {
      const servings = currentRecipeServings[recipe.id] || recipe.baseServings;
      const ratio = servings / recipe.baseServings;

      return `
        <article class="card-glass recipe-card" id="recipe-${recipe.id}">
          <div class="recipe-header-img">
            <img src="${recipe.image}" alt="${recipe.title}" loading="lazy" />
            <span class="badge badge-heat extreme" style="position: absolute; top: 12px; right: 12px;">
              ${recipe.origin}
            </span>
          </div>

          <div style="flex-grow: 1;">
            <div class="recipe-meta">
              <span>⏱️ Persiapan: ${recipe.prepTime}</span>
              <span>🍳 Masak: ${recipe.cookTime}</span>
            </div>

            <h3 style="margin-bottom: 8px;">${recipe.title}</h3>
            <p style="font-size: 0.88rem; color: var(--fire-accent); font-weight: 600; margin-bottom: 12px;">
              ${recipe.heatLevel}
            </p>
            <p style="margin-bottom: 20px;">${recipe.desc}</p>

            <!-- Servings Controller -->
            <div class="servings-controller">
              <span style="font-size: 0.9rem; font-weight: 600; color: #fff;">
                Kalkulator Porsi Sambal:
              </span>
              <div class="servings-btns">
                <button class="qty-btn" onclick="updateServings('${recipe.id}', -1)" aria-label="Kurangi porsi">-</button>
                <span class="qty-val" id="qty-${recipe.id}">${servings}</span>
                <span style="font-size: 0.85rem; color: var(--text-muted);">Porsi</span>
                <button class="qty-btn" onclick="updateServings('${recipe.id}', 1)" aria-label="Tambah porsi">+</button>
              </div>
            </div>

            <!-- Ingredients List -->
            <div style="background: rgba(0,0,0,0.25); border-radius: var(--radius-sm); padding: 18px; margin-bottom: 24px;">
              <h4 style="font-size: 1rem; margin-bottom: 12px; color: var(--fire-secondary);">
                📝 Takaran Bahan (Untuk ${servings} Porsi):
              </h4>
              <div id="ingredients-${recipe.id}">
                ${renderIngredients(recipe, ratio)}
              </div>
            </div>

            <!-- Steps with Interactive Checklist -->
            <div>
              <h4 style="font-size: 1rem; margin-bottom: 12px; color: #fff;">
                👨‍🍳 Langkah Memasak (Klik untuk tandai selesai):
              </h4>
              <ul class="step-checklist">
                ${recipe.steps.map((step, idx) => `
                  <li onclick="toggleStepCheck(this)">
                    <input type="checkbox" id="step-${recipe.id}-${idx}" />
                    <label for="step-${recipe.id}-${idx}">
                      <strong>${idx + 1}.</strong> ${step}
                    </label>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  function renderIngredients(recipe, ratio) {
    return recipe.ingredients.map(ing => {
      let scaledQty = (ing.baseQty * ratio);
      // Format number nicely (round to max 2 decimals)
      scaledQty = Math.round(scaledQty * 100) / 100;
      return `
        <div class="ingredient-item">
          <span>${ing.name}</span>
          <strong style="color: #fff;">${scaledQty} ${ing.unit}</strong>
        </div>
      `;
    }).join('');
  }

  window.updateServings = function(recipeId, delta) {
    const current = currentRecipeServings[recipeId] || 4;
    const newQty = Math.max(1, Math.min(25, current + delta));
    currentRecipeServings[recipeId] = newQty;

    const qtySpan = document.getElementById(`qty-${recipeId}`);
    if (qtySpan) qtySpan.textContent = newQty;

    const recipe = RECIPES_DATA.find(r => r.id === recipeId);
    if (recipe) {
      const ratio = newQty / recipe.baseServings;
      const ingContainer = document.getElementById(`ingredients-${recipeId}`);
      if (ingContainer) {
        ingContainer.innerHTML = renderIngredients(recipe, ratio);
      }
      window.showToast(`Porsi ${recipe.title} disesuaikan ke ${newQty} porsi.`);
    }
  };

  window.toggleStepCheck = function(elem) {
    const checkbox = elem.querySelector('input[type="checkbox"]');
    if (checkbox) {
      // Toggle checkbox only if not clicking directly on checkbox (avoid double event)
      if (event.target !== checkbox) {
        checkbox.checked = !checkbox.checked;
      }
      elem.classList.toggle('completed', checkbox.checked);
      if (checkbox.checked) {
        window.showToast("Langkah ditandai selesai! 🎉", 1800);
      }
    }
  };

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category') || 'all';
      renderRecipes();
    });
  });

  renderRecipes();
}

document.addEventListener('DOMContentLoaded', () => {
  initKulinerPage();
});
