import { Avatar, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { connect } from "react-redux";



const CartFunction = (props) => {
  

  return (
    <Badge count={props.cartItems.length} >
    <Avatar style={{color:"black",backgroundColor:"#739e97"}} size={64} icon={<ShoppingCartOutlined />} />
    </Badge>
  );
};



const mapStateToProps = (state) => {
  return {
    cartItems: state.pharmacy.cartItems,
  };
};

export default connect(mapStateToProps)(CartFunction);
