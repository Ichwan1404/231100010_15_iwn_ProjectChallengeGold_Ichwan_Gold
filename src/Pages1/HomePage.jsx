import{Container,} from "react-bootstrap"
import HeroImage from "../assets/img_car.png"
import OurServicePage from "./OurServicePage";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <><header>
      <div className="homepage">
        <Container>
          <div className="sewaTitle-01">Sewa & Rental Mobil Terbaik di <br />kawasan (Lokasimu)</div>
          <div className="sewaDesc-01">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas<br />terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu <br />untuk sewa mobil selama 24 jam.</div>
          <button className="btn btn-lg rounded-1 me-2"><Link to ="Carimobil">Mulai Sewa Mobil</Link></button>
        
        
          <div>
            <img src={HeroImage} className="Car" />
          </div>
        
        </Container>
        <OurServicePage/>
      </div>
    </header>
    
    </>
    )
    
  };

export default HomePage;
