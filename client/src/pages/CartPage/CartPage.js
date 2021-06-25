import ShoppingCart from "../../templates/ShoppingCart/ShoppingCart"
import Style from "./CartPage.module.scss";

const CartPage = (props) => { 
    return (
      <div className={Style["p-shopping-cart"]}>
          <ShoppingCart />
      </div>
    );
  };
  export default CartPage;