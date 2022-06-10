let errMsg;

const validateSignUp = (email, password, alert) => {
  // targeting all form fields
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  
  if (!email) {
    alert.error("Please input your email address");
    emailInput.focus();
    errMsg = false;
  } else if (password === "") {
    alert.error("Please provide your password!");
    passwordInput.focus();
    errMsg = false;
  } else if (password.value <= 7) {
    alert.error("Your password must have 8 characters or greater");
    passwordInput.focus();
    errMsg = false;
  } else {
    alert.success("You've signed up successfully. Proceed to login");
    errMsg = true;
  }
  return errMsg;
};

export default validateSignUp;