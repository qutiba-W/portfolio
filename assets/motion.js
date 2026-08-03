// Progressive enhancement only: elements start visible in plain CSS and are
// only hidden once JS actually runs and adds .reveal, so a blocked/failed
// script never leaves content stuck invisible.
(function () {
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var revealTargets = document.querySelectorAll('.section-label, main h1, main h2, .card');
    if (revealTargets.length && !reduceMotion && 'IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

        revealTargets.forEach(function (el) {
            el.classList.add('reveal');
            observer.observe(el);
        });
    }

    var heroFigure = document.querySelector('.hero-figure');
    var heroPhoto = document.querySelector('.hero-photo');
    if (heroFigure && heroPhoto && !reduceMotion) {
        var ticking = false;
        var updateParallax = function () {
            var rect = heroFigure.getBoundingClientRect();
            var progress = Math.min(Math.max(-rect.top / (rect.height || 1), 0), 1);
            heroPhoto.style.transform = 'translateY(' + (progress * 24) + 'px) scale(1.06)';
            ticking = false;
        };
        window.addEventListener('scroll', function () {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }, { passive: true });
        updateParallax();
    }
})();
