//js for the report page 
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("wasteReportForm");
  const successMsg = document.getElementById("successMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // You can add validation or backend submission here

    // Show success message
    successMsg.style.display = "block";

    // Reset the form
    form.reset();

    // Hide success message after 4 seconds
    setTimeout(() => {
      successMsg.style.display = "none";
    }, 4000);
  });
});
