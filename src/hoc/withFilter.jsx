import {useState,useEffect} from 'react'
import styles from './withFiler.module.css'

export const withFilter =(Component)=>{
    
    function ComponentWithLoggIng(props){
        const [textFiltro,setTextFiltro]= useState('')
        const [ItemsFiltrados, setItemsFiltrados] = useState(props.items); 
        useEffect((set)=>{setItemsFiltrados(props.items)},[props.items])

        const EjecutarFiltro = () => {          
            setItemsFiltrados(
                props.items.filter(item => 
                    item.name.toLowerCase().includes(textFiltro.toLowerCase())
                )
            );
        };
        useEffect(()=>{EjecutarFiltro},[])

        return (
            <>
            <div className={styles.ordenar} >
                
            <input  
                    onChange={(e) => setTextFiltro(e.target.value)} 
                    type="text" 
                    className={styles.inputFiltro}
                    value={textFiltro} 
                />
                <button 
                    className={styles.buttonFiltro} onClick={EjecutarFiltro}>Buscar</button>
            </div>
                <Component {...props} items={ItemsFiltrados} />  
            </>
        );
    }
    return ComponentWithLoggIng

}
