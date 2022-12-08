import styles from "./AdminLayout.module.css";
import React, { useEffect, useRef, useState } from "react";
import {
  IoHomeOutline,
  IoLogoOctocat,
  IoMenuOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { RiContactsLine, RiProductHuntLine } from "react-icons/ri";
import { TbSlideshow } from "react-icons/tb";
import { MdOutlineCategory } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";
import { BsNewspaper } from "react-icons/bs";
import { TiGift,TiShoppingCart } from "react-icons/ti";

// import Dashboard from "../../pages/Admin/Dashboard";

const AdminLayout = () => {
  const boxUser = useRef<HTMLDivElement>(null);
  const navigationElement = useRef<HTMLDivElement>(null);
  const mainElement = useRef<HTMLDivElement>(null);
  const [toggle, setToggle] = useState<boolean>(false);
  const [showModelUser, setShowModelUser] = useState<Boolean>(false);

  useEffect(() => {
    const navigationE = navigationElement.current!;
    const mainE = mainElement.current!;
    if (toggle) {
      navigationE.classList.toggle(styles.active);
      mainE.classList.toggle(styles.active);
    } else {
      navigationE.classList.remove(styles.active);
      mainE.classList.remove(styles.active);
    }
  }, [toggle]);

  useEffect(() => {
    const boxUserElement = boxUser.current!;
    if (showModelUser) {
      boxUserElement.style.display = "block";
    } else {
      boxUserElement.style.display = "none";
    }
  }, [showModelUser]);
  return (
    <>
      {/* =============== Navigation ================ */}
      <div className={styles.container}>
        <div ref={navigationElement} className={styles.navigation}>
          <ul>
            <li>
              <Link to="/">
                
                  <span className={styles.icon}>
                    <IoLogoOctocat className={styles.io} />
                    {/* <img src="https://res.cloudinary.com/assignment22/image/upload/v1666604740/Ass-reactjs/logo.png21323_p2dpr8.png" className={styles.io} alt="" width="100px" /> */}
                  </span>
                  <span className="text-[25px] font-[600] ml-[10px] italic hover:text-red-600 ">
                    The Man
                  </span>
                
              </Link>
            </li>
            <li>
              <Link to="/admin/dashboard">
                
                  <span className={styles.icon}>
                    <IoHomeOutline className={styles.io} />
                  </span>
                  <span className={styles.title}>Thống kê</span>
              
              </Link>
            </li>
            <li>
              <Link to="/admin/carts">
                
                  <span className={styles.icon}>
                    <TiShoppingCart className={styles.io} />
                  </span>
                  <span className={styles.title}>Danh sách đơn hàng</span>
            
              </Link>
            </li>
            <li>
              <Link to="/admin/vouchers">
            
                  <span className={styles.icon}>
                    <TiGift className={styles.io} /> 
                    
                  </span>
                  <span className={styles.title}>Danh sách voucher</span>
             
              </Link>
            </li>
            <li>
              <Link to="/admin/contact">
               
                  <span className={styles.icon}>
                    <RiContactsLine className={styles.io} />
                  </span>
                  <span className={styles.title}>Thông tin phản hồi</span>
               
              </Link>
            </li>
            <li>
              <Link to="/admin/products">
               
                  <span className={styles.icon}>
                    <RiProductHuntLine className={styles.io} />
                  </span>
                  <span className={styles.title}>Tất cả sản phẩm</span>
             
              </Link>
            </li>
            <li>
              <Link to="/admin/category_product">
             
                  <span className={styles.icon}>
                    <BiCategoryAlt className={styles.io} />
                  </span>
                  <span className={styles.title}>Danh mục sản phẩm</span>
              
              </Link>
            </li>
            <li>
              <Link to="/admin/post">
              
                  <span className={styles.icon}>
                    <BsNewspaper className={styles.io} />
                  </span>
                  <span className={styles.title}>Bài viết</span>
              
              </Link>
            </li>
            <li>
              <Link to="/admin/category_post">
            
                  <span className={styles.icon}>
                    <MdOutlineCategory className={styles.io} />
                  </span>
                  <span className={styles.title}>Danh mục bài viết</span>
            
              </Link>
            </li>
            <li>
              <Link to="/admin/slider">
          
                  <span className={styles.icon}>
                    <TbSlideshow className={styles.io} />
                  </span>
                  <span className={styles.title}>Slide</span>
              
              </Link>
            </li>
            <li>
              <Link to="/admin/users">
            
                  <span className={styles.icon}>
                    <FaRegUser className={styles.io} />
                  </span>
                  <span className={styles.title}>Danh sách tài khoản</span>
             
              </Link>
            </li>
            
          </ul>
        </div>
        {/* ========================= Main ==================== */}
        <div ref={mainElement} className={styles.main}>
          <div className={styles.topbar}>
            <div onClick={() => setToggle(!toggle)} className={styles.toggle}>
              <IoMenuOutline className={styles.io} />
            </div>
            <div className={styles.search}>
              <label>
                <input type="text" placeholder="Search here" />
                <IoSearchOutline className={styles.io} />
              </label>
            </div>
            <div
              className={styles.user}
              onClick={() => setShowModelUser(!showModelUser)}
            >
              <img
                src="https://res.cloudinary.com/assignmentjs/image/upload/v1664199286/nextjsuser/dw1r1yybpmahpl8qwmkb.png"
                alt=""
              />
              {/* ---------------------- */}
              <div ref={boxUser} className={styles.box}>
                <ul>
                  <li>
                    <span className="block italic">Xin chào!</span>
                    <span className="font-bold">
                      {/* {curentUser.user?.firstName} */}
                      Quyết
                    </span>
                  </li>
                  <li>
                    <Link to="/">Trang chủ</Link>
                  </li>
                  <li>
                    <div>Đăng xuất</div>
                  </li>
                </ul>
              </div>

              {/* --------------------- */}
            </div>
          </div>

          <div className={styles.content}>
            <Outlet />
            {/* <Dashboard/> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
