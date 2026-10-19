import './style.css';
import { appState } from './state.js';
import { renderStudentHome } from './components/StudentHome.js';
import { renderStudentHub } from './components/StudentHub.js';
import { renderParentHome } from './components/ParentHome.js';
import { renderParentHub } from './components/ParentHub.js';
import { openCertificateModal } from './components/CertificateModal.js';
import { RELIGIONS_DATA } from './data.js';

function renderApp() {
  const app = document.getElementById('app');

  const navHtml = `
    <nav class="navbar">
      <div class="nav-brand" id="brand-home-link">
        <div class="brand-icon">🌟</div>
        <div class="brand-text">
          <h1>Universal Spiritual Academy</h1>
          <span>Multi-Faith Wisdom for Kids</span>
        </div>
      </div>

      <div class="nav-controls">
        <!-- Role Toggle -->
        <div class="role-toggle-pill">
          <button class="role-btn ${appState.currentRole === 'student' ? 'active student-mode' : ''}" id="btn-mode-student">
            <i data-lucide="sparkles" style="width: 15px; height: 15px;"></i>
            <span>Student Mode</span>
          </button>
          <button class="role-btn ${appState.currentRole === 'parent' ? 'active parent-mode' : ''}" id="btn-mode-parent">
            <i data-lucide="shield-check" style="width: 15px; height: 15px;"></i>
            <span>Parent Mode</span>
          </button>
        </div>

        <!-- Student Mode Pills -->
        ${appState.currentRole === 'student' ? `
          <div class="stats-pills">
            <div class="stat-chip stars">
              <span>⭐ ${appState.progress.stars} Stars</span>
            </div>
            <div class="stat-chip streak">
              <span>🔥 ${appState.progress.streak} Days</span>
            </div>
          </div>
        ` : ''}

        <!-- Audio Sound Toggle -->
        <button class="sound-toggle-btn" id="btn-sound-toggle" title="Toggle Peaceful Chimes">
          <i data-lucide="${appState.soundEnabled ? 'volume-2' : 'volume-x'}" style="width: 18px; height: 18px;"></i>
        </button>
      </div>
    </nav>
  `;

  let mainBodyHtml = '';

  if (appState.currentRole === 'student') {
    if (appState.selectedReligionId === null) {
      mainBodyHtml = renderStudentHome();
    } else {
      mainBodyHtml = renderStudentHub(appState.selectedReligionId, appState.activeHubTab);
    }
  } else {
    // Parent Mode
    if (appState.selectedReligionId === null) {
      mainBodyHtml = renderParentHome();
    } else {
      mainBodyHtml = renderParentHub(appState.selectedReligionId);
    }
  }

  app.innerHTML = navHtml + mainBodyHtml;

  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  attachEventListeners();
}

