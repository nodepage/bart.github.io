let lastScrollTop = 0;

var navbar = document.getElementById("header_sticky");

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    console.log("Scrolling down");
    navbar.classList.add("show")
  } else {
    // Scrolling up
    console.log("Scrolling up");
    if (currentScroll === 0){
        navbar.classList.remove("show");
    }
      
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});


// let mybutton = document.getElementsByClassName('back-to-top')[0]

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "flex";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var noti = document.getElementById('copy-notification')

function copy() {
  var copyText = document.querySelector("#email"); 
  copyText.select(); document.execCommand("copy");
  noti.style.display = "block"
  setTimeout(function() {
    noti.style.display = "none"
  }, 1500);
}
document.querySelector("#copy").addEventListener("click", copy);


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
  let slides = document.getElementsByClassName("slick-slide");
  // let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}




// function menu() {
//   const elements = document.querySelectorAll('.met');


//   var x = document.getElementsByClassName('detail')[1]
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//     navbar.classList.add("show")
//   }


//   for (let i = 0; i < elements.length; i++) {
//     const element = elements[i];
//     // Perform actions on each element, such as adding a class
//     element.addEventListener('click', () => {
//       // Code to execute when the button is clicked
//       x.style.display = "none";
//     });
//   }

  

 
}