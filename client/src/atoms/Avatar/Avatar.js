import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const AvatarFunction = () => {
  return (
    <div>
      <Avatar style={{backgroundColor:"black"}} size={64} icon={<UserOutlined />} />
    </div>
  );
};

export default AvatarFunction;
