// main.js

const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function breathAnimation() {
  container.className = 'container grow';
  text.innerText = 'Inspire...';

  setTimeout(function() {
    text.innerText = 'Segure...';
    setTimeout(function() {
      container.className = 'container shrink';
      text.innerText = 'Expire...';
    }, holdTime);
  }, breatheTime);
}

breathAnimation();

setInterval(breathAnimation, totalTime);
