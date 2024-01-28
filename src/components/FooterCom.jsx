import { Container } from "react-bootstrap";
import Fotgambar1 from "../assets/fi_facebook.png";
import Fotgambar2 from "../assets/fi_instagram.png";
import Fotgambar3 from "../assets/fi_mail.png";
import Fotgambar5 from "../assets/fi_twitch.png";
import Fotgambar4 from "../assets/fi_twitter.png";

const FooterCom = () => {
  return (
    <Container className="faqfoot">
      <div className="fot1">
        <p className="fottext1">
          Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
        </p>
        <p className="fottext1">binarcarrental@gmail.com</p>
        <p className="fottext1">081-233-334-808</p>
      </div>
      <div className="fot2">
        <p className="fottext2">Our services</p>
        <p className="fottext2">Why Us</p>
        <p className="fottext2">Testimonial</p>
        <p className="fottext2">FAQ</p>
      </div>
      <div className="fot3">
        <h1 className="fohead1">Connect with us</h1>
        <div className="lingkaran1">
          <img src={Fotgambar1} className="facebook" />
          <div className="lingkaran2" />
          <img src={Fotgambar2} className="instagram" />
          <div className="lingkaran3" />
          <img src={Fotgambar3} className="twitter" />
          <div className="lingkaran4" />
          <img src={Fotgambar4} className="mail" />
          <div className="lingkaran5" />
          <img src={Fotgambar5} className="twitch" />
        </div>
      </div>
      <div className="fot4">
        <h1 className="fotcopyright">Copyright Binar 2022</h1>
        <div className="bluebox" />
      </div>
    </Container>
  );
};

export default FooterCom;
