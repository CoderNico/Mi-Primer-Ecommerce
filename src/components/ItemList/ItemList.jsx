import {Item} from "../Item/Item"



export const ItemList = ({products}) => {
    return (
        <div className="m-2 grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 pt-10 gap-4 min-[320px]:grid-cols-2 ">
                {products.map (product => <Item key={product.id} {...product} />)}
        </div>

    );
};