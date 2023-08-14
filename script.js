const btnSubmit = document
  .getElementById("btn-submit")
  .addEventListener("click", function () {
    const email = document.getElementById("email");
    const emailValue = email.value;

    const password = document.getElementById("pass");
    const passValue = password.value;

    if (emailValue === "bappywahid22@gmail.com" && passValue === "null") {
      window.location.href = "dashbord.html";
    } else {
      window.alert("invalid information");
    }
  });
