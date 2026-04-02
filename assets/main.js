// ── MOBILE MENU ───────────────────────────────────────────────────
function toggleMobile() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

// ── STICKY PHONE BAR / NAVBAR SCROLL ──────────────────────────────
(function () {
  var lastScroll = 0;
  var PHONE_BAR_H = 40;

  window.addEventListener('scroll', function () {
    var bar    = document.getElementById('phone-bar');
    var nav    = document.getElementById('navbar');
    var menu   = document.getElementById('mobile-menu');
    var scrollY  = window.scrollY;
    var navH     = nav ? nav.offsetHeight : 70;
    var isMobile = window.innerWidth <= 700;

    if (isMobile) {
      if (nav)  nav.style.top  = '0';
      if (menu) menu.style.top = navH + 'px';
    } else {
      if (scrollY > lastScroll && scrollY > 80) {
        if (bar)  bar.classList.add('hidden');
        if (nav)  nav.style.top  = '0';
        if (menu) menu.style.top = navH + 'px';
      } else {
        if (bar)  bar.classList.remove('hidden');
        if (nav)  nav.style.top  = PHONE_BAR_H + 'px';
        if (menu) menu.style.top = (PHONE_BAR_H + navH) + 'px';
      }
    }
    lastScroll = scrollY <= 0 ? 0 : scrollY;
  });
})();

// ── REVIEW CAROUSEL ───────────────────────────────────────────────
(function () {
  var current = 0;
  var total   = 3;

  function update() {
    var track = document.getElementById('reviewsTrack');
    if (!track) return;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    document.querySelectorAll('.dot').forEach(function (d, i) {
      d.classList.toggle('active', i === current);
    });
  }

  window.moveCarousel = function (dir) {
    current = (current + dir + total) % total;
    update();
  };

  window.goToSlide = function (n) {
    current = n;
    update();
  };

  if (document.getElementById('reviewsTrack')) {
    setInterval(function () { window.moveCarousel(1); }, 5000);
  }
})();

// ── CONTACT FORM ──────────────────────────────────────────────────
window.formSubmitting = false;

window.formSubmitted = function () {
  window.formSubmitting = false;
  var form    = document.getElementById('serviceForm');
  var success = document.getElementById('formSuccess');
  if (form)    { form.reset(); form.style.display = 'none'; }
  if (success) { success.style.display = 'block'; }
};
