var formDetails = document.getElementById("form");
var errormessageName = document.getElementById("errorName");
var errormessageEmail = document.getElementById("errorEmail");
var errorpass = document.getElementById("errorPass");
var errorConfirmPass = document.getElementById("errorConfirmPass");

function redirect() {
  window.location.href = "PopulateDetails.html";
}

function inputDetails() {
  formDetails.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (name === "" || name == null || name == parseInt(name)) {
      event.preventDefault();
      errormessageName.innerText = "Enter a valid name";
    }

    if (email === "" || email == null) {
      errormessageEmail.innerText = "An email is required";
    }

    if (password === "" || password == "Password" || password == "password") {
      errorpass.innerText = "Enter a valid password";
    }

    if (password != confirmPassword) {
      errorConfirmPass.innerText = "Passwords do not match";
    }

    if (name != "" && email != "" && password != "" && confirmPassword != "") {
      redirect();
    }
  });
}
