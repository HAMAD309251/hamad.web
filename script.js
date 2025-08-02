// تهيئة مكتبة AOS عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1100,
    easing: "ease-in-out",
    once: true,
  });

  // استعادة الوضع (ليلي أو نهاري) من التخزين المحلي
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    showIcon("sun");
  } else {
    showIcon("moon");
  }
});

// إخفاء رسالة الترحيب إذا كانت الزيارة ليست الأولى
if (localStorage.getItem("visited")) {
  const welcomeEl = document.getElementById("welcome");
  if (welcomeEl) welcomeEl.style.display = "none";
} else {
  localStorage.setItem("visited", "true");
  setTimeout(() => {
    const welcomeEl = document.getElementById("welcome");
    if (welcomeEl) welcomeEl.style.display = "none";
  }, 6000);
}

// اختيار عناصر الأزرار (الأيقونات)
const toggleBtn = document.getElementById("theme-toggle");
const iconSun = toggleBtn.querySelector(".icon-sun");
const iconMoon = toggleBtn.querySelector(".icon-moon");

// دالة لإظهار أيقونة معينة وإخفاء الأخرى
function showIcon(iconName) {
  if (iconName === "sun") {
    iconSun.style.display = "inline";
    iconMoon.style.display = "none";
  } else {
    iconSun.style.display = "none";
    iconMoon.style.display = "inline";
  }
}

// دالة تبديل الوضع الليلي/النهاري مع حفظ الخيار في التخزين المحلي
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    showIcon("sun");
  } else {
    localStorage.setItem("theme", "light");
    showIcon("moon");
  }
}

// ربط حدث النقر بزر التبديل
toggleBtn.addEventListener("click", toggleTheme);

// إضافة فقاعات ملونة عند تحريك مؤشر الماوس
document.addEventListener("mousemove", (e) => {
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.style.left = e.pageX + "px";
  bubble.style.top = e.pageY + "px";

  const size = Math.random() * 12 + 8;
  bubble.style.width = size + "px";
  bubble.style.height = size + "px";

  bubble.style.background = `hsl(${Math.random() * 360}, 90%, 75%)`;

  document.body.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 1500); // مدة بقاء الفقاعة قبل الإزالة
});
