import {useEffect, useContext} from 'react';
import {ShopContext} from '../context'
import {API_URL, API_KEY} from "../config";
import Preloader from "../components/Preloader";
import GoodsList from "../components/GoodsList";
import {Card} from '../components/Card';
import {BasketList} from "../components/BasketList";
import {Alert} from '../components/Alert'


function Main(props) {

    const {
        setGoods,
        loading = true,
        order = [],
        isBasketShow = false,
        alertName = ''
    } = useContext(ShopContext)


    useEffect(() => {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        }).then(response => response.json())
            .then((data) => {
                setGoods(data.featured)
            });
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <main className="container content ">
                <Card quantity={order.length}/>
                {
                    loading ? <Preloader/> :
                        <GoodsList/>
                }
                {
                    isBasketShow && <BasketList/>
                }
                {
                    alertName && <Alert/>
                }
            </main>
        </div>
    );
}

export default Main;