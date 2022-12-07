import  {useState, useEffect} from 'react';
import {API_URL, API_KEY} from "../config";
import Preloader from "../components/Preloader";
import GoodsList from "../components/GoodsList";
import {Card} from '../components/Card';
import {BasketList} from "../components/BasketList";


function Main(props) {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketSow] = useState(false);

    const incQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if(el.id === itemId){
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity
                }
            }else {
                return el;
            }
        });
        setOrder(newOrder)
    }

    const decQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if(el.id === itemId){
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0
                }
            }else {
                return el;
            }
        });
        setOrder(newOrder)
    }

    const handleBasketShow = () => {
        setBasketSow(!isBasketShow)
    }
    const removeFromBasket = (itemId) => {
        const newOrder = order.filter((el) => el.id !== itemId);
        setOrder(newOrder)
    }
    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)

        if(itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if(index === itemIndex){
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                }else {
                    return orderItem
                }
            });

            setOrder(newOrder)
        }
        }

    useEffect(()=> {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        }).then(response => response.json())
            .then((data) => {
                data.featured && setGoods(data.featured)
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <main className="container content ">
                <Card quantity={order.length} handleBasketShow={handleBasketShow}/>
                {
                    loading ? <Preloader/> :
                        <GoodsList goods={goods} addToBasket={addToBasket}/>
                }
                {
                    isBasketShow && <BasketList
                        order={order}
                        handleBasketShow={handleBasketShow}
                        removeFromBasket={removeFromBasket}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                    />
                }
            </main>
        </div>
    );
}

export default Main;