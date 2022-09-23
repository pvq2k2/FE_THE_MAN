import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import Slider from "react-slick";
import './Banner.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
type Props = {}

function SampleNextArrow(props: { onClick: () => void; }) {
  const { onClick } = props;
  return (
    <div className='next slick-arrow' onClick={onClick}><HiOutlineChevronRight /></div>
  );
}
function SamplePrevArrow(props: { onClick: () => void; }) {
  const { onClick } = props;
  return (
    <div className='prev slick-arrow' onClick={onClick}><HiOutlineChevronLeft /></div>
  );
}
const Banner = (props: Props) => {
    const settings = {
          dots: true,
          arrows: true,
          infinite: true,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow:  <SampleNextArrow onClick={() => {}} />,
          prevArrow:  <SamplePrevArrow onClick={() => {}} />,
          cssEase: "linear"
    };
        return (
          <section className="banner">
            <Slider {...settings}>
              <img src='https://img.cdn.vncdn.io/nvn/ncdn/store1/41786/bn/Banner1_1.JPG' alt='Banner1-1'/>
              <img src='https://img.cdn.vncdn.io/nvn/ncdn/store1/41786/bn/bannercollection1.jpg' alt='bannercollection1'/>
            </Slider>
          </section>
        );
}

export default Banner