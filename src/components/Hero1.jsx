import { Container } from "react-bootstrap";
import HeroImage from "../assets/img_car.png";
import Latar from "../assets/hitam.png";
const Hero1 = () => {
  return (
    <>
      <header>
        <div className="homepage">
          <Container>
            <div className="sewaTitle-01">
              Sewa & Rental Mobil Terbaik di <br />
              kawasan (Lokasimu)
            </div>
            <div className="sewaDesc-01">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas
              <br />
              terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu{" "}
              <br />
              untuk sewa mobil selama 24 jam.
            </div>

            <div className="hero01">
              <div>
                <img src={HeroImage} className="Car" />
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
};

export default Hero1;
