(function() {

  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

  var navToggle = document.querySelector(".nav-toggle");
  var mainNav = document.getElementById("main-nav");

  if (navToggle && mainNav) {
    function closeNav() {
      mainNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
    }

    function openNav() {
      mainNav.classList.add("is-open");
      navToggle.setAttribute("aria-expanded", "true");
      navToggle.setAttribute("aria-label", "Close menu");
    }

    navToggle.addEventListener("click", function() {
      if (mainNav.classList.contains("is-open")) {
        closeNav();
      } else {
        openNav();
      }
    });

    var navLinks = mainNav.querySelectorAll("a");
    for (var j = 0; j < navLinks.length; j++) {
      navLinks[j].addEventListener("click", function() {
        if (window.innerWidth < 860) {
          closeNav();
        }
      });
    }

    window.addEventListener("resize", function() {
      if (window.innerWidth >= 860) {
        closeNav();
      }
    });
  }

})();