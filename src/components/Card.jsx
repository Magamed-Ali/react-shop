
function Card(props){
    const {quantity = 0} = props;
    return (
        <div>
            <i className='material-icons'>shopping_cart</i>
        </div>
    )
}

export {Card}