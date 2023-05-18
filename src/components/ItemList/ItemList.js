import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({ products }) => {
    return (
        <>
            {products.map(prod => <Item Key={prod.id} {...prod} />)}
        </>
    )
}

export default ItemList;