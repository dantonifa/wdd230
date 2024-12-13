/*If the password repeated for confirmation does not match the first password, 
show a message and focus the user back to the first Password to try again and 
erase both Password values from the fields.*/
function validatePassword() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;
  if (password != confirmPassword) {
    alert("Passwords do not match.");
    document.getElementById("password").focus();
    document.getElementById("password").value = "";
    document.getElementById("confirm_password").value = "";
    return false;
  }
  return true;
}
/*If the email adds is not valid, show a message and focus the user back to the 
email field to try again and erase the email value from the field,
and display the message "Please enter a valid email address"*/
function validateEmail() {
  var email = document.getElementById("email").value;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    document.getElementById("email").focus();
    document.getElementById("email").value = "";
    return false;
  }
  return true;
}
