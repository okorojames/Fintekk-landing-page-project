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
