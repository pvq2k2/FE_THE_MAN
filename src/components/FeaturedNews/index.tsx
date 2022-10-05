import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListPosts } from "../../redux/slices/postSlice";
import styles from "./FeaturedNews.module.css";
type Props = {};
const FeaturedNews = () => {
  const posts = useSelector((state: any) => state.post.posta);
  
  console.log(posts);
  
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(getListPosts());
   
  }, [dispatch]);
  return (
    <section className={styles.news}>
      <div className={styles.news__title}>
        <h2>Tin tức nổi bật</h2>
      </div>
      <div className={styles.news__item}>
        {posts.map((item:any, index:number) => {
          return <div key={index++} className={styles.item__box}>
          <img src={item.image} alt="000017" />
          <div className={styles.detail}>
            <h3>{item.title}</h3>
          </div>
        </div>
        })}
           
      </div>
    </section>
  );
};

export default FeaturedNews;
