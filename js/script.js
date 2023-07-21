// Change Navbar background opacity with scrolling

let navbar = document.getElementById("nav-container")

window.addEventListener('scroll',(event) => {
   if (window.scrollY > 0) {
    navbar.classList.add("solid-nav") 
   } else {
    navbar.classList.remove("solid-nav")
   }
});


document.addEventListener('DOMContentLoaded', function() {
    // Activate Dropdown Menu
    var dropdown = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(dropdown);
    
    // Initialize Carousel
    let carousel = document.querySelectorAll('.carousel')
    M.Carousel.init(carousel,{
        dist:5,
        shift: 5
    })

    // Carousel Previous and Next Buttons
    window.next = function() {
        let car = document.querySelector(".carousel");
        let instance = M.Carousel.getInstance(car);
        instance.next();
      }
    window.prev = function() {
        let car = document.querySelector(".carousel");
        let instance = M.Carousel.getInstance(car);
        instance.prev();
      }
  });
