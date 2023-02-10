/*---------------page1_bottom_left-------------*/

let page1_bottom_left = document.querySelector("#page1_bottom_left");
let shape_cercle = document.querySelector("#shape_cercle");
let shape_square = document.querySelector("#shape_square");
let shape_triangle = document.querySelector("#shape_triangle");

// -------mouseenter--color-----
page1_bottom_left.addEventListener("mouseenter", function () {
  shape_cercle.style.backgroundColor = "#FFAEDC";
});
page1_bottom_left.addEventListener("mouseleave", function () {
  shape_cercle.style.backgroundColor = "#A5A1FF";
});

// -------mouseenter--color-----
page1_bottom_left.addEventListener("mouseenter", function () {
  shape_square.style.backgroundColor = "#FFFFFF";
});
page1_bottom_left.addEventListener("mouseleave", function () {
  shape_square.style.backgroundColor = "#A5A1FF";
});

// -------mouseenter--color-----
page1_bottom_left.addEventListener("mouseenter", function () {
  shape_triangle.style.borderBottomColor = "#FFF480";
});
page1_bottom_left.addEventListener("mouseleave", function () {
  shape_triangle.style.Color = "#FFFFFF";
  shape_triangle.style.borderBottomColor = "#A5A1FF";
});

// ---box--scale----
// -------mouseenter--scale-----
let page1_bottom_left_shape = document.querySelector(
  "#page1_bottom_left_shape"
);
let show_text_infinite = document.querySelector("#show_text_infinite");

page1_bottom_left.addEventListener("mouseenter", function () {
  page1_bottom_left.style.scale = "0.98";
  page1_bottom_left.style.transition = "0.5s";

  show_text_infinite.style.opacity = "0";
  show_text_infinite.style.transition = "0.3s";

  page1_bottom_left_shape.style.scale = "0.7";
  page1_bottom_left_shape.style.transition = "0.5s";
});
page1_bottom_left.addEventListener("mouseleave", function () {
  page1_bottom_left.style.scale = "1";
  page1_bottom_left.style.transition = "0.5s";
  show_text_infinite.style.opacity = "1";

  page1_bottom_left_shape.style.scale = "1";
  page1_bottom_left_shape.style.transition = "0.5s";
});

/*-------------------page1_bottom_left---------------end---------------*/

// -----------page1_bottom_right_top_left-----------------------------------

let page1_bottom_right_top_left = document.querySelector(
  "#page1_bottom_right_top_left"
);
let page1_bottom_right_top_left__nav = document.querySelector(
  "#page1_bottom_right_top_left__nav"
);
let page1_bottom_right_top_left__movetext = document.querySelector(
  "#page1_bottom_right_top_left__movetext"
);

page1_bottom_right_top_left.addEventListener("mouseenter", function () {
  page1_bottom_right_top_left__nav.style.opacity = "0";
  page1_bottom_right_top_left__nav.style.transition = "0.3s";

  page1_bottom_right_top_left.style.scale = "0.95";
  page1_bottom_right_top_left.style.transition = "0.5s";

  page1_bottom_right_top_left__movetext.style.opacity = "1";
  page1_bottom_right_top_left__movetext.style.transition = "0.3s";

  // --
  shape_cercle.style.scale = "0.5";
  shape_cercle.style.backgroundColor = "#A5A1FF";
  shape_cercle.style.transition = "0.5s";
  shape_square.style.scale = "1.5";
  shape_square.style.backgroundColor = "#FFFFFF";
  shape_square.style.transition = "0.5s";
  shape_triangle.style.scale = "0.5";
  shape_triangle.style.borderBottomColor = "#A5A1FF";
  shape_triangle.style.transition = "0.5s";

  show_text_infinite.style.opacity = "0";
});

