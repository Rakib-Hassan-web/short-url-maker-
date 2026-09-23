const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


const validateEmail = (email) => {
    return emailRegex.test(email);
};


const validatePassword = (password) => {
    return passwordRegex.test(password);
};


module.exports = {
    validateEmail,
    validatePassword
};