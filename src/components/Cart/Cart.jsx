import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { BsCart3 } from "react-icons/bs";
import Swal from 'sweetalert2'

export const Cart = () => {

  const {cart, clearCart, removeItem, total} = useContext (CartContext);

  const handleDeleteItem = (item) => {

    Swal.fire({
      title: `¿Desea eliminar ${item.name} del carrito?`,
      text: "Se eliminara de forma permanente!",
      icon: "question",
      showCancelButton: true,
      showConfirmButton:true,

    }).then(resp => {
      if (resp.isConfirmed) {
        removeItem(item.id)
        Swal.fire({
          title: "Producto eliminado",
          icon: "success"
        });
      }
    });
  }
  
  return (
    <div className="grid min-[320px]:grid-cols-full min-[640px]:grid-cols-2 mt-12 m-2 h-fit">
      <div className="w-full">
          <h1 className="text-5xl font-bold mb-14">Mi cesta</h1>
            {cart.map ((item) => (
              <div key={item.id} className="shadow-lg mb-1 text-center">
              <p className="uppercase font-semibold text-xl text-pretty m-2" key={item.id}>
              {item.name}
              </p>
              <p className="font-semibold text-2xl ">{item.subTotal} 
                € 
              </p>
              <p className="text-xl m-2 text-center">
                Cantidad: {item.quantity}
              </p>
            <div className="mb-14 align-top">
                <button onClick={() => handleDeleteItem(item)}>
                <ImCross className="mt-2"/>
                </button>
            </div>
          </div>
        ))}
      </div>
      <div className="m-2">
        {total > 0 ? (
        <div className="ml-3 justify-center ">
          <h1 className="text-5xl font-bold mb-14">
            Resumen
          </h1>
          <hr className="size-1 w-full bg-black mb-4"/>
          <h4 className="flex h-full font-semibold font-mono text-xl mb-4 justify-center">Total a pagar {total}
            €
          </h4> 
          <hr className="size-1 w-full bg-black mb-4"/>
          <button className="flex justify-center rounded h-12 w-full items-center font-semibold font-mono bg-black text-white" onClick={clearCart}>
            Eliminar todos los productos
          </button>
          <Link to="/checkout" className="flex justify-center rounded h-12 w-full items-center mt-4 font-semibold bg-orange-500 hover:bg-orange-400 text-xl">
            <button className="flex justify-center"> 
              Comprar ahora <BsCart3 className=" ml-2 size-6" /> 
            </button>
          </Link>
        </div>
          ) : ( 
          <Link to="/">
            <h4 className="font-semibold font-mono text-xl w-64 mr-2" >
              Tu cesta está vacía. ¿Por qué no echas un vistazo a nuestros productos?
            </h4>
          </Link>
          )}
      </div>
    </div>
  )
}