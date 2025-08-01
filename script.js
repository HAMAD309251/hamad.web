
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true
    });
  });
  if (localStorage.getItem("visited")) {
    document.getElementById("welcome").style.display = "none";
  } else {
    localStorage.setItem("visited", "true");
    // تختفي تلقائيًا بعد 6 ثوانٍ
    setTimeout(() => {
      const el = document.getElementById("welcome");
      if (el) el.style.display = "none";
    }, 6000);
  }
