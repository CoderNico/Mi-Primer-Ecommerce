import { Link } from "react-router-dom";



export const Item = ({id, name, img, price, category}) => {
  return (
          <div className="flex justify-center m-auto w-full h-full overflow-hidden ">
            <div className="text-center m-auto overflow-hidden h-full">
              <div className="text-left">
                <img src={img} alt="" className="h-72"/>
                <h5 className="w-16 font-bold m-2">{price}€ </h5>
              </div>
              <div className="font-mono uppercase text-left h-36">
                <h3 className="w-full h-16">{name} </h3>
                <h3 className=" text-gray-400">{category} </h3>
                <Link to={`/item/${id}`}>
                <button className=" bg-zinc-900 text-white font-extrabold w-full m-auto rounded hover:scale-105 hover:shadow-md ">Ver Más</button>
                </Link>
              </div>
            </div>
          </div>
  );
};
