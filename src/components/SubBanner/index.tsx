import React from 'react'
import Slider from 'react-slick';
import styles from './SubBanner.module.css'
type Props = {}

const SubBanner = (props: Props) => {
    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear"
  };
  return (
    <section className={styles.subBanner}>
        <Slider {...settings}>
            <img src='https://sss-dashboard.leanservices.work/upload/6-2022/1654695472615.jpeg' alt='1659522075021'/>
            <img src='https://sss-dashboard.leanservices.work/upload/7-2022/1658974488678.jpeg' alt='1659522075021'/>
            <img src='https://sss-dashboard.leanservices.work/upload/8-2022/1659693131631.jpeg' alt='1659522075021'/>
        </Slider>
    </section>
  )
}

export default SubBanner