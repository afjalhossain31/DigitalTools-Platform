import "./App.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Pricing from "./components/Pricing/Pricing";
import AllProducts from "./components/Products/AllProducts";
import ReadyTransform from "./components/ReadyTransform/ReadyTransform";
import Stats from "./components/Stats/Stats";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    let added = false;
    setCartItems((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev;
      }
      added = true;
      return [...prev, product];
    });

    if (added) {
      toast.success(`${product.name} added to cart`);
    } else {
      toast.info(`${product.name} is already in your cart`);
    }
  };

  const handleRemoveFromCart = (itemOrId) => {
    const id = typeof itemOrId === "object" ? itemOrId.id : itemOrId;
    const removedItem = cartItems.find((item) => item.id === id);

    setCartItems((prev) => prev.filter((item) => item.id !== id));

    if (removedItem) {
      toast.warn(`${removedItem.name} removed from cart`);
    }
  };

  const handleClearCart = () => {
    if (cartItems.length === 0) {
      toast.info("Your cart is already empty");
      return;
    }

    setCartItems([]);
    toast.success("Proceeding to checkout. Cart cleared successfully");
  };

  return (
    <>
      <div>
        <NavBar cartCount={cartItems.length} />
        <Hero />
        <Stats />

        <AllProducts
          cartItems={cartItems}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          onClearCart={handleClearCart}
        />

        <GetStarted />

        <Pricing />

        <ReadyTransform />

        <Footer />

        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
}

export default App;
