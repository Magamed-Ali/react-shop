import {BasketItem} from './BasketItem';

function BasketList(props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        decQuantity = Function.prototype,
        incQuantity = Function.prototype
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)

    return <ul className="collection basket-list">
        <a href="#!" className="collection-item active">Корзина</a>
        <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
        {
            order.length ? order.map(item => (
                    <BasketItem
                        key={item.id}
                        {...item}
                        removeFromBasket={removeFromBasket}
                        decQuantity={decQuantity}
                        incQuantity={incQuantity}
                    />))
                :
                <li className="collection-item"> Корзина пуста</li>
        }

        <a href="#!" className="collection-item active">
            Общая стоимость: {totalPrice} руб.
        <button className="secondary-content btn">Оформить</button>
        </a>
    </ul>
}

export {BasketList};