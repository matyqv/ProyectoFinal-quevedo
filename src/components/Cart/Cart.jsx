import { useCart} from './../../context/cartContext'
import styles from './Cart.module.css'
import { createOrder } from '../../firebase/db'
import { serverTimestamp } from 'firebase/firestore'
import Swal from 'sweetalert2'
import CartDeleteButton from '../CartDeleteButton/CartDeleteButton'
import CartModfyCount from '../CartModifyCount/CartModifyCount'
import { useNavigate } from 'react-router-dom';


function Cart() {
  const { cart } = useCart()
  const { ClearCart } = useCart()
  const { notify } = useCart()
  const navigate = useNavigate();

  let nombre = "";
  let mail = "";
  let telefono = "";

  const VerFormulario = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Completa tus datos para el pedido",
      html: `   
                    <input  id="swal-input1" class="swal2-input" type="text" placeholder='nombre' required/>
                    <input id="swal-input2" class="swal2-input"  type="email" placeholder='email@correo.com' required/>
                    <input id="swal-input3" class="swal2-input" type="text" placeholder='11 8888 8888 ( Telefono)' required/>
            `,
      focusConfirm: false,
      preConfirm: () => {
        nombre = document.getElementById("swal-input1").value;
        mail = document.getElementById("swal-input2").value;
        telefono = document.getElementById("swal-input3").value;

        if (!nombre || !mail || !telefono) {
          Swal.showValidationMessage("Por favor, completa todos los campos.");
          return false; 
        }

        return [nombre, mail, telefono];
      },
      confirmButtonText: 'Enviar'

    });
    if (formValues) {
      const order = {
        buyer: { name: nombre, email: mail, phone: telefono },
        items: cart,
        date: serverTimestamp(),
        total: getTotal()
      }
      ClearCart()
      createOrder(order)
      notify("Tu pedido ha sido enviado!")
      notify("Muchas gracias por comprar!")
      navigate('/'); 

    }
  }



  const handleSubmit = (e) => {
    if (cart.length > 0) {      VerFormulario()    }

    else {
      Swal.fire({
        title: 'el carrito esta vacio!',
        text: 'Dentro de tu carrito! debes agregar articulos para realizar la compra ',
        icon: 'warning',
        confirmButtonText: 'Ok'
      })
    }

  }

  const getTotal = () => {
    let total = 0
    cart.forEach(element => {
      total = total + element.subtotal
    })
    return parseFloat(total.toFixed(2));
  }

  return (

    <div className={styles.formatCart} >
      <div className={styles.cabecera}>
        <p>PRODUCTO</p>
        <p>CANTIDAD</p>
        <p>PRECIO</p>
        <p>SUB-TOTAL</p>
        <p> </p>
      </div>

      {
        cart.map(prod => (
          <div key={prod.id} className={styles.articulo} >
            <p className={styles.name}>{prod.name}</p>
            < CartModfyCount item={prod} />
            <p>${prod.price}</p>
            <p>${prod.subtotal} </p>
            <CartDeleteButton item={prod} />
          </div>
        ))}

      <div className={styles.articulo}>
        <p> </p>
        <p>          <button onClick={handleSubmit} className={styles.Button} >F
          inalizar Compra</button>           </p>
        <p> </p>
        <p> TOTAL : {getTotal()} </p>
        <p></p>
      </div>
    </div>)
}
export default Cart