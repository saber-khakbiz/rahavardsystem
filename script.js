document.addEventListener("DOMContentLoaded", function() {
  const element = document.getElementById("typing");
  const text = "شرکت پیمان ایمن رهاورد سیستم";
  let index = 0;
  let isDeleting = false;
  const speed = 100;   // سرعت تایپ
  const delay = 2000;  // مکث بعد از نوشتن کامل

  function typeEffect() {
    if (!isDeleting && index <= text.length) {
      element.textContent = text.substring(0, index++);
      setTimeout(typeEffect, speed);
    } else if (isDeleting && index >= 0) {
      element.textContent = text.substring(0, index--);
      setTimeout(typeEffect, speed / 2);
    } else {
      isDeleting = !isDeleting;
      setTimeout(typeEffect, delay);
    }
  }

  typeEffect();
});