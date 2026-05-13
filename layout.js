/* ============================================================
   GreenTech — Shared Layout Components
   Injected into every page via data-component attributes
   ============================================================ */

const NAV_HTML = `
<a class="skip-nav" href="#main-content">Skip to main content</a>
<div class="a11y-bar" role="toolbar" aria-label="Accessibility options">
  <button id="btnFontLarger" aria-label="Increase font size">A+</button>
  <button id="btnFontReset"  aria-label="Reset font size and contrast">Reset</button>
  <button id="btnContrast"   aria-label="Toggle high contrast mode">High Contrast</button>
</div>
<nav class="navbar" aria-label="Main navigation">
  <a href="../index.html" class="nav-logo" aria-label="GreenTech Solutions home">
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="#52b788" opacity=".2"/>
      <path d="M20 8C14 8 9 13 9 19c0 4 2 7.5 5 9.5V32h12v-3.5c3-2 5-5.5 5-9.5 0-6-5-11-11-11z" fill="#52b788"/>
      <path d="M20 8v24M14 14l6 6 6-6" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    GreenTech Solutions
  </a>
  <ul class="nav-links" id="navLinks" role="list">
    <li><a href="../index.html">Home</a></li>
    <li><a href="../pages/about.html">About Us</a></li>
    <li><a href="../pages/products.html">Products</a></li>
    <li><a href="../pages/blog.html">Blog</a></li>
    <li><a href="../pages/contact.html">Contact</a></li>
    <li><a href="../pages/final.html" class="nav-cta">The Final</a></li>
  </ul>
  <button class="hamburger" id="hamburger" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="navLinks">
    <span></span><span></span><span></span>
  </button>
</nav>
`;

// Root-level nav (index.html uses different relative paths)
const NAV_HTML_ROOT = NAV_HTML
  .replace(/\.\.\/index\.html/g, 'index.html')
  .replace(/\.\.\/pages\//g, 'pages/');

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-grid">
      <div class="footer-brand">
        <span class="logo-text">🌿 GreenTech Solutions</span>
        <p>Empowering businesses to build a sustainable future through innovative eco-friendly technology.</p>
        <div class="social-links" aria-label="Social media links">
          <a href="#" class="social-link" aria-label="LinkedIn">in</a>
          <a href="#" class="social-link" aria-label="Twitter">𝕏</a>
          <a href="#" class="social-link" aria-label="Instagram">IG</a>
          <a href="#" class="social-link" aria-label="YouTube">▶</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="about.html#team">Our Team</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="contact.html">Careers</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Solutions</h4>
        <ul>
          <li><a href="products.html">Products</a></li>
          <li><a href="products.html">Carbon Tracking</a></li>
          <li><a href="products.html">Smart Recycling</a></li>
          <li><a href="products.html">Energy Devices</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Support</h4>
        <ul>
          <li><a href="contact.html">Contact Us</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Accessibility</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 GreenTech Solutions. All rights reserved.</span>
      <span>Built with 💚 for a sustainable future</span>
    </div>
  </div>
</footer>
`;

// Adjust links for root
const FOOTER_HTML_ROOT = FOOTER_HTML
  .replace(/href="([^"#]+\.html)"/g, (match, p1) => `href="pages/${p1}"`);

// Inject on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  const navSlot    = document.getElementById('nav-slot');
  const footerSlot = document.getElementById('footer-slot');
  const isRoot     = document.body.dataset.root === 'true';

  if (navSlot)    navSlot.innerHTML    = isRoot ? NAV_HTML_ROOT    : NAV_HTML;
  if (footerSlot) footerSlot.innerHTML = isRoot ? FOOTER_HTML_ROOT : FOOTER_HTML;
});
