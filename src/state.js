import confetti from 'canvas-confetti';
import { RELIGIONS_DATA, DAILY_QUOTES } from './data.js';

class AppState {
  constructor() {
    this.currentRole = 'student'; // 'student' | 'parent'
    this.selectedReligionId = null; // null for Screen 1, religion.id for Screen 2
    this.activeHubTab = 'lectures'; // 'lectures' | 'stories' | 'teachings' | 'calm' | 'exam'
    this.activeChild = 'aarav'; // 'aarav' | 'ananya'
    this.soundEnabled = true;

    // Ambient Chant Looper State
    this.ambientChantPlaying = false;
    this.ambientChantNodes = [];
    this.ambientChantTimer = null;

    // Load progress from localStorage
    const savedProgress = localStorage.getItem('spiritual_academy_progress');
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
      stars: 420,
      streak: 5,
      completedLectures: {
        'b1': true,
        'b2': true,
        'b3': true,
        'h1': true,
        'h2': true,
        'h3': true,
        's1': true,
        's2': true,
        'c1': true,
        'c2': true,
        'c3': true,
        'i1': true,
        'i2': true,
        'i3': true,
        'j1': true,
        'j2': true,
        'jd1': true,
        'jd2': true,
        'jd3': true
      },
      examScores: {
        'buddhism': { score: 100, grade: 'A+', date: 'Yesterday' },
        'hinduism': { score: 94, grade: 'A+', date: '3 days ago' },
        'islam': { score: 94, grade: 'A+', date: '4 days ago' },
        'christianity': { score: 92, grade: 'A', date: '5 days ago' }
      }
    };
  }

  save() {
    localStorage.setItem('spiritual_academy_progress', JSON.stringify(this.progress));
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
    this.stopAmbientChant();
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
     CONTINUOUS SACRED AMBIENT CHANT LOOPER ENGINE
     ================================================================= */
  toggleAmbientChant(religionId) {
    if (this.ambientChantPlaying) {
      this.stopAmbientChant();
    } else {
      this.startAmbientChant(religionId);
    }
    this.notify();
  }

  startAmbientChant(religionId) {
    this.stopAmbientChant();
    this.initAudio();
    this.ambientChantPlaying = true;

    const religion = RELIGIONS_DATA.find(r => r.id === religionId);
    if (!religion) return;

    const chantType = religion.ambientChant?.type || 'hinduGayatri';

    // Play continuously every cycle
    const loopIntervalMs = 7000;
    this.playAmbientCycle(chantType);
    this.ambientChantTimer = setInterval(() => {
      if (this.ambientChantPlaying) {
        this.playAmbientCycle(chantType);
      }
    }, loopIntervalMs);
  }

  stopAmbientChant() {
    this.ambientChantPlaying = false;
    if (this.ambientChantTimer) {
      clearInterval(this.ambientChantTimer);
      this.ambientChantTimer = null;
    }
    if (this.ambientChantNodes && this.ambientChantNodes.length > 0) {
      this.ambientChantNodes.forEach(node => {
        try { node.stop(); } catch (e) {}
      });
      this.ambientChantNodes = [];
    }
  }

  playAmbientCycle(type) {
    if (!this.audioCtx) return;
    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    if (type === 'gayatriMantra') {
      // 🕉️ Gayatri Mantra / Sacred Om & Tanpura Drone (136.1 Hz Om vibration + fifth harmonics)
      const omFreqs = [136.1, 204.15, 272.2, 408.3];
      omFreqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = idx === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        // Gentle swell and dissolve
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.12 / (idx + 1), now + 2.0);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 6.8);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 7.0);
        this.ambientChantNodes.push(osc);
      });
    } else if (type === 'buddhistChant') {
      // ☸️ Tibetan Singing Bowl Resonance (432 Hz + 864 Hz calm bells)
      const bowlFreqs = [216, 432, 648, 864];
      bowlFreqs.forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now);

        gain.gain.setValueAtTime(0.15 / (idx + 1), now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 6.8);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 7.0);
        this.ambientChantNodes.push(osc);
      });
    } else if (type === 'ikOnkarChant') {
      // ☬ Ik Onkar Dilruba Harmony (Reverent drone + uplifting fifths)
      const notes = [146.83, 220.00, 293.66, 440.00]; // D3, A3, D4, A4
      notes.forEach((f, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, now + i * 0.4);

        gain.gain.setValueAtTime(0.001, now + i * 0.4);
        gain.gain.linearRampToValueAtTime(0.09, now + i * 0.4 + 1.2);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 6.8);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.4);
        osc.stop(now + 7.0);
        this.ambientChantNodes.push(osc);
      });
    } else if (type === 'christianHymn') {
      // ✝️ Gregorian Chorus & Angelic Harp Arpeggio
      const notes = [261.63, 329.63, 392.00, 523.25, 659.25]; // C4, E4, G4, C5, E5
      notes.forEach((f, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now + i * 0.5);

        gain.gain.setValueAtTime(0.001, now + i * 0.5);
        gain.gain.linearRampToValueAtTime(0.08, now + i * 0.5 + 0.8);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 6.8);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.5);
        osc.stop(now + 7.0);
        this.ambientChantNodes.push(osc);
      });
    } else if (type === 'islamicChant') {
      // ☪️ Subhanallah Ney Flute Scale (Modal Eastern Pentatonic)
      const notes = [293.66, 311.13, 369.99, 440.00, 493.88]; // D, Eb, F#, A, B (Bayati scale feel)
      notes.forEach((f, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now + i * 0.7);

        gain.gain.setValueAtTime(0.001, now + i * 0.7);
        gain.gain.linearRampToValueAtTime(0.07, now + i * 0.7 + 0.4);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.7 + 2.5);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.7);
        osc.stop(now + i * 0.7 + 2.6);
        this.ambientChantNodes.push(osc);
      });
    } else if (type === 'navkarChant') {
      // 🪷 Navkar Mantra Peace Bells & Pure Harmonic Resonator
      const notes = [220.00, 329.63, 440.00, 554.37]; // A, E, A, C#
      notes.forEach((f, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, now + i * 0.6);

        gain.gain.setValueAtTime(0.08, now + i * 0.6);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 6.8);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.6);
        osc.stop(now + 7.0);
        this.ambientChantNodes.push(osc);
      });
    } else if (type === 'shalomChant') {
      // ✡️ Shalom Aleichem Peace Harp
      const notes = [293.66, 369.99, 440.00, 587.33]; // D, F#, A, D
      notes.forEach((f, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now + i * 0.5);

        gain.gain.setValueAtTime(0.09, now + i * 0.5);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 6.8);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.5);
        osc.stop(now + 7.0);
        this.ambientChantNodes.push(osc);
      });
    }
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
