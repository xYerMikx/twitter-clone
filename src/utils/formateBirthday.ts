import { months } from "@/constants/dateConstants"

const FIRST_TWO_DIGIT_NUMBER = 10

export const formateBirthday = (year: number, month: string, day: number) => {
  const newMonth = months.indexOf(month) + 1
  return `${day < FIRST_TWO_DIGIT_NUMBER ? `0${day}` : day}.${
    newMonth < FIRST_TWO_DIGIT_NUMBER ? `0${newMonth}` : newMonth
  }.${year}`
}
