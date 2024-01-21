import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { Input, Form, Row, Col, Label, FormGroup, Button } from "reactstrap";
import { List } from "reactstrap";
import FooterCom from "../components/FooterCom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { HEADERS } from "./constant";
import { formatCurrency } from "./helpers";
import { Card } from "react-bootstrap";

const DETAIL_URL = "https://api-car-rental.binaracademy.org/admin/car"
const PLACEHOLEDER_URL = "https://fakeimg.pl/270x160"

const DetailMobil = () => {
  const [data, setData] = useState({})
  const { id } =useParams()
  console.log(id)

  useEffect(() => {
      axios.get(`${DETAIL_URL}/${id}`, { 
        headers: HEADERS,
      }) .then(response =>{
        setData(response.data)
      })
  }, [id])

  console.log(data)

  return <Container>
    <Card className="detailcar00">
    <img width={333} height={160} src={data.image || PLACEHOLEDER_URL} alt={data.name} />
    <Card.Body className="detailcar01">
      <Card.Title className="detailcar02">{data.name}</Card.Title>
      <Card.Text className="detailcar03">Total</Card.Text>
      <Card.Text className="detailcar04">{formatCurrency(data.price)}</Card.Text>
    </Card.Body>
    </Card>  
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
        disabled={true}
    />
    </Col>
    <Col className="hasilkol01">
    <p className="hasiljudul00">Kategori</p>
    <Input
    className="hasilkol00"
    type="select"
    disabled={true}
    
    >
    
    <option hidden>
    Masukan Kapasitas Mobil
    </option>
    <option>
    1
    </option>
    <option>
    2
    </option>
    <option>
    3
    </option>
    </Input>
    </Col>
    <Col className="hasilkol01">
    <p className="hasiljudul00">Harga</p>
    <Input
    className="hasilkol00"
    type="select"
    disabled={true}
    >
    <option hidden>
    Masukan Harga Sewa per Hari
    </option>
    <option>
        1
    </option>
    <option>
        2
    </option>
    <option>
        3
    </option>
    </Input>
    </Col>
    <Col className="hasilkol01">
        <p className="hasiljudul00">Status</p>
    <Input
    className="hasilkol00"
    type="select"
    disabled={true}
    >
    <option>
        Disewa
    </option>
    </Input>
    </Col>
    <Col className="hasilkol02">
    <Button className="hasilbtn00" disabled={true}>
        Edit
        </Button>
    </Col>
    </Row>
</Form>

<div>
<List type="unstyled"
      className="detailmobil00">
  <li className="detailmobil01">
  Tentang Paket
  </li>
  <li className="detailmobil02">
  Include
  </li>

    <ul className="detailmobil04">
      <li>
      Apa saja yang termasuk dalam paket misal durasi max 12 jam
      </li>
      <li>
      Sudah termasuk bensin selama 12 jam
      </li>
      <li>
      Sudah termasuk Tiket Wisata
      </li>
      <li>
      Sudah termasuk pajak
      </li>
    </ul>
  
  <li className="detailmobil02">
  Exclude
  </li>
    <ul className="detailmobil04">
      <li>
      Tidak termasuk biaya makan sopir Rp 75.000/hari
      </li>
      <li>
      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
      </li>
      <li>
      Tidak termasuk akomodasi penginapan
      </li>
    </ul>
  
  <li className="detailmobil03">
  Refund, Reschedule, Overtime
  </li>
    <ul className="detailmobil04">
      <li>
      Tidak termasuk biaya makan sopir Rp 75.000/hari
      </li>
      <li>
      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
      </li>
      <li>
      Tidak termasuk akomodasi penginapan
      </li>
      <li>
      Tidak termasuk biaya makan sopir Rp 75.000/hari
      </li>
      <li>
      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
      </li>
      <li>
      Tidak termasuk akomodasi penginapan
      </li>
      <li>
      Tidak termasuk biaya makan sopir Rp 75.000/hari
      </li>
      <li>
      Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam
      </li>
      <li>
      Tidak termasuk akomodasi penginapan
      </li>
    </ul>
  
  </List>
  </div>

  </div>
  
  <FooterCom />
  </Container>
};

export default DetailMobil;