page1_bottom_right_top_left.addEventListener("mouseleave", function () {
  page1_bottom_right_top_left__nav.style.opacity = "1";
  page1_bottom_right_top_left__movetext.style.opacity = "0";

  page1_bottom_right_top_left.style.scale = "1";
  page1_bottom_right_top_left.style.transition = "0.5s";

  shape_cercle.style.scale = "1";
  shape_cercle.style.backgroundColor = "#A5A1FF";
  shape_square.style.scale = "1";
  shape_square.style.backgroundColor = "#A5A1FF";
  shape_triangle.style.scale = "1";
  shape_triangle.style.borderBottomColor = "#A5A1FF";

  show_text_infinite.style.opacity = "1";
});

// -----------page1_bottom_right_top_right----------------------------------
let page1_bottom_right_top_right = document.querySelector(
  "#page1_bottom_right_top_right"
);
let page1_bottom_right_top_right__nav = document.querySelector(
  "#page1_bottom_right_top_right__nav"
);
let page1_bottom_right_top_right__textmove = document.querySelector(
  "#page1_bottom_right_top_right__textmove"
);

page1_bottom_right_top_right.addEventListener("mouseenter", function () {
  page1_bottom_right_top_right__nav.style.opacity = "0";
  page1_bottom_right_top_right__nav.style.transition = "0.3s";

  page1_bottom_right_top_right__textmove.style.opacity = "1";

  page1_bottom_right_top_right.style.scale = "0.95";
  page1_bottom_right_top_right.style.transition = "0.3s";

  // --
  shape_cercle.style.scale = "1.5";
  shape_cercle.style.backgroundColor = "#FFAEDC";
  shape_cercle.style.transition = "0.5s";
  shape_square.style.scale = "0.5";
  shape_square.style.backgroundColor = "#A5A1FF";
  shape_square.style.transition = "0.5s";
  shape_triangle.style.scale = "0.5";
  shape_triangle.style.borderBottomColor = "#A5A1FF";
  shape_triangle.style.transition = "0.5s";

  show_text_infinite.style.opacity = "0";
});

page1_bottom_right_top_right.addEventListener("mouseleave", function () {
  page1_bottom_right_top_right__nav.style.opacity = "1";
  page1_bottom_right_top_right__nav.style.transition = "0.3s";

  page1_bottom_right_top_right__textmove.style.opacity = "0";

  page1_bottom_right_top_right.style.scale = "1";
  page1_bottom_right_top_right.style.transition = "0.3s";

  shape_cercle.style.scale = "1";
  shape_cercle.style.backgroundColor = "#A5A1FF";
  shape_square.style.scale = "1";
  shape_square.style.backgroundColor = "#A5A1FF";
  shape_triangle.style.scale = "1";
  shape_triangle.style.borderBottomColor = "#A5A1FF";

  show_text_infinite.style.opacity = "1";
  show_text_infinite.style.transition = "0.1s";
});

// -----------------------page1_bottom_right_bottom--------------------

let page1_bottom_right_bottom = document.querySelector(
  "#page1_bottom_right_bottom"
);
let page1_bottom_right_bottom__nav = document.querySelector(
  "#page1_bottom_right_bottom__nav"
);
let page1_bottom_right_bottom__textmove = document.querySelector(
  "#page1_bottom_right_bottom__textmove"
);

page1_bottom_right_bottom.addEventListener("mouseenter", function () {
  page1_bottom_right_bottom__nav.style.opacity = "0";
  page1_bottom_right_bottom__nav.style.transition = "0.3s";

  page1_bottom_right_bottom__textmove.style.opacity = "1";
  page1_bottom_right_bottom__textmove.style.transition = "0.3s";

  page1_bottom_right_bottom.style.scale = "0.95";
  page1_bottom_right_bottom.style.transition = "0.5s";

  shape_cercle.style.scale = "0.5";
  shape_cercle.style.backgroundColor = "#A5A1FF";
  shape_cercle.style.transition = "0.5s";
  shape_square.style.scale = "0.5";
  shape_square.style.backgroundColor = "#A5A1FF";
  shape_square.style.transition = "0.5s";
  shape_triangle.style.scale = "1.5";
  shape_triangle.style.borderBottomColor = "#FFF480";
  shape_triangle.style.transition = "0.5s";

  show_text_infinite.style.opacity = "0";
});

