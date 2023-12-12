import { Timestamp } from "firebase/firestore"

export const formatDate = (dateString: Timestamp) => {
  const convertedDate = dateString.toDate().toLocaleString()
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }

  const date = new Date(convertedDate)
  return new Intl.DateTimeFormat("en-US", options).format(date)
}
