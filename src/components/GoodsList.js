import GoodsItem from "./GoodsItem";

function GoodsList(props) {
    const {goods = []} = props;

    if (!goods.length ){
       return <h3>Nothing here</h3>
    }

    return (
        <div className='goods movies'>
            {
                goods.map(item => {
                    return <GoodsItem key={item.id} {...item} AddToCart={props.AddToCart}/>
                })
            }
        </div>
    );
}

export default GoodsList;