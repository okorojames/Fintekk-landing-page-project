// loading gif code
$(window).on("load", function () {
  $(".loading--gif--icon").delay(1000).fadeOut();
  $(".loading--gif--container").delay(1200).fadeOut();
});
// active users counter jquery code.
$(".users--count").counterUp({
  delay: 1,
  time: 300,
});
//
//
// faqs section toggle drop down code.
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", function (e) {
    e.preventDefault();
    faq.classList.toggle("faq--active");
  });
});
//
// testimonial section carousel toggle codes
//
const testimonial_card_one = document.querySelector(".testimonial--card--one");
const testimonial_card_two = document.querySelector(".testimonial--card--two");
const testimonial_card_three = document.querySelector(
  ".testimonial--card--three"
);
const testimonial_number_one = document.querySelector(
  ".testimonial--number--one"
);
const testimonial_number_two = document.querySelector(
  ".testimonial--number--two"
);
const testimonial_number_three = document.querySelector(
  ".testimonial--number--three"
);
// for testimonial card one
testimonial_number_one.addEventListener("click", function () {
  testimonial_card_one.classList.add("testimonial--card--active");
  testimonial_card_two.classList.remove("testimonial--card--active");
  testimonial_card_three.classList.remove("testimonial--card--active");
});
// for testimonial card two
testimonial_number_two.addEventListener("click", function () {
  testimonial_card_one.classList.remove("testimonial--card--active");
  testimonial_card_two.classList.add("testimonial--card--active");
  testimonial_card_three.classList.remove("testimonial--card--active");
});
// for testimonial card three
testimonial_number_three.addEventListener("click", function () {
  testimonial_card_one.classList.remove("testimonial--card--active");
  testimonial_card_two.classList.remove("testimonial--card--active");
  testimonial_card_three.classList.add("testimonial--card--active");
});
// footer copyright code.
const copyright = document.querySelector(".copyright");
copyright.textContent = `${new Date().getFullYear()}`;
