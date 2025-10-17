// Footer year
const yearEl = document.getElementById('y');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Resume link (edit here)
const resumeEl = document.getElementById('resumeLink');
if (resumeEl) resumeEl.href = "Assets/Ali_Mashhadi_AIML_Oct25.pdf"; // e.g., 'assets/Ali-Resume.pdf'

// Highlight active section in nav on scroll
(function(){
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const navLinks = Array.from(document.querySelectorAll('.links a'));
  const byId = id => navLinks.find(a => a.getAttribute('href') === '#' + id);
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const link = byId(e.target.id);
        if (link) link.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0.01 });
  sections.forEach(s => io.observe(s));
})();
