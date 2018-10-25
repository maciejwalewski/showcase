document.addEventListener("DOMContentLoaded", function () {
  function slideInElementsFunc() {
    let slideInElements = document.getElementsByClassName('slideIn');

    for (let i = 0; i < slideInElements.length; i++) {
      setTimeout(function () {
        slideInElements[i].classList.add('slideIn__slided');
      }, i * 100);
    }
  }

  setTimeout(slideInElementsFunc, 1000);

});