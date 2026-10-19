import './style.css';
import { appState } from './state.js';
import { renderPortalGate } from './components/PortalGate.js';
import { renderNavDrawer } from './components/NavDrawer.js';
import { renderTeachingModal } from './components/TeachingModal.js';
import { renderFooter } from './components/Footer.js';
import { renderStudentHome } from './components/StudentHome.js';
import { renderStudentHub } from './components/StudentHub.js';
import { renderParentHome } from './components/ParentHome.js';
import { renderParentHub } from './components/ParentHub.js';
import { openCertificateModal } from './components/CertificateModal.js';
import { RELIGIONS_DATA } from './data.js';

let videoPlaybackTimer = null;
let currentStoryUtterance = null;

function renderApp() {
  const app = document.getElementById('app');

  // Ambient floating particles
  const particlesHtml = `
    <div class="ambient-particles-bg">
      <div class="particle" style="left: 10%; animation-delay: 0s; width: 6px; height: 6px;"></div>
      <div class="particle" style="left: 25%; animation-delay: 4s; width: 8px; height: 8px; background: radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 80%);"></div>
      <div class="particle" style="left: 45%; animation-delay: 8s; width: 5px; height: 5px;"></div>
      <div class="particle" style="left: 65%; animation-delay: 2s; width: 7px; height: 7px; background: radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 80%);"></div>
      <div class="particle" style="left: 80%; animation-delay: 6s; width: 9px; height: 9px;"></div>
      <div class="particle" style="left: 92%; animation-delay: 11s; width: 6px; height: 6px;"></div>
    </div>
  `;

  // IF NOT LOGGED IN -> Show Portal Selection Screen
  if (!appState.isLoggedIn) {
    app.innerHTML = particlesHtml + renderPortalGate();
    if (window.lucide) window.lucide.createIcons();
    attachPortalGateListeners();
    return;
  }

  // TOP NAVBAR (Clean, Elegant English, No Role Switching Pill, Logout & Profile)
  const navHtml = `
    <nav class="navbar">
      <div class="nav-left-group">
        <!-- Top Left Menu Hamburger (Faith Navigator Drawer) -->
        <button class="nav-drawer-toggle-btn" id="btn-open-nav-drawer" title="Open Faith & Progress Navigator">
          <i data-lucide="menu" style="width: 20px; height: 20px;"></i>
          <span>Faith Navigator</span>
        </button>

        <!-- Brand Home Link -->
        <div class="nav-brand" id="brand-home-link" title="Go to All Realms Home">
          <div class="brand-icon">🌟</div>
          <div class="brand-text">
            <h1>UniSoul</h1>
            <span>Universal Moral & Cultural Learning</span>
          </div>
        </div>
      </div>

      <div class="nav-controls">
        <!-- Master Sound FX Toggle -->
        <button class="sound-toggle-btn" id="btn-sound-toggle" title="Toggle Sound FX">
          <i data-lucide="${appState.soundEnabled ? 'volume-2' : 'volume-x'}" style="width: 18px; height: 18px;"></i>
        </button>

        <!-- Profile Badge -->
        <div class="profile-badge-pill" id="btn-profile-badge">
          <div class="profile-avatar">${appState.currentRole === 'parent' ? '🛡️' : '🎒'}</div>
          <div class="profile-text">
            <span class="user-name">${appState.currentRole === 'parent' ? 'Parent & Educator' : 'Rudra'}</span>
            <span class="user-role">${appState.currentRole === 'parent' ? 'Admin Portal' : 'Young Scholar • ⭐ ' + appState.progress.stars}</span>
          </div>
        </div>

        <!-- Dedicated Logout Button -->
        <button class="logout-btn" id="btn-logout-app" title="Log out to Portal Selection">
          <i data-lucide="log-out" style="width: 16px; height: 16px;"></i>
          <span>Logout</span>
        </button>
      </div>
    </nav>
  `;

  // MAIN BODY ROUTING
  let mainBodyHtml = '';
  if (appState.currentRole === 'student') {
    if (appState.selectedReligionId === null) {
      mainBodyHtml = renderStudentHome();
    } else {
      mainBodyHtml = renderStudentHub(appState.selectedReligionId, appState.activeHubTab);
    }
  } else {
    // Parent Portal
    if (appState.selectedReligionId === null) {
      mainBodyHtml = renderParentHome();
    } else {
      mainBodyHtml = renderParentHub(appState.selectedReligionId);
    }
  }

  // Educational Footer
  const footerHtml = renderFooter();

  // Slide-out Drawer & Modals
  const drawerHtml = renderNavDrawer();
  const teachingModalHtml = renderTeachingModal();

  app.innerHTML = particlesHtml + navHtml + mainBodyHtml + footerHtml + drawerHtml + teachingModalHtml;

  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  attachMainListeners();
}

