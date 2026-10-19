import confetti from 'canvas-confetti';
import { RELIGIONS_DATA, DAILY_QUOTES } from './data.js';

class AppState {
  constructor() {
    this.isLoggedIn = true; // true = inside portal, false = portal select screen
    this.currentRole = 'student'; // 'student' | 'parent'
    this.selectedReligionId = null; // null = home, string = realm hub
    this.activeHubTab = 'lectures'; // 'lectures' | 'stories' | 'teachings' | 'calm' | 'exam'
    this.activeChild = 'rudra'; // 'rudra' | 'ananya'
    this.soundEnabled = true;

    // Active sub-item states
    this.activeLectureId = null;
    this.activeStoryId = null;
    this.activeTeachingModal = null; // { religionId, teachingIndex } or null
    this.navDrawerOpen = false;
    this.profileModalOpen = false;

    // Authentic Sacred Audio Player State
    this.currentAudio = null;
    this.ambientChantPlaying = false;
    this.currentChantReligionId = null;
    this.lastNavigationTime = 0;

    // Load progress from localStorage (v3 for rich interactive data)
    const savedProgress = localStorage.getItem('unisoul_progress_v3') || localStorage.getItem('omniwisdom_progress_v3');
    if (savedProgress) {
      try {
        this.progress = JSON.parse(savedProgress);
      } catch (e) {
        this.progress = this.getDefaultProgress();
      }
    } else {
      this.progress = this.getDefaultProgress();
    }

    this.audioCtx = null;
    this.subscribers = [];

    // Setup history listening
    this.setupHistoryListener();
  }

  getDefaultProgress() {
    return {
      stars: 420,
      streak: 5,
      completedLectures: {
        'h1': true, // Hinduism: 1 / 4
        'b1': true, // Buddhism: 1 / 4
        's1': true, // Sikhism: 1 / 4
        'i1': true, // Islam: 1 / 4
      },
      examScores: {} // Clean so exams are ready to take
    };
  }

  save() {
    localStorage.setItem('unisoul_progress_v3', JSON.stringify(this.progress));
    this.notify();
  }

  subscribe(callback) {
    this.subscribers.push(callback);
  }

  notify() {
    this.subscribers.forEach(cb => cb(this));
  }

  // ==========================================
  // HISTORY API & ROUTING (TOUCHPAD BACK SUPPORT)
  // ==========================================
  // ==========================================
  // HISTORY API & ROUTING (TOUCHPAD BACK SUPPORT)
  // ==========================================
  setupHistoryListener() {
    window.addEventListener('popstate', (e) => {
      // Whenever user swipes back on touchpad or clicks browser back
      if (e.state && typeof e.state.isLoggedIn === 'boolean') {
        this.applyStateFromHistory(e.state);
      } else {
        // Fallback for root history entry: navigate back to Home
        this.applyStateFromHistory({
          isLoggedIn: true,
          currentRole: this.currentRole,
          selectedReligionId: null,
          activeHubTab: 'lectures',
          activeLectureId: null,
          activeStoryId: null,
          activeTeachingModal: null,
          activeChild: this.activeChild
        });
      }
    });

    // Initial state replace
    this.pushState(true);
  }

  pushState(replace = false) {
    const stateObj = {
      isLoggedIn: this.isLoggedIn,
      currentRole: this.currentRole,
      selectedReligionId: this.selectedReligionId,
      activeHubTab: this.activeHubTab,
      activeLectureId: this.activeLectureId,
      activeStoryId: this.activeStoryId,
      activeTeachingModal: this.activeTeachingModal,
      activeChild: this.activeChild
    };

    let hash = '#/home';
    if (!this.isLoggedIn) {
      hash = '#/portal-select';
    } else if (this.currentRole === 'parent') {
      hash = this.selectedReligionId ? `#/parent/${this.selectedReligionId}` : '#/parent';
    } else if (this.selectedReligionId) {
      hash = `#/realm/${this.selectedReligionId}`;
    }

    try {
      if (replace) {
        window.history.replaceState(stateObj, '', hash);
      } else {
        window.history.pushState(stateObj, '', hash);
      }
    } catch (e) {
      // Ignore security errors in restricted iframes if any
    }
  }

