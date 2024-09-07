import headerBgSrc from './assets/pics/preview/IMG_7310.jpg';

const $doc = document.documentElement;

// show header bg smoothly
const $headerBg = document.querySelector('.Intro .__bg');
$headerBg.style.opacity = 0.;
const headerBgImg = new Image();

Promise.all([
  new Promise (r => setTimeout(r, 300)),
  new Promise (r => { headerBgImg.onload = r }),
]).then(() => {
  $headerBg.style.transition = 'opacity .5s';
  $headerBg.style.opacity = 1.;
});
headerBgImg.src = headerBgSrc;

const $name = document.querySelector('.Name');
$name.style.position = 'fixed'; // progressive improvement if js
document.addEventListener('scroll', e => {
  $name.style.top = Math.max(0, window.innerHeight/2 - $doc.scrollTop) + 'px';
});

// scroll and show by hash
window.addEventListener('hashchange', scrollByHash);
scrollByHash();

function scrollByHash () {
  if (location.hash) {
    setTimeout(() => {
      document.querySelector(location.hash).scrollIntoView({ behavior: 'smooth' });
    }, 300);
  }
}

const $contactForm = document.querySelector('.ContactForm');

$contactForm.addEventListener('submit', event => {
  console.log(event);
  event.preventDefault();

  fetch('/mail.php', {
    method: 'POST',
    body: new FormData($contactForm),
  }).then(res => res.text())
    .then(text => {
      if (!text)
        $contactForm.classList.add('--success');
      else
        alert(`Error:\n${text}`);
    })
});

// window.handleBuyClick = (picName) => {
//   $contactForm.querySelector('.__pic').classList.remove('--empty');
//   $contactForm.querySelector('[name="pic"]').value = picName;
//   $contactForm.querySelector('[name="email"]').focus();
// };

document.addEventListener('click', e => {
  if (e.target.matches('button[name="buy-pic"]'))
    handleBuyPic(e);
});

function handleBuyPic (e) {
  let $el = e.target;
  while ($el = $el.parentNode) {
    if ($el.matches('.Pic')) {
      const picName = $el.querySelector('.__name').textContent;
      $contactForm.querySelector('.__pic').classList.remove('--empty');
      $contactForm.querySelector('[name="pic"]').value = picName;
      $contactForm.querySelector('[name="email"]').focus();
      return;
    }
  }
}
