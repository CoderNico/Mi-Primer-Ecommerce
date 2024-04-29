import { useContext } from "react";
import { ItemCount } from "../ItemCount/ItemCount"
import { CartContext } from "../../components/Context/CartContext";

export const ItemDetail = ({id, description, img, price, stock, name}) => {

const {addItem} = useContext(CartContext);

const onAdd = (quantity) => {

  const item = {
    id,
    price,
    name
  };

  addItem(item, quantity)

}
  return (
        <div className="mt-12 ml-4 mr-4">
          <div className="grid gap-2 min-[320px]:grid-cols-1 min-[640px]:grid-cols-2">
          <div className="mb-4 ">
          <img className="min-[640px]:h-[800px] min-[320px]:h-[300px] container ring-slate-200 ring shadow-black" src={img} alt="" />
          </div>
            <div className="w-full h-full container">
              <h5 className="m-4 text-center uppercase font-extrabold font-mono text-2xl ">{name}</h5>
              <hr className="size-2 w-full bg-black  "/>
              <p className="mt-4 text-lg p-2 mb-4">{description}</p>
              <hr />
              <div className="mt-48">
              <p className="mt-28 text-3xl font-semibold mb-4 text-right">{price} €</p>
              <hr className="size-2 w-full bg-black  "/>
              <div className="mt-8">
                <ItemCount stock={stock} onAdd={onAdd} />
              </div>
              </div>
            </div>
          </div>
        </div> 
  );
};


