const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function page4Animation() {
  var elemC = document.querySelector("#elem-container");
  var fixed = document.querySelector("#fixed-image");
  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });
  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}

document.getElementById("hamburger").addEventListener("click", function () {
  const nav = document.getElementById("nav-part2");
  if (nav.classList.contains("active")) {
    // Smoothly hide the menu
    nav.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    nav.style.opacity = "0";
    nav.style.transform = "translateY(-20px)";
    setTimeout(() => {
      nav.classList.remove("active");
      nav.style.display = "none"; // Hide after transition
    }, 300); // Match the transition duration
  } else {
    // Smoothly show the menu
    nav.style.display = "flex";
    setTimeout(() => {
      nav.style.transition = "opacity 0.3s ease, transform 0.3s ease";
      nav.style.opacity = "1";
      nav.style.transform = "translateY(0)";
      nav.classList.add("active");
    }, 10); // Slight delay to ensure transition applies
  }
});

// Add event listeners to each navigation link
document.querySelectorAll("#nav-part2 h4").forEach((navItem) => {
  navItem.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Get the target section's ID from the data-scroll-target attribute
    const targetId = this.getAttribute("data-scroll-target");
    const targetElement = document.querySelector(targetId);

    // Scroll to the target section smoothly
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Smoothly hide the navigation menu
    const nav = document.getElementById("nav-part2");
    nav.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    nav.style.opacity = "0";
    nav.style.transform = "translateY(-20px)";
    setTimeout(() => {
      nav.classList.remove("active");
      nav.style.display = "none"; // Hide after transition
    }, 300); // Match the transition duration
  });
});
document.querySelectorAll('[data-scroll-target]').forEach(trigger => {
  trigger.addEventListener('click', e => {
    e.preventDefault();
    const targetSelector = trigger.getAttribute('data-scroll-target');
    const targetEl = document.querySelector(targetSelector);
    if (targetEl) {
      scroll.scrollTo(targetEl);
    }
  });
});
    
function loaderAnimation() {
  var loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 5000); // Waits for all 8 animations (8s + 2s)
}

// window.onload = loaderAnimation;

page4Animation();
loaderAnimation();
