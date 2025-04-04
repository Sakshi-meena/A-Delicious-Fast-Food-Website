document.addEventListener("DOMContentLoaded", function () {
    // Header scroll effect
    const header = document.querySelector(".header");
    
    function checkScroll() {
      if (window.scrollY > 100) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
    
    checkScroll();
    window.addEventListener("scroll", checkScroll);
    
    // Mobile menu toggle
    const mobileToggle = document.querySelector(".mobile-toggle");
    const navMenu = document.querySelector(".nav-menu");
    
    mobileToggle.addEventListener("click", function () {
      this.classList.toggle("active");
      navMenu.classList.toggle("active"); // Toggle visibility of the menu
    });
    
    // Menu tabs
    const menuTabs = document.querySelectorAll(".menu-tab");
    
    menuTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        menuTabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        
        // Add filtering functionality if needed
        // const category = tab.textContent.trim();
        // filterMenuItems(category);
      });
    });
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        
        if (this.getAttribute("href") === "#") return;
        
        const targetElement = document.querySelector(this.getAttribute("href"));
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
          
          // Close mobile menu when clicking a link
          if (navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
            mobileToggle.classList.remove("active");
          }
        }
      });
    });
    
    // Cart functionality
    const addButtons = document.querySelectorAll(".menu-item-btn");
    const cartCount = document.querySelector(".cart-count");
    let count = parseInt(cartCount.textContent) || 3;
    
    addButtons.forEach((button) => {
      button.addEventListener("click", () => {
        count++;
        cartCount.textContent = count;
        
        button.style.transform = "scale(1.2)";
        setTimeout(() => {
          button.style.transform = "";
        }, 200);
      });
    });
    
    // Simple testimonial slider
    const testimonials = document.querySelectorAll(".testimonial-item");
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
        if (i === index) {
          testimonial.style.opacity = "1";
          testimonial.style.display = "block";
        } else {
          testimonial.style.opacity = "0";
          testimonial.style.display = "none";
        }
      });
    }
    
    // Initialize testimonials
    if (testimonials.length > 1) {
      showTestimonial(currentTestimonial);
      
      // Auto-rotate testimonials
      setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
      }, 5000);
    }
  });