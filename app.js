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

$(document).ready(function () {
  $('.process-slider').slick({
    slidesToShow: 1.5,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    // centerMode: true,
    arrows: false,
    // variableWidth: true
  });
});

const accordionItems = document.getElementsByClassName('faq-accordion-btn');
const tlReadBtn = document.getElementsByClassName('tl-btn');
const hamburger = document.querySelector('.humburger');

for (let i = 0; i < accordionItems.length; i++) {
  accordionItems[i].addEventListener('click', function () {
    this.classList.toggle('active');
    let panel = this.lastElementChild;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}

// See more and sow less scripts

// Get all the cards on the page
const cards = document.querySelectorAll('.slider-card');

// Iterate over each card
cards.forEach((card) => {
  const content = card.querySelector('.more-content');
  const seeMoreBtn = card.querySelector('#see-more');
  const seeLessBtn = card.querySelector('#show-less');

  // Hide the extra content initially
  content.classList.add('collapsed');

  // Show the full content when "See More" is clicked
  seeMoreBtn.addEventListener('click', () => {
    content.classList.remove('collapsed');
    seeMoreBtn.style.display = 'none';
    seeLessBtn.style.display = 'block';
  });

  // Hide the extra content when "See Less" is clicked
  seeLessBtn.addEventListener('click', () => {
    content.classList.add('collapsed');
    seeMoreBtn.style.display = 'block';
    seeLessBtn.style.display = 'none';
  });
});

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
