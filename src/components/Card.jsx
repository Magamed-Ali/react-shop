
function Card(props){
    const {quantity = 0, handleBasketShow = Function.prototype} = props;
    return (
        <div className='cart blue darken-1 white-text'
        onClick={handleBasketShow}>
            <i className='material-icons'>shopping_cart</i>
            {quantity ? <span>{quantity}</span> : null}
        </div>
    )
}

export {Card}