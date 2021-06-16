import Cart from "../../atoms/Cart/Cart";
import Avatar from "../../atoms/Avatar/Avatar";
import Style from  "./Header.module.scss"

const Header = () => {
  return (
    <div className={Style["header"]}>
      <Cart />
      <Avatar />
    </div>
  );
};

export default Header;
