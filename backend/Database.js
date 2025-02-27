import { doc, setDoc, getDoc, getDocs, collection, query, where } from "firebase/firestore"
import { database } from "./Firebase"

const newDocData = {name: "New Message" , content: "Content of Message"}
const docRef = doc(database, "articles", "articleId");


setDoc(docRef,newDocData)
    .then(() => {
        console.log("Document Written Successfully")
    })
    .catch((error) => {
        console.error("Error writing docoument: ", error)
    })
