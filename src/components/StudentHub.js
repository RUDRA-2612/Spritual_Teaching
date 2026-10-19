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
            <span class="hub-hero-symbol">${renderReligionSymbol(religion, 36)}</span>
            <span>${religion.name}</span>
          </h2>
          <p class="hub-hero-sub">${religion.subname}</p>
          <p>${religion.summary}</p>
          <div class="hub-sound-info-tag">
            🎵 Sacred Audio: ${chant.name} • ${chant.description}
          </div>
        </div>

        <div class="hub-hero-stat">
          <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Progress</div>
          <div style="font-size: 28px; font-weight: 800;">${percent}%</div>
          <div style="font-size: 11.5px; opacity: 0.9;">${completedCount}/${totalCount} Completed</div>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <div class="hub-nav-tabs">
        <button class="hub-tab-btn ${activeTab === 'lectures' ? 'active' : ''}" data-hub-tab="lectures">
          <span>🎬 Video Lectures (${religion.lectures.length})</span>
        </button>
        <button class="hub-tab-btn ${activeTab === 'stories' ? 'active' : ''}" data-hub-tab="stories">
          <span>📚 Moral Stories (${religion.stories.length})</span>
        </button>
        <button class="hub-tab-btn ${activeTab === 'teachings' ? 'active' : ''}" data-hub-tab="teachings">
          <span>💡 Core Pillars (${religion.teachings.length})</span>
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

/* =================================================================
   1. VIDEO LECTURES TAB (WORKING PLAYLIST & WORKING VIDEO PLAYER)
   ================================================================= */
function renderLecturesTab(religion) {
  // Select active lecture from state, or default to first lecture
  const currentLecture = religion.lectures.find(l => l.id === appState.activeLectureId) || religion.lectures[0];
  const isCompleted = appState.progress.completedLectures[currentLecture.id];

  const playlistHtml = religion.lectures.map((lec, idx) => {
    const isDone = appState.progress.completedLectures[lec.id];
    const isCurrent = lec.id === currentLecture.id;

    return `
      <div class="lecture-list-item ${isCurrent ? 'active' : ''}" data-select-lecture="${lec.id}">
        <div class="lecture-num ${isDone ? 'done' : ''}">
          ${isDone ? '✓' : idx + 1}
        </div>
        <div class="lecture-info">
          <div class="lecture-title">${lec.title}</div>
          <div class="lecture-dur">
            ${lec.duration} • 
            ${isDone ? '<span class="status-done">Completed</span>' : '<span class="status-pending">Click to Watch</span>'}
          </div>
        </div>
        ${isCurrent ? '<span class="playing-indicator">▶ Now Playing</span>' : ''}
      </div>
    `;
  }).join('');

  return `
    <div class="tab-pane active">
      <div class="video-layout">
        <!-- Main Player Column -->
        <div class="video-player-column">
          <div class="video-player-box">
            <!-- Animated Scene Visual Canvas -->
            <div class="video-screen" id="video-screen-player" style="background-image: url('${religion.artImage}')">
              <div class="video-scene-overlay">
                <button class="play-pause-btn" id="btn-video-play-toggle">
                  <i data-lucide="play" style="width: 32px; height: 32px; fill: #ffffff; color: #ffffff;"></i>
                </button>
                <div class="video-caption-bar">
                  <span class="video-tag">Animated Wisdom Lesson</span>
                  <div class="video-headline">${currentLecture.title}</div>
                </div>
              </div>
            </div>
            
            <!-- Controls Bar -->
            <div class="video-controls-bar">
              <button class="ctrl-btn" id="btn-video-ctrl-play" title="Play / Pause">
                <i data-lucide="play" style="width: 16px; height: 16px;"></i>
              </button>
              <span class="time-display" id="video-time-cur">01:25</span>
              <div class="scrub-track" id="video-scrub-bar">
                <div class="scrub-progress" id="video-scrub-fill" style="width: 35%;"></div>
              </div>
              <span class="time-display">${currentLecture.duration}</span>
              <span class="speed-pill">1.0x</span>
            </div>
          </div>

          <div class="video-details-box">
            <div class="video-details-header">
              <div>
                <h3>${currentLecture.title}</h3>
                <p class="video-desc">${currentLecture.description}</p>
              </div>
              
              <button class="complete-lecture-btn ${isCompleted ? 'completed' : ''}" id="btn-complete-lecture" data-lecture-id="${currentLecture.id}">
                <i data-lucide="${isCompleted ? 'check-circle-2' : 'award'}" style="width: 18px; height: 18px;"></i>
                <span>${isCompleted ? '✓ Completed (+25 Stars Earned)' : 'Mark as Completed (+25 Stars)'}</span>
              </button>
            </div>

            <!-- Key Takeaway Callout -->
            <div class="video-takeaway-banner">
              <strong>💡 Key Moral Takeaway:</strong> ${currentLecture.takeaway}
            </div>
          </div>
        </div>

        <!-- Right Side Clickable Playlist -->
        <div class="playlist-card">
          <div class="playlist-header">
            <h3>Course Lectures</h3>
            <span class="playlist-count">${religion.lectures.length} Lessons</span>
          </div>
          <p class="playlist-hint">Click any lecture below to start watching:</p>
          <div class="playlist-items-list">
            ${playlistHtml}
          </div>
        </div>
      </div>
    </div>
  `;
}

