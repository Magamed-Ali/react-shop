import  {useState, useEffect} from 'react';
import {API_URL, API_KEY} from "../config";
import Preloader from "../components/Preloader";


function Main(props) {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=> {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        }).then(response => response.json())
            .then((data) => {
                data.shop && setGoods(data.shop)
                setLoading(false)
            })
    }, [])

    console.log(goods)
    return (
        <div>
            <main className="container content">
                {
                    loading ? <Preloader/> : <Preloader/>
                }
            </main>
        </div>
    );
}

export default Main;