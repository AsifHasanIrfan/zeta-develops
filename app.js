// Slick Slider scripts
$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    // centerMode: true,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  });
});

const accordionItems = document.getElementsByClassName('faq-accordion-btn');
const tlReadBtn = document.getElementsByClassName('tl-btn');
const hamburger = document.querySelector('.humburger');

for (let i = 0; i < accordionItems.length; i++) {
  accordionItems[i].addEventListener('click', function () {
    this.classList.toggle('active');
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}

// for (let i = 0; i < tlReadBtn.length; i++) {
//   tlReadBtn[i].addEventListener("click", function () {
//     console.log(tlReadBtn[0].parentElement.children);
//     this.classList.toggle("active");
//     let panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }

hamburger.onclick = function () {
  const nav = document.querySelector('.nav-wrapper');
  nav.classList.toggle('active');
};

// $(document).ready(function () {
//   $(".process-slider").slick({
//     slidesToShow: 1.5,
//     slidesToScroll: 1,
//     dots: false,
//     Infinity: false,
//     // centerMode: true,
//     arrows: false,
//     // variableWidth: true
//   });
// });
