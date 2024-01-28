import { useEffect, useState } from "react";
import axios from "axios";
import { HEADERS } from "./constant";
import FooterCom from "../components/FooterCom";
import { Input, Form, Row, Col, Button } from "reactstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { formatCurrency } from "./helpers";

const PLACEHOLEDER_URL = "https://fakeimg.pl/270x160";
const LIST_URL = "https://api-car-rental.binaracademy.org/admin/v2/car";

const HasilMobil = () => {
  const [list, setList] = useState([]);

  const handleClick = () => {
    // setPut();
  };

  console.log(list);

  useEffect(() => {
    axios
      .get(LIST_URL, {
        headers: HEADERS,
      })
      .then((response) => {
        setList(response.data.cars);
      });
  }, []);

  return (
    <Container>
      <div>
        <Form>
          <Row className="carimobil02">
            <Col>
              <h className="hasilkol011">Pencarianmu</h>
              <p className="hasiljudul00">Nama Mobil</p>
              <Input
                id="exampleText"
                placeholder="Ketik nama/tipe mobil"
                type="text"
                className="hasilkol00"
              />
            </Col>
            <Col className="hasilkol01">
              <p className="hasiljudul00">Kategori</p>
              <Input className="hasilkol00" type="select">
                <option hidden>Masukan Kapasitas Mobil</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Input>
            </Col>
            <Col className="hasilkol01">
              <p className="hasiljudul00">Harga</p>
              <Input className="hasilkol00" type="select">
                <option hidden>Masukan Harga Sewa per Hari</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Input>
            </Col>
            <Col className="hasilkol01">
              <p className="hasiljudul00">Status</p>
              <Input className="hasilkol00" type="select">
                <option>Disewa</option>
              </Input>
            </Col>
            <Col className="hasilkol02">
              <Button className="hasilbtn00" onClick={handleClick}>
                Edit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>

      <div className="hasilcari00">
        {list.length > 0 ? (
          list.map((car) => (
            <div key={car.id}>
              <Card className="hasilcardmobil">
                <img
                  width={333}
                  height={160}
                  src={car.image || PLACEHOLEDER_URL}
                  alt={car.name}
                />

                <Card.Body>
                  <Card.Title className="hasilcarname">{car.name}</Card.Title>
                  <Card.Text className="hasilcarprice">
                    {formatCurrency(car.price)} / hari
                  </Card.Text>
                  <Card.Text className="hasilcari01">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Button className="detailtombol">
                <Link to={`/DetailMobil/${car.id}`}>Pilih Mobil</Link>
              </Button>
            </div>
          ))
        ) : (
          <h>loading...</h>
        )}
      </div>

      <FooterCom />
    </Container>
  );
};

export default HasilMobil;
