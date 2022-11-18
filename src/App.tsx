import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AdminLayout, ClientLayout } from "./layouts";
import CartPage from "./pages/Carts";
import Signup from "./pages/Signup";
import CheckoutPage from "./pages/Checkout";
import DetailProduct from "./pages/Detail";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";
import Signin from "./pages/Signin";
import ForgetPassword from "./pages/ForgetPassword";
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
import SliderAdd from "./pages/Admin/Slider/SliderAdd";
import SliderEdit from "./pages/Admin/Slider/SliderEdit";
import ProductEdit from "./pages/Admin/Products/ProductEdit";
import CartPostManager from "./pages/Admin/Carts/CartManager";
import CartUpdate from "./pages/Admin/Carts/CartUpdate";
import UserManager from "./pages/Admin/User/UserManager";
import UserAdd from "./pages/Admin/User/UserAdd";
import UserEdit from "./pages/Admin/User/UserEdit";
import DetailPost from "./pages/DetailPost";
import EmailVerify from "./components/EmailVerify";
import NotFound from "./components/NotFound";
import PostPage from "./pages/Post";
import PrivateRouter from "./components/PrivatrRouter";
import DetailCateProduct from "./pages/DetailCateProduct";
import OrderStatus from "./pages/OrderStatus";
import Dashboard from "./pages/Admin/Dashboard";
import ConfirmPassword from "./pages/ConfirmPassword";
import AccountPage from "./pages/AccountPage";
import Editaccount from "./pages/AccountPage/Editaccount";
import ThankkiuPage from "./pages/Thankkiu_page";
import Scoll from "./components/ScrollButton";
import ContactManager from "./pages/Admin/Contact/ContactManager";
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
          path="/order"
          element={
            <ClientLayout>
              <OrderStatus />
            </ClientLayout>
          }
        />
        <Route
          path="/thankkiu"
          element={
            <ClientLayout>
              <ThankkiuPage />
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
        <Route path="/users/verify/:id" element={<EmailVerify />} />
        <Route
          path="/users/forget-password"
          element={
            <ClientLayout>
              <ForgetPassword />
            </ClientLayout>
          }
        />
        <Route
          path="/user/reset-password"
          element={
            <ClientLayout>
              <ConfirmPassword />
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
          path="/post"
          element={
            <ClientLayout>
              <PostPage />
            </ClientLayout>
          }
        />
        <Route
          path="/post/:id"
          element={
            <ClientLayout>
              <PostPage />
            </ClientLayout>
          }
        />
        <Route
          path="/detail/:id/post"
          element={
            <ClientLayout>
              <DetailPost />
            </ClientLayout>
          }
        />
        <Route
          path="/detail/cate/:id/product"
          element={
            <ClientLayout>
              <DetailCateProduct />
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
        <Route
          path="/account"
          element={
            <ClientLayout>
              <AccountPage />
            </ClientLayout>
          }
        />
        <Route
          path="/editaccount/:id"
          element={
            <ClientLayout>
              <Editaccount />
            </ClientLayout>
          }
        />
        <Route path="/*" element={<NotFound />} />
        {/* Admin */}

        <Route
          path="/admin"
          element={
            <PrivateRouter>
              <AdminLayout />
            </PrivateRouter>
          }
        >
          {/* <Route index element={<AdminLayout><h1>Dashboard</h1></AdminLayout>} />*/}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products">
            <Route index element={<ProductManager />} />
            <Route path="add" element={<ProductAdd />} />
            <Route path=":id/edit" element={<ProductEdit />} />
            {/* <Route path=':id' element={<AdminLayout><ProductEdit onUpdate={onHandleUpdate} /></AdminLayout>} /> */}
          </Route>
          <Route path="carts">
            <Route index element={<CartPostManager />} />
            <Route path="update/:id" element={<CartUpdate />} />
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
            <Route path="add" element={<SliderAdd />} />
            <Route path=":id/edit" element={<SliderEdit />} />
          </Route>

          <Route path="users">
            <Route index element={<UserManager />} />
            <Route path="add" element={<UserAdd />} />
            <Route path=":id/edit" element={<UserEdit />} />
          </Route>

          <Route path="contact">
            <Route index element={<ContactManager />} />
            {/* <Route path="add" element={<UserAdd />} />
            <Route path=":id/edit" element={<UserEdit />} /> */}
          </Route>
        </Route>
      </Routes>
      <Scoll />
    </>
  );
}

export default App;
