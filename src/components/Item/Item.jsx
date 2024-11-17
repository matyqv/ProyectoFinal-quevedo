import { Link } from "react-router-dom"
import styles from './Item.module.css'
export default function Item({ item }) {
    let id = item.id
    let linkDetail = '/item/' + item.id
    return (
        <>
            <div className={styles.CardFormat}>
                <div className={styles.Nombre} ><p>{item.name}</p> </div> 
                <p className={styles["Clase"+item.category]}>
                {item.category}</p>
                
                <img className={styles.Img} src={item.image} alt="Descripción" />
                <Link to={linkDetail} ><button className={styles.VerMasButton}>Ver Mas</button></Link>
            </div>
        </>
    )
}