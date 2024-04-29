
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Config/FirebaseConfig";
import { seedProducts } from "../../Utils/SeedProducts";

export const ItemListContainer = () => {

    const {category} = useParams();
    
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getProductsDB = (category) => {
        const myProducts = category ? query(collection (db, "products"), where("category", "==", category)) : collection(db, "products")
        //Obtener los documentos de la base de datos.
        getDocs(myProducts).then((response) =>{
          const productList = response.docs.map( (doc) => {
            const item = {
                id: doc.id,
                ...doc.data()
            }
            return item
          } )
          setProducts(productList);
          setIsLoading(false);
        });
    };

    useEffect( () => {
       setIsLoading(true)
       getProductsDB(category);
       //! El seedProducts solo se debe utilizar para cargar una nueva lista de productos en nuestra base de datos
        //seedProducts(); 
    }, [category])
    
    return (
        <>
        {isLoading ? <h2>Cargando Productos ...</h2> : <ItemList products={products} />}
        
        </>
    
    )
}

