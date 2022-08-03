/*다크모드 주간모드 변경 스크립트 2022.07.28 by jigoo*/
var body = {
  setColor: function (color) {
    document.querySelector('body').style.color = color;
  },
  backgroundSetColor: function (color) {
    document.querySelector('body').style.backgroundColor = color;
  },
  buttonSetColor: function (color)  {
    document.querySelector('.button-primary').style.backgroundColor = color;
  }
};
var link = {
  setColor: function (color) {
    var ah = document.querySelectorAll('ol.item a[href]', 'h1');
    var i = 0;
    while (i < ah.length) {
      ah[i].style.color = color;
      i++
    }
  }
};
function nightDayHandler(self) {
  if (self.value === 'night') {
    body.backgroundSetColor('black');
    body.setColor('white');
    self.value = 'day';
    link.setColor('white');
  } else {
    body.backgroundSetColor('white');
    body.setColor('black');
    self.value = 'night';
    link.setColor('black');
  }
}