  applyStateFromHistory(stateObj) {
    if (!stateObj) return;

    this.isLoggedIn = stateObj.isLoggedIn ?? true;
    this.currentRole = stateObj.currentRole ?? 'student';

    // Only stop audio if religion changed or returned to home
    if (this.selectedReligionId !== stateObj.selectedReligionId) {
      this.stopAmbientChant();
    }

    this.selectedReligionId = stateObj.selectedReligionId ?? null;
    this.activeHubTab = stateObj.activeHubTab ?? 'lectures';
    this.activeLectureId = stateObj.activeLectureId ?? null;
    this.activeStoryId = stateObj.activeStoryId ?? null;
    this.activeTeachingModal = stateObj.activeTeachingModal ?? null;
    this.activeChild = stateObj.activeChild ?? 'rudra';
    this.navDrawerOpen = false;
    this.profileModalOpen = false;

    this.notify();
  }

  // ==========================================
  // AUTH & PORTAL SELECTION
  // ==========================================
  loginAs(role) {
    this.isLoggedIn = true;
    this.currentRole = role;
    this.selectedReligionId = null;
    this.navDrawerOpen = false;
    this.profileModalOpen = false;
    this.pushState();
    this.notify();
    this.playChime('harp');
  }

  logout() {
    this.stopAmbientChant();
    this.isLoggedIn = false;
    this.selectedReligionId = null;
    this.navDrawerOpen = false;
    this.profileModalOpen = false;
    this.pushState();
    this.notify();
    this.playChime('harp');
  }

  // ==========================================
  // NAVIGATION ACTIONS
  // ==========================================
  selectReligion(religionId) {
    this.lastNavigationTime = Date.now();
    this.selectedReligionId = religionId;
    this.activeHubTab = 'lectures';
    const religion = RELIGIONS_DATA.find(r => r.id === religionId);
    if (religion) {
      this.activeLectureId = religion.lectures[0]?.id || null;
      this.activeStoryId = religion.stories[0]?.id || null;
    }
    this.activeTeachingModal = null;
    this.navDrawerOpen = false;

    // Start authentic long audio
    this.startAmbientChant(religionId);

    // Push new history state so touchpad back can return to Home
    this.pushState(false);
    this.notify();
  }

  clearSelectedReligion() {
    this.selectedReligionId = null;
    this.activeTeachingModal = null;
    this.navDrawerOpen = false;
    this.stopAmbientChant();
    this.pushState(false);
    this.notify();
  }

  setHubTab(tabName) {
    this.activeHubTab = tabName;
    // Replace state so sub-tabs don't clutter back history
    this.pushState(true);
    this.notify();
  }

  setActiveLecture(lectureId) {
    this.activeLectureId = lectureId;
    this.pushState(true);
    this.notify();
  }

  setActiveStory(storyId) {
    this.activeStoryId = storyId;
    this.pushState(true);
    this.notify();
  }

  openTeachingModal(religionId, index) {
    this.activeTeachingModal = { religionId, index };
    this.pushState(true);
    this.notify();
    this.playChime('harp');
  }

  closeTeachingModal() {
    this.activeTeachingModal = null;
    this.pushState(true);
    this.notify();
  }

  toggleNavDrawer(open) {
    this.navDrawerOpen = open !== undefined ? open : !this.navDrawerOpen;
    this.notify();
  }

  toggleProfileModal(open) {
    this.profileModalOpen = open !== undefined ? open : !this.profileModalOpen;
    this.notify();
  }

  setActiveChild(childName) {
    this.activeChild = childName;
    this.notify();
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    if (!this.soundEnabled) {
      this.stopAmbientChant();
    }
    this.notify();
  }

  // ==========================================
  // LEARNING ACHIEVEMENTS
  // ==========================================
  markLectureCompleted(lectureId) {
    if (!this.progress.completedLectures[lectureId]) {
      this.progress.completedLectures[lectureId] = true;
      this.progress.stars += 25;
      this.save();
      this.triggerConfetti();
      this.playChime('correct');
      return true;
    }
    return false;
  }

  saveExamScore(religionId, score, grade) {
    this.progress.examScores[religionId] = {
      score: score,
      grade: grade,
      date: 'Just Now'
    };
    this.progress.stars += 50;
    this.save();
    this.triggerConfetti();
    this.playChime('correct');
  }

  triggerConfetti() {
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (e) {}
  }

  // ==========================================
  // AUDIO ENGINE (AUTHENTIC CHANTS + CHIMES)
  // ==========================================
  initAudio() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playChime(type = 'singingBowl') {
    if (!this.soundEnabled) return;
    try {
      this.initAudio();
      const ctx = this.audioCtx;
      if (ctx.state === 'suspended') {
        ctx.resume().then(() => this._executeChime(type));
      } else {
        this._executeChime(type);
      }
    } catch (e) {
      console.warn('Audio chime warning:', e);
    }
  }

