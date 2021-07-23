import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const AvatarFunction = (props) => {
  return (
    <div>
      <Avatar onClick={props.onClick} style={{ textShadow: "2px 7px 5px rgba(0,0,0,0.3),0px -4px 10px rgba(255,255,255,0.3)",color:"black",backgroundColor:"#739e97"}} size={64} icon={<UserOutlined />} />
    </div>
  );
};

export default AvatarFunction;
