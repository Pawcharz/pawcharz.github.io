// Show the name in the top bar once the big name at the top has scrolled away.
const h1 = document.querySelector('h1');
const navName = document.querySelector('.nav-name');
if (h1 && navName && 'IntersectionObserver' in window) {
  new IntersectionObserver(([e]) => navName.classList.toggle('show', !e.isIntersecting), { rootMargin: '-52px 0px 0px 0px' }).observe(h1);
}
