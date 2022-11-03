import  {useState, useEffect} from 'react';
import {API_URL, API_KEY} from "../config";
import Preloader from "../components/Preloader";
import GoodsList from "../components/GoodsList";
import {Card} from '../components/Card'


function Main(props) {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([])

    const AddToCart = () => {
        setOrder(order + 1)
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
            <main className="container content">
                <Card quantity={order.length}/>
                {
                    loading ? <Preloader/> : <GoodsList goods={goods} AddToCart={AddToCart}/>
                }
            </main>
        </div>
    );
}

export default Main;