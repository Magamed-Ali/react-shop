import GoodsItem from "./GoodsItem";

function GoodsList(props) {
    const {goods = []} = props;

    if (!goods.length ){
       return <h3>Nothing here</h3>
    }

    console.log(goods)
    return (
        <div className='goods movies'>
            {
                goods.map(item => {
                    return <GoodsItem key={item.id} {...item}/>
                })
            }
        </div>
    );
}

export default GoodsList;