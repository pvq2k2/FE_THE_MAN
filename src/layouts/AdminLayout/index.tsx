import styles from './AdminLayout.module.css';
import React, { useEffect, useRef, useState } from 'react'
import { IoHomeOutline, IoLogoOctocat, IoMenuOutline, IoSearchOutline } from 'react-icons/io5'
import { RiProductHuntLine } from 'react-icons/ri';
import { TbSlideshow } from 'react-icons/tb';
import { MdOutlineCategory } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { HiMenuAlt2 } from 'react-icons/hi';


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
              <a href="#">
                <span className={styles.icon}>
                  <IoLogoOctocat className={styles.io} />
                </span>
                <span className={styles.title}>Brand Name</span>
              </a>
            </li>
            <li>
              <Link to="/admin">
                <a href="#">
                  <span className={styles.icon}>
                    <IoHomeOutline className={styles.io} />
                  </span>
                  <span className={styles.title}>Dashboard</span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/admin/products">
                <a>
                  <span className={styles.icon}>
                    <RiProductHuntLine className={styles.io} />
                  </span>
                  <span className={styles.title}>Product</span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/admin/categories">
                <a>
                  <span className={styles.icon}>
                    <MdOutlineCategory className={styles.io} />
                  </span>
                  <span className={styles.title}>Category</span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/admin/post">
                <a>
                  <span className={styles.icon}>
                    <TbSlideshow className={styles.io} />
                  </span>
                  <span className={styles.title}>Post</span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/admin/slider">
                <a>
                  <span className={styles.icon}>
                    <TbSlideshow className={styles.io} />
                  </span>
                  <span className={styles.title}>Slide</span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/admin/category_post">
                <a>
                  <span className={styles.icon}>
                    <MdOutlineCategory className={styles.io} />
                  </span>
                  <span className={styles.title}>Category Post</span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/admin/users">
                <a>
                  <span className={styles.icon}>
                    <FaRegUser className={styles.io} />
                  </span>
                  <span className={styles.title}>User</span>
                </a>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
