import CartItems from "../../molecules/CartItem/CartItems";
import style from "./CartStore.module.scss"
import {dummy_medicine} from '../medicineStore/medicineStore';

const CartStore = () => {
    const CartList = dummy_medicine.map(med => <CartItems name={med.name} price={med.price} Qty={med.Qty} ></CartItems>);
 
    return <section>
        <div className={style["cart"]}>
            {CartList}
        </div>
    </section>
}
 
export default CartStore;