import React from "react";

type Props = {};

const Signin = (props: Props) => {
  return (
    <div>
    <div className='py-4'>
      <div className='w-10/12 m-auto shadow-lg  grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-2 b'>
        <div>
          <img
            className='w-9/10 min-h-full hidden sm:block lg:block rounded-l-[5px]'
            src='https://preview.colorlib.com/theme/bootstrap/login-form-14/images/xbg-1.jpg.pagespeed.ic.3OAd9jZTMD.webp'
            alt=''
          />
        </div>
        <div className='px-10 py-8 mt-auto mb-auto rounded-r-[5px]'>
          <h3 className='text-center text-2xl font-bold text-slate-600 '>Đăng nhập</h3>
          <form className='mt-4' action=''>
            <div className='mt-4' >
              <label className='block font-medium text-slate-500'>Email</label>
              <input
                className='mt-2 w-full h-10 p-1 border-solid border-2 border-neutral-300  focus:border-blue-400 lg:h-12 rounded-md indent-5 outline-none text-[15px] text-zinc-600'
                type='email'
                placeholder='Nhập email'
                name=''
                id=''
              />
            </div>

            <div className='mt-4'>
              <label className='block font-medium text-slate-500'>Mật khẩu</label>
              <input
                className='mt-2 w-full h-10 p-1 border-solid border-2 border-neutral-300  focus:border-blue-400 lg:h-12 rounded-md indent-5 outline-none text-[15px] text-zinc-600'
                type='password'
                placeholder='Nhập mật khẩu'
                name=''
                id=''
              />
            </div>
            <div className='ml-auto mr-auto'>
              <button className='mt-6 bg-blue-400  hover:bg-blue-700 hover:text-white ease-in-out  w-full font-semibold  h-10 text-slate-100 text-lg hover:cursor-pointer lg:h-12 rounded-md'>
                Đăng nhập
              </button>
            </div>
          </form>

          <p className='mt-4 text-center hover:text-blue-800 col-end-10 cursor-pointer'>
          Quên mật khẩu
          </p>


          <p className='mt-4 text-center'>
          Bạn chưa có tài khoản?
            <span>
              <a
                href=''
                className='font-medium ml-[5px]  text-blue-500 hover:text-blue-800 col-end-10'
              >
                Đăng ký
              </a>
            </span>
          </p>


        </div>
      </div>
    </div>
  </div>
  );
};

export default Signin;
