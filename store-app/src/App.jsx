import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import StorePage from "./pages/StorePage";
import Cart from "./pages/Cart";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<StorePage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;