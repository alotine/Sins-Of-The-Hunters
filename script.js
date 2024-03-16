document.addEventListener("DOMContentLoaded", function() {
  const questions = document.querySelectorAll(".faq .question");

  questions.forEach(function(question) {
      question.addEventListener("click", function() {
          const answer = this.querySelector(".answer");
          answer.classList.toggle("show");
      });
  });
});
