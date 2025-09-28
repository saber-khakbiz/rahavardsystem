// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function() {
  
  // Typing Effect for Hero Title
  const typingElement = document.getElementById("typing");
  if (typingElement) {
    const texts = [
      "شرکت پیمان ایمن رهاورد سیستم",
      "سیستم‌های اسکادا و تله‌متری",
      "راهکارهای نوین صنعتی"
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const typingSpeed = 80;
    const deletingSpeed = 40;
    const delayBetweenTexts = 1000;
    const deleteDelay = 1000;

    function typeEffect() {
      const currentText = texts[textIndex];
      
      if (!isDeleting) {
        if (charIndex <= currentText.length) {
          typingElement.textContent = currentText.substring(0, charIndex);
          charIndex++;
          setTimeout(typeEffect, typingSpeed);
        } else {
          setTimeout(() => {
            isDeleting = true;
            typeEffect();
          }, deleteDelay);
        }
      } else {
        if (charIndex >= 0) {
          typingElement.textContent = currentText.substring(0, charIndex);
          charIndex--;
          setTimeout(typeEffect, deletingSpeed);
        } else {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          charIndex = 0;
          setTimeout(typeEffect, delayBetweenTexts);
        }
      }
    }

    typeEffect();
  }

  // Smooth Scroll for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Hero Buttons Actions
  const primaryButton = document.querySelector('.btn-primary');
  const secondaryButton = document.querySelector('.btn-secondary');
  
  if (primaryButton) {
    primaryButton.addEventListener('click', () => {
      document.querySelector('#services')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
  
  if (secondaryButton) {
    secondaryButton.addEventListener('click', () => {
      document.querySelector('#about')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }

  // Form Input Animations
  document.querySelectorAll('.form-group input, .form-group textarea, .form-group select').forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
      if (!this.value) {
        this.parentElement.classList.remove('focused');
      }
    });
    
    if (input.value) {
      input.parentElement.classList.add('focused');
    }
  });

});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

if (mobileMenuBtn && mobileNav) {
  mobileMenuBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileNav.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', function() {
      mobileMenuBtn.classList.remove('active');
      mobileNav.classList.remove('active');
    });
  });
}

// Header Scroll Effect
const header = document.querySelector('.modern-header');
if (header) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Active Link Indicator
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

if (sections.length && navLinks.length) {
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<span>در حال ارسال...</span><span>⏳</span>';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
      submitBtn.innerHTML = '<span>ارسال شد ✓</span><span>✅</span>';
      submitBtn.style.background = 'linear-gradient(135deg, #28a745, #34ce57)';
      
      // Reset form
      this.reset();
      
      // Reset button after 3 seconds
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = 'linear-gradient(135deg, #c3480b, #e44f26)';
        submitBtn.disabled = false;
      }, 3000);
    }, 2000);
  });
}

// Google Maps Function
function openInGoogleMaps() {
  const address = 'گیلان، لاهیجان، بلوار امام رضا';
  const encodedAddress = encodeURIComponent(address);
  window.open(`https://www.google.com/maps/search/${encodedAddress}`, '_blank');
}

// Scroll to Top Function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Textarea Typing Indicator
document.querySelectorAll('textarea').forEach(textarea => {
  let timeout;
  textarea.addEventListener('input', function() {
    clearTimeout(timeout);
    this.style.borderColor = '#4db8ff';
    
    timeout = setTimeout(() => {
      this.style.borderColor = 'rgba(77, 184, 255, 0.3)';
    }, 1000);
  });
});