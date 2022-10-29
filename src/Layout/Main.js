import  {useState, useEffect} from 'react';
import {API_URL, API_KEY} from "../config";
import Preloader from "../components/Preloader";
import GoodsList from "../components/GoodsList";


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
                data.featured && setGoods(data.featured)
                setLoading(false)
            })
    }, [])

    function summ(a, b){
        return +a + +b
    }

    console.log(summ('23', 65))
    return (
        <div>
            <main className="container content">
                {
                    loading ? <Preloader/> : <GoodsList goods={goods}/>
                }
            </main>
        </div>
    );
}

export default Main;