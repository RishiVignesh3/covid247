import CartItems from "../../molecules/CartItem/CartItems";
import style from "./CartStore.module.scss"
import  { connect } from 'react-redux'

const CartStore = (props) => {
 
    const {cartItems} = props
    const CartList = cartItems.map(item=> <CartItems key={item.id} id={item.id} name={item.Name} price={item.price} qty={item.qty}></CartItems>);
    
    return <section>
        <div className={style["cart"]}>
            {cartItems.length===0 ? ("Cart is Empty"): <div> You have {cartItems.length} items in the cart.  </div>}
            {cartItems.length>0 && CartList}
            
        </div>
    </section>
}
 const mapStateToProps=(state)=>{
   return {
     cartItems:state.pharmacy.cartItems
   }
 }
export default connect(mapStateToProps)(CartStore);