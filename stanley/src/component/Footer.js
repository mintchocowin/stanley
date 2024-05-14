import "./Footer.css";
import FooterImage from "../image/stanleyFooter.webp";
import usaFlag from "../image/flag-usa.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronDown,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSquareXTwitter,
  faYoutube,
  faFacebookF,
  faSquareInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footerleft = [
  "About Stanley",
  "Carrers",
  "Meet the Bearforce",
  "Employee Spotlight",
  "Staneley Creators Fund",
  "Sustainability",
  "Blogs",
  "Refer-a-Friend",
  "Affiliate Program",
];

const Footerright = [
  "FAQ",
  "Contact Us",
  "Returns",
  "Product Recalls",
  "Stainless Steel Warranty Policy",
  "Soft Goods Warranty Policy",
  "Find a Retail Store",
  "Customer Reviews",
];
const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-section1">
        <b>BE THE FIRST TO KNOW</b>
        <p>Hear about new arrivals,sales,and other news</p>
        <div className="footer-email">
          <input type="text" placeholder="Your Email Address" />
          <div className="footer-email-p">
            <p>
              To receive SMS updates Text <b>STANLEY </b>to <b>22936</b>
            </p>
            <p>
              Msg & data rates may apply. Msg frequency varies. Unsubscribe at
              any time by replying STOP or <br />
              clicking the unsubscribe link (where available).{" "}
              <u>Privacy Policy</u>&<u>Terms.</u>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-section2">
        <div className="footer-section2-up">
          <div className="footer-section2-left">
            <div className="Company">
              <h5>Company</h5>
              {Footerleft.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
            <div className="Support">
              <h5>Support</h5>
              {Footerright.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
          </div>
          <div className="footer-section2-right">
            <img src={FooterImage} />
            <div className="footer-section2-right-p">
              <p>SHOP STANELY</p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
        <div className="footer-section2-bottom">
          <div className="icon">
            <FontAwesomeIcon icon={faTiktok} />
            <FontAwesomeIcon icon={faSquareInstagram} />
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faSquareXTwitter} />
          </div>
          <div className="bottom-p">
            <div className="copyrights">
              <p>
                <FontAwesomeIcon icon={faCopyright} /> STANLEY, ALL Rights
                Reserved.
              </p>
              <p>Terms of Sale</p>
              <p>Terms + Condition</p>
              <p>Privacy Policy</p>
              <p>Your Privacy Choices</p>
            </div>
            <div className="location">
              <p>USA</p>
              <FontAwesomeIcon icon={faChevronDown} />
              <img width={40} height={25} src={usaFlag} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
