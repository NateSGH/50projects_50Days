const faqBtns = document.querySelectorAll(".faq-toggle");

faqBtns.forEach((faqBtn) => {
  faqBtn.addEventListener("click", () => {
    faqBtn.parentNode.classList.toggle("active");
  });
});
