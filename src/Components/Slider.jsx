import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

const Slider = (props) => {
  // console.log(props.images)
  return (
    <Container>
      <Row>
        <Col lg={12}>
          <Carousel className="heroCarousel">
            {props.images.map((img) => {
              return (
                <Carousel.Item key={img}>
                  <img className="d-block w-100" src={img} alt="" />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Slider;
