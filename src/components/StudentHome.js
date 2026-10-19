import { RELIGIONS_DATA, DAILY_QUOTES } from '../data.js';
import { appState } from '../state.js';

export function renderStudentHome() {
  const quote = DAILY_QUOTES[0];

  const cardsHtml = RELIGIONS_DATA.map(religion => {
    const { percent, completedCount, totalCount } = appState.getReligionProgress(religion.id);
    const examData = appState.progress.examScores[religion.id];

    return `
      <div class="religion-card" data-religion-id="${religion.id}">
        <div class="card-header-art" style="background: ${religion.bgGradient}">
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
            <span>Enter Realm</span>
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
            <span>Universal Wisdom Academy</span>
          </div>
          <h2 class="hero-title">Discover the Beautiful Goodness in Every Faith 🌟</h2>
          <p class="hero-subtitle">
            Explore enchanting moral stories, animated wisdom lessons, and peaceful mindful moments from world traditions.
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
          <p>Choose any faith below to start watching videos, reading stories, and earning virtue stars.</p>
        </div>
      </div>

      <!-- Religions Cards Grid -->
      <div class="religions-grid">
        ${cardsHtml}
      </div>
    </div>
  `;
}
