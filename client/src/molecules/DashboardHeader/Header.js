import Cart from "../../atoms/Cart/Cart";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../atoms/Avatar/Avatar";
import { useDispatch, useSelector } from "react-redux";
import Style from "./Header.module.scss";
import covid247 from "./Covid247.PNG";

const Header = () => {
  let status = useSelector((state) => state.logged);
  const dispatch = useDispatch();
  const history = useHistory();
  const changeStatus = () => {
    if (status) {
      var confirmed = window.confirm("Click OK to Log-Out");
      if (confirmed) {
        status = !status;
        dispatch({ type: "LOGGED", login: status });
      }
    } else {
      history.push("/Login");
    }
  };

  return (
    <div className={Style["header"]}>
      <div className={Style["header__Content"]}>
        <Link to="/">
          <img src={covid247} alt="logo"/>
        </Link>
        <div className={Style["left"]}>
          <Link to="/hospital">Hospitals</Link>
          <Link to="/pharmacy">Pharmacy</Link>
          <Link to="/consult">Online Consultation</Link>
          <Link to="/cart">
            <Cart />
          </Link>
          <Avatar onClick={changeStatus} />
        </div>
      </div>
    </div>
  );
};

export default Header;
