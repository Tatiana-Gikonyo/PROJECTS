document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const contactResponse = document.getElementById("contactResponse");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contactName").value;
    contactResponse.textContent = `Thank you, ${name}! Your message has been received.`;
    contactForm.reset();
  });
});
