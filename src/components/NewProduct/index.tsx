import React, { useEffect } from 'react'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { getProducts } from '../../redux/slices/productSlice';
import { RootState, useAppDispatch } from '../../redux/store';
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
  const product = useSelector((state: RootState) => state?.product);
  // console.log("product", product.products.products);


  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      getProducts({
        page: 1,
        limit: 8,
      })
    );
  }, [dispatch, 1]);
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow onClick={() => { }} />,
    prevArrow: <SamplePrevArrow onClick={() => { }} />,
    cssEase: "linear"
  };
  return (
    <section className={styles.product}>
      <div className={styles.product__box}>
        <div className={styles.product__title}>
          <h2>Sản phẩm mới</h2>
        </div>
        <Slider className={styles.slider} {...settings}>
          {product?.products.products?.map((item: any, index: any) => {
            return (
              <div className={styles.product__item}>
                <div className={styles.item__box}>
                  <img src={item.image} alt='000017' />
                  <div className={styles.detail}>
                    <h3>{item.name}</h3>
                    <span>{item.price}</span>
                  </div>
                </div>

              </div>
            );
          })}


        </Slider>
      </div>
    </section>
  )
}

export default NewProduct