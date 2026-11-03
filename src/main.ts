export {};

const root = document.documentElement;
const themeButton = document.querySelector<HTMLButtonElement>('.theme-button')!;
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

function isDarkTheme(): boolean {
  return root.dataset.theme ? root.dataset.theme === 'dark' : systemTheme.matches;
}

function updateThemeLabel(): void {
  const label = isDarkTheme() ? 'Light theme' : 'Dark theme';
  themeButton.textContent = label;
  themeButton.setAttribute('aria-label', `Switch to ${label.toLowerCase()}`);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDarkTheme() ? '#121110' : '#F6F2EE');
}

themeButton.hidden = false;
updateThemeLabel();
themeButton.addEventListener('click', () => {
  root.dataset.theme = isDarkTheme() ? 'light' : 'dark';
  try { localStorage.setItem('portfolio-theme', root.dataset.theme); } catch { /* Theme still works without storage. */ }
  updateThemeLabel();
});
systemTheme.addEventListener('change', updateThemeLabel);

const menuButton = document.querySelector<HTMLButtonElement>('.menu-button')!;
const navigation = document.querySelector<HTMLElement>('#navigation')!;
const mobileScreen = window.matchMedia('(max-width: 640px)');
root.classList.add('menu-ready');
menuButton.hidden = false;

function closeMenu(returnFocus = false): void {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
  menuButton.innerHTML = 'Menu <span aria-hidden="true">+</span>';
  if (returnFocus) menuButton.focus();
}

menuButton.addEventListener('click', () => {
  const opening = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(opening));
  navigation.classList.toggle('is-open', opening);
  menuButton.innerHTML = opening ? 'Close <span aria-hidden="true">−</span>' : 'Menu <span aria-hidden="true">+</span>';
});
navigation.addEventListener('click', (event) => {
  if (event.target instanceof HTMLAnchorElement && mobileScreen.matches) closeMenu(true);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
mobileScreen.addEventListener('change', () => closeMenu());

const progressBar = document.querySelector<HTMLElement>('.reading-progress')!;
let progressScheduled = false;
function updateProgress(): void {
  const scrollable = root.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
  progressBar.style.transform = `scaleX(${progress})`;
  progressScheduled = false;
}
function scheduleProgress(): void {
  if (!progressScheduled) {
    progressScheduled = true;
    requestAnimationFrame(updateProgress);
  }
}
window.addEventListener('scroll', scheduleProgress, { passive: true });
window.addEventListener('resize', scheduleProgress);
window.addEventListener('load', scheduleProgress);
document.fonts.ready.then(scheduleProgress);
updateProgress();

const motionButton = document.querySelector<HTMLButtonElement>('.motion-button')!;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let explicitlyPaused = false;
function updateMotion(): void {
  root.classList.toggle('motion-ready', !reducedMotion.matches);
  root.classList.toggle('motion-paused', explicitlyPaused);
  motionButton.hidden = reducedMotion.matches;
  motionButton.textContent = explicitlyPaused ? 'Resume motion' : 'Pause motion';
  motionButton.setAttribute('aria-pressed', String(explicitlyPaused));
}
motionButton.addEventListener('click', () => {
  explicitlyPaused = !explicitlyPaused;
  updateMotion();
});
reducedMotion.addEventListener('change', updateMotion);
const heroObserver = new IntersectionObserver(([entry]) => {
  root.classList.toggle('motion-offscreen', !entry.isIntersecting);
});
heroObserver.observe(document.querySelector('.hero')!);
updateMotion();
