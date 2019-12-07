var listenedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
};

var konabruyCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right'];

var konabruyCodePosition = 0;

document.addEventListener('keydown', function(e) {
  var key = listenedKeys[e.keyCode];
  var requiredKey = konabruyCode[konabruyCodePosition];

  if (key == requiredKey) {
    konabruyCodePosition++;

    if (konabruyCodePosition == konabruyCode.length) {
      activateCheats();
      konabruyCodePosition = 0;
    }
  } else {
    konabruyCodePosition = 0;
  }
});

function activateCheats() {
  document.getElementById('img').src = './assets/img/02.jpg';

  var audio = new Audio('./assets/img/konami.mp3');
  audio.play();
}
