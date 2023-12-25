export const isValidEmail = (email: string) =>
  /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)

export const isValidPhone = (phone: string) => /^\+375\d{9}$/.test(phone)
