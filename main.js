const $doc = document.documentElement;

// document.body.appendChild(
//   document.querySelector('.Intro').cloneNode(true),
// );

document.addEventListener('scroll', e => {
  // const { scrollTop, scrollHeight, clientHeight } = $doc;
  // if (scrollTop + clientHeight >= scrollHeight)
  //   $doc.scrollTop = 0;
  const $name = document.querySelector('.Name');
  $name.style.top = Math.max(0, 128 - $doc.scrollTop) + 'px';
  $name.style.setProperty('--bg-opaq', $doc.scrollTop > window.innerHeight ? .7 : 0.);
});

window.addEventListener('hashchange', scrollByHash);
scrollByHash();

function scrollByHash () {
  console.log(location.hash);
  if (location.hash) {
    setTimeout(() => {
      document.querySelector(location.hash).scrollIntoView({ behavior: 'smooth' });
    }, 300);
  }
}