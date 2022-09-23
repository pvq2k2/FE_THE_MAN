import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ClientLayout } from "./layouts";
import CartPage from "./pages/Cart";
import DetailProduct from "./pages/Detail";
import ContactPage from "./pages/Contact";

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
          path="/detail/:id"
          element={
            <ClientLayout>
              <DetailProduct />
            </ClientLayout>
          }
        ></Route>

        <Route
          path="/contact"
          element={
            <ClientLayout>
              <ContactPage />
            </ClientLayout>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
