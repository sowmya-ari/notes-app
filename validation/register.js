const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors= {};
  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (Validator.isEmpty(data.username)) {
    errors.message = "Name field is required";
  }
  else if (Validator.isEmpty(data.password)) {
    errors.message = "Password field is required";
  }
 else if (Validator.isEmpty(data.password2)) {
    errors.message = "Confirm password field is required";
  }
 else if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.message = "Password must be at least 6 characters";
  }
 else if (!Validator.equals(data.password, data.password2)) {
    errors.message = "Passwords must match";
  }
return {
    errors,
    isValid: isEmpty(errors),
  };
};