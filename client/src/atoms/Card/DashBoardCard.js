import Style from "./DashBoardCard.module.scss";
import { Card } from "antd";
import "antd/dist/antd.css";
import Buttons from "../Buttons/Buttons";
import {Link} from "react-router-dom"


const CardDashboard = (props) => {
  const { content, keyIndex } = props;
  return (
    <div className={Style["site-card-border-less-wrapper"]}>
      <Card
        className={Style["site-card-border-less-wrapper__Card"]}
        key={keyIndex}
        style={{ width: 500 }}
      >
        <p>{content.content}</p>
        <p>{content.content2}</p>
        <Link to={content.content==="Ran out of medications ?" ? "/pharmacy" : "/consult"}><Buttons
          bgcolor={"#1A535C"}
          width={150}
          height={50}
          borderradius={20}
          name={"Click Here"}
          color={"black"}
          Weight={700}
          Size={"1.5rem"}
          Border={"none"}
          btnType={"yellow"}
        /></Link>
      </Card>
    </div>
  );
};

export default CardDashboard;
