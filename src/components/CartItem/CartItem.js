import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartItem = ({ id, name, img, quantity, price }) => {
    const { removeItem } = useContext(CartContext);
    const total = price * quantity;

    console.log(quantity);

    return (
        <div className="">
            <div className="">
                <div className="">

                    <picture>
                        <img src={img} alt={name} className="" />
                    </picture>

                    <h3 className="">
                        {name}
                    </h3>

                    <p className="">
                        Cantidad: {quantity}
                    </p>

                    <p className="">
                        Precio: $ {price}
                    </p>

                    <p className="">
                        Subtotal: $ {total.toFixed(2)}
                    </p>

                </div>
            </div>
            <div className="">
                <button className="" onClick={() => removeItem(id)}>

                </button>
            </div>
        </div>
    );
};

export default CartItem;
