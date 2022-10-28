import { Pagination } from "antd";
import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SubBanner from "../../components/SubBanner";
import { getAllCatePosts, getCatePost } from "../../redux/slices/catePostSlice";
import { getPosts, setPage } from "../../redux/slices/postSlice";
import { RootState, useAppDispatch } from "../../redux/store";
import styles from "./FeaturedNews.module.css";
type Props = {}

const PostPage = (props: Props) => {
  const { id } = useParams();
  const post = useSelector((state: RootState) => state?.post);
  const pages = useSelector((state: RootState) => state?.post.page);
  const cateposts = useSelector((state: any) => state.catepost);
  const dispatch = useAppDispatch();
  
  useEffect(()=>{
    dispatch(getAllCatePosts());
  },[dispatch])
  if(id){
    useEffect(()=>{
      dispatch(getCatePost(id));
    },[dispatch])
  }else{
    useEffect(() => {
      dispatch(
        getPosts({
          page: pages,
          limit: 12,
        })
      );
    }, [dispatch, pages]);
  }

  console.log(cateposts);
  

 
  return (
    <div>


      <section className={styles.news}>
        <SubBanner />
        <div className={styles.news__title}>
          <h2>Blog của chúng tôi</h2>
        </div>
        <section className="grid grid-cols-4 grid-flow-row-dense gap-2">
          <div className="pl-9">
            <h2 className="text-2xl font-bold pb-6">Danh Mục Bài Viết</h2>
            {cateposts?.cateposts?.map((item: any, index: any) => {
              return (
                <a href={`/post/${item._id}`}><h3 className="text-base pb-2">{item.name}</h3></a>
               );
            })} 
          </div>
          <div className="col-span-3">
            <div className={styles.news__item}>
              {post?.posts.Post?.map((e: any, index: any) => {
                return (
                  <div className="p-6 max-w-sm bg-white rounded-lg">
                  <img className="text-center" src={e.image} alt="000017" />
              <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{e.title}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{e.descShort}</p>
              <a href={`/detail/${e._id}/post`} className="inline-flex items-center font-medium text-red-600 hover:text-red-800 dark:text-red-500 dark:hover:text-red-700">
                Xem Thêm
                <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </a>
          </div>
                );
              })}
              {cateposts?.catepost?.news?.map((e: any, index: any) => {
                return (
                  <div className="p-6 max-w-sm bg-white rounded-lg">
                  <img className="text-center" src={e.image} alt="000017" />
              <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{e.title}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{e.descShort}</p>
              <a href={`/detail/${e._id}/post`} className="inline-flex items-center font-medium text-red-600 hover:text-red-800 dark:text-red-500 dark:hover:text-red-700">
                Xem Thêm
                <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </a>
          </div>
                );
              })}

            </div>
          </div>
        </section>
        
        <Pagination
          className={styles.a}
          defaultCurrent={1}
          total={post?.posts.count}
          pageSize={12}
          onChange={(pages) => {
            dispatch(setPage(pages));
          }}
        />

      </section>



    </div>

  )
}

export default PostPage