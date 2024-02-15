import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Seller from "./components/Seller";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import { useState } from "react";
import laptop from "./assets/laptop.jpg";
import iphone from "./assets/iphone.jpg";
import samsung from "./assets/samsung.webp";
import wm from "./assets/wm.webp";
import headset from "./assets/headset.webp";
import tv from "./assets/tv.jpg";

const products = [
  {
    id: 1,
    name: "Mobile",
    description: "I phone 15 pro max",
    image: iphone,
    price: 100000,
  },
  {
    id: 2,
    name: "Laptop",
    description: "Lenovo Ideapad Slim 3",
    image: laptop,
    price: 100000,
  },
  {
    id: 3,
    name: "Samsung Mobile",
    description: "SAMSUNG Galaxy Z Flip3 5G (Cream, 128 GB)  (8 GB RAM)",
    image: samsung,
    price: 45999,
  },
  {
    id: 4,
    name: "Intex Washing Machine",
    description:
      "Intex 7.5 kg Fully Automatic Top Load Washing Machine with In-built Heater Grey  (FA75BGPT)",
    image: wm,
    price: 11390,
  },
  {
    id: 5,
    name: "SAMSUNG",
    description:
      "SAMSUNG 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
    image: tv,
    price: "45999",
  },
  {
    id: 6,
    name: "SONY",
    description:
      "SONY WH-CH520 with 50 Hrs Playtime, DSEE Upscale, Multipoint Connection/Dual Pairing Bluetooth Headset  (Black, On the Ear)",
    image: headset,
    price: "3999",
  },
];
function App() {
  const [searchInput, setSearchInput] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const addToCart = (product) => {
    const existingItems = cartItems.find((i) => i.id === product.id);
    if (existingItems) {
      setCartItems((prevItem) =>
        prevItem.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <Router>
      <NavBar
        handleSearchInput={handleSearchInput}
        searchInput={searchInput}
        cartItems={cartItems}
      />
      <Routes>
        <Route
          path="/"
          element={
            <ProductList searchInput={searchInput} products={products} />
          }
        />
        <Route
          path="product/:productId"
          element={
            <ProductDetails
              products={products}
              addToCart={addToCart}
              quantity={quantity}
            />
          }
        />
        <Route
          path="cart"
          element={
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
              calculateTotal={calculateTotal}
            />
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="seller" element={<Seller />} />
      </Routes>
    </Router>
  );
}

export default App;
