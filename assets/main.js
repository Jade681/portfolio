// 张馨洁 个人网站 — 交互脚本
(function () {
  var root = document.documentElement;
  var KEY = "xz-lang";

  function apply(lang) {
    lang = lang === "en" ? "en" : "zh";
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang === "en" ? "en" : "zh-CN");
    document.querySelectorAll("[data-lang-switch]").forEach(function (b) {
      b.textContent = lang === "en" ? "中 / EN" : "中 / EN";
      b.setAttribute("aria-label", lang === "en" ? "Switch to Chinese" : "切换到英文");
    });
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  var saved = "zh";
  try { saved = localStorage.getItem(KEY) || "zh"; } catch (e) {}
  // ?lang=en / ?lang=zh (or #lang=en) in the URL wins — lets the résumé deep-link
  // to the matching language. apply() then persists it for later navigation.
  try {
    var q = (location.search + " " + location.hash).match(/[?#&]lang=(en|zh)\b/i);
    if (q) saved = q[1].toLowerCase();
  } catch (e) {}
  apply(saved);

  document.addEventListener("click", function (e) {
    var sw = e.target.closest("[data-lang-switch]");
    if (sw) {
      e.preventDefault();
      apply(root.getAttribute("data-lang") === "en" ? "zh" : "en");
      return;
    }
    var nt = e.target.closest("[data-nav-toggle]");
    if (nt) {
      var links = document.querySelector(".nav-links");
      if (links) links.classList.toggle("open");
      return;
    }
    var navlink = e.target.closest(".nav-links a");
    if (navlink) {
      var open = document.querySelector(".nav-links.open");
      if (open) open.classList.remove("open");
    }
    var f = e.target.closest("[data-filter]");
    if (f) {
      var val = f.getAttribute("data-filter");
      document.querySelectorAll("[data-filter]").forEach(function (b) {
        b.classList.toggle("is-active", b === f);
      });
      document.querySelectorAll("[data-cat]").forEach(function (row) {
        var show = val === "all" || row.getAttribute("data-cat") === val;
        row.style.display = show ? "" : "none";
      });
    }
  });
})();
