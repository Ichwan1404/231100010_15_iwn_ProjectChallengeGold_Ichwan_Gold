import { Container } from "react-bootstrap";
import HeroImage01 from "../assets/Ellipse22.png";
import HeroImage02 from "../assets/fi_check.png";
import HeroImage03 from "../assets/HappyGirl1.png";
import HeroImage04 from "../assets/HappyGirl2.png";
import HeroImage06 from "../assets/Ellipse19.png";
import HeroImage07 from "../assets/Ellipse20.png";
import HeroImage08 from "../assets/Ellipse21.png";
import WhyUsPage from "./WhyUsPage";

const OurServicePage = () => {
  return (
    <>
      <header>
        <div className="OurServicePage">
          <Container>
            <div className="hero02">
              <ul className="sewaTitle-02">
                Best Car Rental for any kind of trip in (Lokasimu)!
              </ul>
              <ul className="sewaDesc-02">
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta{" "}
                <br />
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding,
                <br /> meeting, dll.
              </ul>
            </div>
            <div className="ikon">
              <p className="hmm1">Sewa Mobil Dengan Supir di Bali 12 Jam</p>
              <img src={HeroImage01} className="bulat" />
              <img src={HeroImage02} className="ceklis" />
              <p className="hmm2">Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
              <img src={HeroImage01} className="bulat" />
              <img src={HeroImage02} className="ceklis" />
              <p className="hmm3">Sewa Mobil Jangka Panjang Bulanan</p>
              <img src={HeroImage01} className="bulat" />
              <img src={HeroImage02} className="ceklis" />
              <p className="hmm4">Gratis Antar - Jemput Mobil di Bandara</p>
              <img src={HeroImage01} className="bulat" />
              <img src={HeroImage02} className="ceklis" />
              <p className="hmm5">Layanan Airport Transfer / Drop In Out</p>
              <img src={HeroImage01} className="bulat" />
              <img src={HeroImage02} className="ceklis" />
            </div>
          </Container>
        </div>
      </header>
      <div className="hero03">
        <img src={HeroImage03} className="gadis1" />
        <img src={HeroImage04} className="gadis2" />
      </div>
      <img src={HeroImage08} className="bulatmerah" />
      <img src={HeroImage06} className="bulatijo" />
      <img src={HeroImage07} className="bulatkuning" />
      <WhyUsPage />
    </>
  );
};

export default OurServicePage;
