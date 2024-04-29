import { useContext, useState } from "react"
import { CartContext } from "../../components/Context/CartContext"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../../Config/FirebaseConfig"

export const CheckOut = () => {

    const {cart, total, clearCart} = useContext(CartContext)
    const [formCheckOut, setFormCheckOut] = useState({
        name:"",
        lastName:"",
        address:"",
        email:"",
        phone:"",
    })

    const [orderId, setOrderId] = useState(null);

    const handleName = (e) => {
        setFormCheckOut({
            ...formCheckOut,
            name:e.target.value
        })
    }
    const handleLastName = (e) => {
        setFormCheckOut({
            ...formCheckOut,
            lastName:e.target.value
        })
    }
    const handleAddress = (e) => {
        setFormCheckOut({
            ...formCheckOut,
            address:e.target.value
        })
    }
    const handleEmail = (e) => {
        setFormCheckOut({
            ...formCheckOut,
            email:e.target.value
        })
    }
    const handlePhone = (e) => {
        setFormCheckOut({
            ...formCheckOut,
            phone:e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newOrder = {
            buyer: formCheckOut,
            items: cart,
            total,
            date: serverTimestamp()
        }

        const order = await addDoc ( collection(db, "orders" ), newOrder );

        setFormCheckOut({
            name:"",
            lastName:"",
            address:"",
            email:"",
            phone:0,
        });

        clearCart();

        setOrderId(order.id);

    };
    if (orderId) {
        return <div className="shadow-xl rounded bg-cyan-100 m-2">
                <h3 className="flex justify-center">El ID de su compra es: {orderId} </h3>
                </div> 
            
    }
  return (
<div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
    <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
  </div>
  <div className="mx-auto max-w-2xl text-center">
    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Confirmación de compra</h2>
    <p className="mt-2 text-lg leading-8 text-gray-600">Todos los datos son de uso exclusivo para realizar la compra.</p>
  </div>
  <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label htmlFor="" className="block text-sm font-semibold leading-6 text-gray-900">Nombre</label>
        <div className="mt-2.5">
          <input type="text" value={formCheckOut.name} onChange={handleName} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label htmlFor="" className="block text-sm font-semibold leading-6 text-gray-900">Apellido</label>
        <div className="mt-2.5">
          <input type="text" value={formCheckOut.lastName} onChange={handleLastName} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="" className="block text-sm font-semibold leading-6 text-gray-900">Dirección</label>
        <div className="mt-2.5">
          <input type="text" value={formCheckOut.address} onChange={handleAddress} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
        <div className="mt-2.5">
          <input type="email" value={formCheckOut.email} onChange={handleEmail} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="" className="block text-sm font-semibold leading-6 text-gray-900">Telefono</label>
        <div className="relative mt-2.5">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <label htmlFor="country" className="sr-only">Pais</label>
            <select id="country" name="country" className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
              <option>ES</option>
              <option>AR</option>
            </select>
          </div>
          <input type="number" value={formCheckOut.phone}  onChange={handlePhone} className="block w-full rounded-md border-0 px-3.5 py-2 pl-16 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="" className="block text-sm font-semibold leading-6 text-gray-900">Comentarios</label>
        <div className="mt-2.5">
          <textarea name="message" id="message" rows="4" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
        </div>
      </div>
    </div>
    <div className="mt-10">
      <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Finalizar Compra</button>
    </div>
  </form>
</div>
    )
  }
