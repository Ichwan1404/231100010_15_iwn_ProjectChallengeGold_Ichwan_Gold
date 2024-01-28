import { Container } from "react-bootstrap";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testipoto1 from "../assets/Orang1.png";
import Testipoto2 from "../assets/Orang2.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Testipoto3 from "../assets/Star5.png";
import FaqPage from "./FaqPage";

import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

function SampleNextArrow({ onClick }) {
  return (
    <div className="arrow arrow-right" onClick={onClick}>
      <IoIosArrowDroprightCircle />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className="arrow arrow-left" onClick={onClick}>
      <IoIosArrowDropleftCircle />
    </div>
  );
}

function TestimonialPage() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="testimonialpage">
        <Container>
          <div className="testiwrap-01">
            <div className="sewaTitle-04">Testimonial</div>
            <div className="sewaDesc-04">
              Berbagai review positif dari para pelanggan kami
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Slider {...settings}>
          <div className="testicard">
            <div className="starwrap">
              <img src={Testipoto3} className="bintang" />
              <img src={Testipoto3} className="bintang" />
              <img src={Testipoto3} className="bintang" />
              <img src={Testipoto3} className="bintang" />
              <img src={Testipoto3} className="bintang" />
            </div>
            <img src={Testipoto1} className="poto" />
            <div className="card-body"></div>
            <h1 className="testih1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              non, hic dolore fugiat eum consectetur modi dolores illo
              consequatur in adipisci quo nam praesentium sit repellat ad
              voluptatibus molestias.
            </h1>
            <p className="testip1">John Dee 32, Bromo</p>
          </div>

          <div>
            <div className="starwrap">
              <img src={Testipoto3} className="bintang" />
              <img src={Testipoto3} className="bintang" />
              <img src={Testipoto3} className="bintang" />
              <img src={Testipoto3} className="bintang" />
              <img src={Testipoto3} className="bintang" />
            </div>
            <img src={Testipoto2} className="poto" />
            <div className="card-body"></div>
            <h1 className="testih1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              non, hic dolore fugiat eum consectetur modi dolores illo
              consequatur in adipisci quo nam praesentium sit repellat ad
              voluptatibus molestias.
            </h1>
            <p className="testip1">John Dee 32, Bromo</p>
          </div>

          <div>
            <div className="starwrap">
              <img src={Testipoto3} className="bintang" />
              <img src={Testipoto3} className="bintang" />
              <img src={Testipoto3} className="bintang" />
              <img src={Testipoto3} className="bintang" />
              <img src={Testipoto3} className="bintang" />
            </div>
            <img src={Testipoto1} className="poto" />
            <div className="card-body"></div>
            <h1 className="testih1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              non, hic dolore fugiat eum consectetur modi dolores illo
              consequatur in adipisci quo nam praesentium sit repellat ad
              voluptatibus molestias.
            </h1>
            <p className="testip1">John Dee 32, Bromo</p>
          </div>

          <div>
            <div className="starwrap">
              <img src={Testipoto3} className="bintang" />
              <img src={Testipoto3} className="bintang" />
              <img src={Testipoto3} className="bintang" />
              <img src={Testipoto3} className="bintang" />
              <img src={Testipoto3} className="bintang" />
            </div>
            <img src={Testipoto2} className="poto" />
            <div className="card-body"></div>
            <h1 className="testih1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              non, hic dolore fugiat eum consectetur modi dolores illo
              consequatur in adipisci quo nam praesentium sit repellat ad
              voluptatibus molestias.
            </h1>
            <p className="testip1">John Dee 32, Bromo</p>
          </div>

          <div>
            <div className="starwrap">
              <img src={Testipoto3} className="bintang" />
              <img src={Testipoto3} className="bintang" />
              <img src={Testipoto3} className="bintang" />
              <img src={Testipoto3} className="bintang" />
              <img src={Testipoto3} className="bintang" />
            </div>
            <img src={Testipoto1} className="poto" />
            <div className="card-body"></div>
            <h1 className="testih1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              non, hic dolore fugiat eum consectetur modi dolores illo
              consequatur in adipisci quo nam praesentium sit repellat ad
              voluptatibus molestias.
            </h1>
            <p className="testip1">John Dee 32, Bromo</p>
          </div>

          <div>
            <div className="starwrap">
              <img src={Testipoto3} className="bintang" />
              <img src={Testipoto3} className="bintang" />
              <img src={Testipoto3} className="bintang" />
              <img src={Testipoto3} className="bintang" />
              <img src={Testipoto3} className="bintang" />
            </div>
            <img src={Testipoto2} className="poto" />
            <div className="card-body"></div>
            <h1 className="testih1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              non, hic dolore fugiat eum consectetur modi dolores illo
              consequatur in adipisci quo nam praesentium sit repellat ad
              voluptatibus molestias.
            </h1>
            <p className="testip1">John Dee 32, Bromo</p>
          </div>
        </Slider>
      </div>

      <Container>
        <Card className="textcenter">
          <Card.Body>
            <Card.Title className="testibluetitle">
              Sewa Mobil di (Lokasimu) Sekarang
            </Card.Title>
            <Card.Text className="testibluetext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
              <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
            <Button variant="primary" className="testimonialbtn">
              Mulai Sewa Mobil
            </Button>
          </Card.Body>
        </Card>
      </Container>
      <FaqPage />
    </>
  );
}

export default TestimonialPage;
