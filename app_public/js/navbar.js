// ===========================
// === NAVIGATION TIMELINE ===
// ===========================

// --- Timeline ---
const tl_nav_logo = anime.timeline({
  easing: "easeOutQuad"
});


// ==========================
// === LOGO SVG ANIMATION ===
// ==========================

// --- SVG Logo Data ---
const nav_logo_svg = {
  a: {
    targets: document.querySelector(".nav-logo-svg .path-a"),
    d: [
      {value: "M 0 100 C 0 100 0 100 0 100 C 0 100 0 100 0 100 C 0 100 0 100 0 100 S 0 100 0 100 C 0 100 0 100 0 100 L 0 100 C 0 100 0 100 0 100 C 0 100 0 100 0 100 L 0 100 C 0 100 0 100 0 100 C 0 100 0 100 0 100 C 0 100 0 100 0 100 Z"},
      {value: "M 0 100 C 0 100 5 92 6 89 C 8 87 11 80 14 76 C 16 71 26 57 26 57 S 28 54 29 53 C 30 52 32 49 32 49 L 35 45 C 35 45 36 44 37 43 C 38 43 40 41 40 41 L 35 32 C 35 32 20 55 17 60 C 13 67 10 76 8 80 C 7 82 0 100 0 100 Z"},
      {value: "M 0 100 C 0 100 12 78 17 69 C 22 60 32 48 36 44 C 39 41 54 29 54 29 S 54 28 55 27 C 56 26 57 25 57 25 L 58 23 C 58 23 61 19 63 15 C 65 14 72 5 72 5 L 67 0 C 67 0 42 23 38 29 C 33 35 21 51 17 59 C 13 66 0 100 0 100 Z"},
      {value: "M 0 100 C 0 100 12 78 17 69 C 22 60 32 48 36 44 C 39 41 54 29 54 29 S 54 33 54 38 C 53 43 55 49 55 49 L 58 43 C 58 43 58 37 61 28 C 64 18 71 5 71 5 L 67 0 C 67 0 42 23 38 29 C 33 35 21 51 17 59 C 13 66 0 100 0 100 Z"},
    ]
  },
  b: {
    targets: document.querySelector(".nav-logo-svg .path-b"),
    d: [
      {value: "M 41 67 C 41 67 41 67 41 67 C 41 67 41 67 41 67 L 41 67 C 41 67 41 67 41 67 C 41 67 41 67 41 67 C 41 67 41 67 41 67 C 41 67 41 67 41 67 L 41 67 C 41 67 41 67 41 67 C 41 67 41 67 41 67 C 41 67 41 67 41 67 C 41 67 41 67 41 67 S 41 67 41 67 C 41 67 41 67 41 67 Z"},
      {value: "M 41 67 C 41 67 53 60 56 58 C 69 49 85 40 85 40 L 94 43 C 94 43 90 44 88 45 C 86 46 84 47 82 47 C 81 48 79 49 78 49 C 75 50 73 51 73 51 L 66 55 C 66 55 63 57 62 57 C 62 57 58 59 56 60 C 55 61 54 62 53 62 C 52 62 50 64 50 64 S 48 65 46 65 C 45 66 41 68 41 68 Z"},
      {value: "M 41 67 C 41 67 70 49 79 43 C 91 35 140 23 140 23 L 134 28 C 134 28 126 31 125 32 C 123 33 120 33 119 34 C 117 34 115 35 114 35 C 113 36 110 36 110 36 L 108 37 C 108 37 108 37 106 38 C 105 38 103 39 102 40 C 100 40 97 41 97 42 C 96 42 94 43 94 43 S 76 50 71 53 C 65 56 41 68 41 68 Z"},
      {value: "M 41 67 C 41 67 70 49 79 43 C 91 35 140 23 140 23 L 134 28 C 134 28 119 37 117 38 C 114 40 111 42 108 44 C 104 46 100 50 97 51 C 95 53 90 58 90 58 L 73 62 C 73 62 75 60 76 58 C 78 57 80 55 82 53 C 85 51 87 49 90 46 C 92 44 94 43 94 43 S 76 50 71 53 C 65 55 41 68 41 68 Z"},
      {value: "M 41 67 C 41 67 70 49 79 43 C 91 35 140 23 140 23 L 134 28 C 134 28 103 46 97 51 S 80 69 78 74 C 77 77 77 78 79 81 C 80 82 82 83 82 83 L 68 90 C 68 90 65 88 64 83 C 63 81 63 75 67 70 C 68 67 69 66 72 63 C 77 57 94 43 94 43 S 76 50 71 53 C 65 55 41 68 41 68 Z"},
      {value: "M 41 67 C 41 67 70 49 79 43 C 91 35 140 23 140 23 L 134 28 C 134 28 103 46 97 51 S 76 71 77 78 C 78 84 88 85 95 82 C 102 80 123 74 123 74 L 119 86 C 119 86 101 95 92 96 S 66 94 64 84 C 62 74 67 68 72 63 S 94 43 94 43 S 76 50 71 53 C 65 55 41 68 41 68 Z"},
    ]
  },
};

