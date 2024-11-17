import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import { getCategoryItem, getItems , getIdItem } from '../firebase/db.js'
import ItemDetail from "./ItemDetail/ItemDetail.jsx"

export default function ItemDetailContainer(){
    const {id}=useParams()
    const[detail,setDetail] =useState([id])

    useEffect(() => { 
        getIdItem(id).then(res => setDetail(res[0]))
    }, [])

    return(
        <div > 
             <ItemDetail item={detail} />
        </div>
    )
}