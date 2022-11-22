function BasketItem(props){
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket
    } = props;

    return (
        <li className="collection-item">
            {name} * {quantity} = {price}
            <span className='secondary-content' onClick={() => removeFromBasket(id)}>
                <i className="material-icons">close</i>
            </span>
        </li>
    )
}

export {BasketItem};