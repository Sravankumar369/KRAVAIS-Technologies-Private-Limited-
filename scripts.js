/*console.clear();

/*gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: ".wrapper1",
      start: "top top",
      end: "+=150%",
      pin: true,
      scrub: true,
      markers: true
    }
  })
  .to("img", {
    scale: 2,
    z: 350,
    transformOrigin: "center center",
    ease: "power1.inOut"
  })
  .to(
    ".main_container",
    {
      scale: 1.1,
      transformOrigin: "center center",
      ease: "power1.inOut"
    },
    "<"
  );
});
*/
/* go to top button*/
// Get the button
let goToTopBtn = document.getElementById("goToTopBtn");

// When the user clicks on the button, scroll to the top of the document
goToTopBtn.addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
/* DOMContentLoaded Event Listener */
document.addEventListener('DOMContentLoaded', function() {
  // Burger menu starts
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function() {
      mobileMenu.classList.toggle('show');
    });

    mobileMenu.addEventListener('mouseleave', function() {
      mobileMenu.classList.remove('show');
    });

  }
  


  // Key applications starts
  const headings = document.querySelectorAll('.heading');
  const infos = document.querySelectorAll('.info');
  const timers = document.querySelectorAll('.timer');
  const images = [
    "Mission_Readiness_img.jpg",
    "Equipment_Handling_img.jpg",
    "Operational_Efficiency_img.jpg"
  ];
  const displayImage = document.getElementById('displayImage');
  let currentIndex = 0;
  let intervalId;
  let timeoutId;

  function showInfo(index) {
    // Hide all infos and timers
    infos.forEach((info, i) => {
      info.style.display = 'none';
      timers[i].style.display = 'none';
      timers[i].style.animation = 'none';
    });

    // Update image
    displayImage.style.opacity = 0;
    setTimeout(() => {
      displayImage.src = images[index];
      displayImage.style.opacity = 1;
    }, 500);

    // Show selected info and timer
    infos[index].style.display = 'block';
    infos[index].style.opacity = 0;
    setTimeout(() => {
      infos[index].style.opacity = 1;
    }, 500);
    timers[index].style.display = 'block';
    timers[index].style.animation = 'timer 10s linear infinite';
  }

  function startInterval() {
    intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % headings.length;
      showInfo(currentIndex);
    }, 10000);
  }

  function resetInterval() {
    clearInterval(intervalId);
    clearTimeout(timeoutId);
    startInterval();
  }

  // Add click event listeners to headings
  headings.forEach((heading, index) => {
    heading.addEventListener('click', () => {
      currentIndex = index;
      showInfo(index);
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(startInterval, 10000);
    });
  });

  // Initialize first display
  if (headings.length > 0 && infos.length > 0 && timers.length > 0 && displayImage) {
    showInfo(currentIndex);
    startInterval();
  }
});