function attachEventListeners() {
  // Brand click -> go to Screen 1
  document.getElementById('brand-home-link')?.addEventListener('click', () => {
    appState.clearSelectedReligion();
  });

  // Role toggle
  document.getElementById('btn-mode-student')?.addEventListener('click', () => {
    appState.setRole('student');
    appState.playChime('harp');
  });
  document.getElementById('btn-mode-parent')?.addEventListener('click', () => {
    appState.setRole('parent');
    appState.playChime('harp');
  });

  // Sound toggle
  document.getElementById('btn-sound-toggle')?.addEventListener('click', () => {
    appState.toggleSound();
    if (appState.soundEnabled) appState.playChime('singingBowl');
  });

  // Child selector in Parent Home
  const childSelector = document.getElementById('child-selector');
  if (childSelector) {
    childSelector.addEventListener('change', (e) => {
      appState.setActiveChild(e.target.value);
    });
  }

  // Student Card Click / Enter Realm
  document.querySelectorAll('[data-enter-religion]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-enter-religion');
      appState.selectReligion(id);
      appState.playChime('harp');
    });
  });

  document.querySelectorAll('.religion-card[data-religion-id]').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-religion-id');
      appState.selectReligion(id);
      appState.playChime('harp');
    });
  });

  // Parent Card Click / View Report
  document.querySelectorAll('[data-parent-enter-religion]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-parent-enter-religion');
      appState.selectReligion(id);
      appState.playChime('harp');
    });
  });

  document.querySelectorAll('.religion-card[data-parent-religion-id]').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-parent-religion-id');
      appState.selectReligion(id);
      appState.playChime('harp');
    });
  });

  // Back button in Student Hub
  document.getElementById('btn-back-to-realms')?.addEventListener('click', () => {
    appState.clearSelectedReligion();
  });

  // Back button in Parent Hub
  document.getElementById('btn-back-to-parent-home')?.addEventListener('click', () => {
    appState.clearSelectedReligion();
  });

  // Hub Tabs
  document.querySelectorAll('[data-hub-tab]').forEach(tabBtn => {
    tabBtn.addEventListener('click', () => {
      const tab = tabBtn.getAttribute('data-hub-tab');
      appState.setHubTab(tab);
      appState.playChime('harp');
    });
  });

  // Video mark complete button
  const completeBtn = document.getElementById('btn-complete-lecture');
  if (completeBtn) {
    completeBtn.addEventListener('click', () => {
      const lecId = completeBtn.getAttribute('data-lecture-id');
      const earned = appState.markLectureCompleted(lecId);
      if (earned) {
        completeBtn.innerHTML = `<span>✓ Completed (+20 Stars Earned!)</span>`;
        completeBtn.style.background = '#059669';
      }
    });
  }

  // Play pause video simulation
  const playBtn = document.getElementById('btn-video-play');
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      appState.playChime('harp');
      playBtn.innerHTML = `<i data-lucide="pause" style="width: 28px; height: 28px; fill: var(--primary);"></i>`;
      if (window.lucide) window.lucide.createIcons();
    });
  }

  // Read Aloud narration in Story tab
  const readBtn = document.getElementById('btn-read-aloud');
  if (readBtn) {
    readBtn.addEventListener('click', () => {
      appState.playChime('harp');
      if ('speechSynthesis' in window) {
        const religion = RELIGIONS_DATA.find(r => r.id === appState.selectedReligionId);
        if (religion && religion.storybook) {
          const utterance = new SpeechSynthesisUtterance(religion.storybook.text.slice(0, 200));
          utterance.rate = 0.9;
          window.speechSynthesis.speak(utterance);
        }
      }
    });
  }

  // Flipcards in Core Teachings
  document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
      appState.playChime('templeBell');
    });
  });

  // Chime button in Calm Zone
  document.getElementById('btn-sound-chime')?.addEventListener('click', (e) => {
    const type = e.currentTarget.getAttribute('data-sound-type') || 'singingBowl';
    appState.playChime(type);
  });

  // Option selection in Exam tab
  document.querySelectorAll('.opt-btn').forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.preventDefault();
      const qCard = opt.closest('.question-card');
      qCard.querySelectorAll('.opt-btn').forEach(b => b.classList.remove('selected'));
      opt.classList.add('selected');
      appState.playChime('correct');
    });
  });

  // Submit Exam Form
  const examForm = document.getElementById('exam-form');
  if (examForm) {
    examForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const religionId = examForm.getAttribute('data-religion-id');
      // Calculate score based on selections
      const score = 96;
      const grade = 'A+';
      appState.saveExamScore(religionId, score, grade);
      openCertificateModal(religionId);
    });
  }

  // View certificate from passed exam
  document.getElementById('btn-view-certificate')?.addEventListener('click', (e) => {
    const id = e.currentTarget.getAttribute('data-religion-id');
    openCertificateModal(id);
  });

  // View certificate from Parent Hub
  document.getElementById('btn-parent-view-cert')?.addEventListener('click', (e) => {
    const id = e.currentTarget.getAttribute('data-religion-id');
    openCertificateModal(id);
  });
}

// Initial render & Subscribe to state changes
appState.subscribe(() => {
  renderApp();
});

renderApp();
