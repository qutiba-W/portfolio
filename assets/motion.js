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

    // The hero-photo parallax is gone with the hero photograph. The workshop
    // banner animates itself in CSS, which needs no scroll listener at all.
})();
