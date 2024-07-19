document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var navSection = document.querySelector('.nav_section');
  
    menuToggle.addEventListener('click', function() {
      navSection.classList.toggle('active');
      console.log("hello")  ;
    });
  });
console.log("hello")  


document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type       : 'loop',
        perPage    : 1,
        autoplay   : true,
        pagination : true,
        arrows : false,
    }).mount();
});



function toggleDiv(buttonNumber) {
    const contents = document.querySelectorAll('.content');
    contents.forEach((content, index) => {
        content.classList.remove('active');
        if (index === buttonNumber - 1) {
            content.classList.add('active');
            
        }
    });
}

const buttons = document.querySelectorAll('.toggleButton');
    
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const paragraph = button.closest('.col-lg-6').querySelector('.hide_content');

        if (paragraph.style.display === 'none' || paragraph.style.display === '') {
            paragraph.style.display = 'block';
            button.innerHTML = 'Hide extra details <i class="fa-solid fa-angle-up"></i>';
        } else {
            paragraph.style.display = 'none';
            button.innerHTML = 'View all details <i class="fa-solid fa-angle-down"></i>';
        }
    });
});

// JavaScript to toggle content visibility
document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('toggleButton');
    var content = document.getElementById('hide_content');
  
    button.addEventListener('click', function() {
      if (content.style.display === 'none') {
        content.style.display = 'block';
        button.innerHTML = 'Read Less <i class="fa-solid fa-angle-up"></i>';
      } else {
        content.style.display = 'none';
        button.innerHTML = 'Read More <i class="fa-solid fa-angle-down"></i>';
      }
    });
  });
  
