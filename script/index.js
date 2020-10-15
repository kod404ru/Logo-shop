document.addEventListener('DOMContentLoaded', function (event) {
  //burger=============================================================================
  const headerBurger = document.querySelector('#topHeaderBurger'),
    headerMenu = document.querySelector('#topHeaderNav');

  headerBurger.addEventListener('click', function () {
    this.classList.toggle('active');
    if (this.classList.contains('active')) {
      headerMenu.classList.add('active');
    } else {
      headerMenu.classList.remove('active');
    }
  })
  //burger============================================================================
  let sideMenuParents = document.querySelectorAll('.sideMenuParent'),
    sideMenuChildren = document.querySelectorAll('.side-menu__submenu'),
    sideBurger = document.querySelector('.side-menu__burger'),
    sideMenu = document.querySelector('.side-menu__body'),
    sideMenuParentsAttr;

  sideBurger.addEventListener('click', function () {
    this.classList.toggle('active');
    if (this.classList.contains('active')) {
      sideMenu.classList.add('active');
    } else {
      sideMenu.classList.remove('active');
    }
  });

  for (let i = 0; i < sideMenuParents.length; i++) {
    sideMenuParents[i].addEventListener('mouseenter', function () {
      this.classList.add('active');
      sideMenuParentsAttr = this.getAttribute('data-index');
      sideMenuChildren[sideMenuParentsAttr].classList.add('active');
    });
  };

  for (let j = 0; j < sideMenuParents.length; j++) {
    sideMenuParents[j].addEventListener('mouseleave', function () {
      this.classList.remove('active');
      sideMenuParentsAttr = this.getAttribute('data-index');
      sideMenuChildren[sideMenuParentsAttr].classList.remove('active');
    })
  }

  const $searchBlock = $('.search-page__title'),
    $searchSpan = $('#searchSpan'),
    $searchCat = $('.search-page__categories-wrap'),
    $searchItem = $('.search-page__checkbox-text');

  $searchBlock.on('mouseenter mouseleave', function () {
    $(this).toggleClass('active');
    $searchCat.slideToggle(400);
  });

  $searchItem.on('click', function () {
    $(this).toggleClass('checked');
    let $searchItemArray = $('.search-page__checkbox-text.checked');
    if ($searchItemArray.length > 0) {
      $searchSpan.text('Выбрано ' + $searchItemArray.length);
    }
  });

  //slick slider https://kenwheeler.github.io/slick/
  $('.sliderPage').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1
  });
  //=======================================
  $('.middle-page__slider').slick({
    slidesToShow: 5,
    arrows: true
  });






















});