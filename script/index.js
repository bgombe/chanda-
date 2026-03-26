let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function downloadCurrentImage() {
  const activeSlide = document.querySelector('.slide.active img');
  if (activeSlide) {
    const a = document.createElement('a');
    a.href = activeSlide.src;
    a.download = activeSlide.alt || 'slide-image.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } else {
    alert('No active slide found.');
  }
}
// Removed broken submit handler

// Registration form handler for register.html only
if (window.location.pathname.endsWith('register.html') || document.getElementById('registerForm')) {
  $('#registerForm').on('submit', function(e) {
    e.preventDefault();
    const admission = $('#admission').val().trim();
    const name = $('#name').val().trim();
    const event = $('#event').val().trim();
    const email = $('#email').val().trim();
    
    if (admission && name && event && email) {
      $('#success-message').fadeIn(1000).delay(3000).fadeOut(1000);
      console.log('Registration successful:', { admission, name, event, email });
      $(this)[0].reset();  // Reset form
    } else {
      alert('Please fill all fields.');
    }
  });
}

console.log('Registration handler loaded');



