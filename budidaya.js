/**
 * CabePedia - Budidaya Cabe Interactive Scripts
 * Kalkulator Tanam, Kebutuhan Pupuk & Media, Accordion FAQ
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Interactive Planting Calculator
  const plantCountInput = document.getElementById('plantCount');
  const plantMediumSelect = document.getElementById('plantMedium');
  const chiliTypeSelect = document.getElementById('chiliType');

  const resSoil = document.getElementById('resSoil');
  const resFertilizer = document.getElementById('resFertilizer');
  const resWater = document.getElementById('resWater');
  const resYield = document.getElementById('resYield');
  const resHarvestTime = document.getElementById('resHarvestTime');

  function calculatePlantingNeeds() {
    if (!plantCountInput) return;

    const count = Math.max(1, parseInt(plantCountInput.value) || 1);
    const medium = plantMediumSelect ? plantMediumSelect.value : 'polybag';
    const type = chiliTypeSelect ? chiliTypeSelect.value : 'rawit';

    // Soil requirement: Polybag 35x35 requires ~6 kg media tanam per plant, Lahan ~10 kg
    const soilPerPlant = medium === 'polybag' ? 6 : 8;
    const totalSoil = (count * soilPerPlant).toFixed(1);

    // NPK Fertilizer requirement: ~10g per plant per 2 weeks throughout vegetative/generative
    const totalFertilizer = (count * 10 * 6); // Total season grams (~6 applications)

    // Water: ~0.5 liter per plant per day in hot climate
    const totalWaterDaily = (count * 0.6).toFixed(1);

    // Yield per plant in harvest period
    let yieldPerPlant = 0.8; // default rawit ~0.8kg per plant
    let harvestDays = "80 - 90 Hari";

    if (type === 'rawit') {
      yieldPerPlant = 0.9;
      harvestDays = "75 - 85 Hari";
    } else if (type === 'keriting') {
      yieldPerPlant = 1.2;
      harvestDays = "80 - 90 Hari";
    } else if (type === 'katokkon') {
      yieldPerPlant = 0.7;
      harvestDays = "100 - 110 Hari";
    } else if (type === 'habanero') {
      yieldPerPlant = 0.6;
      harvestDays = "90 - 100 Hari";
    }

    const totalEstimatedYield = (count * yieldPerPlant).toFixed(1);

    if (resSoil) resSoil.textContent = `${totalSoil} kg (Tanah & Kompos)`;
    if (resFertilizer) resFertilizer.textContent = `${(totalFertilizer / 1000).toFixed(2)} kg (NPK 16-16-16)`;
    if (resWater) resWater.textContent = `${totalWaterDaily} Liter / hari`;
    if (resYield) resYield.textContent = `± ${totalEstimatedYield} kg buah`;
    if (resHarvestTime) resHarvestTime.textContent = harvestDays;
  }

  if (plantCountInput) {
    plantCountInput.addEventListener('input', calculatePlantingNeeds);
  }
  if (plantMediumSelect) {
    plantMediumSelect.addEventListener('change', calculatePlantingNeeds);
  }
  if (chiliTypeSelect) {
    chiliTypeSelect.addEventListener('change', calculatePlantingNeeds);
  }

  // Initial calculation
  calculatePlantingNeeds();

  // 2. Accordion FAQ
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const body = item.querySelector('.accordion-body');

    if (header && body) {
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other items
        accordionItems.forEach(other => {
          other.classList.remove('active');
          const otherBody = other.querySelector('.accordion-body');
          if (otherBody) otherBody.style.maxHeight = null;
        });

        if (!isActive) {
          item.classList.add('active');
          body.style.maxHeight = body.scrollHeight + 30 + 'px';
        }
      });
    }
  });

  // Open first accordion by default if present
  if (accordionItems.length > 0) {
    const firstBody = accordionItems[0].querySelector('.accordion-body');
    accordionItems[0].classList.add('active');
    if (firstBody) firstBody.style.maxHeight = firstBody.scrollHeight + 30 + 'px';
  }
});
