const $doc = document.documentElement;

document.body.appendChild(
  document.querySelector('.Intro').cloneNode(true),
);

document.addEventListener('scroll', e => {
  const { scrollTop, scrollHeight, clientHeight } = $doc;
  if (scrollTop + clientHeight >= scrollHeight)
    $doc.scrollTop = 0;
});