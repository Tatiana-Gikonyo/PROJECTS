document.addEventListener("DOMContentLoaded", () => {
  const bookButton = document.getElementById("bookLawyerBtn");

  bookButton.addEventListener("click", () => {
    window.location.href = "lawyers.html";
  });
});
