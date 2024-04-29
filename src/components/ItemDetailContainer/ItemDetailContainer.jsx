import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Config/FirebaseConfig";

export const ItemDetailContainer = () =>{
  const {id} = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  
  const getProductDB = (id) => {
    const productRef = doc( db, "products", id );

    getDoc(productRef)
      .then( response => {
          const product = {
            id: response.id,
            ...response.data()
          }

          setItem(product);
      } )
   }

  useEffect(() => {
   setIsLoading(true)
   console.log(isLoading)
   getProductDB(id);
   setIsLoading(false)
   }, [])

  return (
    <>
    { isLoading ? <h2>Cargando Productos...</h2> : <item/> && <ItemDetail {...item} />}
    </>
  )
}

