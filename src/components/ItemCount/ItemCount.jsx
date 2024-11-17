import { useState, useContext } from "react"
import { cartContext } from "../../context/cartContext"
import styles from './ItemCount.module.css'
function ItemCount({ item }) {

    const [count, setCount] = useState(0)
    const { addToCart } = useContext(cartContext)    

    const handleAdd = () => setCount(count + 1)

    const handleSub = () => setCount(count - 1); if (count < 0) { setCount(0) }

    const handleAddToCart = () => {
        if (count > 0) { addToCart({ ...item, qty: count, subtotal: 0 }) }

    }
    return (

        <div className={styles.CounterGeneral}>
            <div className={styles.Counter}>
                <button onClick={handleSub}>-</button>
                <p>{count}</p>
                <button onClick={handleAdd}>+</button>
            </div>
            <button onClick={handleAddToCart}>Agregar al Carrito</button>
        </div>



    )
}
export default ItemCount 