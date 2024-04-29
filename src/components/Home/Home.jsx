import { Link } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import { Carousel } from "../Carouse/Carouse";
import { Footer } from "../Footer/Footer";

export const Home = () => {
  return (
    <>
    <Carousel />
    <h1 className="text-4xl uppercase pb-6  mt-4 mb-4 text-center font-bold max-h-screen-2xl ">Categorías</h1>
    <hr className="size-2 w-full bg-black "/>
        <div className="justify-center cursor-pointer text-center mb-44 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 pt-10 items-center min-[320px]:grid-cols-1 ">
            <Link to="/category/botas">
            <div className="p-3 grid place-items-center">
                <img src="https://www.futbolemotion.com/imagesuploads/cromosportadas/tablet/destacados_297x353_0124_adidas.webp"/>
                <div className="w-3/4 h-1/4 md:w-full lg:w-3/4">
                    <h2 className="mt-2 rounded-full ring-2 ring-black text-xl font-semibold md:text-lg lg:text-xl">Botas de fútbol</h2>
                </div>
                
            </div>
            </Link>
            <Link to="/category/guantes">
            <div className="p-3 grid place-items-center ">
                <img src="https://www.futbolemotion.com/imagesuploads/cromosportadas/tablet/cromos_297x353_sp_agosto23.webp" />
                <div className="w-3/4 h-1/4 md:w-full lg:w-3/4">
                <h2 className="mt-2 rounded-full ring-2 ring-black text-xl font-semibold md:text-lg lg:text-xl">Guantes portero</h2>
                </div>
            </div>
            </Link>
            <Link to="/category/equipacion">
            <div className="p-3 grid place-items-center ">
                <img src="https://www.futbolemotion.com/imagesuploads/cromosportadas/tablet/cromos_297x353_rm_junio23.webp" />
                <div className="w-3/4 h-1/4 md:w-full lg:w-3/4">
                <h2 className="mt-2 rounded-full ring-2 ring-black text-xl font-semibold md:text-lg lg:text-xl">Equipaciones</h2>
                </div>
            </div >
            </Link>
            <Link to="/category/accesorios">
            <div className="p-3 grid place-items-center">
                <img src="https://www.futbolemotion.com/imagesuploads/cromosportadas/tablet/accesorios_297x353_adidas1023.webp"/>
                <div className="w-3/4 h-1/4 md:w-full lg:w-3/4 ">
                <h2 className="mt-2 rounded-full ring-2 ring-black text-xl font-semibold md:text-lg lg:text-xl">Accesorios</h2>
                </div>
            </div>
            </Link>
        </div>
        <h1 className="text-4xl uppercase pb-6 pt-2 mt-2 mb-4 text-center font-bold">Novedades</h1>
        <hr className="size-2 w-full bg-black "/>
        <ItemListContainer />
        <Footer />
    </>
  )
}


