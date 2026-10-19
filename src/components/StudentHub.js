import { RELIGIONS_DATA } from '../data.js';
import { appState } from '../state.js';
import { renderReligionSymbol } from '../utils/symbolHelper.js';

export function renderStudentHub(religionId, activeTab = 'lectures') {
  const religion = RELIGIONS_DATA.find(r => r.id === religionId);
  if (!religion) return `<div>Religion not found</div>`;

  const { percent, completedCount, totalCount } = appState.getReligionProgress(religion.id);
  const examResult = appState.progress.examScores[religion.id];
  const chant = religion.ambientChant;
  const isChantPlaying = appState.ambientChantPlaying;

  return `
    <div class="main-content hub-view">
      <!-- Back Bar & Top Right Authentic Audio Chant Player -->
      <div class="hub-header-bar">
        <button class="back-btn" id="btn-back-to-realms">
          <i data-lucide="arrow-left" style="width: 16px; height: 16px;"></i>
          <span>Back to All Realms</span>
        </button>

        <div class="chant-player-container">
          <!-- Real Audio Chant Player Button (Top-Right) -->
          <button class="chant-player-btn ${isChantPlaying ? 'playing' : ''}" id="btn-ambient-chant-toggle" data-religion-id="${religion.id}" title="${isChantPlaying ? 'Click to Stop Audio' : 'Click to Play Audio'}">
            ${isChantPlaying ? `
              <div class="equalizer-anim">
                <div class="eq-bar"></div>
                <div class="eq-bar"></div>
                <div class="eq-bar"></div>
                <div class="eq-bar"></div>
              </div>
              <div class="chant-btn-text">
                <span class="chant-btn-title">🔊 Playing: ${chant.name}</span>
                <span class="chant-btn-sub">Click to Stop Audio</span>
              </div>
            ` : `
              <div class="chant-play-icon" style="background: ${religion.color}">
                <i data-lucide="volume-2" style="width: 16px; height: 16px; color: #fff;"></i>
              </div>
              <div class="chant-btn-text">
                <span class="chant-btn-title">▶️ Play Audio Chant</span>
                <span class="chant-track-sub">${chant.name}</span>
              </div>
            `}
          </button>

          <div class="stat-chip stars">
            <span>⭐ ${appState.progress.stars} Stars</span>
          </div>
        </div>
      </div>

      <!-- Religion Hero Banner with Background Sacred Artwork -->
      <div class="hub-hero" style="background: ${religion.bgGradient}; --hub-art-bg: url('${religion.artImage}')">
        <div class="hub-hero-info">
          <h2>
            <span class="hub-hero-symbol">${renderReligionSymbol(religion, 38)}</span>
            <span>${religion.name}</span>
          </h2>
          <p>${religion.summary}</p>
          <div style="font-size: 13px; font-weight: 700; color: #fde68a; margin-top: 8px;">
            🎵 Sacred Sound: ${chant.hindiLabel} • ${chant.description}
          </div>
        </div>

        <div class="hub-hero-stat">
          <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Progress</div>
          <div style="font-size: 26px; font-weight: 800;">${percent}%</div>
          <div style="font-size: 11px; opacity: 0.9;">${completedCount}/${totalCount} Completed</div>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <div class="hub-nav-tabs">
        <button class="hub-tab-btn ${activeTab === 'lectures' ? 'active' : ''}" data-hub-tab="lectures">
          <span>🎬 Video Lectures</span>
        </button>
        <button class="hub-tab-btn ${activeTab === 'stories' ? 'active' : ''}" data-hub-tab="stories">
          <span>📚 Moral Stories</span>
        </button>
        <button class="hub-tab-btn ${activeTab === 'teachings' ? 'active' : ''}" data-hub-tab="teachings">
          <span>💡 Core Teachings</span>
        </button>
        <button class="hub-tab-btn ${activeTab === 'calm' ? 'active' : ''}" data-hub-tab="calm">
          <span>🧘 Mindful Calm</span>
        </button>
        <button class="hub-tab-btn ${activeTab === 'exam' ? 'active' : ''}" data-hub-tab="exam">
          <span>📝 Exam & Quiz</span>
        </button>
      </div>

      <!-- Tab Content Area -->
      <div class="tab-content-wrapper">
        ${renderTabContent(religion, activeTab, examResult)}
      </div>
    </div>
  `;
}

