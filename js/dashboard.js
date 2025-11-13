window.addEventListener("DOMContentLoaded", () => {
  const user = {
    name: localStorage.getItem("user_name"),
    email: localStorage.getItem("user_email"),
    picture: localStorage.getItem("user_picture"),
  };

  // Redirect if not logged in
  if (!user.name || !user.email) {
    window.location.href = "login.html";
    return;
  }

  // Display account info
  const userInfo = document.getElementById("user-info");
  userInfo.innerHTML = `
    <img src="${user.picture}" alt="User photo">
    <h3>${user.name}</h3>
    <p>Email: ${user.email}</p>
    <p>User Number: #${Math.floor(Math.random() * 100000)}</p>
  `;

  // Navigation switching
  const navItems = document.querySelectorAll(".nav-links li");
  const sections = document.querySelectorAll(".content-section");

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      navItems.forEach(n => n.classList.remove("active"));
      sections.forEach(s => s.classList.remove("active"));
      item.classList.add("active");
      const target = item.id.replace("nav-", "") + "-section";
      document.getElementById(target).classList.add("active");
    });
  });

  // Handle saving license plate
  document.getElementById("save-plate").addEventListener("click", () => {
    const plate = document.getElementById("plate-input").value.trim();
    if (!plate) {
      alert("Please enter a license plate.");
      return;
    }
    localStorage.setItem("user_plate", plate);
    alert(`Plate saved: ${plate}`);
  });

  // Handle subscription
document.getElementById("subscribe").addEventListener("click", () => {
  const plate = localStorage.getItem("user_plate");
  const name = document.getElementById("sub-name").value.trim();
  const phone = document.getElementById("sub-phone").value.trim();

  if (!plate) {
    alert("Please add your license plate before subscribing.");
    return;
  }
  if (!name || !phone) {
    alert("Please fill out your name and phone number.");
    return;
  }

  // Store subscription details for later use (optional)
  localStorage.setItem("sub_name", name);
  localStorage.setItem("sub_phone", phone);

  // Redirect to payment page with parameters
  const params = new URLSearchParams({ name, plate, phone });
  window.location.href = `payment.html?${params.toString()}`;
});


  // Sign out
  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "login.html";
  });
});
