import Cart from "../../atoms/Cart/Cart";
import {Link} from "react-router-dom"
import Avatar from "../../atoms/Avatar/Avatar";
import {Route} from "react-router-dom"

import Style from "./Header.module.scss";

const Header = () => {
  return (
    <div className={Style["header"]}>
      <div className={Style["header__Content"]}>
        <div className={Style["outer"]}> </div>
        <div className={Style["left"]}>
          <Link to="/hospital">Hospitals</Link>
          <Link to="/pharmacy">Pharmacy</Link>
          <Link to="/consult">Online Consultation</Link>
          <Link to="/cart"><Cart/></Link>
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Header;
