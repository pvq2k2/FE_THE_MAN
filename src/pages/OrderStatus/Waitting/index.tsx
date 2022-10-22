import React from 'react';
import './waiting.css';

const api = [2,3,4,54,5]


const Waitting = () => {
  const linh = () =>{
    console.log("anh linh ");d
    console.log(api);
    
  }
  return (
    <>
      <div className='container scroll-auto'>
        <div className='first-box'>
          <section className='ml-[100px]'>
            <img width={"50%"}
              src='https://res.cloudinary.com/assignment22/image/upload/v1666345878/Ass-reactjs/test_ey6hrr.webp'
              alt='ảnh lỗi'
            />
          </section>
          <section>
            <p>Đứa trẻ con xịn xò con bò</p> <br />
            <span>Số lượng: 1</span>
          </section>
        </div>
        <hr />
        <div className='btn-order'>
            <div><p>Đánh giá sản phẩm</p></div>
            <div>
              <div className='btn-buy pt-[20px]'>
                <button onClick={linh} className='p-[10px] bg-blue-400 rounded-sm mr-[10px]'>Mua lại </button>
                <button className='p-[10px] bg-slate-400 rounded-sm'>Liên hệ với người bán</button>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Waitting;
