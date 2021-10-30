"use strict";

const faqToggle = document.querySelectorAll(".faq-toggle");

faqToggle.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    //   removeActive();
    toggle.parentNode.classList.toggle("active");
  });
});

function removeActive() {
  faqToggle.forEach((el) => {
    el.parentNode.classList.remove("active");
  });
}
