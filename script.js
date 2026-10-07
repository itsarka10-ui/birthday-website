const scene = document.getElementById('scene');
const stopper = document.getElementById('stopper');

let hasReleased = false;

stopper.addEventListener('click', () => {
  if (hasReleased) return;

  hasReleased = true;
  scene.classList.add('released');

  setTimeout(() => {
    scene.classList.remove('released');
    setTimeout(() => {
      hasReleased = false;
    }, 250);
  }, 2600);
});