page1_bottom_right_bottom.addEventListener("mouseleave", function () {
  page1_bottom_right_bottom__nav.style.opacity = "1";
  page1_bottom_right_bottom__nav.style.transition = "0.3s";

  page1_bottom_right_bottom__textmove.style.opacity = "0";
  page1_bottom_right_bottom__textmove.style.transition = "0.3s";

  shape_cercle.style.scale = "1";
  shape_cercle.style.backgroundColor = "#A5A1FF";
  shape_square.style.scale = "1";
  shape_square.style.backgroundColor = "#A5A1FF";
  shape_triangle.style.scale = "1";
  shape_triangle.style.borderBottomColor = "#A5A1FF";

  show_text_infinite.style.opacity = "1";
  show_text_infinite.style.transition = "0.3s";

  page1_bottom_right_bottom.style.scale = "1";
  page1_bottom_right_bottom.style.transition = "0.5s";
});

// ---------------------------------page4-----------------------
let page4_box = document.querySelector("#page4_box");
let page4_middel_text = document.querySelector("#page4_middel_text");

page4_box.addEventListener("mouseenter", function () {
  page4_box.style.scale = "0.98";
  page4_box.style.transition = "0.5s";

  page4_middel_text.style.scale = "1.1";
  page4_middel_text.style.transition = "0.5s";
});
page4_box.addEventListener("mouseleave", function () {
  page4_box.style.scale = "1";
  page4_box.style.transition = "0.5s";

  page4_middel_text.style.scale = "1";
  page4_middel_text.style.transition = "0.5s";
});

// -----------------------------------page5----------------------

// ----page5_box1_left----
let page5_box1_left = document.querySelector("#page5_box1_left");
let page5_box1_left_img = document.querySelector("#page5_box1_left img");

page5_box1_left.addEventListener("mouseenter", function () {
  page5_box1_left.style.scale = "0.98";
  page5_box1_left.style.transition = "0.3s";

  page5_box1_left_img.style.scale = "1.1";
  page5_box1_left_img.style.transition = "0.5s";
});
page5_box1_left.addEventListener("mouseleave", function () {
  page5_box1_left.style.scale = "1";
  page5_box1_left.style.transition = "0.3s";

  page5_box1_left_img.style.scale = "1";
  page5_box1_left_img.style.transition = "0.5s";
});

// ----------page5_box2_right---------
let page5_box2_right = document.querySelector("#page5_box2_right");
let page5_box2_right_img = document.querySelector("#page5_box2_right img");

page5_box2_right.addEventListener("mouseenter", function () {
  page5_box2_right.style.scale = "0.98";
  page5_box2_right.style.transition = "0.3s";

  page5_box2_right_img.style.scale = "1.1";
  page5_box2_right_img.style.transition = "0.5s";
});
page5_box2_right.addEventListener("mouseleave", function () {
  page5_box2_right.style.scale = "1";
  page5_box2_right.style.transition = "0.3s";

  page5_box2_right_img.style.scale = "1";
  page5_box2_right_img.style.transition = "0.5s";
});

// -----------page5_box3_left----------
let page5_box3_left = document.querySelector("#page5_box3_left");
let page5_box3_left_img = document.querySelector("#page5_box3_left img");

page5_box3_left.addEventListener("mouseenter", function () {
  page5_box3_left.style.scale = "0.98";
  page5_box3_left.style.transition = "0.3s";

  page5_box3_left_img.style.scale = "1.1";
  page5_box3_left_img.style.transition = "0.5s";
});
page5_box3_left.addEventListener("mouseleave", function () {
  page5_box3_left.style.scale = "1";
  page5_box3_left.style.transition = "0.3s";

  page5_box3_left_img.style.scale = "1";
  page5_box3_left_img.style.transition = "0.5s";
});

// -----------page5_box4_left----------

let page5_box4_right = document.querySelector("#page5_box4_right");
let page5_box4_right_img = document.querySelector("#page5_box4_right img");