function renderTabContent(religion, activeTab, examResult) {
  if (activeTab === 'lectures') {
    return renderLecturesTab(religion);
  } else if (activeTab === 'stories') {
    return renderStoriesTab(religion);
  } else if (activeTab === 'teachings') {
    return renderTeachingsTab(religion);
  } else if (activeTab === 'calm') {
    return renderCalmTab(religion);
  } else if (activeTab === 'exam') {
    return renderExamTab(religion, examResult);
  }
  return '';
}

function renderLecturesTab(religion) {
  const currentLecture = religion.lectures[0];
  const isCompleted = appState.progress.completedLectures[currentLecture.id];

  const playlistHtml = religion.lectures.map((lec, idx) => {
    const done = appState.progress.completedLectures[lec.id];
    return `
      <div class="lecture-list-item ${idx === 0 ? 'active' : ''}" data-lecture-item="${lec.id}">
        <div class="lecture-num">
          ${done ? '✓' : idx + 1}
        </div>
        <div class="lecture-info">
          <div class="lecture-title">${lec.title}</div>
          <div class="lecture-dur">${lec.duration} • ${done ? '<span style="color:#10b981; font-weight:700;">Completed</span>' : 'Pending'}</div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="tab-pane active">
      <div class="video-layout">
        <div>
          <div class="video-player-box">
            <div class="video-screen" style="background-image: url('${religion.artImage}');">
              <button class="play-pause-btn" id="btn-video-play">
                <i data-lucide="play" style="width: 28px; height: 28px; fill: var(--primary);"></i>
              </button>
              <div class="video-caption">Animated Lesson: ${currentLecture.title}</div>
            </div>
            
            <div class="video-controls-bar">
              <span style="font-size: 12px; font-weight: 600;">02:40</span>
              <div class="scrub-track">
                <div class="scrub-progress"></div>
              </div>
              <span style="font-size: 12px; font-weight: 600;">${currentLecture.duration}</span>
              <span style="font-size: 11px; background:#334155; padding: 2px 6px; border-radius:4px;">1.0x</span>
            </div>
          </div>

          <div class="video-details-box">
            <h3 style="font-size: 18px; margin-bottom: 6px;">${currentLecture.title}</h3>
            <p style="font-size: 13.5px; color: #475569; line-height: 1.6;">${currentLecture.description}</p>
            
            <button class="complete-lecture-btn" id="btn-complete-lecture" data-lecture-id="${currentLecture.id}">
              <i data-lucide="${isCompleted ? 'check-circle-2' : 'award'}" style="width: 18px; height: 18px;"></i>
              <span>${isCompleted ? 'Lecture Completed (+20 Stars Earned!)' : 'Mark as Completed (+20 Stars)'}</span>
            </button>
          </div>
        </div>

        <div class="playlist-card">
          <h3>Course Lectures (${religion.lectures.length})</h3>
          <div>
            ${playlistHtml}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderStoriesTab(religion) {
  const story = religion.storybook;
  return `
    <div class="tab-pane active">
      <div class="storybook-container">
        <div class="story-art-frame">
          <img src="${story.art}" alt="${story.title}" />
        </div>

        <div class="story-content">
          <div class="audio-narrator-bar">
            <button class="audio-play-btn" id="btn-read-aloud">
              <i data-lucide="volume-2" style="width: 18px; height: 18px;"></i>
            </button>
            <div style="flex: 1;">
              <div style="font-size: 13px; font-weight: 700; color: #1e1b4b;">Listen to Audio Story</div>
              <div style="font-size: 11.5px; color: #64748b;">Narration by Wisdom Sage • Click to read aloud</div>
            </div>
          </div>

          <h3>${story.title}</h3>
          
          <div class="story-body-text" id="story-paragraphs">
            ${story.text.split('\n\n').map(p => `<p style="margin-bottom: 12px;">${p}</p>`).join('')}
          </div>

          <div class="moral-takeaway-banner">
            🌟 <strong>Moral Takeaway:</strong> ${story.moralTakeaway}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderTeachingsTab(religion) {
  const cardsHtml = religion.teachings.map((t, idx) => `
    <div class="flip-card" data-flip-card="${idx}">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <div class="card-icon">${t.icon}</div>
          <h4>${t.principle}</h4>
          <span>${t.subtitle}</span>
          <div style="font-size: 11px; color: var(--primary); font-weight: 700; margin-top: 14px;">
            Tap to see real-life example ➔
          </div>
        </div>
        <div class="flip-card-back">
          <h4>🌟 Example for Kids</h4>
          <p>${t.example}</p>
          <div style="font-size: 11px; opacity: 0.8; margin-top: 12px;">Tap to flip back ↺</div>
        </div>
      </div>
    </div>
  `).join('');

  return `
    <div class="tab-pane active">
      <div class="section-header">
        <div>
          <h2><span>Core Pillars of ${religion.name}</span></h2>
          <p>Tap any card below to flip and discover how to practice these virtues in everyday life!</p>
        </div>
      </div>

      <div class="flipcards-grid">
        ${cardsHtml}
      </div>

      <div class="symbols-box">
        <h4 style="font-size: 16px; margin-bottom: 8px;">Sacred Symbol Meaning: ${religion.symbol}</h4>
        <p style="font-size: 13.5px; color: #475569; line-height: 1.6;">
          The sacred symbol <strong>${religion.symbol}</strong> represents eternal harmony, the cycles of ethical duty, and the luminous search for truth and peace inside each human heart.
        </p>
      </div>
    </div>
  `;
}

function renderCalmTab(religion) {
  const calm = religion.calm;
  return `
    <div class="tab-pane active">
      <div class="calm-zone-container">
        <h2 style="font-size: 26px; font-weight: 800; margin-bottom: 8px;">${calm.title}</h2>
        <p style="color: #cbd5e1; max-width: 500px; margin: 0 auto;">
          Take a deep peaceful breath. Watch the glowing sphere expand as you breathe in, and contract as you breathe out.
        </p>

        <div class="calm-sphere-wrapper">
          <div class="breathing-sphere">
            <span id="breathing-label">Breathe In...</span>
          </div>
        </div>

        <div style="font-size: 16px; font-style: italic; color: #fde68a; margin: 18px 0;">
          "${calm.affirmation}"
        </div>

        <button class="sound-chime-btn" id="btn-sound-chime" data-sound-type="${calm.chimeSound}">
          <i data-lucide="bell" style="width: 18px; height: 18px;"></i>
          <span>Play Single Chime Sound</span>
        </button>
      </div>
    </div>
  `;
}

function renderExamTab(religion, examResult) {
  const questions = religion.finalExam;

  if (examResult) {
    return `
      <div class="tab-pane active">
        <div class="exam-container">
          <div class="result-card">
            <div class="score-badge">${examResult.score}%</div>
            <h3 style="font-size: 24px; color: #1e1b4b; margin-bottom: 8px;">Exam Passed with Grade ${examResult.grade}! 🏆</h3>
            <p style="color: #64748b; max-width: 450px; margin: 0 auto 20px auto;">
              Congratulations! You demonstrated a deep, compassionate understanding of the teachings of ${religion.name}.
            </p>

            <button class="submit-exam-btn" id="btn-view-certificate" data-religion-id="${religion.id}">
              <i data-lucide="award" style="width: 18px; height: 18px;"></i>
              <span>View Official Certificate of Wisdom</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  const questionsHtml = questions.map((q, qIdx) => `
    <div class="question-card" data-q-idx="${qIdx}">
      <div class="q-number">Question ${qIdx + 1} of ${questions.length}</div>
      <div class="q-text">${q.question}</div>
      <div class="options-grid">
        ${q.options.map((opt, optIdx) => `
          <button class="opt-btn" data-q-idx="${qIdx}" data-opt-idx="${optIdx}">
            <span style="width: 24px; height: 24px; border-radius: 50%; background: #e2e8f0; display: inline-flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700;">
              ${String.fromCharCode(65 + optIdx)}
            </span>
            <span>${opt}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');

  return `
    <div class="tab-pane active">
      <div class="exam-container">
        <div class="exam-header">
          <div>
            <h3 style="font-size: 20px; font-weight: 800; color: #0f172a;">Certification Exam: ${religion.name}</h3>
            <p style="font-size: 13px; color: #64748b;">Answer all 5 questions to receive your official Certificate of Completion.</p>
          </div>
          <div style="font-size: 13px; font-weight: 700; color: var(--primary); background: #eef2ff; padding: 6px 14px; border-radius: var(--radius-pill);">
            Pass Mark: 80%
          </div>
        </div>

        <form id="exam-form" data-religion-id="${religion.id}">
          ${questionsHtml}
          
          <div style="margin-top: 28px; text-align: center;">
            <button type="submit" class="submit-exam-btn">
              <i data-lucide="send" style="width: 18px; height: 18px;"></i>
              <span>Submit Exam & Get Certificate (+50 Stars)</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}
