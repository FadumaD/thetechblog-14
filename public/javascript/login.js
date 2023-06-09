//login handler
const loginFormHandler = async (event) => {
  event.preventDefault();
  //username and password
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  //check if username and password exist
  if (username && password) {
    //post to api/users/login
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      //redirect to dashboard
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