page5_box4_right.addEventListener("mouseenter", function () {
  page5_box4_right.style.scale = "0.98";
  page5_box4_right.style.transition = "0.3s";

  page5_box4_right_img.style.scale = "1.1";
  page5_box4_right_img.style.transition = "0.5s";
});
page5_box4_right.addEventListener("mouseleave", function () {
  page5_box4_right.style.scale = "1";
  page5_box4_right.style.transition = "0.3s";

  page5_box4_right_img.style.scale = "1";
  page5_box4_right_img.style.transition = "0.5s";
});

// ----------------------page7---button1---------------
let button1 = document.querySelector("#button1");
let button1_text1 = document.querySelector("#button1_text1");
let button1_text2 = document.querySelector("#button1_text2");

button1.addEventListener("mouseenter", function () {
  button1_text1.style.top = "-55%";
  button1_text1.style.transition = "0.2s";

  button1_text2.style.top = "25%";
  button1_text2.style.transition = "0.2s";
});
button1.addEventListener("mouseleave", function () {
  button1_text1.style.top = "25%";
  button1_text1.style.transition = "0.2s";

  button1_text2.style.top = "120%";
  button1_text2.style.transition = "0.2s";
});

// ----------button2-------

button2.addEventListener("mouseenter", function () {
  button2_text1.style.top = "-55%";
  button2_text1.style.transition = "0.2s";

  button2_text2.style.top = "25%";
  button2_text2.style.transition = "0.2s";
});
button2.addEventListener("mouseleave", function () {
  button2_text1.style.top = "25%";
  button2_text1.style.transition = "0.2s";

  button2_text2.style.top = "120%";
  button2_text2.style.transition = "0.2s";
});

// ----------button3-------

button3.addEventListener("mouseenter", function () {
  button3_text1.style.top = "-55%";
  button3_text1.style.transition = "0.2s";

  button3_text2.style.top = "25%";
  button3_text2.style.transition = "0.2s";
});
button3.addEventListener("mouseleave", function () {
  button3_text1.style.top = "25%";
  button3_text1.style.transition = "0.2s";

  button3_text2.style.top = "120%";
  button3_text2.style.transition = "0.2s";
});

// ----------button4-------

button4.addEventListener("mouseenter", function () {
  button4_text1.style.top = "-55%";
  button4_text1.style.transition = "0.2s";

  button4_text2.style.top = "25%";
  button4_text2.style.transition = "0.2s";
});
button4.addEventListener("mouseleave", function () {
  button4_text1.style.top = "25%";
  button4_text1.style.transition = "0.2s";

  button4_text2.style.top = "120%";
  button4_text2.style.transition = "0.2s";
});

// ----------button5-------

button5.addEventListener("mouseenter", function () {
  button5_text1.style.top = "-55%";
  button5_text1.style.transition = "0.2s";

  button5_text2.style.top = "25%";
  button5_text2.style.transition = "0.2s";
});
button5.addEventListener("mouseleave", function () {
  button5_text1.style.top = "25%";
  button5_text1.style.transition = "0.2s";

  button5_text2.style.top = "120%";
  button5_text2.style.transition = "0.2s";
});

// -----------#page8_right--------
let page8_right = document.querySelector("#page8_right");

page8_right.addEventListener("mouseenter", function () {
  page8_right.style.scale = "0.98";
  page8_right.style.transition = "0.5s";
});

page8_right.addEventListener("mouseleave", function () {
  page8_right.style.scale = "1";
  page8_right.style.transition = "0.5s";
});



///// --------------------------/////------------------------------/////

// ------------------------gsap--------------------------//

// gsap.from("#textall",{
//   scrollTrigger:{
//       trigger:"#textall",
//       scroller:"#main",
//       markers:true,
//       start:"start 10%",
//   },
//   scale: 0.4,
//   duration: 1,
// })


///// --------------------------/////------------------------------/////

// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length
//       ? locoScroll.scrollTo(value, 0, 0)
//       : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform
//     ? "transform"
//     : "fixed",
// });

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

//

