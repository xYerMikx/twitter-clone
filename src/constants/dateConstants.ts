const STARTING_YEAR = 1990

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
export const years = Array.from({ length: 33 }, (_, k) => STARTING_YEAR + k + 1)
export const days = Array.from({ length: 31 }, (_, k) => k + 1)
