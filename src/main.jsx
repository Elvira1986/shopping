import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { UserProvider } from "./contexts/userContext.jsx";
import { ProductsProvider } from "./contexts/productsContext.jsx";
import { CartProvider } from "./contexts/cartContext.jsx";
import "./index.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
