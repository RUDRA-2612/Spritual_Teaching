import confetti from 'canvas-confetti';
import { RELIGIONS_DATA, DAILY_QUOTES } from './data.js';

class AppState {
  constructor() {
    this.currentRole = 'student'; // 'student' | 'parent'
    this.selectedReligionId = null; // null for Screen 1, religion.id for Screen 2
    this.activeHubTab = 'lectures'; // 'lectures' | 'stories' | 'teachings' | 'calm' | 'exam'
    this.activeChild = 'aarav'; // 'aarav' | 'ananya'
    this.soundEnabled = true;

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
      stars: 380,
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
    this.notify();
  }

  selectReligion(religionId) {
    this.selectedReligionId = religionId;
    this.activeHubTab = 'lectures';
    this.notify();
  }

  clearSelectedReligion() {
    this.selectedReligionId = null;
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
      particleCount: 80,
      spread: 70,
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

  playChime(type = 'singingBowl') {
    if (!this.soundEnabled) return;
    try {
      this.initAudio();
      const ctx = this.audioCtx;
      const now = ctx.currentTime;

      if (type === 'singingBowl') {
        // Warm resonant Tibetan singing bowl
        const freqs = [432, 864, 1296];
        freqs.forEach((f, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(f, now);
          
          gain.gain.setValueAtTime(0.15 / (idx + 1), now);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 3.6);
        });
      } else if (type === 'templeBell') {
        // Bright clear temple bell chime
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(440, now + 2);

        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 2.6);
      } else if (type === 'harp') {
        // Peaceful arpeggio
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C E G C
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
        // Success celebration two-tone chime
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.setValueAtTime(880, now + 0.15); // A5

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.85);
      }
    } catch (e) {
      console.warn('Audio playback error', e);
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
