const email = document.getElementById("email");
const form = document.getElementById("form");
const wrapper = document.getElementById("form-wrapper");
const errorElement = document.getElementById("error");
const successMessage = document.getElementById("success-message");
const confirmationMessage = document.getElementById("confirmation-message");


form.addEventListener("submit", (e) => {
  let messages = [];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.value === "" || email.value == null) {
    messages.push("Valid email required");
  } else if (!emailRegex.test(email.value)) {
    messages.push("Valid email required");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
    email.classList.add("error");
  } else {
    e.preventDefault();
    wrapper.style.display = "none";
    successMessage.style.display = "flex";
    confirmationMessage.innerHTML = `A confirmation email has been sent to <b>${email.value}.</b> Please open it and click the button inside to confirm your subscription.`;
  }
});
