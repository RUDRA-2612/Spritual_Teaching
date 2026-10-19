import { RELIGIONS_DATA } from '../data.js';

export function renderFooter() {
  const faithLinksHtml = RELIGIONS_DATA.map(r => `
    <li><a href="javascript:void(0)" data-footer-jump="${r.id}">${r.name}</a></li>
  `).join('');

  return `
    <footer class="app-footer">
      <div class="footer-container">
        <div class="footer-brand-col">
          <div class="footer-brand-header">
            <span class="footer-logo">🌟</span>
            <h3>OmniWisdom Academy</h3>
          </div>
          <p class="footer-mission-text">
            A secular, compassionate learning sanctuary designed to introduce children to the shared moral heart of humanity through authentic sacred audio, animated parables, and timeless cultural virtues.
          </p>
          <div class="footer-badges-row">
            <span class="f-badge">🕊️ Universal Harmony</span>
            <span class="f-badge">🌱 Child-Safe & Ad-Free</span>
            <span class="f-badge">📚 Character Education</span>
          </div>
        </div>

        <div class="footer-links-col">
          <h4>Wisdom Realms</h4>
          <ul class="footer-nav-list">
            ${faithLinksHtml}
          </ul>
        </div>

        <div class="footer-links-col">
          <h4>Universal Moral Pillars</h4>
          <ul class="footer-nav-list">
            <li><span>Karuna</span> — Active Compassion</li>
            <li><span>Dharma</span> — Duty & Integrity</li>
            <li><span>Kirat Karo</span> — Honest Living</li>
            <li><span>The Golden Rule</span> — Mutual Empathy</li>
            <li><span>Sadqah</span> — Everyday Giving</li>
            <li><span>Ahimsa</span> — Non-Violence to All Life</li>
            <li><span>Tikkun Olam</span> — Repairing the World</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom-bar">
        <div>© 2026 OmniWisdom Academy. All sacred chants and cultural traditions presented with respect for global educational purposes.</div>
      </div>
    </footer>
  `;
}
