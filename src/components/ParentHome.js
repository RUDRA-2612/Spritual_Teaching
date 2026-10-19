import { RELIGIONS_DATA } from '../data.js';
import { appState } from '../state.js';
import { renderReligionSymbol } from '../utils/symbolHelper.js';

export function renderParentHome() {
  const cardsHtml = RELIGIONS_DATA.map(religion => {
    const { percent, completedCount, totalCount } = appState.getReligionProgress(religion.id);
    const examData = appState.progress.examScores[religion.id];
    const symbolHtml = renderReligionSymbol(religion, 26);

    return `
      <div class="religion-card" data-parent-religion-id="${religion.id}" style="--card-glow: ${religion.glowColor}">
        <!-- Card Header with Religion Artwork & Subtle Gradient -->
        <div class="card-header-art">
          <img src="${religion.artImage}" class="art-bg-img" alt="${religion.name}" />
          <div class="card-symbol-badge ${religion.id === 'sikhism' ? 'sikh-badge' : ''}">${symbolHtml}</div>
          <div class="card-title-meta">
            <div class="card-faith-name">${religion.name}</div>
            <div class="card-faith-sub">${religion.subname}</div>
          </div>
        </div>
        
        <div class="card-body">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-size: 12px; font-weight: 700; color: #64748b;">Certification Status</span>
            ${examData 
              ? `<span style="background: #ecfdf5; color: #065f46; font-size: 12px; font-weight: 800; padding: 3px 8px; border-radius: 6px;">Passed ${examData.score}% (${examData.grade})</span>` 
              : `<span style="background: #fff7ed; color: #c2410c; font-size: 11.5px; font-weight: 700; padding: 3px 8px; border-radius: 6px;">In Progress</span>`
            }
          </div>

          <div class="progress-container">
            <div class="progress-info">
              <span class="progress-title">Lecture Attendance</span>
              <span class="progress-num-badge" style="color: ${religion.color}; background: ${religion.glowColor.replace('0.45', '0.12')}">
                ${completedCount} / ${totalCount} (${percent}%)
              </span>
            </div>
            <div class="progress-track">
              <div class="progress-fill" style="width: ${percent}%; background: ${religion.color}"></div>
            </div>
          </div>

          <button class="card-action-btn" data-parent-enter-religion="${religion.id}" style="background: #e0f2fe; color: #0369a1; border-color: #bae6fd;">
            <span>View Learning Insights & Dinner Prompts</span>
            <i data-lucide="bar-chart-2" style="width: 16px; height: 16px;"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="main-content">
      <!-- Parent Executive Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; flex-wrap: wrap; gap: 14px;">
        <div>
          <h2 style="font-family: var(--font-display); font-size: 26px; font-weight: 800; color: #0f172a;">
            👨‍👩‍👧 OmniWisdom Academy • Parent & Educator Portal
          </h2>
          <p style="font-size: 14px; color: #64748b;">
            Track your child's moral learning journey, attendance, and weekly study streaks across all world religions.
          </p>
        </div>

        <!-- Child Selector -->
        <div style="display: flex; align-items: center; gap: 10px; background: #ffffff; padding: 6px 14px; border-radius: var(--radius-pill); border: 1px solid #e2e8f0; box-shadow: var(--shadow-sm);">
          <span style="font-size: 12px; font-weight: 700; color: #64748b;">Active Child:</span>
          <select id="child-selector" style="border: none; background: transparent; font-family: var(--font-display); font-size: 13.5px; font-weight: 800; color: #0369a1; cursor: pointer; outline: none;">
            <option value="rudra" ${appState.activeChild === 'rudra' ? 'selected' : ''}>Rudra (Age 8 • Grade 3)</option>
            <option value="ananya" ${appState.activeChild === 'ananya' ? 'selected' : ''}>Ananya Sharma (Age 11 • Grade 6)</option>
          </select>
        </div>
      </div>

      <!-- Quick Executive Metrics Cards -->
      <div class="parent-kpi-grid">
        <div class="kpi-card">
          <div class="kpi-icon" style="background: #eff6ff; color: #2563eb;">📚</div>
          <div>
            <div class="kpi-value">${Object.keys(appState.progress.completedLectures).length} / 28</div>
            <div class="kpi-label">Lectures Completed Across Traditions</div>
          </div>
        </div>

        <div class="kpi-card">
          <div class="kpi-icon" style="background: #fef3c7; color: #d97706;">⭐</div>
          <div>
            <div class="kpi-value">${appState.progress.stars} Stars</div>
            <div class="kpi-label">Character & Virtue Honors</div>
          </div>
        </div>

        <div class="kpi-card">
          <div class="kpi-icon" style="background: #ecfdf5; color: #059669;">🌱</div>
          <div>
            <div class="kpi-value">7 Traditions</div>
            <div class="kpi-label">Universal Moral Curriculum</div>
          </div>
        </div>

        <div class="kpi-card">
          <div class="kpi-icon" style="background: #fdf2f8; color: #db2777;">🔥</div>
          <div>
            <div class="kpi-value">${appState.progress.streak} Days</div>
            <div class="kpi-label">Consecutive Reflection Streak</div>
          </div>
        </div>
      </div>

      <div class="section-header" style="margin-top: 32px;">
        <div>
          <h2><span>Tradition-by-Tradition Progress Reports</span></h2>
          <p>Select any tradition below to view lecture attendance logs, quiz scores, and family dinner discussion prompts.</p>
        </div>
      </div>

      <!-- Religion Cards Grid -->
      <div class="religions-grid">
        ${cardsHtml}
      </div>
    </div>
  `;
}
