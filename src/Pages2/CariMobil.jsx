import React from "react";
import Hero1 from "../components/Hero1";
import FooterCom from "../components/FooterCom";
import { Input, Form, Row, Col, Button } from "reactstrap";
import { useState } from 'react';
import { Link } from "react-router-dom";
import Latar from "../assets/hitam.png"

const CariMobil = () => {
  
  

  return (
  <>
  <div>
  <Hero1 />
  <div className="carimobil00">
  <FooterCom />
  </div>
  
  </div>
  <div>
  <Form>
  <Row className="carimobil01">
    <Col className="cariform00">
    <p className="cariform01">Nama Mobil</p>
      <Input
        id="exampleText"
        placeholder="Ketik nama/tipe mobil"
        type="text"
        
      />
    </Col>
    <Col>
    <p className="cariform01">Kategori</p>
    <Input
    className="mb-1"
    type="select"
    
  >
    
    <option hidden>
      Masukan Kapasitas Mobil
    </option>
    <option>
      2-4 orang
    </option>
    <option>
      4-6 orang
    </option>
    <option>
      6-8 orang
    </option>
  </Input>
    </Col>
    <Col>
    <p className="cariform01">Harga</p>
    <Input
    className="mb-2"
    type="select"
  >
    <option hidden>
      Masukan Harga Sewa per Hari
    </option>
    <option>
      {"<rp.400.000"}
    </option>
    <option>
      Rp.400.000-Rp.600.000
    </option>
    <option>
      {"<rp.400.000"} 
    </option>
  </Input>
    </Col>
    <Col>
      <p className="cariform01">Status</p>
    <Input
    className="mb-3"
    type="select"
  >
    <option>
      Disewa
    </option>
  </Input>
    </Col>
    <Col>
    <Button><Link to ="HasilMobil">
        Cari Mobil</Link>
      </Button>
    </Col>
  </Row>
</Form>
  </div>


  
  
  
</>
  )
};

export default CariMobil;
