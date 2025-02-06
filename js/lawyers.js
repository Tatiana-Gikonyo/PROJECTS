document.addEventListener("DOMContentLoaded", () => {
  const lawyers = [
    { name: "Mark Geragos", specialty: "Criminal Law" },
    { name: "Judy Thongori", specialty: "Family Law" },
    { name: "Joe Jamail", specialty: "Business Law" },
  ];

  const lawyerList = document.getElementById("lawyer-list");

  lawyers.forEach((lawyer) => {
    const li = document.createElement("li");
    li.textContent = `${lawyer.name} - ${lawyer.specialty}`;
    lawyerList.appendChild(li);
  });
});
