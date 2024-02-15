import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const ProductDetails = ({ products, addToCart }) => {
  const { productId } = useParams();
  const [quantity] = useState(1);

  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  const handleAddToCart = () => {
    addToCart({...product,quantity});
    console.log(`Added ${quantity} ${product.name} to cart.`);
  };

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>Price: {product.price}</Card.Text>
          <Button as={Link} variant="primary" to={"/cart"} onClick={handleAddToCart}>
            Add to cart!
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default ProductDetails;
