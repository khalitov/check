var btn = document.querySelector('.menu-toggle');
var navList = document.querySelector('.nav-list');
var pageHeader = document.querySelector('.page-header');
var pageHeaderMain = document.querySelector('.page-header__main-block');
var titlePhone = document.querySelector('.page-header__title--with-phone');
var pageTitle = document.querySelector('.page-header__title');
var priceTable = document.querySelector('.price-section__options-table');
var tableSliderElems = document.querySelectorAll('.price-section .slider-toggle__toggle-item');

hideMenu();
// for (var i = 0; i < tableSliderElems.length; i++) {
//   toggleSliderElem(tableSliderElems, tableSliderElems[i]);
//   turnSliderContent(tableSliderElems, tableSliderElems[i], i);
// }
// widthChange(priceTable);


function hideMenu() {
  pageHeader.classList.remove('page-header--no-js');
  navList.classList.remove('nav-list--no-js');
  pageHeader.classList.add('page-header--js');
  navList.classList.add('nav-list--js');
if (titlePhone) {
  titlePhone.classList.remove('page-header__title--with-phone--no-js');
} else {
  pageTitle.classList.remove('page-header__title--no-js');
}

  btn.classList.toggle('menu-toggle--menu-opened');
  navList.classList.toggle('nav-list--menu-opened');
  pageHeaderMain.classList.toggle('page-header__main-block--menu-opened');


  btn.addEventListener('click', function() {
    btn.classList.toggle('menu-toggle--menu-opened');
    navList.classList.toggle('nav-list--menu-opened');
    pageHeaderMain.classList.toggle('page-header__main-block--menu-opened');
    if (titlePhone) {
      titlePhone.classList.toggle('page-header__title--with-phone--menu-opened')
    } else {
    pageTitle.classList.toggle('page-header__title--menu-opened');
  }});
};

function toggleSliderElem(sliderArr, sliderElem) {
  sliderElem.addEventListener('click', function() {
    if (!(this.classList.contains('slider-toggle__toggle-item--active'))) {
      dumpSliderElem(sliderArr);
    }
    this.classList.add('slider-toggle__toggle-item--active');
  });
};

function dumpSliderElem(sliderArr) {
  for (var j = 0; j < sliderArr.length; j++) {
    sliderArr[j].classList.remove('slider-toggle__toggle-item--active');
  }
};



function turnSliderContent(sliderArr, sliderElem, sliderNumber) {
  var initMargin = 20 + 'px';
  var slidderLength = sliderArr.length;
  var turnValue = 100 / slidderLength;
  var transformValue = turnValue * sliderNumber;
  sliderElem.addEventListener('click', function() {
    priceTable.style.transform = 'translateX(-' + transformValue + '%)';
    priceTable.style.marginLeft = initMargin;
  })
};

function widthChange(sliderArray) {
  // var sliderArr = sliderArray;
  var mqTablet = window.matchMedia("(min-width: 700px)");
  mqTablet.addListener(mqSliderWatch, sliderArray);
};

function mqSliderWatch(mqTablet, sliderArr) {
  if (mqTablet.matches) {
    sliderReset(sliderArr);
  } else {
    sliderDefault(sliderArr);
  }
};

function sliderReset(sliderArr) {
  console.log('Hello');
  sliderArr.style.transform = 'translateX(-' + 0 + '%)';
  sliderArr.style.marginLeft = 'auto';
}

function sliderDefault(sliderArr, defPosition) {
  if (defPosition === undefined) {
    defPosition = 1;
  }
  sliderArr.style.transform = 'translateX(-' + turnValue + '%)';
  sliderArr.style.marginLeft = initMargin;
  dumpSliderElem(sliderArr);
  sliderArr[defPosition].classList.add('slider-toggle__toggle-item--active');
}

function animate(draw, duration) {
  var start = performance.now();

  requestAnimationFrame(function animate(time) {
    var timePassed = time - start;
    if (timePassed > duration) timePassed = duration;
    draw(timePassed);
    if (timePassed < duration) {
      requestAnimationFrame(animate);
    }
  });
};

// map activation
// ymaps.ready(init);
// var myMap;
//
// function init() {
//   myMap = new ymaps.Map("map", {
//     center: [59.938504,30.322432],
//     zoom: 16
//   });
//   myMap.controls.remove('geolocationControl');
//   myMap.controls.remove('searchControl');
//   myMap.controls.remove('trafficControl');
//   myMap.controls.remove('typeSelector');
//   myMap.controls.remove('fullscreenControl');
//   var myPlacemark = new ymaps.Placemark([59.938504,30.322432], {
//     hintContent: 'PINK',
//     balloonContent: 'Вход в офис на 3-ем этаже'
//   }, {
//     iconLayout: 'default#image',
//     iconImageHref: '../img/svglogo.svg',
//     iconImageSize: [25, 25],
//     iconImageClipRect: [[135,125], [175, 165]],
//      iconImageOffset: [-12, -25]
//   });
//   myMap.geoObjects.add(myPlacemark);
// }
