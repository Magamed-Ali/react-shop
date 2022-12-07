function BasketItem(props){
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        decQuantity = Function.prototype,
        incQuantity = Function.prototype
    } = props;

    return (
        <li className="collection-item">
            {name}
            <i className='material-icons' onClick={() => decQuantity(id)}>remove</i>
            *
            <i className='material-icons' onClick={() => incQuantity(id)}>add</i>
            {quantity} = {price * quantity} руб.
            <span className='secondary-content' onClick={() => removeFromBasket(id)}>
                <i className="material-icons">close</i>
            </span>
        </li>
    )
}

export {BasketItem};