import { createFromIconfontCN, GoogleOutlined } from '@ant-design/icons';
import Style from "./SocialIcons.module.scss"
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
const SocialIcons =()=>{
    return(
        <div className={Style["icons_list"]}>
        <IconFont type="icon-facebook" style={{ color:"#1977F3 " , borderRadius:10, height:"2.5rem", fontSize:"2rem"}}/>
        <IconFont type="icon-twitter"  style={{ color:"#1DA1F2" , height:"2.5rem", fontSize:"2rem"}} />
        <GoogleOutlined style={{ color:"red" , height:"2.5rem", fontSize:"2rem"}}/>
      </div>
    )
   
}

export default SocialIcons