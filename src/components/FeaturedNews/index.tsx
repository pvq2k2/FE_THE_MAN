import styles from './FeaturedNews.module.css';
type Props = {}
const FeaturedNews = (props: Props) => {

  return (
    <section className={styles.news}>
        <div className={styles.news__title}>
            <h2>Tin tức nổi bật</h2>
        </div>
        <div className={styles.news__item}>
          <div className={styles.item__box}>
            <img src='https://owen.vn/media/wysiwyg/Artboard_23-100.jpg' alt='000017'/>
            <div className={styles.detail}>
              <h3>CHẠM ĐÚNG TRÚNG ÁO BẠC HÀ</h3>
            </div>
          </div>

          <div className={styles.item__box}>
            <img src='https://owen.vn/media/wysiwyg/900x900_9_SALE_CH_NH_.jpg' alt='000017'/>
            <div className={styles.detail}>
              <h3>SUMMER SALE | TRẢI NGHIỆM GIÁ TỐT CHỈ TỪ 299k</h3>
            </div>
          </div>

          <div className={styles.item__box}>
            <img src='https://lh3.googleusercontent.com/ybMP1AeHiqt86FZ_4oYWNAFjptq_HpPjN6LK1htC0FkZ6Cy3WumaIkQWwnrPkcqJhzHgwN6UC_DqIG3BZsJfJGF-NNvX7PedIyEEmDaxLuSbL-NZejJFN-Rxw82OHG2o4WScHpWU' alt='000017'/>
            <div className={styles.detail}>
              <h3>VÌ SAO ÁO POLO NAM LẠI ĐƯỢC NHIỀU NGƯỜI LỰA CHỌN ĐẾN VẬY?</h3>
            </div>
          </div>

        </div>
    </section>
  )
}

export default FeaturedNews