// --- Set Initial SVG shape ---
nav_logo_svg.a.targets.setAttribute("d", nav_logo_svg.a.d[0].value)
nav_logo_svg.b.targets.setAttribute("d", nav_logo_svg.b.d[0].value)

// --- Animate Nav Logo ---
tl_nav_logo.add({
  targets: nav_logo_svg.a.targets,
  d: nav_logo_svg.a.d,
  delay: 100,
  duration: 300
}).add({
  targets: nav_logo_svg.b.targets,
  d: nav_logo_svg.b.d,
  delay: 200,
  duration: 400
});


// ===========================
// === LOGO NAME ANIMATION ===
// ===========================

// --- Add Temporary Span Elements ---
const nav_logo_name = document.querySelector(".nav-logo-description-name");
nav_logo_name.innerHTML = nav_logo_name.textContent.replace(/\S/g, "<span class='nav-logo-description-name-char'>$&</span>");

// --- Animate Name ---
tl_nav_logo.add({
  targets: ".nav-logo-description-name-char",
  opacity: [0,0.6],
  translateX: [-10, 0],
  translateY: [10,0],
  scale: [0,1],
  rotate: [-180,0],
  delay: anime.stagger(50, {start: 100, easing: "cubicBezier(0.170, 0.505, 0.865, 0.455)"}),
  duration: 100,
  easing: "easeOutSine"
}).add({
  targets: ".nav-logo-description-name-char",
  opacity: 1,
  duration: 500,
  complete: function(anim){
    nav_logo_name.innerHTML = "iguel Cisneros";
  }
});


// ============================
// === LOGO TITLE ANIMATION ===
// ============================
tl_nav_logo.add({
  targets: ".nav-logo-description-title",
  opacity: [0, 1],
  translateY: [-5, 0],
  duration: 300,
  easing: "easeInSine"
}, "-=500").add({
  targets: ".nav-logo-description-title",
  opacity: 1,
  duration: 500,
});


// ===================================
// === NAVIGATION BUTTON ANIMATION ===
// ===================================
anime({
  targets: ".nav-menu-btn",
  opacity: [0,1],
  duration: 1000,
  easing: "easeInSine"
});


// ==============================
// === LINKS NAVBAR ANIMATION ===
// ==============================
anime({
  targets: ".nav-links",
  opacity: [0,1],
  duration: 1000,
  easing: "easeInSine"
});


// ==============================
// === ANIMATE BODY-CONTAINER ===
// ==============================
anime({
  targets: ".body-container",
  opacity: [0,1],
  duration: 1000,
  easing: "easeInSine"
});


// ======================
// === ANIMATE FOOTER ===
// ======================
anime({
  targets: ".footer .container",
  opacity: [0,1],
  duration: 1000,
  easing: "easeInSine"
});


// ================================
// === NAV LINKS MENU ANIMATION ===
// ================================
const nav_menu_btn = $(".nav-menu-btn");
const nav_menu_links = $(".nav-links");
const nav_menu_links_item = $(".nav-links-item");

const nav_menu_open = anime({
  targets: ".nav-links-item",
  duration: 200,
  rotateX: [90,0],
  opacity: [0, 1],
  easing: "easeInQuad",
  delay: anime.stagger(100),
  autoplay: false,
  begin: function(){
    nav_menu_links.removeClass("hidden");
    nav_menu_links.addClass("open");
  },
  complete: function(){
    nav_menu_links_item.removeAttr("style");
  }
});

const nav_menu_close = anime({
  targets: ".nav-links-item",
  duration: 200,
  rotateX: [0,90],
  opacity: [1, 0],
  easing: "easeInQuad",
  delay: anime.stagger(100, {direction: "reverse"}),
  autoplay: false,
  complete: function(){
    nav_menu_links.addClass("hidden");
    nav_menu_links.removeClass("open");
    nav_menu_links_item.removeAttr("style");
  }
});


// =======================
// === OPEN LINKS MENU ===
// =======================
nav_menu_btn.on("click", function(event){
  const classes = nav_menu_links.attr("class");
  if(classes.includes("hidden")){
    nav_menu_open.play();
    $(document).on("click.nav_menu", function(e){
      if($(e.target).closest(".nav-links").length === 0 && $(e.target).closest(".nav-menu-btn").length === 0){
        nav_menu_close.play();
        $(document).off("click.nav_menu");
      }
    });
  } else {
    nav_menu_close.play();
  }
});


// ========================
// === ON WINDOW RESIZE ===
// ========================
let window_resize_timer;

$(window).on("resize", function(){
  $(document).off("click.nav_menu");
  clearTimeout(window_resize_timer);
  window_resize_timer = setTimeout(function(){
    nav_menu_links.addClass("hidden");
    nav_menu_links.removeClass("open");
    nav_menu_links_item.removeAttr("style");
  });
});
