const messageButton = document.getElementById("messageButton");
const message = document.getElementById("message");

messageButton.addEventListener("click", () => {
  message.textContent = "Hello! JavaScript is working.";
});
