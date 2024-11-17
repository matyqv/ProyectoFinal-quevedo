import 
{ getFirestore,
   collection,
    getDocs, 
    query, 
    where,
  addDoc } from "firebase/firestore"
import {app} from "./config"

const db=getFirestore(app)

export const getItems = async()=>{
    const items = []
    const querySnapshot = await getDocs(collection(db, "productos"));
    querySnapshot.forEach((doc) => {
      items.push(doc.data())
    })
    return items
}

export const  getCategoryItem= async (id)=>{
    const items = []
    const q = query(collection(db, "productos"), where("category", "==", id))

    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
      items.push(doc.data())
    })
    return items
}

export const  getIdItem= async (id)=>{
    const items = []
    const q = query(collection(db, "productos"), where("id", "==", id))

    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
      items.push(doc.data())
    })
    return items
}


export const createOrder = async(order)=>{
  try {
    const docRef = await addDoc(collection(db, "orders"), order)
    console.log("Document written with ID: ", docRef.id)
  } catch (e) {
    console.error("Error adding document: ", e)
  }
}