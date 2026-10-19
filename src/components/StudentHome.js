import { RELIGIONS_DATA, DAILY_QUOTES } from '../data.js';
import { appState } from '../state.js';

export function renderStudentHome() {
  const quote = DAILY_QUOTES[0];

  const cardsHtml = RELIGIONS_DATA.map(religion => {
    const { percent, completedCount, totalCount } = appState.getReligionProgress(religion.id);

    return `
      <div class="religion-card" data-religion-id="${religion.id}" style="--card-glow: ${religion.glowColor}">
        <!-- Card Header with Religion Artwork & Subtle Gradient -->
        <div class="card-header-art">
          <img src="${religion.artImage}" class="art-bg-img" alt="${religion.name}" />
          <div class="card-symbol-badge">${religion.symbol}</div>
          <div>
            <div class="card-faith-name">${religion.name}</div>
            <div class="card-faith-sub">${religion.hindiName}</div>
          </div>
        </div>
        
        <div class="card-body">
          <div class="virtue-tags">
            ${religion.virtues.map(v => `<span class="v-tag">${v}</span>`).join('')}
          </div>

          <p class="card-description">${religion.summary}</p>

          <div class="progress-container">
            <div class="progress-info">
              <span>Lectures Progress</span>
              <span>${completedCount} / ${totalCount} (${percent}%)</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill" style="width: ${percent}%; background: ${religion.color}"></div>
            </div>
          </div>

          <button class="card-action-btn" data-enter-religion="${religion.id}">
            <span>Enter Wisdom Realm</span>
            <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="main-content">
      <!-- Hero Banner -->
      <div class="hero-banner">
        <div class="hero-text">
          <div class="hero-badge">
            <i data-lucide="sparkles" style="width: 14px; height: 14px;"></i>
            <span>Roots of Wisdom • Multi-Faith Academy</span>
          </div>
          <h2 class="hero-title">Discover the Sacred Goodness in Every Faith 🌟</h2>
          <p class="hero-subtitle">
            Immerse young hearts in inspiring moral stories, animated wisdom lessons, peaceful chants, and virtues from world traditions.
          </p>

          <div class="daily-quote-box">
            "${quote.quote}"
            <span>— ${quote.author}</span>
          </div>
        </div>
      </div>

      <!-- Section Title -->
      <div class="section-header">
        <div>
          <h2>
            <span>World Wisdom Realms</span>
          </h2>
          <p>Choose any tradition below to explore authentic background art, listen to sacred chants, watch video lectures, and take certification exams.</p>
        </div>
      </div>

      <!-- Religions Cards Grid -->
      <div class="religions-grid">
        ${cardsHtml}
      </div>
    </div>
  `;
}
