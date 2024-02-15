import React from "react";
import { Button, Table } from "react-bootstrap";

const Cart = ({
  cartItems,
  removeFromCart,
  calculateTotal,
  updateQuantity,
}) => {
  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      min={1}
                    />
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <i className="bi bi-currency-rupee"></i>
                    {(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-end align-items-center">
            <p className="mr-3">Total:</p>
            <h4>
              <i class="bi bi-currency-rupee"></i>
              {calculateTotal()}
            </h4>
          </div>
          <Button variant="primary" className="mt-3">
            Checkout
          </Button>
        </>
      )}
    </div>
  );
};

export default Cart;
