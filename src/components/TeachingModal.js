import { RELIGIONS_DATA } from '../data.js';
import { appState } from '../state.js';

export function renderTeachingModal() {
  if (!appState.activeTeachingModal) return '';

  const { religionId, index } = appState.activeTeachingModal;
  const religion = RELIGIONS_DATA.find(r => r.id === religionId);
  if (!religion || !religion.teachings[index]) return '';

  const teaching = religion.teachings[index];
  const deep = teaching.deepDive || {};

  return `
    <div class="modal-backdrop active" id="teaching-modal-backdrop">
      <div class="teaching-modal-window" style="--modal-accent: ${religion.color}">
        <!-- Window Top Header -->
        <div class="teaching-window-header">
          <div class="teaching-meta">
            <span class="teaching-faith-chip" style="background: ${religion.glowColor}; color: ${religion.color}">
              ${religion.name} • Core Pillar
            </span>
            <h2>${teaching.icon} ${teaching.principle}</h2>
            <div class="teaching-original-term">${teaching.originalTerm || teaching.principle}</div>
          </div>
          <button class="modal-close-icon-btn" id="btn-close-teaching-modal" title="Close Window">
            <i data-lucide="x" style="width: 20px; height: 20px;"></i>
          </button>
        </div>

        <!-- Window Body Content -->
        <div class="teaching-window-body">
          <div class="teaching-summary-banner">
            <p><strong>Core Concept:</strong> ${teaching.summary || teaching.subtitle}</p>
          </div>

          <!-- Section 1: Deep Philosophical Heritage -->
          <div class="teaching-detail-card">
            <div class="detail-card-head">
              <span class="detail-icon">📜</span>
              <h4>Philosophical Origin & Meaning</h4>
            </div>
            <p>${deep.philosophicalOrigin || 'A foundational principle of spiritual wisdom passed down through generations to cultivate peace and integrity in the human heart.'}</p>
          </div>

          <!-- Section 2: Real-Life Kids Scenario -->
          <div class="teaching-detail-card highlight">
            <div class="detail-card-head">
              <span class="detail-icon">🎒</span>
              <h4>Everyday School & Playground Scenario</h4>
            </div>
            <p>${deep.kidsScenario || 'Practicing this virtue by standing up for friends, sharing resources, and speaking with empathy.'}</p>
          </div>

          <!-- Section 3: Daily Practice Mission -->
          <div class="teaching-detail-card mission">
            <div class="detail-card-head">
              <span class="detail-icon">🎯</span>
              <h4>Your Daily Character Quest</h4>
            </div>
            <p>${deep.dailyMission || 'Notice someone who needs encouragement today and offer your sincere support.'}</p>
          </div>

          <!-- Section 4: Family Dinner Table Prompt -->
          <div class="teaching-detail-card dinner">
            <div class="detail-card-head">
              <span class="detail-icon">🍽️</span>
              <h4>Family Dinner Discussion Question</h4>
            </div>
            <p style="font-style: italic;">"${deep.dinnerQuestion || 'How did practicing kindness make your day better today?'}"</p>
          </div>
        </div>

        <!-- Window Footer -->
        <div class="teaching-window-footer">
          <button class="back-link-btn" id="btn-close-teaching-back">
            <i data-lucide="arrow-left" style="width: 15px; height: 15px;"></i>
            <span>Back to Teachings</span>
          </button>

          <button class="practice-virtue-btn" id="btn-practice-virtue-done" style="background: ${religion.color}">
            <i data-lucide="check" style="width: 16px; height: 16px;"></i>
            <span>I Understand & Will Practice (+15 Stars)</span>
          </button>
        </div>
      </div>
    </div>
  `;
}
