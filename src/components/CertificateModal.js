import { RELIGIONS_DATA } from '../data.js';
import { appState } from '../state.js';

export function openCertificateModal(religionId) {
  const religion = RELIGIONS_DATA.find(r => r.id === religionId);
  if (!religion) return;

  const examData = appState.progress.examScores[religion.id] || {
    score: 96,
    grade: 'A+',
    date: 'October 2026'
  };

  const childName = appState.activeChild === 'rudra' ? 'Rudra' : 'Ananya';

  const modalHtml = `
    <div class="modal-overlay" id="cert-modal-overlay">
      <div class="certificate-card">
        <button class="close-modal-btn" id="btn-close-cert">✕</button>

        <div style="font-size: 32px; margin-bottom: 4px;">🏆</div>
        <div class="cert-title">Certificate of Wisdom & Ethics</div>
        <div class="cert-sub">UniSoul • Global Character Honors</div>

        <p style="font-size: 13.5px; color: #78350f; margin-bottom: 12px;">This is proudly presented to</p>

        <div class="cert-recipient">${childName}</div>

        <div class="cert-desc">
          For demonstrating thoughtful moral understanding, compassion, and exemplary values in the teachings of 
          <strong>${religion.name}</strong> with a score of <strong>${examData.score}% (Grade ${examData.grade})</strong>.
        </div>

        <div style="display: inline-flex; align-items: center; gap: 8px; background: #fef3c7; border: 1px solid #fde68a; padding: 6px 16px; border-radius: 999px; font-size: 12px; font-weight: 700; color: #92400e;">
          <span>🌟 Verified Moral Scholar</span>
          <span>•</span>
          <span>${religion.symbol} ${religion.name}</span>
        </div>

        <div class="cert-signatures">
          <div>
            <div style="font-weight: 800; border-bottom: 1px solid #d97706; padding-bottom: 2px;">Grand Council of Educators</div>
            <div style="font-size: 10.5px; margin-top: 2px;">Universal Wisdom Academy</div>
          </div>

          <div>
            <div style="font-weight: 800; border-bottom: 1px solid #d97706; padding-bottom: 2px;">Director of Family Learning</div>
            <div style="font-size: 10.5px; margin-top: 2px;">Global Ethics Program</div>
          </div>
        </div>

        <div style="margin-top: 24px;">
          <button class="submit-exam-btn" onclick="window.print()" style="font-size: 13px; padding: 9px 20px;">
            Print / Save Certificate PDF
          </button>
        </div>
      </div>
    </div>
  `;

  const container = document.getElementById('modal-container');
  container.innerHTML = modalHtml;

  document.getElementById('btn-close-cert').addEventListener('click', closeCertificateModal);
  document.getElementById('cert-modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'cert-modal-overlay') closeCertificateModal();
  });
}

export function closeCertificateModal() {
  const container = document.getElementById('modal-container');
  container.innerHTML = '';
}
