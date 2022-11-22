import {BasketItem} from './BasketItem';

function BasketList(props){
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype} = props;

    const totolPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)

    return <ul className="collection basket-list">
        <a href="#!" className="collection-item active">Корзина</a>
                <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
        {
            order.length ? order.map(item => (
                <BasketItem key={item.id} {...item} removeFromBasket={removeFromBasket}/>))
                :
                <li className="collection-item"> Корзина пуста</li>
        }

        <a href="#!" className="collection-item active">Общая стоимость: {totolPrice} руб. </a>
    </ul>
}

export {BasketList};