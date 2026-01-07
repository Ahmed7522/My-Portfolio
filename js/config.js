const btn = document.getElementById("theme-toggle");
const toMoon = document.getElementById("toMoon");
const toSun  = document.getElementById("toSun");

/* 🔧 مكان التعديل:
   لو عايز تغيّر اسم الكلاس أو التخزين المحلي */
const CLASS = "dark";
const STORAGE_KEY = "theme";

function applyTheme(dark) {
  const root = document.documentElement;

  if (dark) {
    root.classList.add(CLASS);
    toMoon.beginElement();          // 🎬 Morph → Moon
    localStorage.setItem(STORAGE_KEY, "dark");
  } else {
    root.classList.remove(CLASS);
    toSun.beginElement();           // 🎬 Morph → Sun
    localStorage.setItem(STORAGE_KEY, "light");
  }
}

/* زر التبديل */
btn.addEventListener("click", () => {
  const dark = !document.documentElement.classList.contains(CLASS);
  applyTheme(dark);
});

/* ========== تحميل الوضع الصحيح عند فتح الموقع ========== */
(() => {
  const saved = localStorage.getItem(STORAGE_KEY);
  const systemPref = window.matchMedia("(prefers-color-scheme: dark)").matches;

  /* 🔧 لو عايز الموقع دايمًا يتبع النظام:
     استبدل السطر التالي بـ: applyTheme(systemPref); */
  const dark = saved ? saved === "dark" : systemPref;

  applyTheme(dark);
})();