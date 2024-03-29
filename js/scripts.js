document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("hideAll").style.display = "none";

  function slideInElementsFunc() {
    let slideInElements = document.getElementsByClassName('slideIn');

    for (let i = 0; i < slideInElements.length; i++) {
      setTimeout(function () {
        slideInElements[i].classList.add('slideIn__slided');
      }, i * 100);
    }
  }

  setTimeout(slideInElementsFunc, 1000);

  var currentYear = new Date().getFullYear();
  var age = Math.abs(currentYear - 1995);
  document.getElementById("age").textContent = age;
});