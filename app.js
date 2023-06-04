// Slick Slider scripts

$(document).ready(function () {
  $('.cs-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    // centerMode: true,
    arrows: false,
    // swipeToSlide: true,
    variableWidth: true,
  });
});

$(document).ready(function () {
  $('.review-icons-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    // centerMode: true,
    arrows: false,
    variableWidth: true,
  });
});

$(document).ready(function () {
  $('.testimonial-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    // centerMode: true,
    infinite: true,

    arrows: false,
    variableWidth: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
    variableWidth: true,
  });
});

const accordionItems = document.getElementsByClassName('faq-accordion-item');
$(document).ready(function () {
  $('.marketing-slider').slick({
    slidesToShow: 1.5,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    // centerMode: true,
    arrows: false,
    variableWidth: true,
  });
});

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
  const seeMoreBtn = card.querySelector('.see-more');
  const seeLessBtn = card.querySelector('.show-less');

  // Hide the extra content initially
  content.classList.add('collapsed');

  // Show the full content when "See More" is clicked
  seeMoreBtn.addEventListener('click', () => {
    console.log('more');
    content.classList.remove('collapsed');
    seeMoreBtn.style.display = 'none';
    seeLessBtn.style.display = 'block';
  });

  // Hide the extra content when "See Less" is clicked
  seeLessBtn.addEventListener('click', () => {
    console.log('less');
    content.classList.add('collapsed');
    seeMoreBtn.style.display = 'block';
    seeLessBtn.style.display = 'none';
  });
});

const tlMobileCard = document.querySelectorAll('.tl-mobile-card');

tlMobileCard.forEach((card) => {
  const content = card.querySelector('.tl-mobile-content');
  const readMoreBtn = card.querySelector('#tl-read-more');
  const seeLessBtn = card.querySelector('#tl-less');

  // Show the full content when "See More" is clicked
  readMoreBtn.addEventListener('click', () => {
    content.style.display = 'block';
    readMoreBtn.style.display = 'none';
    seeLessBtn.style.display = 'block';
    card.classList.add('active');
  });

  // Hide the extra content when "See Less" is clicked
  seeLessBtn.addEventListener('click', () => {
    content.style.display = 'none';
    readMoreBtn.style.display = 'block';
    seeLessBtn.style.display = 'none';
    card.classList.remove('active');
    card.classList.remove('initial-open');
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

  if (nav.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};

const modal = document.getElementById('review-modal');

const reviewBtns = document.querySelectorAll('.review-btn');

reviewBtns.forEach((reviewBtn) => {
  reviewBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
});

let isOpenVM = false;

const videoModal = document.getElementById('video-modal');

const vidoeOpenBtn = document.querySelector('.st-play-icon');

const vidoeOpenBtnMob = document.querySelector('.st-play-small');

vidoeOpenBtn.addEventListener('click', () => {
  videoModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});

vidoeOpenBtnMob.addEventListener('click', () => {
  isOpenVM = true;
  console.log(isOpenVM);
  videoModal.style.display = 'flex';
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  } else if (event.target == videoModal) {
    videoModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
};
