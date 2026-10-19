import { RELIGIONS_DATA } from '../data.js';
import { appState } from '../state.js';

export function renderParentHome() {
  const cardsHtml = RELIGIONS_DATA.map(religion => {
    const { percent, completedCount, totalCount } = appState.getReligionProgress(religion.id);
    const examData = appState.progress.examScores[religion.id];

    return `
      <div class="religion-card" data-parent-religion-id="${religion.id}">
        <div class="card-header-art" style="background: ${religion.bgGradient}">
          <div class="card-symbol-badge">${religion.symbol}</div>
          <div>
            <div class="card-faith-name">${religion.name}</div>
            <div class="card-faith-sub">${religion.hindiName}</div>
          </div>
        </div>
        
        <div class="card-body">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-size: 12px; font-weight: 700; color: #64748b;">Exam Score</span>
            ${examData 
              ? `<span style="background: #ecfdf5; color: #065f46; font-size: 12px; font-weight: 800; padding: 3px 8px; border-radius: 6px;">${examData.score}% (${examData.grade})</span>` 
              : `<span style="background: #fff7ed; color: #c2410c; font-size: 11.5px; font-weight: 700; padding: 3px 8px; border-radius: 6px;">Not Taken</span>`
            }
          </div>

          <div class="progress-container">
            <div class="progress-info">
              <span>Lecture Attendance</span>
              <span>${completedCount} / ${totalCount} (${percent}%)</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill" style="width: ${percent}%; background: ${religion.color}"></div>
            </div>
          </div>

          <button class="card-action-btn" data-parent-enter-religion="${religion.id}" style="background: #e0f2fe; color: #0369a1; border-color: #bae6fd;">
            <span>View Child's Report & Insights</span>
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
            👨‍👩‍👧 Parent Monitoring & Growth Dashboard
          </h2>
          <p style="font-size: 14px; color: #64748b;">
            Track your child's moral learning journey, attendance, and weekly study streaks across all world religions.
          </p>
        </div>

        <!-- Child Selector -->
        <div style="display: flex; align-items: center; gap: 10px; background: #ffffff; padding: 6px 14px; border-radius: var(--radius-pill); border: 1px solid #e2e8f0; box-shadow: var(--shadow-sm);">
          <span style="font-size: 12px; font-weight: 700; color: #64748b;">Enrolled Child:</span>
          <select id="child-selector" style="border: none; background: transparent; font-family: var(--font-display); font-size: 13.5px; font-weight: 800; color: #0369a1; cursor: pointer; outline: none;">
            <option value="aarav" ${appState.activeChild === 'aarav' ? 'selected' : ''}>Aarav Sharma (Age 8 • Grade 3)</option>
            <option value="ananya" ${appState.activeChild === 'ananya' ? 'selected' : ''}>Ananya Sharma (Age 11 • Grade 6)</option>
          </select>
        </div>
      </div>

      <!-- Parent Overview Metric Cards -->
      <div class="parent-overview-cards">
        <div class="parent-stat-card">
          <div class="parent-stat-icon blue">
            <i data-lucide="clock" style="width: 24px; height: 24px;"></i>
          </div>
          <div>
            <div class="parent-stat-val">5.8 hrs</div>
            <div class="parent-stat-lbl">Study Time This Week</div>
          </div>
        </div>

        <div class="parent-stat-card">
          <div class="parent-stat-icon green">
            <i data-lucide="award" style="width: 24px; height: 24px;"></i>
          </div>
          <div>
            <div class="parent-stat-val">94% (A+)</div>
            <div class="parent-stat-lbl">Avg. Exam Performance</div>
          </div>
        </div>

        <div class="parent-stat-card">
          <div class="parent-stat-icon amber">
            <i data-lucide="check-circle-2" style="width: 24px; height: 24px;"></i>
          </div>
          <div>
            <div class="parent-stat-val">16 / 21</div>
            <div class="parent-stat-lbl">Lectures Attended</div>
          </div>
        </div>

        <div class="parent-stat-card">
          <div class="parent-stat-icon purple">
            <i data-lucide="flame" style="width: 24px; height: 24px;"></i>
          </div>
          <div>
            <div class="parent-stat-val">🔥 5 Days</div>
            <div class="parent-stat-lbl">Active Study Streak</div>
          </div>
        </div>
      </div>

      <!-- Section Title -->
      <div class="section-header">
        <div>
          <h2>
            <span>Religion Curriculum Progress</span>
          </h2>
          <p>Click on any faith card below to inspect video attendance timestamps, test records, and dinner conversation prompts.</p>
        </div>
      </div>

      <!-- Religions Cards Grid -->
      <div class="religions-grid">
        ${cardsHtml}
      </div>
    </div>
  `;
}
