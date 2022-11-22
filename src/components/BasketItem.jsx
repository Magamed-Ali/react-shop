function BasketItem(props){
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype
    } = props;

    return (
        <li className="collection-item">
            {name} * {quantity} = {price * quantity}
            <span className='secondary-content' onClick={() => removeFromBasket(id)}>
                <i className="material-icons">close</i>
            </span>
        </li>
    )
}

export {BasketItem};