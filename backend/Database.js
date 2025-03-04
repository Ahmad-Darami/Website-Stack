import { getFirestore } from "firebase/firestore";
import { doc, setDoc, getDoc, getDocs, collection, query, where,addDoc } from "firebase/firestore"
import { database } from "./Firebase"
import {app} from "./Firebase"
import {db} from "./Firebase"


export async function CreateData(docRef,message){
  try {
    await addDoc(docRef, { message: message }); // ✅ Store as an object
    console.log("Message submitted successfully!");
    alert("Message sent!");
  } catch (error) {
    console.error("Error submitting message:", error);
  }
}


export async function fetchCollectionData(collectionName) {
  try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      return data;
  } catch (error) {
      console.error("Error fetching Firestore data:", error);
      return [];
  }
}