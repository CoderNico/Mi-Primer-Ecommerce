import React from 'react'
import { Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import {CartWidget} from "../CartWidget/CartWidget"
import { PiTruck } from "react-icons/pi";

const NavBar = () => {
  return (
    <div className='bg-white dark:bg-black dark:text-white duration-200 relative z-40 max-h-screen-2xl'>
        <div className='bg-black text-white flex justify-center items-center  p-1 font-semibold'>
            <p className='pr-3'>Envíos Gratuitos a España penínsular a partir de 50€ </p>
            <PiTruck className='text-2xl'/>
        </div>
      <div className='py-4 px-4'>
        <div className="flex justify-between ">
            <div className=' flex items-center gap-4'>
                    <Link to="/" className='text-primary font-bold tracking-widest text-2xl uppercase sm:text-4xl'>
                        Fútbol Maniatic
                    </Link>
                
                <div className='hidden lg:block px-44'>
                    <ul className='flex items-center gap-4'>
                        <li>
                            <Link to="/category/guantes" className="inline-block pt-2 px-6 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                            Guantes de portero
                            </Link>
                            <Link to="/category/botas" className="inline-block pt-2 px-6 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                            Botas de fútbol
                            </Link>
                            <Link to="/category/equipacion" className="inline-block pt-2 px-6 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                            Equipaciones 
                            </Link>
                            <Link to="/category/accesorios" className="inline-block pt-2 px-6 font-semibold text-gray-600 hover:text-black dark:hover:text-white duration-200 ">
                            Accesorios
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <Link to="/Cart">
                    <CartWidget/>
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
