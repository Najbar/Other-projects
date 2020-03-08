// event Listeners
eventListeners();
function eventListeners() {
  const ui = new UI()
  // preloader
  window.addEventListener('load', function () {
    ui.hidePreloader();
  })
  // nav btn
  document.querySelector('.navBtn').addEventListener('click', function () {
    ui.showNav();
  })
  // control the video
  document.querySelector('.video__switch').addEventListener('click', function () {
    ui.videoControls()
  })
 
  // display modal
  const links = document.querySelectorAll('.work-item__icon');


  links.forEach(function (item) {
    item.addEventListener('click', function (event) {
      ui.showModal(event)
    })
  })
  // hide modal
  document.querySelector('.work-modal__close').addEventListener('click', function () {
    ui.closeModal()
  })
}

//constructor function
function UI() {

  // hide preloader
  UI.prototype.hidePreloader = function () {
    document.querySelector('.preloader').style.display = "none";
  }
  // show Nav
  UI.prototype.showNav = function () {
    document.querySelector('.nav').classList.toggle('nav--show');
    document.querySelector('.video__container').classList.toggle('video__container2')
  }
  // play/pause the vidoe
  UI.prototype.videoControls = function () {
    let btn = document.querySelector('.video__switch-btn');
    if (!btn.classList.contains('btnSlide')) {
      btn.classList.add('btnSlide')
      document.querySelector('.video__item').pause()
    }
    else {
      btn.classList.remove('btnSlide')
      document.querySelector('.video__item').play()
    }
  }

  UI.prototype.showModal = function (event) {
    event.preventDefault();
    if (event.target.parentElement.classList.contains('work-item__icon')) {


      let id = event.target.parentElement.dataset.id

      const modal = document.querySelector('.work-modal');
      const modalItem = document.querySelector('.work-modal__item');

      modal.classList.add('work-modal--show');
      modalItem.style.backgroundImage = `url(img/work-${id}.jpg)`
    }
  }
  // hide modal

  UI.prototype.closeModal = function () {
    document.querySelector('.work-modal').classList.remove('work-modal--show')
  }
}