import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ClientLayout } from "./layouts";
import CartPage from "./pages/Cart";
import DetailProduct from "./pages/Detail";
import ContactPage from "./pages/Contact";
import HomePage from './pages/Home'

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<ClientLayout><HomePage /></ClientLayout>} />
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
