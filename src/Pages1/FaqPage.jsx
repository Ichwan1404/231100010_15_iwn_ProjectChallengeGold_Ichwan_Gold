import React from "react";
import { Container } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import Fotgambar1  from "../assets/Fi_facebook.png";
import Fotgambar2 from "../assets/fi_instagram.png";
import Fotgambar3 from "../assets/fi_mail.png";
import Fotgambar4 from "../assets/fi_twitter.png";
import Fotgambar5 from "../assets/fi_twitch.png";
import FooterCom from "../components/FooterCom";



const FaqPage = () => {
  return  (
    
    <>
    <Container className="faqh1">
      <div className="faq1">
        Frequently Asked Question
      </div>
      <p className="faqdes">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </Container>
    <Container className="faqh2">
        <Accordion defaultActiveKey="0">
          <div className="lolo">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Apa saja syarat yang dibutuhkan?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </div>
          <div className="lolo">
            <Accordion.Item eventKey="1">
              <Accordion.Header>Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </div>
          <div className="lolo">
            <Accordion.Item eventKey="2">
              <Accordion.Header>Berapa hari sebelumnya sabaiknya booking sewa mobil?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </div>
          <div className="lolo">
            <Accordion.Item eventKey="3">
              <Accordion.Header>Apakah Ada biaya antar-jemput?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </div>
          <div className="lolo">
            <Accordion.Item eventKey="4">
              <Accordion.Header>Bagaimana jika terjadi kecelakaan</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
                </Accordion.Item>
            </div>
        </Accordion>
      </Container>
    <FooterCom/>
      </>
      );
};

export default FaqPage;
