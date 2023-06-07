import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import List from "react-bootstrap/ListGroup";

const CategoryMenu = () => {
  return (
    <Navbar className="category-navbar-box d-none d-lg-block mb-3">
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="category-navbar" navbarScroll>
            <NavDropdown
              title="All Categories"
              className="main-dropdown"
              id="navbarScrollingDropdown"
            >
              <Container fluid>
                <Row>
                  <Col lg={12}>
                    <div className="menu-list-box">
                      <List
                        as="ul"
                        className="custom-list p-0 list-unstyled border-0"
                      >
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <h5 className="m-0">Bikes</h5>
                        </List.Item>
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <a href="http://">Motorcycles</a>
                        </List.Item>
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <a href="http://">Bicycles</a>
                        </List.Item>
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <a href="http://">Scooters</a>
                        </List.Item>
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <a href="http://">ATV & Quads</a>
                        </List.Item>
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <a href="http://">Bikes Accessories</a>
                        </List.Item>
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <a href="http://">Spare Parts</a>
                        </List.Item>
                      </List>
                      <List
                        as="ul"
                        className="custom-list p-0 list-unstyled border-0"
                      >
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <h5 className="m-0">Mobiles</h5>
                        </List.Item>
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <a href="http://">Mobile Phones</a>
                        </List.Item>
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <a href="http://">Smart Watches</a>
                        </List.Item>
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <a href="http://">Tablets</a>
                        </List.Item>
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <a href="http://">Accessories</a>
                        </List.Item>
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <a href="http://">Spare Parts</a>
                        </List.Item>
                      </List>
                      <List
                        as="ul"
                        className="custom-list p-0 list-unstyled border-0"
                      >
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <h5 className="m-0">Electronics & Home Appliances</h5>
                        </List.Item>
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <a href="http://">Computers & Accessories</a>
                        </List.Item>
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <a href="http://">TV - Video - Audio</a>
                        </List.Item>
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <a href="http://">AC & Coolers</a>
                        </List.Item>
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <a href="http://">Other Home Appliances</a>
                        </List.Item>
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <a href="http://">
                            Generators, UPS & Power Solutions
                          </a>
                        </List.Item>
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <a href="http://">Cameras & Accessories</a>
                        </List.Item>
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <a href="http://">Kitchen Appliances</a>
                        </List.Item>
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <a href="http://">Fridges & Freezers</a>
                        </List.Item>
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <a href="http://">Games & Entertainment</a>
                        </List.Item>
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <a href="http://">Washing Machines & Dryers</a>
                        </List.Item>
                      </List>
                      <List
                        as="ul"
                        className="custom-list p-0 list-unstyled border-0"
                      >
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <h5 className="m-0">Vehicles</h5>
                        </List.Item>
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <a href="http://">Cars</a>
                        </List.Item>
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <a href="http://">Cars Accessories</a>
                        </List.Item>
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <a href="http://">Spare Parts</a>
                        </List.Item>
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <a href="http://">Buses, Vans & Trucks</a>
                        </List.Item>
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <a href="http://">Rickshaw & Chingchi</a>
                        </List.Item>
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <a href="http://">Tractors & Trailers</a>
                        </List.Item>
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <a href="http://">Cars on Installments</a>
                        </List.Item>
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <a href="http://">Other Vehicles</a>
                        </List.Item>
                        <List.Item as="li" className="border-0 px-0 py-1">
                          <a href="http://">Boats</a>
                        </List.Item>
                      </List>
                    </div>
                  </Col>
                </Row>
              </Container>
            </NavDropdown>
            <Nav.Link href="#">Mobile Phones</Nav.Link>
            <Nav.Link href="#">Cars</Nav.Link>
            <Nav.Link href="#">Motorcycles</Nav.Link>
            <Nav.Link href="#">Land & Plots</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CategoryMenu;
