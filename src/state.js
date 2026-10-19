import confetti from 'canvas-confetti';
import { RELIGIONS_DATA, DAILY_QUOTES } from './data.js';

class AppState {
  constructor() {
    this.currentRole = 'student'; // 'student' | 'parent'
    this.selectedReligionId = null; // null for Screen 1, religion.id for Screen 2
    this.activeHubTab = 'lectures'; // 'lectures' | 'stories' | 'teachings' | 'calm' | 'exam'
    this.activeChild = 'aarav'; // 'aarav' | 'ananya'
    this.soundEnabled = true;

    // Authentic Sacred Audio Player State
    this.currentAudio = null;
    this.ambientChantPlaying = false;
    this.currentChantReligionId = null;

    // Load progress from localStorage (v2 to ensure fresh realistic progress)
    const savedProgress = localStorage.getItem('spiritual_academy_progress_v2');
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
  }

  getDefaultProgress() {
    return {
      stars: 380,
      streak: 4,
      completedLectures: {
        'h1': true,
        'h2': true, // Hinduism: 2 / 3 (67%)
        'b1': true, // Buddhism: 1 / 3 (33%)
        's1': true, // Sikhism: 1 / 3 (33%)
        // Christianity: 0 / 3 (0% - Ready to Begin)
        'i1': true,
        'i2': true, // Islam: 2 / 3 (67%)
        'j1': true, // Jainism: 1 / 3 (33%)
        // Judaism: 0 / 3 (0% - Ready to Begin)
      },
      examScores: {
        'hinduism': { score: 95, grade: 'A+', date: 'Yesterday' },
        'islam': { score: 92, grade: 'A', date: '3 days ago' },
        'buddhism': { score: 88, grade: 'B+', date: '4 days ago' }
      }
    };
  }

  save() {
    localStorage.setItem('spiritual_academy_progress_v2', JSON.stringify(this.progress));
    this.notify();
  }

  subscribe(callback) {
    this.subscribers.push(callback);
  }

  notify() {
    this.subscribers.forEach(cb => cb(this));
  }

  setRole(role) {
    this.currentRole = role;
    this.stopAmbientChant();
    this.notify();
  }

  selectReligion(religionId) {
    this.selectedReligionId = religionId;
    this.activeHubTab = 'lectures';
    // When entering the realm, trigger the authentic chant!
    this.startAmbientChant(religionId);
    this.notify();
  }

  clearSelectedReligion() {
    this.selectedReligionId = null;
    this.stopAmbientChant();
    this.notify();
  }

  setHubTab(tabName) {
    this.activeHubTab = tabName;
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

  markLectureCompleted(lectureId) {
    if (!this.progress.completedLectures[lectureId]) {
      this.progress.completedLectures[lectureId] = true;
      this.progress.stars += 20;
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
      date: 'Today'
    };
    this.progress.stars += 50;
    this.save();
    this.triggerConfetti();
    this.playChime('correct');
  }

  triggerConfetti() {
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 }
    });
  }

  initAudio() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  /* One-shot chimes */
  playChime(type = 'singingBowl') {
    if (!this.soundEnabled) return;
    try {
      this.initAudio();
      const ctx = this.audioCtx;
      const now = ctx.currentTime;

      if (type === 'singingBowl') {
        const freqs = [432, 864, 1296];
        freqs.forEach((f, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(f, now);
          gain.gain.setValueAtTime(0.18 / (idx + 1), now);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 3.6);
        });
      } else if (type === 'templeBell') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(440, now + 2);
        gain.gain.setValueAtTime(0.28, now);
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
          osc.frequency.setValueAtTime(freq, now + i * 0.12);
          gain.gain.setValueAtTime(0.12, now + i * 0.12);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.12 + 1.8);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + i * 0.12);
          osc.stop(now + i * 0.12 + 1.9);
        });
      } else if (type === 'correct') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, now);
        osc.frequency.setValueAtTime(880, now + 0.15);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.85);
      }
    } catch (e) {
      console.warn('Audio error', e);
    }
  }

  /* =================================================================
     AUTHENTIC SACRED AUDIO CHANT PLAYER (REAL VOCAL/MANTRA RECORDINGS)
     ================================================================= */
  toggleAmbientChant(religionId) {
    if (this.ambientChantPlaying && this.currentChantReligionId === religionId) {
      this.stopAmbientChant();
      this.notify();
    } else {
      this.startAmbientChant(religionId);
    }
  }

  startAmbientChant(religionId) {
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
        this.notify();
      });

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          this.ambientChantPlaying = true;
          this.notify();
        }).catch(err => {
          console.warn('Audio play notice (user gesture may be needed):', err);
          // If browser blocked unprompted autoplay, state remains ready
          this.ambientChantPlaying = false;
          this.notify();
        });
      }
    } catch (err) {
      console.warn('Error starting audio chant:', err);
      this.ambientChantPlaying = false;
      this.notify();
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
