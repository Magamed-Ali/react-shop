import Imgg from './imgg2.jpg';

function GoodsItem(props) {
    const {
        id,
        name,
        description,
        type,
        price,
        full_background,
        addToBasket = Function.prototype,

    } = props;

    return (

        <div className="card" id={id}>
            <div className="card-image">

                {
                    full_background
                     ?
                        <img src={full_background} alt={name}/>
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
                    addToBasket({id, name, price})}>
                    This is a link
                </button>
                <span className="right">{price}</span>
            </div>
        </div>
    );
}

export default GoodsItem;