import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { TiPlus } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useAppDispatch } from "../../../../redux/store";
import { RootState } from "../../../../redux/store";
import ReactPaginate from "react-paginate";
import "../../../../styleAntd/panigation.css";
import Swal from "sweetalert2";
import styles from "./ProductManager.module.css";
import { getAll } from "../../../../api-cilent/Post";
import { Pagination } from "antd";
import { getUser, getUsers, setPage } from "../../../../redux/slices/userSlice";

type Props = {};

const UserManager = (props: Props) => {
  const user = useSelector((state: RootState) => state?.user);
  const statusObj = {
    active:
      "text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded-full",
    block:
      "text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded-full",
  };

  const pages = useSelector((state: RootState) => state?.user.page);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      getUsers({
        page: pages,
        limit: 10,
      })
    );
  }, [dispatch, pages]);

  return (
    <div className={styles.content}>
      <header>
        <div className={styles.title}>Quản lí bài viết</div>
        <Link to="/admin/users/add" className="sm:ml-3">
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <TiPlus className="text-[20px] mr-2" />
            Thêm bài viết
          </button>
        </Link>
      </header>
      <main className="flex flex-col justify-between ">
        <table>
          <thead>
            <tr>
              <td>STT</td>
              <td>Họ Tên</td>
              {/* <td>Hình ảnh</td> */}
              <td>Email</td>
              <td className="text-center">Trạng Thái</td>
              <td>Sửa</td>
            </tr>
          </thead>
          <tbody>
            {user?.Users.users?.map((e: any, index: any) => {
              return (
                <tr key="index">
                  <td>{(pages - 1) * 10 + ++index}</td>

                  <td>{e.fullname}</td>
                  {/* <td>
                    <img
                      className={styles.image}
                      src={e.img}
                      alt=""
                      width="100px"
                    />
                  </td> */}
                  <td className="w-16 ">{e.email}</td>
                  <td className="flex justify-center">
                    <div className={`${statusObj[e.status]} text-center`}>
                      {e.status}
                    </div>
                  </td>
                  <td className={styles.action}>
                    <Link
                      className="flex justify-center"
                      to={`/admin/users/${e._id}/edit`}
                    >
                      <AiOutlineEdit className={styles.edit} />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          defaultCurrent={1}
          total={user?.Users.count}
          pageSize={10}
          onChange={(pages) => {
            dispatch(setPage(pages));
          }}
        />
      </main>
    </div>
  );
};

export default UserManager;
