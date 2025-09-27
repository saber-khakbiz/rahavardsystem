document.addEventListener("DOMContentLoaded", function() {
  const element = document.getElementById("typing");
  
  // آرایه متن‌های مختلف برای نمایش
  const texts = [
    "شرکت پیمان ایمن رهاورد سیستم",
    "سیستم‌های اسکادا و تله‌متری",
    "راهکارهای نوین صنعتی"
  ];
  
  let textIndex = 0;      // اندیس متن فعلی
  let charIndex = 0;      // اندیس کاراکتر فعلی
  let isDeleting = false; // وضعیت حذف یا اضافه کردن
  
  const typingSpeed = 80;    // سرعت تایپ (میلی‌ثانیه)
  const deletingSpeed = 40;  // سرعت حذف (میلی‌ثانیه)
  const delayBetweenTexts = 1000; // مکث بین متن‌ها (میلی‌ثانیه)
  const deleteDelay = 1000;  // مکث قبل از شروع حذف

  function typeEffect() {
    const currentText = texts[textIndex];
    
    if (!isDeleting) {
      // حالت تایپ کردن
      if (charIndex <= currentText.length) {
        element.textContent = currentText.substring(0, charIndex);
        charIndex++;
        setTimeout(typeEffect, typingSpeed);
      } else {
        // متن کامل نوشته شد، بعد از مکث شروع به حذف کن
        setTimeout(() => {
          isDeleting = true;
          typeEffect();
        }, deleteDelay);
      }
    } else {
      // حالت حذف کردن
      if (charIndex >= 0) {
        element.textContent = currentText.substring(0, charIndex);
        charIndex--;
        setTimeout(typeEffect, deletingSpeed);
      } else {
        // متن کاملاً حذف شد، برو به متن بعدی
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length; // چرخش در آرایه
        charIndex = 0;
        setTimeout(typeEffect, delayBetweenTexts);
      }
    }
  }

  // شروع افکت تایپ
  typeEffect();
  
  // اضافه کردن انیمیشن اسکرول smooth برای لینک‌های منو
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
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
  
  // اضافه کردن افکت برای دکمه‌های Hero
  const primaryButton = document.querySelector('.btn-primary');
  const secondaryButton = document.querySelector('.btn-secondary');
  
  if (primaryButton) {
    primaryButton.addEventListener('click', function() {
      const servicesSection = document.querySelector('#services');
      if (servicesSection) {
        servicesSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }
  
  if (secondaryButton) {
    secondaryButton.addEventListener('click', function() {
      const aboutSection = document.querySelector('#about');
      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }
});
// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

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

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.modern-header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// Active link indicator
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

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

// Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Form validation and submission logic
  const formData = new FormData(this);
  const submitBtn = this.querySelector('.submit-btn');
  const originalText = submitBtn.innerHTML;
  
  // Show loading state
  submitBtn.innerHTML = '<span>در حال ارسال...</span><span>⏳</span>';
  submitBtn.disabled = true;
  
  // Simulate form submission (replace with actual API call)
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

// Open location in Google Maps
function openInGoogleMaps() {
  const address = 'گیلان، لاهیجان، بلوار امام رضا';
  const encodedAddress = encodeURIComponent(address);
  window.open(`https://www.google.com/maps/search/${encodedAddress}`, '_blank');
}

// Scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Newsletter subscription
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const input = this.querySelector('input');
  const button = this.querySelector('button');
  const email = input.value;
  
  if (email) {
    button.textContent = 'عضو شدید ✓';
    button.style.background = '#28a745';
    input.value = '';
    
    setTimeout(() => {
      button.textContent = 'عضویت';
      button.style.background = 'linear-gradient(135deg, #c3480b, #e44f26)';
    }, 3000);
  }
});

// Form input animations
document.querySelectorAll('.form-group input, .form-group textarea, .form-group select').forEach(input => {
  input.addEventListener('focus', function() {
    this.parentElement.classList.add('focused');
  });
  
  input.addEventListener('blur', function() {
    if (!this.value) {
      this.parentElement.classList.remove('focused');
    }
  });
  
  // Check if input has value on page load
  if (input.value) {
    input.parentElement.classList.add('focused');
  }
});

// Smooth scroll for footer links
document.querySelectorAll('.footer-links a[href^="#"]').forEach(anchor => {
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

// Add floating animation to contact icons
document.querySelectorAll('.info-icon').forEach((icon, index) => {
  icon.style.animation = `float 3s ease-in-out ${index * 0.5}s infinite`;
});

// Add typing indicator for form
function addTypingIndicator() {
  const textareas = document.querySelectorAll('textarea');
  textareas.forEach(textarea => {
    let timeout;
    textarea.addEventListener('input', function() {
      clearTimeout(timeout);
      this.style.borderColor = '#4db8ff';
      
      timeout = setTimeout(() => {
        this.style.borderColor = 'rgba(77, 184, 255, 0.3)';
      }, 1000);
    });
  });
}

addTypingIndicator();
