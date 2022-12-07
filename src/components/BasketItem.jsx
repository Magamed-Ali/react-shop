function BasketItem(props) {
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

            <span className="collection-name">
                {name}
                *
                {quantity} = {price * quantity} руб.
            </span>

            <span>
                <i className='material-icons secondary-content' onClick={() => decQuantity(id)}>remove_circle</i>
                <i className='material-icons secondary-content' onClick={() => incQuantity(id)}>add_circle</i>

                <i className="material-icons secondary-content secondary-close" onClick={() => removeFromBasket(id)} >close</i>
            </span>

        </li>
    )
}

export {BasketItem};