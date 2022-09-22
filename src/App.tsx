
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ClientLayout } from "./layouts";
import CartPage from "./pages/Cart";
import Login from './pages/Login'


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
          path="/login"
          element={
            <ClientLayout>
              <Login/>
            </ClientLayout>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
