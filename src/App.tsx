
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ClientLayout } from './layouts';
import CartPage from './pages/Cart';
import Signup from './pages/Signup';
import DetailProduct from "./pages/Detail";
import ContactPage from "./pages/Contact";
import HomePage from './pages/Home'
import CheckoutPage from "./pages/Checkout";


function App() {
  return (
    <>
      <Routes>
        {/* home */}
      <Route path="/" element={<ClientLayout><HomePage /></ClientLayout>} />
        <Route
          path="/cart"
          element={
            <ClientLayout>
              <CartPage />
            </ClientLayout>
          }
        ></Route>
        {/* cart */}
        <Route
          path="/detail/:id"
          element={
            <ClientLayout>
              <DetailProduct />
            </ClientLayout>
          }
        ></Route>

        {/* signup */}
        <Route
          path="/contact"
          element={
            <ClientLayout>
              <ContactPage />
            </ClientLayout>
          }
        ></Route>
          {/* signup */}
          <Route
              path='/signup'
              element={
                  <ClientLayout>
                      <Signup />
                  </ClientLayout>
              }
          ></Route>

        <Route
          path="/checkout"
          element={
            <ClientLayout>
              <CheckoutPage />
            </ClientLayout>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
