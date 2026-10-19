import { RELIGIONS_DATA } from '../data.js';
import { appState } from '../state.js';
import { renderReligionSymbol } from '../utils/symbolHelper.js';

export function renderParentHub(religionId) {
  const religion = RELIGIONS_DATA.find(r => r.id === religionId);
  if (!religion) return `<div>Religion not found</div>`;

  const { percent, completedCount, totalCount } = appState.getReligionProgress(religion.id);
  const examResult = appState.progress.examScores[religion.id];

  const weeklyDays = [
    { day: 'Mon', mins: 25 },
    { day: 'Tue', mins: 30 },
    { day: 'Wed', mins: 20 },
    { day: 'Thu', mins: 35 },
    { day: 'Fri', mins: 15 },
    { day: 'Sat', mins: 40 },
    { day: 'Sun', mins: 20 }
  ];

  const maxMins = 45;
  const barsHtml = weeklyDays.map(d => {
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
          ${isDone ? 'Completed in study session' : 'Not yet completed'}
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
          <span>Back to Parent Dashboard</span>
        </button>

        <div style="display: flex; align-items: center; gap: 10px;">
          <span class="stat-chip stars">⭐ ${appState.progress.stars} Stars</span>
        </div>
      </div>

      <!-- Report Header Banner -->
      <div class="hub-hero" style="background: ${religion.bgGradient}; --hub-art-bg: url('${religion.artImage}')">
        <div class="hub-hero-info">
          <h2>
            <span class="hub-hero-symbol">${renderReligionSymbol(religion, 36)}</span>
            <span>${religion.name} • Learning Report</span>
          </h2>
          <p style="color: #f1f5f9; font-size: 14.5px;">
            Detailed curriculum attendance, quiz scores, and family discussion prompts for ${appState.activeChild === 'aarav' ? 'Aarav' : 'Ananya'}.
          </p>
        </div>

        <div class="hub-hero-stat">
          <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Attendance</div>
          <div style="font-size: 28px; font-weight: 800;">${percent}%</div>
          <div style="font-size: 11px; opacity: 0.9;">${completedCount}/${totalCount} Lectures Completed</div>
        </div>
      </div>

      <!-- Main Two Column Grid -->
      <div class="parent-grid">
        <!-- Left: Attendance & Screen Time Chart -->
        <div class="parent-card-box">
          <div class="parent-box-header">
            <h3>📈 Weekly Study Screen Time (Minutes / Day)</h3>
            <span style="font-size: 12px; font-weight: 700; color: #0284c7;">Total: 2.8 hrs this week</span>
          </div>
          
          <div class="chart-container">
            ${barsHtml}
          </div>

          <div style="margin-top: 24px;">
            <h4 style="font-size: 15px; margin-bottom: 12px; color: #1e293b;">Lecture Attendance Details</h4>
            <div style="overflow-x: auto;">
              <table class="attendance-table">
                <thead>
                  <tr>
                    <th>Lec</th>
                    <th>Lesson Title</th>
                    <th>Status</th>
                    <th>Note</th>
                  </tr>
                </thead>
                <tbody>
                  ${attendanceRows}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Right: Family Dinner Discussion & Values -->
        <div>
          <!-- Dinner Table Discussion Card -->
          <div class="dinner-prompt-card">
            <div class="dinner-badge">
              <span>🍽️ Tonight's Family Dinner Discussion</span>
            </div>
            <h4>Conversation Prompt on ${religion.name}:</h4>
            <p class="dinner-quote">
              "${religion.teachings[0]?.deepDive?.dinnerQuestion || 'How can our family practice kindness and understanding together this week?'}"
            </p>
            <div class="dinner-tip">
              💡 <strong>Parent Tip:</strong> Ask open-ended questions and encourage your child to connect stories to their everyday school experience.
            </div>
          </div>

          <!-- Official Certificate Card -->
          <div class="cert-status-card">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <div>
                <h4 style="font-size: 16px; font-weight: 800; color: #0f172a; margin-bottom: 4px;">Certificate of Wisdom</h4>
                <p style="font-size: 13px; color: #64748b;">Official completion honor</p>
              </div>
              <div style="font-size: 28px;">🏆</div>
            </div>

            <div style="margin: 16px 0;">
              ${examResult ? `
                <div style="font-size: 14px; font-weight: 700; color: #059669; margin-bottom: 6px;">
                  ✓ Exam Passed with Score: ${examResult.score}% (Grade ${examResult.grade})
                </div>
                <button class="card-action-btn" id="btn-parent-view-cert" data-religion-id="${religion.id}" style="background: var(--primary); color: #fff;">
                  View & Print Official Certificate
                </button>
              ` : `
                <div style="font-size: 13px; color: #64748b; margin-bottom: 8px;">
                  Exam not yet completed by student.
                </div>
                <div style="font-size: 12px; color: #0284c7; font-weight: 700;">
                  Student can take the certification exam in the Student Portal!
                </div>
              `}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