/* =================================================================
   2. MORAL STORIES TAB (MULTIPLE STORIES SELECTOR & AUDIO READER)
   ================================================================= */
function renderStoriesTab(religion) {
  const currentStory = religion.stories.find(s => s.id === appState.activeStoryId) || religion.stories[0];

  const storySelectorHtml = religion.stories.map((story) => {
    const isSelected = story.id === currentStory.id;
    return `
      <div class="story-select-pill ${isSelected ? 'active' : ''}" data-select-story="${story.id}">
        <span class="pill-icon">📖</span>
        <div class="pill-texts">
          <span class="pill-title">${story.title}</span>
          <span class="pill-dur">${story.readingTime} read</span>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="tab-pane active">
      <!-- Story Selector Carousel -->
      <div class="story-selector-bar">
        <span class="selector-label">Choose a Parable to Read:</span>
        <div class="story-pills-row">
          ${storySelectorHtml}
        </div>
      </div>

      <!-- Main Story Card -->
      <div class="storybook-container">
        <div class="story-art-frame">
          <img src="${currentStory.art}" alt="${currentStory.title}" />
          <div class="story-art-tag">${currentStory.subtitle}</div>
        </div>

        <div class="story-content">
          <div class="audio-narrator-bar">
            <button class="audio-play-btn" id="btn-read-aloud" data-story-id="${currentStory.id}">
              <i data-lucide="volume-2" style="width: 18px; height: 18px;"></i>
            </button>
            <div style="flex: 1;">
              <div style="font-size: 13.5px; font-weight: 700; color: #1e1b4b;">Read Aloud Voice Narration</div>
              <div style="font-size: 11.5px; color: #64748b;">Narrated by Wisdom Sage • Click to listen</div>
            </div>
            <span class="story-time-badge">⏱️ ${currentStory.readingTime}</span>
          </div>

          <h3 class="story-main-title">${currentStory.title}</h3>
          <div class="story-subtitle-tag">${currentStory.subtitle}</div>
          
          <div class="story-body-text" id="story-paragraphs">
            ${currentStory.text.split('\n\n').map(p => `<p>${p}</p>`).join('')}
          </div>

          <div class="moral-takeaway-banner">
            🌟 <strong>Moral Takeaway:</strong> ${currentStory.moralTakeaway}
          </div>
        </div>
      </div>
    </div>
  `;
}

/* =================================================================
   3. CORE TEACHINGS TAB (CLICKABLE INTO INTERACTIVE WINDOW)
   ================================================================= */
function renderTeachingsTab(religion) {
  const cardsHtml = religion.teachings.map((t, idx) => `
    <div class="teaching-card" data-open-teaching="${idx}" style="--t-color: ${religion.color}">
      <div class="teaching-card-top">
        <div class="teaching-icon-badge">${t.icon}</div>
        <span class="teaching-view-badge">Click to Open Study Window ➔</span>
      </div>

      <h4 class="teaching-title">${t.principle}</h4>
      <div class="teaching-orig-term">${t.originalTerm || ''}</div>
      <p class="teaching-sub">${t.subtitle}</p>
      
      <div class="teaching-action-prompt">
        <span>📖 Read deep philosophical origin & real-life kids scenario</span>
      </div>
    </div>
  `).join('');

  return `
    <div class="tab-pane active">
      <div class="section-header">
        <div>
          <h2><span>Core Pillars of ${religion.name}</span></h2>
          <p>Click on any pillar below to open the comprehensive learning window with real-life scenarios and daily practice missions.</p>
        </div>
      </div>

      <div class="teachings-grid">
        ${cardsHtml}
      </div>

      <div class="symbols-box">
        <div class="symbol-box-icon">${renderReligionSymbol(religion, 36)}</div>
        <div>
          <h4 style="font-size: 16px; margin-bottom: 6px; color: #0f172a;">Sacred Cultural Symbol Meaning</h4>
          <p style="font-size: 13.5px; color: #475569; line-height: 1.6;">
            The sacred emblem represents the continuous cycle of moral duty, peaceful truth, and universal kindness cherished across world civilizations.
          </p>
        </div>
      </div>
    </div>
  `;
}

/* =================================================================
   4. MINDFUL CALM TAB (REAL CHIME AUDIO & BREATHING GUIDE)
   ================================================================= */
function renderCalmTab(religion) {
  const calm = religion.calm;
  return `
    <div class="tab-pane active">
      <div class="calm-zone-container">
        <h2 style="font-size: 26px; font-weight: 800; margin-bottom: 8px;">${calm.title}</h2>
        <p style="color: #cbd5e1; max-width: 520px; margin: 0 auto;">
          Take a deep peaceful breath. Follow the glowing sphere: expand as you breathe in, hold gently, and contract as you breathe out.
        </p>

        <div class="calm-sphere-wrapper">
          <div class="breathing-sphere" id="calm-breathing-sphere">
            <span id="breathing-label">Breathe In...</span>
          </div>
        </div>

        <div class="calm-affirmation-box">
          "${calm.affirmation}"
        </div>

        <button class="sound-chime-btn" id="btn-sound-chime" data-sound-type="${calm.chimeSound}">
          <i data-lucide="bell" style="width: 20px; height: 20px;"></i>
          <span>Play Sacred Chime Bell Sound</span>
        </button>
      </div>
    </div>
  `;
}

/* =================================================================
   5. EXAM & QUIZ TAB (FULL WORKING EXAM + INSTANT GRADING)
   ================================================================= */
function renderExamTab(religion, examResult) {
  const questions = religion.finalExam;

  const passedHeaderHtml = examResult ? `
    <div class="exam-passed-summary-bar">
      <div class="summary-left">
        <span class="passed-trophy">🏆</span>
        <div>
          <strong>Official Honor Earned: Score ${examResult.score}% (Grade ${examResult.grade})</strong>
          <p>You have demonstrated thoughtful understanding of ${religion.name}. You can retake the quiz anytime to practice!</p>
        </div>
      </div>
      <button class="view-cert-pill-btn" id="btn-view-certificate" data-religion-id="${religion.id}">
        <i data-lucide="award" style="width: 16px; height: 16px;"></i>
        <span>View Official Certificate</span>
      </button>
    </div>
  ` : '';

  const questionsHtml = questions.map((q, qIdx) => `
    <div class="question-card" data-q-idx="${qIdx}">
      <div class="q-number">Question ${qIdx + 1} of ${questions.length}</div>
      <div class="q-text">${q.question}</div>
      <div class="options-grid">
        ${q.options.map((opt, optIdx) => `
          <button class="opt-btn" data-q-idx="${qIdx}" data-opt-idx="${optIdx}" type="button">
            <span class="opt-letter">
              ${String.fromCharCode(65 + optIdx)}
            </span>
            <span class="opt-label">${opt}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');

  return `
    <div class="tab-pane active">
      <div class="exam-container">
        ${passedHeaderHtml}

        <div class="exam-header">
          <div>
            <h3 style="font-size: 22px; font-weight: 800; color: #0f172a;">Certification Exam: ${religion.name}</h3>
            <p style="font-size: 13.5px; color: #64748b;">Answer all 5 questions to receive your official Certificate of Wisdom.</p>
          </div>
          <div class="pass-mark-chip">
            Passing Grade: 80%
          </div>
        </div>

        <form id="exam-form" data-religion-id="${religion.id}">
          ${questionsHtml}
          
          <div style="margin-top: 32px; text-align: center;">
            <button type="submit" class="submit-exam-btn">
              <i data-lucide="send" style="width: 18px; height: 18px;"></i>
              <span>Submit Answers & Generate Certificate (+50 Stars)</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}
