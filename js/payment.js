window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");
  const plate = params.get("plate");
  const phone = params.get("phone");

  const summary = document.getElementById("summary");
  summary.innerHTML = `
    Subscribing for <strong>${name}</strong><br>
    Plate: <strong>${plate}</strong><br>
    Phone: <strong>${phone}</strong><br>
  `;

  // Placeholder for payment logic
  document.getElementById("checkoutBtn").addEventListener("click", () => {
    alert("Redirecting to secure payment...");
    // In the future: integrate Stripe checkout session or your backend here
  });

  // Cancel back to dashboard
  document.getElementById("cancelBtn").addEventListener("click", () => {
    window.location.href = "dashboard.html";
  });
});
