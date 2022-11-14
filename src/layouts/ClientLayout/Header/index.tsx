import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../../models/User";
import { signout } from "../../../redux/slices/authSlice";
import styles from "./Header.module.css";
import { readCart } from "../../../redux/slices/cartSlice";
type Props = {};

const ClientHeader = (props: Props) => {
  const navBar = useRef<HTMLDivElement>(null);
  const cart = useSelector((state: any) => state.carts);

  const [showNav, setShowNav] = useState<Boolean>(false);
  useEffect(() => {
    const navBarElement = navBar.current!;
    if (showNav) {
      navBarElement.style.left = "0px";
    } else {
      navBarElement.style.left = "-100%";
    }
  }, [showNav]);
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
            <Link to={"/"}>Áo</Link>
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
            <Link to={""}>Liên Hệ</Link>
            <div className={styles.line}></div>
          </li>
        </div>
      </nav>

      <div className={styles.nav_bar_desktop}>
        <ul className={styles.menu}>
          <li className={styles.item}>
            <Link to={"/"}>Áo</Link>
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
            <Link to={""}>Liên Hệ</Link>
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
        <div className="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 52.966 52.966"
            className="w-6 h-6"
            xmlSpace="preserve"
          >
            <path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21  c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279  C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19  S32.459,40,21.983,40z" />
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </div>

        <div className={styles.box_user}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 55 55"
            className="w-6 h-6"
            xmlSpace="preserve"
          >
            <path d="M55,27.5C55,12.337,42.663,0,27.5,0S0,12.337,0,27.5c0,8.009,3.444,15.228,8.926,20.258l-0.026,0.023l0.892,0.752  c0.058,0.049,0.121,0.089,0.179,0.137c0.474,0.393,0.965,0.766,1.465,1.127c0.162,0.117,0.324,0.234,0.489,0.348  c0.534,0.368,1.082,0.717,1.642,1.048c0.122,0.072,0.245,0.142,0.368,0.212c0.613,0.349,1.239,0.678,1.88,0.98  c0.047,0.022,0.095,0.042,0.142,0.064c2.089,0.971,4.319,1.684,6.651,2.105c0.061,0.011,0.122,0.022,0.184,0.033  c0.724,0.125,1.456,0.225,2.197,0.292c0.09,0.008,0.18,0.013,0.271,0.021C25.998,54.961,26.744,55,27.5,55  c0.749,0,1.488-0.039,2.222-0.098c0.093-0.008,0.186-0.013,0.279-0.021c0.735-0.067,1.461-0.164,2.178-0.287  c0.062-0.011,0.125-0.022,0.187-0.034c2.297-0.412,4.495-1.109,6.557-2.055c0.076-0.035,0.153-0.068,0.229-0.104  c0.617-0.29,1.22-0.603,1.811-0.936c0.147-0.083,0.293-0.167,0.439-0.253c0.538-0.317,1.067-0.648,1.581-1  c0.185-0.126,0.366-0.259,0.549-0.391c0.439-0.316,0.87-0.642,1.289-0.983c0.093-0.075,0.193-0.14,0.284-0.217l0.915-0.764  l-0.027-0.023C51.523,42.802,55,35.55,55,27.5z M2,27.5C2,13.439,13.439,2,27.5,2S53,13.439,53,27.5  c0,7.577-3.325,14.389-8.589,19.063c-0.294-0.203-0.59-0.385-0.893-0.537l-8.467-4.233c-0.76-0.38-1.232-1.144-1.232-1.993v-2.957  c0.196-0.242,0.403-0.516,0.617-0.817c1.096-1.548,1.975-3.27,2.616-5.123c1.267-0.602,2.085-1.864,2.085-3.289v-3.545  c0-0.867-0.318-1.708-0.887-2.369v-4.667c0.052-0.519,0.236-3.448-1.883-5.864C34.524,9.065,31.541,8,27.5,8  s-7.024,1.065-8.867,3.168c-2.119,2.416-1.935,5.345-1.883,5.864v4.667c-0.568,0.661-0.887,1.502-0.887,2.369v3.545  c0,1.101,0.494,2.128,1.34,2.821c0.81,3.173,2.477,5.575,3.093,6.389v2.894c0,0.816-0.445,1.566-1.162,1.958l-7.907,4.313  c-0.252,0.137-0.502,0.297-0.752,0.476C5.276,41.792,2,35.022,2,27.5z M42.459,48.132c-0.35,0.254-0.706,0.5-1.067,0.735  c-0.166,0.108-0.331,0.216-0.5,0.321c-0.472,0.292-0.952,0.57-1.442,0.83c-0.108,0.057-0.217,0.111-0.326,0.167  c-1.126,0.577-2.291,1.073-3.488,1.476c-0.042,0.014-0.084,0.029-0.127,0.043c-0.627,0.208-1.262,0.393-1.904,0.552  c-0.002,0-0.004,0.001-0.006,0.001c-0.648,0.16-1.304,0.293-1.964,0.402c-0.018,0.003-0.036,0.007-0.054,0.01  c-0.621,0.101-1.247,0.174-1.875,0.229c-0.111,0.01-0.222,0.017-0.334,0.025C28.751,52.97,28.127,53,27.5,53  c-0.634,0-1.266-0.031-1.895-0.078c-0.109-0.008-0.218-0.015-0.326-0.025c-0.634-0.056-1.265-0.131-1.89-0.233  c-0.028-0.005-0.056-0.01-0.084-0.015c-1.322-0.221-2.623-0.546-3.89-0.971c-0.039-0.013-0.079-0.027-0.118-0.04  c-0.629-0.214-1.251-0.451-1.862-0.713c-0.004-0.002-0.009-0.004-0.013-0.006c-0.578-0.249-1.145-0.525-1.705-0.816  c-0.073-0.038-0.147-0.074-0.219-0.113c-0.511-0.273-1.011-0.568-1.504-0.876c-0.146-0.092-0.291-0.185-0.435-0.279  c-0.454-0.297-0.902-0.606-1.338-0.933c-0.045-0.034-0.088-0.07-0.133-0.104c0.032-0.018,0.064-0.036,0.096-0.054l7.907-4.313  c1.36-0.742,2.205-2.165,2.205-3.714l-0.001-3.602l-0.23-0.278c-0.022-0.025-2.184-2.655-3.001-6.216l-0.091-0.396l-0.341-0.221  c-0.481-0.311-0.769-0.831-0.769-1.392v-3.545c0-0.465,0.197-0.898,0.557-1.223l0.33-0.298v-5.57l-0.009-0.131  c-0.003-0.024-0.298-2.429,1.396-4.36C21.583,10.837,24.061,10,27.5,10c3.426,0,5.896,0.83,7.346,2.466  c1.692,1.911,1.415,4.361,1.413,4.381l-0.009,5.701l0.33,0.298c0.359,0.324,0.557,0.758,0.557,1.223v3.545  c0,0.713-0.485,1.36-1.181,1.575l-0.497,0.153l-0.16,0.495c-0.59,1.833-1.43,3.526-2.496,5.032c-0.262,0.37-0.517,0.698-0.736,0.949  l-0.248,0.283V39.8c0,1.612,0.896,3.062,2.338,3.782l8.467,4.233c0.054,0.027,0.107,0.055,0.16,0.083  C42.677,47.979,42.567,48.054,42.459,48.132z" />
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
          <div className={styles.modal_user}>
            {isLogged && currentUser ? (
              <div>
                <div className={styles.hello}>
                  <span>Xin chào!</span>
                  <h3>{currentUser?.users?.fullname}</h3>
                </div>
                {currentUser?.users?.role == 1 ? (
                  <Link to={"/admin"}>
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
              <div className="icon">
                <svg
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
                </svg>
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

export default ClientHeader;
