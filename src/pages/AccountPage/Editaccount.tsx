import React, {useState, useEffect} from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { HiOutlineCheck } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { User } from '../../models/User';
import { getUser, updateUser } from '../../redux/slices/userSlice';
import { RootState, useAppDispatch } from '../../redux/store';
type Props = {}
type Inputs = {
    fullname: string;
    email: string;
    status: string;
  };
const Editaccount = (props: Props) => {
    const dispatch = useAppDispatch();
    const users = useSelector((state: RootState) => state.user);
    const [status, setStatus] = useState(users.User.status);
    const navigate = useNavigate();
    console.log(status);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm<Inputs>();

      const { id } = useParams();
    let isLogged = useSelector((state: any) => state.auth.isLogged);
  let currentUser = useSelector((state: any) => state.auth.currentUser) as User;
  if (localStorage.getItem("user")) {
    (isLogged = true),
      (currentUser = JSON.parse(localStorage.getItem("user") || "{}"));
  }
  console.log(currentUser);

  useEffect(() => {
    setStatus(users.User.status);
  }, [users.User.status]);
  useEffect(() => {
    (async () => {
      const posts = await dispatch(getUser(id));
      reset(posts.payload);
    })();
  }, [id, dispatch, reset]);

  const onSubmit: SubmitHandler<Inputs> = async (values: Inputs) => {
    console.log(values.status);

    try {
      dispatch(
        updateUser({
          fullname: values.fullname,
          status,
          _id: id,
        })
      );
      toast.success("Sửa người dùng thành công !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/account");
    } catch (error) {
      console.log("a");
    }
  };
  

  return (
    <div className='p-40'>
        <section className="grid grid-cols-2 grid-flow-row-dense gap-2">
        <div className="logo flex gap-5 items-center">
            <img src={`${currentUser?.users?.fullname}`} className="bg-left-top bg-no-repeat h-40 w-40" alt="" />
            <div>
                <h4 className="font-bold text-lg">{currentUser?.users?.email}</h4>
                <Link to={`/account`} className="sm:ml-3">
                <button>Quay lại</button>
        </Link>
            </div>
            
          </div>
          <div className='pl-20'>
            <h1 className='text-4xl'>Sửa Thông Tin Người Dùng</h1>

            <div className='m-2'>
            <form action="" method="POST" onSubmit={handleSubmit(onSubmit)}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div>
                    <label
                      htmlFor="fullname"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Họ Tên
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        placeholder="Họ tên*"
                        {...register("fullname", {
                          required: "Vui lòng nhập họ tên",
                        })}
                        id="name-add-product"
                        className="shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                      />
                      <div className="text-sm mt-0.5 text-red-500">
                        {errors.fullname?.message}
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="fullname"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Số Điện Thoại
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        placeholder="Số Điện Thoại*"
                        id="name-add-product"
                        className="shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                      />
                      <div className="text-sm mt-0.5 text-red-500">
                        {errors.fullname?.message}
                      </div>
                    </div>
                  </div>
                    

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Hình ảnh
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <input
                            
                            id="file-upload"
                            type="file"
                          />
                          <div className="text-sm mt-0.5 text-red-500">
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <HiOutlineCheck className="mr-2 text-[20px]" />
                    Lưu
                  </button>
                </div>
              </div>
            </form>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Editaccount