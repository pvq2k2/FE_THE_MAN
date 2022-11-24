import axios from "axios";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { HiOutlineCheck, HiOutlineX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addCatePro } from "../../../../redux/slices/cateProductSlice";
import { addProduct } from "../../../../redux/slices/productSlice";
import { useAppDispatch } from "../../../../redux/store";

const ProductAdd = () => {
  const [preview, setPreview] = useState<string>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<any>();
  const onAddProduct = (data: any) => {

  }
  const onOpen = () => {
    setShow(true)
  }
  return (
    <div>
      <div>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Thêm danh mục sản phẩm</h1>
            <Link to="/admin/category_product" className="sm:ml-3">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >

                <HiOutlineX className="text-[20px] mr-2" />
                Quay lại
              </button>
            </Link>
          </div>
        </header>
        <div className="m-auto max-w-7xl pb-36 mt-5">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form id="form-add-product" method="POST" onSubmit={() => handleSubmit(onAddProduct)}>

              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium tex-gray-700"
                    >
                      Tên sản phẩm
                    </label>

                    <div className="mt-1">
                      <input
                        type="text"
                        {
                        ...register("name", { required: "Vui lòng nhập tên danh mục" })
                        }
                        id="name-catepost"
                        className="shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                        placeholder="Tên danh mục..."
                      />
                      <div className="text-sm mt-0.5 text-red-500">

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
                              {...register("image", {
                                required: "Vui lòng chọn ảnh",
                              })}
                              onChange={(e: any) => {
                                setPreview(
                                  URL.createObjectURL(e.target.files[0])
                                );
                              }}
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
      </div>
    </div>
  );
};

export default ProductAdd;
