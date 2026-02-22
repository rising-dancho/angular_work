// $("h1").css("color", "red");
// .css method
// current value of the css property by simply having the name of the property
console.log($("h1").css("font-size"));

// add class to an html tag : can add multiple just add space in between
$("h1").addClass("big-title padding-50");

// removing class
// $("h1").removeClass("big-title");

$("button").css("background-color", "red");

// check if an html tag has an element
console.log($("h1").hasClass("padding-50"));

// change text
$("h1").text("itets").addClass("big-title");
$("button").text("Itlog");
// or this .html
$("h1").html("<i>Mutha fuckaah</i>");

// change attributes on the fly
console.log("GET ATTR: " + $("img").attr("src")); // get
$("a").attr("href", "https://www.yahoo.com"); //set

// find out what classes does an html tag have
console.log($("h1").attr("class"));

// $("h1").click(function () {
//   console.log(this); // returns the actual element clicked which is the h1
// });

// add event listeners
// $("h1").click(function () {
//   //   alert("It's Twerking!");

//   //   this refers to the actual dom
//   const $this = $(this); // just saves it into the variable $
//   console.log($this.css("background-color", "red"));
// });

// toggleClass
$("h1").click(function () {
  $("h1").toggleClass("padding-50");
});

// bind to all same html tag
$("button").click(function () {
  $("h1").toggleClass("toggle-purple");
});

// when referring to classes: you use .
// $("#numba1").keypress(function (event) {
//   console.log(event.key); // logs key that got pressed
// });

// str needs to be declared OUTSIDE of the function or else str will be destroyed
let str = "";
// you can also add it to the body or document to detect all keypress
$(document).keypress(function (event) {
  //   console.log(event.key);
  str += event.key.toString();
  $("h1").text(str);
});

// more flexible way to add event listeners
// list of events that can be used https://www.w3schools.com/jsref/dom_obj_event.asp
let lastCall = 0;

// throttle: run dingDong() only once per 10 seconds
// https://chatgpt.com/share/699b274a-039c-8000-ae56-c8069cd5c9c3
$("img").on("mouseover", function () {
  const now = Date.now();

  if (now - lastCall >= 10000) {
    lastCall = now;
    dingDong();
  }
});

function dingDong() {
  alert("ohh!! you touch my tralala");
}

$("img").on("click", function () {
  alert("ahh!! my ding ding dong");
});

// dynamically add elements with jquery
$("p#test").on("click", function () {
  $("h1").before("<p>Before</p>");
  $("h1").after("<p>After</p>");
  $("h1").prepend("<span>Prepend - </span>");
  $("h1").append("<span> - Append</span>");
});
