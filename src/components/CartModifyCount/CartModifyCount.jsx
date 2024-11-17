import { useState,useEffect, useContext } from "react"
import { cartContext } from "../../context/cartContext"
import styles from './CartModfyCount.module.css'
function CartModfyCount({ item }) {

    const [count, setCount] = useState(item.qty)
    useEffect(() => {handleAddToCart()}, [count])
    const { ModifyCart } = useContext(cartContext)

    const handleAdd = () => {
        setCount(prevCount => prevCount + 1)
    }

    const handleSub = () => {
        if(count>1)
       
       {  setCount(prevCount => prevCount - 1)}
    }

    const handleAddToCart = () => {    
        if (count > 0) {            ModifyCart({ ...item, qty: count, subtotal: 0 }, 0)        }
    }

    return (

        <div className={styles.CounterGeneral}>
            <div className={styles.Counter}>
                <button onClick={handleSub}>-</button>
                <p>{count}</p>
                <button onClick={handleAdd}>+</button>
            </div>
        </div>
    )
}
export default CartModfyCount 