import React from "react";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <Button
      type="button"
      variant="outline-secondary"
      className="arrow-btn arrow-next"
      onClick={onClick}
    >
      next
    </Button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <Button
      type="button"
      variant="outline-secondary"
      className="arrow-btn arrow-prev"
      onClick={onClick}
    >
      prev
    </Button>
  );
}

const ProductSlider = (props) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // nextArrow: $(.arrow-next),
    // prevArrow:  $(.arrow-prev),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Row>
        <Col lg={12}>
          <div className="product-slider mt-5">
            <div className="d-flex align-items-center justify-content-between gap-3">
              <h1 className="title-lg">More on recent ads</h1>
              <a href="http://">view more</a>
            </div>
            <Slider {...settings}>
              {props.images.map((products) => {
                return (
                  <article key={products.image} className="product-card">
                    <a href="//" className="product-img">
                      <img src={products.image} alt="" className="img-fluid" />
                    </a>
                    <a
                      href="//"
                      className="card-body p-2 d-block text-decoration-none"
                    >
                      <p className="product-name">{products.name}</p>
                      <h4 className="product-price">{products.price}</h4>
                      <small className="product-dateposted text-black-50 text-capitalize">
                        lahore, {products.date}
                      </small>
                    </a>
                  </article>
                );
              })}
            </Slider>
            {/* <div class="custom-slick-arrows d-md-flex align-items-center justify-content-center gap-4 mt-4 d-none">
              <NextArrow />
              <PrevArrow />
            </div> */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductSlider;
