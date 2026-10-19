import { RELIGIONS_DATA } from '../data.js';
import { appState } from '../state.js';

export function renderParentHub(religionId) {
  const religion = RELIGIONS_DATA.find(r => r.id === religionId);
  if (!religion) return `<div>Religion not found</div>`;

  const { percent, completedCount, totalCount } = appState.getReligionProgress(religion.id);
  const examResult = appState.progress.examScores[religion.id] || {
    score: religion.parentMetrics.examScore,
    grade: religion.parentMetrics.grade,
    date: 'Recent'
  };

  const metrics = religion.parentMetrics;

  // Max minutes for scaling bars
  const maxMins = Math.max(...metrics.weeklyDays.map(d => d.mins), 45);

  const barsHtml = metrics.weeklyDays.map(d => {
    const heightPercent = Math.round((d.mins / maxMins) * 100);
    const isToday = d.day === 'Sat' || d.day === 'Sun';

    return `
      <div class="chart-bar-group">
        <div class="chart-bar ${isToday ? 'highlight' : ''}" style="height: ${heightPercent}%;">
          <span class="chart-bar-value">${d.mins}m</span>
        </div>
        <span class="chart-bar-label">${d.day}</span>
      </div>
    `;
  }).join('');

  const attendanceRows = religion.lectures.map((lec, idx) => {
    const isDone = appState.progress.completedLectures[lec.id];
    return `
      <tr>
        <td style="font-weight: 700;">#${idx + 1}</td>
        <td>
          <div style="font-weight: 700; color: #1e293b;">${lec.title}</div>
          <div style="font-size: 11.5px; color: #64748b;">${lec.duration}</div>
        </td>
        <td>
          ${isDone 
            ? `<span class="status-badge completed">✓ Completed (100% Watched)</span>` 
            : `<span class="status-badge pending">⏳ Pending</span>`
          }
        </td>
        <td style="font-size: 12px; color: #64748b;">
          ${isDone ? 'Recorded in Session' : 'Not yet started'}
        </td>
      </tr>
    `;
  }).join('');

  return `
    <div class="main-content hub-view">
      <!-- Back Bar -->
      <div class="hub-header-bar">
        <button class="back-btn" id="btn-back-to-parent-home">
          <i data-lucide="arrow-left" style="width: 16px; height: 16px;"></i>
          <span>Back to All Courses</span>
        </button>

        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 12.5px; font-weight: 700; color: #475569;">Viewing Record for:</span>
          <span style="background: #e0f2fe; color: #0369a1; font-weight: 800; font-size: 12px; padding: 4px 10px; border-radius: var(--radius-pill);">
            ${appState.activeChild === 'aarav' ? 'Aarav Sharma' : 'Ananya Sharma'}
          </span>
        </div>
      </div>

      <!-- Hero Summary Banner -->
      <div class="hub-hero" style="background: ${religion.bgGradient}">
        <div class="hub-hero-info">
          <h2>
            <span>${religion.symbol}</span>
            <span>${religion.name} • Child Progress Report</span>
          </h2>
          <p>
            Detailed attendance verification, weekly engagement hours, and certification exam performance.
          </p>
        </div>

        <div style="background: rgba(255,255,255,0.18); backdrop-filter: blur(8px); padding: 14px 22px; border-radius: 12px; text-align: center;">
          <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Overall Score</div>
          <div style="font-size: 26px; font-weight: 800;">${examResult.score}%</div>
          <div style="font-size: 12px; font-weight: 700; color: #fde68a;">Grade ${examResult.grade}</div>
        </div>
      </div>

      <!-- Grid 2 Columns: Weekly Chart & Exam Card -->
      <div class="grid-2">
        <!-- 1. Weekly Learning Chart -->
        <div class="chart-card">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <h3 style="font-family: var(--font-display); font-size: 16px; font-weight: 800; color: #0f172a;">
              📊 Weekly Study Activity (${religion.name})
            </h3>
            <span style="font-size: 12px; font-weight: 700; color: #0284c7; background: #f0f9ff; padding: 4px 10px; border-radius: 999px;">
              Total: ${metrics.weeklyHours} hrs
            </span>
          </div>
          <p style="font-size: 12.5px; color: #64748b; margin-top: 4px;">Daily study minutes spent watching lectures and reading stories.</p>

          <div class="bar-chart-container">
            ${barsHtml}
          </div>
        </div>

        <!-- 2. Exam & Assessment Scorecard -->
        <div class="chart-card">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <h3 style="font-family: var(--font-display); font-size: 16px; font-weight: 800; color: #0f172a;">
              🏆 Formal Certification Exam
            </h3>
            <span style="font-size: 12px; font-weight: 700; color: #16a34a; background: #f0fdf4; padding: 4px 10px; border-radius: 999px;">
              Passed
            </span>
          </div>
          <p style="font-size: 12.5px; color: #64748b; margin-top: 4px;">Comprehensive evaluation of moral principles and story understanding.</p>

          <div style="margin-top: 20px; display: flex; align-items: center; gap: 20px;">
            <div style="width: 75px; height: 75px; border-radius: 50%; background: #ecfdf5; border: 3px solid #10b981; display: flex; flex-direction: column; align-items: center; justify-content: center;">
              <span style="font-size: 20px; font-weight: 800; color: #065f46;">${examResult.score}%</span>
              <span style="font-size: 10px; font-weight: 700; color: #047857;">Grade ${examResult.grade}</span>
            </div>

            <div style="flex: 1;">
              <div style="font-size: 13.5px; font-weight: 700; color: #1e293b; margin-bottom: 4px;">
                Demonstrated Strengths
              </div>
              <p style="font-size: 12.5px; color: #475569; line-height: 1.4;">
                Exceptional grasp of compassion, empathy in moral dilemma scenarios, and historical parables.
              </p>
            </div>
          </div>

          <div style="margin-top: 24px;">
            <button class="card-action-btn" id="btn-parent-view-cert" data-religion-id="${religion.id}" style="background: #f8fafc; color: #334155;">
              <i data-lucide="award" style="width: 16px; height: 16px; color: #d97706;"></i>
              <span>View Child's Official Certificate of Wisdom</span>
            </button>
          </div>
        </div>
      </div>

      <!-- 3. Lecture Attendance Verification Table -->
      <div class="chart-card">
        <h3 style="font-family: var(--font-display); font-size: 16px; font-weight: 800; color: #0f172a; margin-bottom: 4px;">
          🎥 Lecture Attendance Checklist (${completedCount} of ${totalCount} Completed - ${percent}%)
        </h3>
        <p style="font-size: 12.5px; color: #64748b;">
          System auto-verifies attendance once the child watches at least 90% of the video lesson.
        </p>

        <table class="attendance-table">
          <thead>
            <tr>
              <th style="width: 60px;">#</th>
              <th>Lecture Title & Duration</th>
              <th>Attendance Status</th>
              <th>Session Details</th>
            </tr>
          </thead>
          <tbody>
            ${attendanceRows}
          </tbody>
        </table>
      </div>

      <!-- 4. Dinner Table Conversation Prompts -->
      <div class="prompt-card">
        <h4>
          <i data-lucide="message-circle" style="width: 18px; height: 18px;"></i>
          <span>Tonight's Family Dinner Discussion Prompt</span>
        </h4>
        <p>${metrics.dinnerPrompt}</p>
        <div style="margin-top: 10px; display: flex; align-items: center; gap: 8px;">
          <input type="checkbox" id="prompt-check" style="cursor: pointer; width: 16px; height: 16px;" />
          <label for="prompt-check" style="font-size: 12.5px; color: #86198f; font-weight: 600; cursor: pointer;">
            Mark as discussed with my child
          </label>
        </div>
      </div>
    </div>
  `;
}
