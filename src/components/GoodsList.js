import GoodsItem from "./GoodsItem";

function GoodsList(props) {
    const {goods = [], addToBasket = Function.prototype} = props;

    if (!goods.length ){
       return <h3>Nothing here</h3>
    }

    console.log(goods)
    return (
        <div className='goods movies'>
            {
                goods.map(item => {
                    return <GoodsItem key={item.id} {...item} addToBasket={addToBasket}/>
                })
            }
        </div>
    );
}

export default GoodsList;