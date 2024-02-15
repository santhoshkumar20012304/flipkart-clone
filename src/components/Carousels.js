import React from "react";
import { Container, Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import caro1 from "../assets/caro1.webp";
import caro2 from "../assets/caro2.webp";
import caro3 from "../assets/caro3.webp";
import caro4 from "../assets/caro4.webp";

const Carousels = () => {
  return (
    <Container fluid>
      <Carousel interval={1500}>
        <Carousel.Item>
          <Image src={caro1} fluid />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={caro2} fluid />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={caro3} fluid />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={caro4} fluid />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Carousels;
