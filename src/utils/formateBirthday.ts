import { months } from "@/constants/dateConstants"

export const formateBirthday = (year: number, month: string, day: number) => {
  const newMonth = months.indexOf(month) + 1
  return `${day < 10 ? `0${  day}` : day}.${
    newMonth < 10 ? `0${  newMonth}` : newMonth
  }.${year}`
}
