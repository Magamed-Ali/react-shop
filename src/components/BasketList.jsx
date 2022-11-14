import {BasketItem} from './BasketItem';

function BasketList(props){
    const {order = []} = props;

    return <ul className="collection basket-list">
        <a href="#!" className="collection-item active">Корзина</a>
        {
            order.length ? order.map(item => (
                <BasketItem key={item.id} {...item}/>))
                :
                <li className="collection-item"> Корзина пуста</li>
        }

        <a href="#!" className="collection-item active">Общая стоимость: </a>
    </ul>
}

export {BasketList};