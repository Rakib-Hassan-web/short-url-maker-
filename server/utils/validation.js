const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


const validateEmail = (email) => {
    return emailRegex.test(email);
};


const validatePassword = (password) => {
    return passwordRegex.test(password);
};


const validateURL = (url) => {
  const urlRegex =
    /^(https?:\/\/)([\w-]+\.)+[\w-]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=%]*)?$/;

  return urlRegex.test(url);
};

module.exports = {
    validateEmail,
    validatePassword,
    validateURL
};