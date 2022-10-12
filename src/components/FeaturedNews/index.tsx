import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getListPosts, getPosts } from "../../redux/slices/postSlice";
import { RootState, useAppDispatch } from "../../redux/store";
import styles from "./FeaturedNews.module.css";
type Props = {};
const FeaturedNews = () => {
  const post = useSelector((state: RootState) => state?.post);
  
  console.log(post);
  
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      getPosts({
        page: 1,
        limit: 3,
      })
    );
  }, [dispatch, 1]);
  return (
    <section className={styles.news}>
      <div className={styles.news__title}>
        <h2>Tin tức nổi bật</h2>
      </div>
      <div className={styles.news__item}>
        {post?.posts.Post?.map((item:any, index:number) => {
          return (
          <div key={index++} className={styles.item__box}>
            <Link to={`/detail/:id/post`}>
            <img src={item.image} alt="000017" />
            <div className={styles.detail}>
              <h3>{item.title}</h3>
            </div>
            </Link>
          </div>)
        })}
           
      </div>
    </section>
  );
};

export default FeaturedNews;
