import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList.jsx'
import { useParams } from 'react-router-dom'
import { withFilter } from "../../hoc/withFilter.jsx"
import { getCategoryItem, getItems } from '../../firebase/db.js'
import styles from './ItemListContainer.module.css'
const ItemListWithFilter = withFilter(ItemList)

function ItemListContainer(p) {

    const { id } = useParams()
    const [items, setItems] = useState([])

    useEffect(() => {

        if(!id){
            getItems().then(res => setItems(res))
        }
        else{
            getCategoryItem(id).then(res => setItems(res))
        }
    }, [id])


    return (
        <div className={styles.formato}>
            <ItemListWithFilter items={items}/>
        </div>
    )
}
export default ItemListContainer