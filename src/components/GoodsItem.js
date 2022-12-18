import Imgg from './imgg2.jpg';
import {useContext} from "react";
import {ShopContext} from "../context";

function GoodsItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        description,
        full_background
    } = props;

    const {addToBasket} = useContext(ShopContext)


    return (

        <div className="card" id={id}>
            <div className="card-image">

                {
                    full_background
                     ?
                        <img src={full_background} alt={name} />
                        :
                        <img src={Imgg} alt={name}/>
                }

            </div>
            <div className="main-card">
                <div className="card-title" style={{padding: "15px 25px 0 25px"}}>{name}</div>
                <div className="card-content">
                    <p>{description}</p>
                </div>
            </div>

            <div className="card-action">
                <button className="btn" onClick={() =>
                    addToBasket({
                        id,
                        name,
                        price
                    }
                    )
                }
                >
                    Купить
                </button>
                <span className="right">{price}руб.</span>
            </div>
        </div>
    );
}

export default GoodsItem;