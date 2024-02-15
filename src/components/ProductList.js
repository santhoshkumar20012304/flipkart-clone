import React, { useState } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousels from "./Carousels";

const ProductList = ({ searchInput, products }) => {
  const [items] = useState(products);
  const filteredProducts = items.filter((product) => {
    return product.name.toLowerCase().includes(searchInput.toLowerCase());
  });
  return (
    <Container fluid>
      <Carousels />
      <h1>Products</h1>
      {searchInput ? (
        <>
          {filteredProducts.length === 0 && <p> Products not Found!</p>}
          <Row className="gap-2">
          {filteredProducts.map((product) => (
              <Card key={product.id} style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ height: "13rem" }}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>

                  <Link to={`/product/${product.id}`}>
                    <Button variant="primary">ViewDetails</Button>
                  </Link>
                </Card.Body>
              </Card>
          ))}
            </Row>
        </>
      ) : (
        <Row className="gap-2">
          {products.map((product) => (
            <Card
              key={product.id}
              style={{ width: "18rem", position: "relative" }}
            >
              <Card.Img
                variant="top"
                src={product.image}
                style={{ height: "13rem" }}
              />
              <Card.Body style={{ display: "flex", flexDirection: "column" }}>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text style={{ marginTop: "auto" }}>
                  <Link to={`/product/${product.id}`}>
                    <Button variant="primary" className="">
                      ViewDetails
                    </Button>
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      )}
    </Container>
  );
};
export default ProductList;
