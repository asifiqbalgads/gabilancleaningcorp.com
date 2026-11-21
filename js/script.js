/* Gabilan Cleaning Corp — interactions */
(function () {
  'use strict';

  /* ---------- Sticky header shadow ---------- */
  var header = document.getElementById('siteHeader');
  function onScroll() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile navigation ---------- */
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('mobileMenu');

  function setMenu(open) {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', String(open));
    if (open) {
      menu.hidden = false;
      document.body.style.overflow = 'hidden';
    } else {
      menu.hidden = true;
      document.body.style.overflow = '';
    }
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      setMenu(!open);
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenu(false);
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1100) setMenu(false);
    });
  }

  /* ---------- FAQ accordion ---------- */
  var faqData = [
    {
      q: 'What areas do you serve?',
      a: 'We are a local business based in Dutchess County, NY — serving Poughkeepsie and the surrounding Hudson Valley communities. Not sure if we reach you? Call (845) 721-6619 and ask.'
    },
    {
      q: 'What types of facilities do you clean?',
      a: 'All industries. Offices, retail, medical, industrial and more — we know not all businesses and offices are the same, and no place is too big or small for us to handle.'
    },
    {
      q: 'Do you use eco-friendly products?',
      a: 'Yes. We use advanced techniques and environmentally responsible, eco-friendly products to keep your facility clean, healthy and safe for everyone inside it.'
    },
    {
      q: 'Which services can I book?',
      a: 'Janitorial services, window cleaning, carpet cleaning, hard floor cleaning (scrubbing, waxing, sealing), post-construction cleaning, and exterior building cleaning including power washing.'
    },
    {
      q: 'How is my cleaning plan customized?',
      a: 'We start with a walkthrough, learn your unique requirements and budget, then build a cleaning service plan around you — delivering the best value at the best possible cost.'
    },
    {
      q: 'How do I get a quote?',
      a: 'Call (845) 721-6619, email gabriel@gabilancleaningcorp.com, or use the contact form on this page. Tell us about your space and we will be in touch shortly.'
    }
  ];

  var faqList = document.getElementById('faqList');
  if (faqList) {
    var svgPlus = '<svg class="faq-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

    faqList.innerHTML = faqData.map(function (item, i) {
      var id = 'faq-panel-' + i;
      return (
        '<div class="faq-item">' +
          '<button class="faq-question" aria-expanded="false" aria-controls="' + id + '" id="faq-btn-' + i + '">' +
            '<span>' + item.q + '</span>' + svgPlus +
          '</button>' +
          '<div class="faq-answer" id="' + id + '" role="region" aria-labelledby="faq-btn-' + i + '">' +
            '<div class="faq-answer__inner">' + item.a + '</div>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    var items = faqList.querySelectorAll('.faq-item');

    function closeItem(item) {
      item.classList.remove('is-open');
      item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      item.querySelector('.faq-answer').style.maxHeight = null;
    }
    function openItem(item) {
      item.classList.add('is-open');
      item.querySelector('.faq-question').setAttribute('aria-expanded', 'true');
      var answer = item.querySelector('.faq-answer');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }

    items.forEach(function (item) {
      item.querySelector('.faq-question').addEventListener('click', function () {
        var isOpen = item.classList.contains('is-open');
        items.forEach(closeItem);
        if (!isOpen) openItem(item);
      });
    });

    /* Open the first question by default */
    if (items.length) openItem(items[0]);

    window.addEventListener('resize', function () {
      var open = faqList.querySelector('.faq-item.is-open .faq-answer');
      if (open) open.style.maxHeight = open.scrollHeight + 'px';
    });
  }

  /* ---------- Quote form → opens email client (no backend) ---------- */
  var form = document.getElementById('quoteForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var first = form.firstName.value.trim();
      var last = form.lastName.value.trim();
      var email = form.email.value.trim();
      var company = form.company.value.trim();
      var service = form.service.value;
      var message = form.message.value.trim();

      var subject = 'Quote request — ' + (service || 'Cleaning services');
      var bodyLines = [
        'Name: ' + first + ' ' + last,
        'Email: ' + email,
        company ? 'Company: ' + company : null,
        'Service needed: ' + service,
        '',
        'Message:',
        message
      ].filter(Boolean);

      var mailto = 'mailto:gabriel@gabilancleaningcorp.com'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(bodyLines.join('\n'));

      window.location.href = mailto;
    });
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
