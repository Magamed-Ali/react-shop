function GoodsItem(props) {
    const {
        id,
        name,
        description,
        type,
        price,
        full_background,
        AddToCart

    } = props;
    return (
        <div className="card" id={id}>
            <div className="card-image">
                <img src={full_background} alt={name}/>

            </div>
            <span className="card-title">{name}</span>
            <div className="card-content">
                <p>!!!</p>
            </div>
            <div className="card-action">
                <button className="btn" onClick={AddToCart}>This is a link</button>
                <span className="right">{price}</span>
            </div>
        </div>
    );
}

export default GoodsItem;