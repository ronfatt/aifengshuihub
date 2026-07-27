export function BrandLogo() {
  return (
    <span className="brand-logo" aria-label="Enhance Fengshui Astrology">
      <svg
        className="brand-logo__mark"
        viewBox="0 0 52 52"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="brand-a" x1="7" y1="6" x2="45" y2="46">
            <stop stopColor="#4DD6E4" />
            <stop offset="1" stopColor="#147A89" />
          </linearGradient>
        </defs>
        <path
          d="M26 3.5 46 15v22L26 48.5 6 37V15L26 3.5Z"
          fill="none"
          stroke="url(#brand-a)"
          strokeWidth="2"
        />
        <path
          d="M26 11.5 38.5 19v14L26 40.5 13.5 33V19L26 11.5Zm0 7-6.5 3.8v7.4l6.5 3.8 6.5-3.8v-7.4L26 18.5Z"
          fill="none"
          stroke="#45B2C1"
          strokeWidth="2"
        />
        <circle cx="26" cy="26" r="3" fill="#4DD6E4" />
      </svg>
      <span className="brand-logo__copy">
        <strong>增强风水</strong>
        <span>ENHANCE FENGSHUI ASTROLOGY</span>
      </span>
    </span>
  );
}