  _executeChime(type) {
    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    if (type === 'singingBowl') {
      const freqs = [432, 864, 1296];
      freqs.forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now);
        gain.gain.setValueAtTime(0.2 / (idx + 1), now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.8);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 3.9);
      });
    } else if (type === 'templeBell') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(440, now + 2.2);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 2.6);
    } else if (type === 'harp') {
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.1);
        gain.gain.setValueAtTime(0.12, now + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.1 + 1.8);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.1);
        osc.stop(now + i * 0.1 + 1.9);
      });
    } else if (type === 'flute') {
      const notes = [440, 493.88, 554.37, 659.25];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.2);
        gain.gain.setValueAtTime(0.1, now + i * 0.2);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.2 + 1.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.2);
        osc.stop(now + i * 0.2 + 1.5);
      });
    } else if (type === 'correct') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now);
      osc.frequency.setValueAtTime(880, now + 0.14);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.95);
    }
  }

  // ==========================================
  // REAL AUDIO CHANT PLAYER
  // ==========================================
  toggleAmbientChant(religionId) {
    if (this.ambientChantPlaying && this.currentChantReligionId === religionId) {
      this.stopAmbientChant();
      this.updateChantButtonUI();
    } else {
      this.startAmbientChant(religionId);
    }
  }

  startAmbientChant(religionId) {
    if (this.currentAudio && this.currentChantReligionId === religionId && this.ambientChantPlaying) {
      return; // Already playing smoothly!
    }

    this.stopAmbientChant();
    const religion = RELIGIONS_DATA.find(r => r.id === religionId);
    if (!religion || !religion.ambientChant?.audioSrc) return;

    try {
      const audio = new Audio(religion.ambientChant.audioSrc);
      audio.loop = true;
      audio.volume = 0.85;
      this.currentAudio = audio;
      this.currentChantReligionId = religionId;
      this.ambientChantPlaying = true;

      audio.addEventListener('error', (e) => {
        console.warn('Audio playback error', e);
        this.ambientChantPlaying = false;
        this.updateChantButtonUI();
      });

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          this.ambientChantPlaying = true;
          this.updateChantButtonUI();
        }).catch(err => {
          console.warn('Audio play prevented or interaction needed:', err);
          this.ambientChantPlaying = false;
          this.updateChantButtonUI();
        });
      }
    } catch (err) {
      console.warn('Error starting audio chant:', err);
      this.ambientChantPlaying = false;
      this.updateChantButtonUI();
    }
  }

  updateChantButtonUI() {
    const btn = document.getElementById('btn-ambient-chant-toggle');
    if (!btn) return;
    const religion = RELIGIONS_DATA.find(r => r.id === this.selectedReligionId);
    if (!religion) return;

    if (this.ambientChantPlaying) {
      btn.classList.add('playing');
      btn.title = 'Click to Pause Sacred Audio';
      btn.innerHTML = `
        <div class="equalizer-anim">
          <div class="eq-bar"></div>
          <div class="eq-bar"></div>
          <div class="eq-bar"></div>
          <div class="eq-bar"></div>
        </div>
        <div class="chant-btn-text">
          <span class="chant-btn-title">🔊 Playing: ${religion.ambientChant.name}</span>
          <span class="chant-btn-sub">Click to Pause Audio</span>
        </div>
      `;
    } else {
      btn.classList.remove('playing');
      btn.title = 'Click to Play Sacred Audio';
      btn.innerHTML = `
        <div class="chant-play-icon" style="background: ${religion.color}">
          <i data-lucide="volume-2" style="width: 16px; height: 16px; color: #fff;"></i>
        </div>
        <div class="chant-btn-text">
          <span class="chant-btn-title">▶️ Play Sacred Audio</span>
          <span class="chant-track-sub">${religion.ambientChant.name}</span>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
    }
  }

  stopAmbientChant() {
    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      } catch (e) {}
      this.currentAudio = null;
    }
    this.ambientChantPlaying = false;
    this.currentChantReligionId = null;
    this.updateChantButtonUI();
  }

  getReligionProgress(religionId) {
    const religion = RELIGIONS_DATA.find(r => r.id === religionId);
    if (!religion) return { percent: 0, completedCount: 0, totalCount: 0 };

    const totalCount = religion.lectures.length;
    let completedCount = 0;
    religion.lectures.forEach(lec => {
      if (this.progress.completedLectures[lec.id]) {
        completedCount++;
      }
    });

    const percent = Math.round((completedCount / totalCount) * 100);
    return { percent, completedCount, totalCount };
  }
}

export const appState = new AppState();
