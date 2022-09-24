import React from 'react'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import Slider from 'react-slick';
import styles from './NewProduct.module.css';
type Props = {}
function SampleNextArrow(props: { onClick: () => void; }) {
    const { onClick } = props;
    return (
      <div className={`${styles.next} ${styles.slickArrow}`} onClick={onClick}><HiOutlineChevronRight /></div>
    );
  }
  function SamplePrevArrow(props: { onClick: () => void; }) {
    const { onClick } = props;
    return (
      <div className={`${styles.prev} ${styles.slickArrow}`} onClick={onClick}><HiOutlineChevronLeft /></div>
    );
  }
const NewProduct = (props: Props) => {
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow:  <SampleNextArrow onClick={() => {}} />,
        prevArrow:  <SamplePrevArrow onClick={() => {}} />,
        cssEase: "linear"
  };
  return (
    <section className={styles.product}>
        <div className={styles.product__box}>
        <div className={styles.product__title}>
            <h2>Sản phẩm mới</h2>
        </div>
        <Slider className={styles.slider} {...settings}>
        <div className={styles.product__item}>
          <div className={styles.item__box}>
            <img src='https://img.cdn.vncdn.io/nvn/ncdn/store1/41786/ps/20220818/000016.jpg' alt='000017'/>
            <div className={styles.detail}>
              <h3>Anselm Loose Fit Jean Light Blue</h3>
              <span>690,000 vnđ</span>
            </div>
          </div>

        </div>
        <div className={styles.product__item}>
        <div className={styles.item__box}>
        <img src='https://img.cdn.vncdn.io/nvn/ncdn/store1/41786/ps/20220704/a__oa__o_copy_11.jpg' alt='Banner1-1'/>
        <div className={styles.detail}>
              <h3>Gerda Basic Tee Black</h3>
              <span>350,000 vnđ</span>
          </div>
        </div>
        </div>
        <div className={styles.product__item}>
        <div className={styles.item__box}>
        <img src='https://img.cdn.vncdn.io/nvn/ncdn/store1/41786/ps/20220704/qua____nqua____n_copy_4.jpg' alt='Banner1-1'/>
        <div className={styles.detail}>
              <h3>Pique Trouser Beige</h3>
              <span>650,000 vnđ</span>
          </div>
        </div>
        </div>
        <div className={styles.product__item}>
        <div className={styles.item__box}>
        <img src='https://img.cdn.vncdn.io/nvn/ncdn/store1/41786/ps/20220708/aoao_copy_9.jpg' alt='Banner1-1'/>
        <div className={styles.detail}>
              <h3>Blanche Polo Shirt White</h3>
              <span>390,000 vnđ</span>
          </div>
        </div>
        </div>

        <div className={styles.product__item}>
        <div className={styles.item__box}>
        <img src='https://img.cdn.vncdn.io/nvn/ncdn/store1/41786/ps/20220818/000001.jpg' alt='Banner1-1'/>
        <div className={styles.detail}>
              <h3>Le Jardin Tee Light Grey</h3>
              <span>450,000 vnđ</span>
          </div>
        </div>
        </div>
        </Slider>
        </div>
    </section>
  )
}

export default NewProduct