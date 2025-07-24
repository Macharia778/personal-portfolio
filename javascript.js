 HEAD

const header = document.getElementById('header');
let lastScrollY = window.scrollY;
let isHidden = false;
let timeoutId = null;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY; if (currentScrollY < 50) {
        isHidden = false;
        clearTimeout(timeoutId);
        header.classList.remove('visible'); // Make sure it's shown
    }

    // If scrolling down and header is visible
    if (currentScrollY > lastScrollY && !isHidden && currentScrollY > 100) {
        header.classList.add('visible');
        isHidden = true;

        // Automatically show header again after 3 seconds
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            header.classList.remove('visible');
            // isHidden = false;
        }, 1000);
    }

    lastScrollY = currentScrollY;
});

  
const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const education = document.getElementById("Education");
  const experience = document.getElementById("Experience");

  btn1.addEventListener("click", () => {
    btn1.classList.add("selected");
    btn2.classList.remove("selected");
    education.classList.add("active");
    experience.classList.remove("active");
  });

  btn2.addEventListener("click", () => {
    btn2.classList.add("selected");
    btn1.classList.remove("selected");
    experience.classList.add("active");
    education.classList.remove("active");
  });
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

document.querySelectorAll('.descriptions').forEach(el => observer.observe(el));
    (function() {
    emailjs.init("_Xv2iH33U4iSSpdac"); // Replace with your actual public key
  })();

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs.sendForm("service_2bg7a9p", "template_ikd27q2", this)
    .then(function () {
      alert("Message sent successfully!");
    }, function (error) {
      alert("Failed to send message. Try again.");
      console.log(error);
    });


  const header = document.getElementById('header');
  let lastScrollY = window.scrollY;
  let isHidden = false;
  let timeoutId = null;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY; if (currentScrollY < 50) {
      isHidden = false;
      clearTimeout(timeoutId);
      header.classList.remove('visible'); // Make sure it's shown
    }

    // If scrolling down and header is visible
    if (currentScrollY > lastScrollY && !isHidden && currentScrollY > 100) {
      header.classList.add('visible');
      isHidden = true;

      // Automatically show header again after 3 seconds
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        header.classList.remove('visible');
        // isHidden = false;
      }, 1000);
    }

    lastScrollY = currentScrollY;
  });

  
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const education = document.getElementById("Education");
  const experience = document.getElementById("Experience");

  btn1.addEventListener("click", () => {
    btn1.classList.add("selected");
    btn2.classList.remove("selected");
    education.classList.add("active");
    experience.classList.remove("active");
  });

  btn2.addEventListener("click", () => {
    btn2.classList.add("selected");
    btn1.classList.remove("selected");
    experience.classList.add("active");
    education.classList.remove("active");
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  document.querySelectorAll('.descriptions').forEach(el => observer.observe(el));
  (function () {
    emailjs.init("_Xv2iH33U4iSSpdac"); // Replace with your actual public key
  })();

  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_2bg7a9p", "template_ikd27q2", this)
      .then(function () {
        alert("Message sent successfully!");
      }, function (error) {
        alert("Failed to send message. Try again.");
        console.log(error);
      });
  }
  )
});