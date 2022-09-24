import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ClientLayout } from "./layouts";
import CartPage from "./pages/Cart";
import CheckoutPage from "./pages/Checkout";
import DetailProduct from "./pages/Detail";


function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ClientLayout>
              <h1>Home page</h1>
            </ClientLayout>
          }
        ></Route>
       <Route
          path="/cart"
          element={
            <ClientLayout>
              <CartPage />
            </ClientLayout>
          }
        ></Route>
        <Route
          path="/Checkout"
          element={
            <ClientLayout>
              <CheckoutPage />
            </ClientLayout>
          }
        ></Route>
        <Route
          path="/detail/:id"
          element={
            <ClientLayout>
              <DetailProduct />
            </ClientLayout>
          }
        ></Route>
          

      </Routes>
    </>
  );
}

export default App;
