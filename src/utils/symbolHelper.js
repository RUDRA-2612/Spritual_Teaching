/**
 * Universal Symbol Renderer
 * Ensures Sikhism Khanda and all symbols render crisp, high-contrast, and 100% visible across all platforms.
 */
export function renderReligionSymbol(religion, size = 26) {
  if (religion.id === 'sikhism') {
    return `
      <svg class="khanda-symbol-svg" viewBox="0 0 100 100" width="${size}" height="${size}" aria-label="Sacred Khanda Symbol">
        <defs>
          <radialGradient id="khandaGoldGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stop-color="#fef08a" />
            <stop offset="50%" stop-color="#fbbf24" />
            <stop offset="100%" stop-color="#b45309" />
          </radialGradient>
          <filter id="khandaGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="2" flood-color="#f59e0b" flood-opacity="0.85" />
          </filter>
        </defs>
        <!-- Center Double-Edged Khanda Sword -->
        <path d="M47.5 4 L52.5 4 L53.5 61 L50 67 L46.5 61 Z" fill="url(#khandaGoldGrad)" stroke="#78350f" stroke-width="1.2" filter="url(#khandaGlowFilter)"/>
        <!-- Sword Hilt Crossguard -->
        <rect x="41" y="66" width="18" height="5" rx="2" fill="url(#khandaGoldGrad)" stroke="#78350f" stroke-width="0.8"/>
        <!-- Handle & Pommel -->
        <rect x="47.5" y="71" width="5" height="19" rx="1.5" fill="url(#khandaGoldGrad)"/>
        <circle cx="50" cy="91" r="4" fill="#f59e0b" stroke="#78350f" stroke-width="0.8"/>
        <!-- Chakkar (Solid Sacred Quoit Ring) -->
        <circle cx="50" cy="38" r="21" fill="none" stroke="url(#khandaGoldGrad)" stroke-width="6.5" filter="url(#khandaGlowFilter)"/>
        <!-- Left Kirpan (Outer Curved Sword) -->
        <path d="M18 56 Q 16 25 35 14 Q 25 30 27 53 Q 30 68 45 78 Q 28 75 18 56 Z" fill="url(#khandaGoldGrad)" stroke="#78350f" stroke-width="1" filter="url(#khandaGlowFilter)"/>
        <!-- Right Kirpan (Outer Curved Sword) -->
        <path d="M82 56 Q 84 25 65 14 Q 75 30 73 53 Q 70 68 55 78 Q 72 75 82 56 Z" fill="url(#khandaGoldGrad)" stroke="#78350f" stroke-width="1" filter="url(#khandaGlowFilter)"/>
      </svg>
    `;
  }
  return `<span class="emoji-symbol">${religion.symbol}</span>`;
}
