import Style from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={Style["footer"]}>
    <div className={Style["footer_content"]}>
      <div><p>Disclaimer</p>
      <p>
        Content Owned and Maintained by : Cognizant Technology Solutions Pvt
        Limited India
      </p></div>
      <div className={Style["footerDown"]}>
        <div>
          <p>About Us</p>
          <p>
            Content Owned and Maintained by : Cognizant Technology Solutions Pvt
            Limited India
          </p>
        </div>

        <hr className={Style["seperator"]} />

        <div>
          <p>Contact Us</p>
          <p>
            Plot No B 40 41, Old Mahabalipuram Road, Sirucheri, Chennai -
            603103, Sipcot IT Park
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;

// <td>
// <tr >
//   <th>Disclaimer</th>
// </tr>
// <tr>
//   <td>
//     Please note that this page also provides links to the websites /
//     web pages of Govt
//   </td>
// </tr>
// </td>
