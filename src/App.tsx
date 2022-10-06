import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AdminLayout, ClientLayout } from "./layouts";
import CartPage from "./pages/Cart";
import Signup from "./pages/Signup";
import CheckoutPage from "./pages/Checkout";
import DetailProduct from "./pages/Detail";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";
import Signin from "./pages/Signin";
import ProductManager from "./pages/Admin/Products/ProductManager";
import ProductAdd from "./pages/Admin/Products/ProductAdd";
import PostManager from "./pages/Admin/Posts/PostManager";
import PostAdd from "./pages/Admin/Posts/PostAdd";
import CategoryPostManager from "./pages/Admin/CategoryPost/CatePostManager";
import CatePostAdd from "./pages/Admin/CategoryPost/CatePostAdd";
import CatePostEdit from "./pages/Admin/CategoryPost/CatePostEdit";
import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";
import PostEdit from "./pages/Admin/Posts/PostEdit";
import CategoryProductManager from "./pages/Admin/CategoryProduct/CateProductManager";
import CateProductAdd from "./pages/Admin/CategoryProduct/CateProductAdd";
import CateProductEdit from "./pages/Admin/CategoryProduct/CateProductEdit";
import SliderManager from "./pages/Admin/Slider/SliderManager";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ClientLayout>
              <HomePage />
            </ClientLayout>
          }
        />
        <Route
          path="/cart"
          element={
            <ClientLayout>
              <CartPage />
            </ClientLayout>
          }
        />
        <Route
          path="/signin"
          element={
            <ClientLayout>
              <Signin />
            </ClientLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <ClientLayout>
              <Signup />
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
        />
        <Route
          path="/contact"
          element={
            <ClientLayout>
              <ContactPage />
            </ClientLayout>
          }
        />
        <Route
          path="/checkout"
          element={
            <ClientLayout>
              <CheckoutPage />
            </ClientLayout>
          }
        />
        {/* Admin */}

        <Route path="/admin" element={<AdminLayout />}>
          {/* <Route index element={<AdminLayout><h1>Dashboard</h1></AdminLayout>} />
          <Route path="dashboard" element={<AdminLayout><h1>Dashboard</h1></AdminLayout>} /> */}
          <Route path="products">
            <Route index element={<ProductManager />} />
            <Route path="add" element={<ProductAdd />} />
            {/* <Route path=':id' element={<AdminLayout><ProductEdit onUpdate={onHandleUpdate} /></AdminLayout>} /> */}
          </Route>

          <Route path="category_product">
            <Route index element={<CategoryProductManager />} />
            <Route path="add" element={<CateProductAdd />} />
            <Route path=":id/edit" element={<CateProductEdit />} />
          </Route>

          <Route path="post">
            <Route index element={<PostManager />} />
            <Route path="add" element={<PostAdd />} />
            <Route path=":id/edit" element={<PostEdit />} />
          </Route>

          <Route path="category_post">
            <Route index element={<CategoryPostManager />} />
            <Route path="add" element={<CatePostAdd />} />
            <Route path=":id/edit" element={<CatePostEdit />} />
          </Route>

          <Route path="slider">
            <Route index element={<SliderManager />} />
            {/* <Route path="add" element={<CatePostAdd />} />
            <Route path=":id/edit" element={<CatePostEdit />} /> */}
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
