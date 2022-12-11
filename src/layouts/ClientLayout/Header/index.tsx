import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineBars, AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../../models/User";
import { signout } from "../../../redux/slices/authSlice";
import styles from "./Header.module.css";
import { readCart } from "../../../redux/slices/cartSlice";
import { IoSearchOutline } from "react-icons/io5";
import {
  CiSearch,
  CiShoppingCart,
  CiUser,
  FaRegUser,
  GrCart,
} from "react-icons/all";
import { SubmitHandler, useForm } from "react-hook-form";
import { search } from "../../../redux/slices/productSlice";
type Props = {};
type Inputs = {
  name: String;
};
const ClientHeader = (props: Props) => {
  const navBar = useRef<HTMLDivElement>(null);
  const cart = useSelector((state: any) => state.carts);
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState<Boolean>(false);
  useEffect(() => {
    const navBarElement = navBar.current!;
    if (showNav) {
      navBarElement.style.left = "0px";
    } else {
      navBarElement.style.left = "-100%";
    }
  }, [showNav]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  let isLogged = useSelector((state: any) => state.auth.isLogged);
  let currentUser = useSelector((state: any) => state.auth.currentUser) as User;

  if (localStorage.getItem("user")) {
    (isLogged = true),
      (currentUser = JSON.parse(localStorage.getItem("user") || "{}"));
  }
  const dispatch = useDispatch<any>();
  const handleSignout = async () => {
    await dispatch(signout());
  };
  useEffect(() => {
    (async () => {
      if (currentUser?.users?.id) {
        await dispatch(readCart(currentUser?.users?.id));
      }
    })();
  }, [dispatch]);

  const onSubmit = async (values: Inputs) => {
    navigate(`/search/${values?.name}`);
  };

  return (
    <header className={styles.header}>
      <div className={styles.icon_bar} onClick={() => setShowNav(!showNav)}>
        <AiOutlineBars />
      </div>
      <nav ref={navBar} className={styles.nav_bar}>
        <div
          className={styles.overlay}
          onClick={() => setShowNav(!showNav)}
        ></div>
        <div className={styles.menu}>
          <li className={styles.item}>
            <Link to={"/"}>Trang chủ</Link>
            <div className={styles.line}></div>
          </li>
          <li className={styles.item}>
            <Link to={""}>Quần</Link>
            <div className={styles.line}></div>
          </li>
          <li className={styles.item}>
            <Link to={""}>Phụ Kiện</Link>
            <div className={styles.line}></div>
          </li>
          <li className={styles.item}>
            <Link to={""}>Giới Thiệu</Link>
            <div className={styles.line}></div>
          </li>
          <li className={styles.item}>
            <Link to={"/contact"}>Liên Hệ</Link>
            <div className={styles.line}></div>
          </li>
        </div>
      </nav>

      <div className={styles.nav_bar_desktop}>
        <ul className={styles.menu}>
          <li className={styles.item}>
            <Link to={"/"} className={styles.itemLink}>
              Trang chủ
            </Link>
            <div className={styles.line}></div>
          </li>
          <li className={`${styles.item} ${styles.itemSubNav}`}>
            <Link to={"/products"} className={styles.itemLink}>
              Sản phẩm
            </Link>
            <div className={styles.line}></div>
            {/* <SubNav /> */}
          </li>
          {/* <li className={`${styles.item} ${styles.itemSubNav}`}>
            <Link to={""} className={styles.itemLink}>
              Phụ Kiện
            </Link>
            <div className={styles.line}></div>
            <SubNav />
          </li> */}
          <li className={styles.item}>
            <Link to={""} className={styles.itemLink}>
              Giới Thiệu
            </Link>
            <div className={styles.line}></div>
          </li>
          <li className={styles.item}>
            <Link to={"/contact"} className={styles.itemLink}>
              Liên Hệ
            </Link>
            <div className={styles.line}></div>
          </li>
        </ul>
      </div>

      <Link to={"/"} className={styles.logo}>
        <img
          src="https://i.postimg.cc/8FRzkGHk/logo.png"
          className={styles.img_logo}
          alt="logo"
        />
      </Link>

      <div className={styles.box_icon}>
        <div className={styles.search}>
          <div className={styles.icon}>
            <CiSearch />
          </div>
          <div className={styles.search_input}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                {...register("name")}
                placeholder="Tìm kiếm sản phẩm...."
              />
              <button type="submit" className={styles.ico}>
                <IoSearchOutline />
              </button>
            </form>
          </div>
        </div>

        <div className={styles.box_user}>
          <div className={styles.icon}>
            <CiUser />
          </div>

          <div className={styles.modal_user}>
            {isLogged && currentUser ? (
              <div>
                <div className={styles.hello}>
                  <span>Xin chào!</span>
                  <h3>{currentUser?.users?.fullname}</h3>
                </div>
                <Link to={"/account"}>
                  <div className={styles.item_user}>Thông tin tài khoản</div>
                </Link>

                {currentUser?.users?.role == 1 ? (
                  <Link to={"/admin/dashboard"}>
                    <div className={styles.item_user}>Trang quản trị</div>
                  </Link>
                ) : null}
                <Link to={"/order"}>
                  <div className={styles.item_user}>Đơn hàng</div>
                </Link>
                <div
                  className={styles.item_user}
                  onClick={() => handleSignout()}
                >
                  Đăng xuất
                </div>
              </div>
            ) : (
              <div>
                <Link to={"/signin"}>
                  <div className={styles.item_user}>Đăng nhập</div>
                </Link>
                <Link to={"/signup"}>
                  <div className={styles.item_user}>Đăng ký</div>
                </Link>
              </div>
            )}
          </div>
        </div>

        {isLogged && currentUser ? (
          <div className={styles.box_cart}>
            <Link to={"/cart"}>
              <div className={styles.icon2}>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 511 511"
                  className="w-6 h-6"
                  xmlSpace="preserve"
                >
                  <path d="M445.663,469.921l-14.362-359.041C430.968,102.537,424.165,96,415.814,96H351v-0.5C351,42.841,308.159,0,255.5,0  S160,42.841,160,95.5V96H95.187c-8.351,0-15.153,6.536-15.488,14.88L65.337,469.921c-0.434,10.842,3.468,21.122,10.985,28.946  C83.84,506.691,93.956,511,104.806,511h301.389c10.851,0,20.966-4.309,28.484-12.133  C442.195,491.042,446.097,480.763,445.663,469.921z M175,95.5c0-44.388,36.112-80.5,80.5-80.5S336,51.112,336,95.5V96H175V95.5z   M423.862,488.474c-4.663,4.853-10.938,7.526-17.667,7.526H104.806c-6.73,0-13.004-2.672-17.667-7.525  c-4.663-4.853-7.083-11.229-6.813-17.954L94.687,111.48c0.011-0.27,0.23-0.48,0.5-0.48H160v48.5c0,4.142,3.358,7.5,7.5,7.5  s7.5-3.358,7.5-7.5V111h161v48.5c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5V111h64.814c0.269,0,0.488,0.21,0.499,0.48  l14.362,359.041C430.944,477.245,428.524,483.621,423.862,488.474z" />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                </svg> */}
                <CiShoppingCart />
              </div>
            </Link>
            <div className={styles.count_cart}>
              {cart?.carts?.products ? cart.carts.products.length : 0}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

const SubNav = () => {
  return (
    <div className={styles.subNav}>
      <div className={styles.rowSubNav}>
        <div className={styles.colSubNav}>
          <h3>Áo</h3>
          <ul>
            <li className={styles.liSub}>
              <Link to="#">Áo Sơ Mi Trắng</Link>
            </li>
            <li className={styles.liSub}>
              <Link to="#">Áo Sơ Mi</Link>
            </li>
            <li className={styles.liSub}>
              <Link to="#">Áo Jacket</Link>
            </li>
            <li className={styles.liSub}>
              <Link to="#">Áo Blazer</Link>
            </li>
            <li className={styles.liSub}>
              <Link to="#">Áo Len</Link>
            </li>
            <li className={styles.liSub}>
              <Link to="#">Áo Veston</Link>
            </li>
            <li className={styles.liSub}>
              <Link to="#">Áo Polo</Link>
            </li>
          </ul>
        </div>

        <div className={styles.colSubNav}>
          <h3>Áo</h3>
          <ul>
            <li className={styles.liSub}>
              <Link to="#">Áo Sơ Mi Trắng</Link>
            </li>
            <li className={styles.liSub}>
              <Link to="#">Áo Sơ Mi</Link>
            </li>
            <li className={styles.liSub}>
              <Link to="#">Áo Jacket</Link>
            </li>
            <li className={styles.liSub}>
              <Link to="#">Áo Blazer</Link>
            </li>
            <li className={styles.liSub}>
              <Link to="#">Áo Len</Link>
            </li>
            <li className={styles.liSub}>
              <Link to="#">Áo Veston</Link>
            </li>
            <li className={styles.liSub}>
              <Link to="#">Áo Polo</Link>
            </li>
          </ul>
        </div>

        <div className={styles.colSubNav}>
          <h3>Áo</h3>
          <ul>
            <li className={styles.liSub}>
              <Link to="#">Áo Sơ Mi Trắng</Link>
            </li>
            <li className={styles.liSub}>
              <Link to="#">Áo Sơ Mi</Link>
            </li>
            <li className={styles.liSub}>
              <Link to="#">Áo Jacket</Link>
            </li>
            <li className={styles.liSub}>
              <Link to="#">Áo Blazer</Link>
            </li>
            <li className={styles.liSub}>
              <Link to="#">Áo Len</Link>
            </li>
            <li className={styles.liSub}>
              <Link to="#">Áo Veston</Link>
            </li>
            <li className={styles.liSub}>
              <Link to="#">Áo Polo</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClientHeader;
