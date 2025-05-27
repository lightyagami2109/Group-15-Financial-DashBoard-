// Email validation
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}


const isValidPassword = (password) => {
  return password.length >= 6 && /[A-Za-z]/.test(password) && /[0-9]/.test(password)
}


const isValidAmount = (amount) => {
  return !isNaN(amount) && Number.parseFloat(amount) > 0
}

module.exports = {
  isValidEmail,
  isValidPassword,
  isValidAmount,
}
