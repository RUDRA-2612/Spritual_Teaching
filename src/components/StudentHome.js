import { RELIGIONS_DATA, DAILY_QUOTES } from '../data.js';
import { appState } from '../state.js';
import { renderReligionSymbol } from '../utils/symbolHelper.js';

export function renderStudentHome() {
  const quote = DAILY_QUOTES[0];

  const cardsHtml = RELIGIONS_DATA.map(religion => {
    const { percent, completedCount, totalCount } = appState.getReligionProgress(religion.id);
    const symbolHtml = renderReligionSymbol(religion, 26);

    return `
      <div class="religion-card" data-religion-id="${religion.id}" style="--card-glow: ${religion.glowColor}; --religion-color: ${religion.color}">
        <!-- Card Header with Religion Artwork & Subtle Gradient -->
        <div class="card-header-art">
          <img src="${religion.artImage}" class="art-bg-img" alt="${religion.name}" />
          <div class="card-symbol-badge ${religion.id === 'sikhism' ? 'sikh-badge' : ''}">${symbolHtml}</div>
          <div class="card-title-meta">
            <div class="card-faith-name">${religion.name}</div>
            <div class="card-faith-sub">${religion.hindiName}</div>
          </div>
        </div>
        
        <div class="card-body">
          <div class="virtue-tags">
            ${religion.virtues.map(v => `<span class="v-tag" style="--v-accent: ${religion.color}">${v}</span>`).join('')}
          </div>

          <p class="card-description">${religion.summary}</p>

          <div class="progress-container">
            <div class="progress-info">
              <span class="progress-title">Learning Journey</span>
              <span class="progress-num-badge" style="color: ${religion.color}; background: ${religion.glowColor.replace('0.4', '0.12')}">
                ${completedCount}/${totalCount} Completed (${percent}%)
              </span>
            </div>
            <div class="progress-track">
              <div class="progress-fill" style="width: ${percent}%; background: ${religion.color}; box-shadow: 0 0 10px ${religion.color}"></div>
            </div>
          </div>

          <button class="card-action-btn" data-enter-religion="${religion.id}" style="--btn-color: ${religion.color}">
            <span>Enter Wisdom Realm</span>
            <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="main-content">
      <!-- Upgraded Hero Banner with Refined Lines & Clean Typography -->
      <div class="hero-banner">
        <div class="hero-text">
          <div class="hero-badge">
            <i data-lucide="sparkles" style="width: 14px; height: 14px;"></i>
            <span>ज्ञान मूल • Roots of Wisdom Academy</span>
          </div>
          <h2 class="hero-title">
            Where Every Faith Inspires Kindness, Truth & Universal Peace ✨
          </h2>
          <div class="hero-hindi-tagline">
            जहाँ हर धर्म सिखाये करुणा, सेवा और प्रेम का पावन मार्ग
          </div>
          <p class="hero-subtitle">
            A joyful sanctuary for children to explore the golden heart of humanity. Listen to authentic mantras & chants, watch inspiring moral lessons, practice calming mindfulness, and earn multi-faith certificates.
          </p>

          <div class="daily-quote-box">
            <div class="quote-header">
              <span class="quote-icon">🕊️</span>
              <span class="quote-title">Universal Daily Reflection</span>
            </div>
            <div class="quote-body">
              "${quote.quote}"
            </div>
            <div class="quote-author">— ${quote.author}</div>
          </div>
        </div>
      </div>

      <!-- Section Title -->
      <div class="section-header">
        <div>
          <h2>
            <span>Explore World Wisdom Realms</span>
          </h2>
          <p>Choose any sacred path below to listen to authentic chants, watch video parables, and complete interactive lessons.</p>
        </div>
      </div>

      <!-- Religions Cards Grid -->
      <div class="religions-grid">
        ${cardsHtml}
      </div>
    </div>
  `;
}
