import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ClientLayout } from './layouts';
import CartPage from './pages/Cart';
import Signup from './pages/Signup';
import CheckoutPage from "./pages/Checkout";
import DetailProduct from "./pages/Detail";
import ContactPage from "./pages/Contact";
import HomePage from './pages/Home'
import Signin from './pages/Signin'


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
          }/>
          <Route
          path="/signin"
          element={
            <ClientLayout>
              <Signin/>
            </ClientLayout>
          }
        />

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
