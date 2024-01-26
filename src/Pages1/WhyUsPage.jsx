import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import HeroImage09 from "../assets/fi_thumbs.png";
import BgImage01 from "../assets/Ellipse20.png";
import HeroImage10 from "../assets/fi_tag.png";
import BgImage02 from "../assets/Ellipse21.png";
import HeroImage11 from "../assets/fi_clock.png";
import HeroImage12 from "../assets/fi_award.png";
import BgImage03 from "../assets/Ellipse13.png";
import TestimonialPage from "./TestimonialPage";

const WhyUsPage = () => {
  return (
    <>
      <header>
        <div className="WhyUsPage">
          <Container>
            <div className="hero04">
              <div className="sewaTitle-03">Why Us?</div>
              <div className="sewaDesc-03">
                Mengapa harus pilih Binar Car Rental?
              </div>
            </div>
            <div className="row container">
              <Card className="tubuh">
                <div className="whywraper">
                  <img src={BgImage01} className="bgkuning" />
                  <img src={HeroImage09} className="whyjempol" />
                </div>
                <Card.Body>
                  <Card.Title className="whyjudul">Mobil Lengkap</Card.Title>
                  <Card.Text className="whytext">
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="tubuh">
                <div className="whywraper">
                  <img src={BgImage02} className="bgmerah" />
                  <img src={HeroImage10} className="whytag" />
                </div>
                <Card.Body>
                  <Card.Title className="whyjudul">Harga Murah</Card.Title>
                  <Card.Text className="whytext">
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="tubuh">
                <div className="whywraper">
                  <img src={BgImage03} className="bgbiru" />
                  <img src={HeroImage11} className="whyjam" />
                </div>
                <Card.Body>
                  <Card.Title className="whyjudul">Layanan 24 Jam</Card.Title>
                  <Card.Text className="whytext">
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="tubuh">
                <div className="whywraper">
                  <div className="bgijo" />
                  <img src={HeroImage12} className="whyaward" />
                </div>
                <Card.Body>
                  <Card.Title className="whyjudul">
                    Sopir Profesional
                  </Card.Title>
                  <Card.Text className="whytext">
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Container>
        </div>
      </header>
      <TestimonialPage />
    </>
  );
};

export default WhyUsPage;
