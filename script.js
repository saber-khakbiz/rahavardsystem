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