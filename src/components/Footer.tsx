import socials from "../assets/svgs/social.svg";
import FooterNavigation from "./footer-navigation";
const Footer = () => {
  return (
    <div>
      <div>
        <FooterNavigation />
      </div>
      <div className="socials-wrapper">
        <img src={socials} height={30} alt="no" className="socials" />
        <div className="socials social-typo">
          © 2023, FinanaceFast All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
