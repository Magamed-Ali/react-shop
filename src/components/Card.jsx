import {useContext} from "react";
import {ShopContext} from "../context";

function Card(){
    const {order, handleBasketShow} = useContext(ShopContext);
    return (
        <div className='cart blue darken-1 white-text'
        onClick={handleBasketShow}>
            <i className='material-icons'>shopping_cart</i>
            {order ? <span>{order}</span> : null}
        </div>
    )
}

export {Card}