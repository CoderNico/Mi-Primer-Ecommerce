
import { useState } from "react"
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

export const ItemCount = ({stock, initial=1, onAdd}) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock ){
           return setQuantity ( quantity + 1);
        };
        setQuantity(quantity)
    };

    const decrement = () => {
        if (quantity === 1 ){
           return setQuantity (1);
        }
        setQuantity ( quantity - 1);
    };
    const alertaAñadir = () =>{
        onAdd (quantity),
        Swal.fire({
            title: "¡Producto añadido al carrito!",
            icon: "success",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Seguir comprando"
          });
    }

    return (
        <div className="flex text-center w-96 min-[320px]:w-72 min-[640px]:w-80 mb-4 ">
            <div className="ring-2 ring-gray-200 w-12 min-[320px]:w-8">
                <button className="text-3xl font-semibold pt-1" onClick={decrement}>-</button>
            </div>
                <h4 className="text-3xl pt-1 min-[320px]:w-12 ring-1 ring-gray-300 font-semibold">{quantity}</h4>
            <div className="ring-2 ring-gray-200 w-12 min-[320px]:w-8">
                <button className=" text-3xl font-semibold pt-1" onClick={increment}>+</button>
            </div>
            <div>
                <Link to="/cart">
                <button className="min-[320px]:w-44 h-12 ml-2 rounded ring-orange-500 bg-yellow-500 font-bold" onClick={alertaAñadir}> Añadir a la cesta </button>
                </Link>
            </div>
        </div>
    )
}