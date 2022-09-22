import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ClientLayout } from "./layouts";
import CartPage from "./pages/Cart";

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
      </Routes>
    </>
  );
}

export default App;
