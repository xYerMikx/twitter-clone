import { Timestamp } from "firebase/firestore"

export const formatDate = (dateString: Timestamp) => dateString.toDate().toLocaleString()