// Event listeners for Portal Selection (Logged Out)
function attachPortalGateListeners() {
  document.getElementById('btn-select-student-portal')?.addEventListener('click', () => {
    appState.loginAs('student');
  });

  document.getElementById('btn-select-parent-portal')?.addEventListener('click', () => {
    appState.loginAs('parent');
  });
}

// Event listeners for Logged In application
function attachMainListeners() {
  // Brand click -> go home
  document.getElementById('brand-home-link')?.addEventListener('click', () => {
    appState.clearSelectedReligion();
  });

  // Open Drawer
  document.getElementById('btn-open-nav-drawer')?.addEventListener('click', () => {
    appState.toggleNavDrawer(true);
    appState.playChime('harp');
  });

  // Close Drawer
  document.getElementById('btn-close-drawer')?.addEventListener('click', () => {
    appState.toggleNavDrawer(false);
  });
  document.getElementById('drawer-backdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'drawer-backdrop') {
      appState.toggleNavDrawer(false);
    }
  });

  // Drawer Faith Jumps
  document.querySelectorAll('[data-drawer-jump]').forEach(row => {
    row.addEventListener('click', () => {
      const id = row.getAttribute('data-drawer-jump');
      appState.selectReligion(id);
    });
  });

  document.getElementById('btn-drawer-home')?.addEventListener('click', () => {
    appState.clearSelectedReligion();
  });

  document.getElementById('btn-drawer-logout')?.addEventListener('click', () => {
    appState.logout();
  });

  // Logout Button
  document.getElementById('btn-logout-app')?.addEventListener('click', () => {
    appState.logout();
  });

  // Sound FX toggle
  document.getElementById('btn-sound-toggle')?.addEventListener('click', () => {
    appState.toggleSound();
    if (appState.soundEnabled) appState.playChime('singingBowl');
  });

  // Back button in Student Hub
  document.getElementById('btn-back-to-realms')?.addEventListener('click', () => {
    appState.clearSelectedReligion();
  });

  // Back button in Parent Hub
  document.getElementById('btn-back-to-parent-home')?.addEventListener('click', () => {
    appState.clearSelectedReligion();
  });

  // Top-Right Authentic Audio Chant Button
  document.getElementById('btn-ambient-chant-toggle')?.addEventListener('click', (e) => {
    const religionId = e.currentTarget.getAttribute('data-religion-id');
    appState.toggleAmbientChant(religionId);
  });

  // Enter Religion from Student Home
  document.querySelectorAll('[data-enter-religion]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-enter-religion');
      appState.selectReligion(id);
    });
  });

  document.querySelectorAll('.religion-card[data-religion-id]').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-religion-id');
      appState.selectReligion(id);
    });
  });

  // Enter Religion from Parent Home
  document.querySelectorAll('[data-parent-enter-religion]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-parent-enter-religion');
      appState.selectReligion(id);
    });
  });

  document.querySelectorAll('.religion-card[data-parent-religion-id]').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-parent-religion-id');
      appState.selectReligion(id);
    });
  });

  // Child selector in Parent Portal
  document.getElementById('child-selector')?.addEventListener('change', (e) => {
    appState.setActiveChild(e.target.value);
  });

  // Hub Tabs
  document.querySelectorAll('[data-hub-tab]').forEach(tabBtn => {
    tabBtn.addEventListener('click', () => {
      const tab = tabBtn.getAttribute('data-hub-tab');
      appState.setHubTab(tab);
      appState.playChime('harp');
    });
  });

  // ==========================================
  // VIDEO LECTURES PLAYLIST SWITCHING & PLAYER
  // ==========================================
  document.querySelectorAll('[data-select-lecture]').forEach(item => {
    item.addEventListener('click', () => {
      const lecId = item.getAttribute('data-select-lecture');
      appState.setActiveLecture(lecId);
      appState.playChime('harp');
    });
  });

  // Video Mark Completed Button
  const completeBtn = document.getElementById('btn-complete-lecture');
  if (completeBtn) {
    completeBtn.addEventListener('click', () => {
      const lecId = completeBtn.getAttribute('data-lecture-id');
      const earned = appState.markLectureCompleted(lecId);
      if (earned) {
        completeBtn.classList.add('completed');
        completeBtn.innerHTML = `
          <i data-lucide="check-circle-2" style="width: 18px; height: 18px;"></i>
          <span>✓ Completed (+25 Stars Earned!)</span>
        `;
        if (window.lucide) window.lucide.createIcons();
      }
    });
  }

  // Interactive Video Play / Pause Toggle
  const videoPlayBtn = document.getElementById('btn-video-play-toggle');
  const videoCtrlPlay = document.getElementById('btn-video-ctrl-play');
  const scrubFill = document.getElementById('video-scrub-fill');
  const timeCur = document.getElementById('video-time-cur');

  const toggleVideoPlayback = () => {
    appState.playChime('harp');
    if (videoPlaybackTimer) {
      clearInterval(videoPlaybackTimer);
      videoPlaybackTimer = null;
      if (videoPlayBtn) videoPlayBtn.innerHTML = `<i data-lucide="play" style="width: 32px; height: 32px; fill: #ffffff; color: #ffffff;"></i>`;
      if (videoCtrlPlay) videoCtrlPlay.innerHTML = `<i data-lucide="play" style="width: 16px; height: 16px;"></i>`;
    } else {
      if (videoPlayBtn) videoPlayBtn.innerHTML = `<i data-lucide="pause" style="width: 32px; height: 32px; fill: #ffffff; color: #ffffff;"></i>`;
      if (videoCtrlPlay) videoCtrlPlay.innerHTML = `<i data-lucide="pause" style="width: 16px; height: 16px;"></i>`;
      let seconds = 85;
      videoPlaybackTimer = setInterval(() => {
        seconds++;
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        if (timeCur) timeCur.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        const pct = Math.min(Math.round((seconds / 250) * 100), 100);
        if (scrubFill) scrubFill.style.width = pct + '%';
        if (pct >= 100) {
          clearInterval(videoPlaybackTimer);
          videoPlaybackTimer = null;
          const curLec = appState.activeLectureId;
          if (curLec) appState.markLectureCompleted(curLec);
        }
      }, 1000);
    }
    if (window.lucide) window.lucide.createIcons();
  };

  videoPlayBtn?.addEventListener('click', toggleVideoPlayback);
  videoCtrlPlay?.addEventListener('click', toggleVideoPlayback);

  // ==========================================
  // MORAL STORIES SELECTOR & AUDIO NARRATOR
  // ==========================================
  document.querySelectorAll('[data-select-story]').forEach(pill => {
    pill.addEventListener('click', () => {
      const storyId = pill.getAttribute('data-select-story');
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      appState.setActiveStory(storyId);
      appState.playChime('harp');
    });
  });

  // Story Read Aloud Button
  const readAloudBtn = document.getElementById('btn-read-aloud');
  if (readAloudBtn) {
    readAloudBtn.addEventListener('click', () => {
      if (!('speechSynthesis' in window)) {
        alert('Voice narration is not supported in this browser.');
        return;
      }

      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        readAloudBtn.innerHTML = `<i data-lucide="volume-2" style="width: 18px; height: 18px;"></i>`;
        if (window.lucide) window.lucide.createIcons();
        return;
      }

      appState.playChime('harp');
      const religion = RELIGIONS_DATA.find(r => r.id === appState.selectedReligionId);
      if (!religion) return;
      const currentStory = religion.stories.find(s => s.id === appState.activeStoryId) || religion.stories[0];
      if (!currentStory) return;

      const utterance = new SpeechSynthesisUtterance(currentStory.title + ". " + currentStory.text);
      utterance.rate = 0.92;
      utterance.pitch = 1.0;
      utterance.onend = () => {
        readAloudBtn.innerHTML = `<i data-lucide="volume-2" style="width: 18px; height: 18px;"></i>`;
        if (window.lucide) window.lucide.createIcons();
      };

      currentStoryUtterance = utterance;
      window.speechSynthesis.speak(utterance);
      readAloudBtn.innerHTML = `<i data-lucide="square" style="width: 18px; height: 18px;"></i>`;
      if (window.lucide) window.lucide.createIcons();
    });
  }

  // ==========================================
  // CORE TEACHINGS DETAILED WINDOW / MODAL
  // ==========================================
  document.querySelectorAll('[data-open-teaching]').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-open-teaching'), 10);
      appState.openTeachingModal(appState.selectedReligionId, idx);
    });
  });

  document.getElementById('btn-close-teaching-modal')?.addEventListener('click', () => {
    appState.closeTeachingModal();
  });
  document.getElementById('btn-close-teaching-back')?.addEventListener('click', () => {
    appState.closeTeachingModal();
  });
  document.getElementById('teaching-modal-backdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'teaching-modal-backdrop') {
      appState.closeTeachingModal();
    }
  });

  document.getElementById('btn-practice-virtue-done')?.addEventListener('click', () => {
    appState.progress.stars += 15;
    appState.save();
    appState.triggerConfetti();
    appState.playChime('correct');
    appState.closeTeachingModal();
  });

  // ==========================================
  // MINDFUL CALM CHIME & SOUND
  // ==========================================
  document.getElementById('btn-sound-chime')?.addEventListener('click', (e) => {
    const type = e.currentTarget.getAttribute('data-sound-type') || 'singingBowl';
    appState.playChime(type);
    const sphere = document.getElementById('calm-breathing-sphere');
    if (sphere) {
      sphere.style.transform = 'scale(1.35)';
      setTimeout(() => { sphere.style.transform = ''; }, 3000);
    }
  });

  // ==========================================
  // EXAM & QUIZZES (INTERACTIVE OPTIONS & GRADING)
  // ==========================================
  document.querySelectorAll('.opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const qCard = btn.closest('.question-card');
      qCard.querySelectorAll('.opt-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      appState.playChime('harp');
    });
  });

  // Submit Exam Form
  const examForm = document.getElementById('exam-form');
  if (examForm) {
    examForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const religionId = examForm.getAttribute('data-religion-id');
      const religion = RELIGIONS_DATA.find(r => r.id === religionId);
      if (!religion) return;

      // Grade answers
      let correctCount = 0;
      const totalQuestions = religion.finalExam.length;

      religion.finalExam.forEach((q, idx) => {
        const selectedBtn = examForm.querySelector(`.opt-btn.selected[data-q-idx="${idx}"]`);
        if (selectedBtn) {
          const selectedIdx = parseInt(selectedBtn.getAttribute('data-opt-idx'), 10);
          if (selectedIdx === q.correct) {
            correctCount++;
          }
        }
      });

      // Calculate score (guarantee at least passing for earnest attempt)
      const calculatedScore = Math.max(Math.round((correctCount / totalQuestions) * 100), 80);
      const grade = calculatedScore >= 95 ? 'A+' : calculatedScore >= 85 ? 'A' : 'B+';

      appState.saveExamScore(religionId, calculatedScore, grade);
      openCertificateModal(religionId);
    });
  }

  // View Certificate
  document.getElementById('btn-view-certificate')?.addEventListener('click', (e) => {
    const id = e.currentTarget.getAttribute('data-religion-id');
    openCertificateModal(id);
  });

  document.getElementById('btn-parent-view-cert')?.addEventListener('click', (e) => {
    const id = e.currentTarget.getAttribute('data-religion-id');
    openCertificateModal(id);
  });

  // Footer navigation jumps
  document.querySelectorAll('[data-footer-jump]').forEach(link => {
    link.addEventListener('click', () => {
      const id = link.getAttribute('data-footer-jump');
      appState.selectReligion(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

// Initial render & subscription
appState.subscribe(() => {
  renderApp();
});

renderApp();
