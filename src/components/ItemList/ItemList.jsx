import Item from "../Item/Item.jsx"
import styles from './ItemList.module.css'
export default function ItemList({items}){
    return(
        <div className={styles.itemList}>
               {items.map(item=>( 
                <div className={styles.cardProduct}                   key={item.id}>
                    <Item item={item} />
                </div>
               ))
             }
        </div>
              
    )
} 