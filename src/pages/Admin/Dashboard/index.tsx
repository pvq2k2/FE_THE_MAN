import React, { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import Swal from "sweetalert2";
import styles from "../Products/ProductManager/ProductManager.module.css";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../redux/store";
import { Link } from "react-router-dom";
import { TiPlus } from "react-icons/ti";
import { Pagination } from "antd";
import { setPage, thongkes } from "../../../redux/slices/productSlice";
import { formatCurrency, formatCurrencys } from "../../../ultis";
// import faker from 'faker';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const data = {
//   labels: [
//     "tong so san pham nhap vao",
//     "Blue",
//     "Yellow",
//     "Green",
//     "Purple",
//     "Orange",
//   ],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

// đường
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top' as const,
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Bar Chart',
//     },
//   },
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data2 = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

const Dashboard = () => {
  const product = useSelector((state: RootState) => state?.product);
  console.log(product);

  const pages = useSelector((state: RootState) => state?.product.page);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      thongkes({
        page: pages,
        limit: 10,
      })
    );
  }, [dispatch, pages]);

  // const showDetailProduct = async (id: any) => {
  //   const detailProduct = await dispatch(getProduct(id));
  //   return ( <div>
  //     {detailProduct.payload}
  //   </div>)
  // }

  return (
    <div>
      <div className={styles.content}>
        <header>
          <div className={styles.title}>Thống kê sản phẩm</div>
        </header>
        <main className="flex flex-col justify-between ">
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>DEMO</option>
            {/* <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option> */}
          </select>
          <table>
            <thead>
              <tr>
                <td>STT</td>
                <td>Tên</td>
                <td>Giá nhập</td>
                <td>Giá bán</td>
                <td>SL nhập vào</td>
                <td>SL bán ra</td>
                <td>SL tồn</td>
                <td>TT nhập vào</td>
                <td>TT bán ra</td>
                <td>Doanh thu</td>
              </tr>
            </thead>
            <tbody>
              {product?.products?.list?.map((e: any, index: any) => {
                return (
                  <tr key="index">
                    <td>{(pages - 1) * 10 + ++index}</td>
                    <td>{e?.name}</td>

                    <td className="text-center">
                      {formatCurrencys(e?.listed_price ? e?.listed_price : 0)}{" "}
                      <sup className="">đ</sup>
                    </td>

                    <td className="text-center">
                      {formatCurrencys(e?.price ? e?.price : 0)}{" "}
                      <sup className="">đ</sup>
                    </td>
                    <td className="text-center">
                      {e?.quantity ? e?.quantity : 0}
                    </td>
                    <td className="text-center">{e?.sold ? e?.sold : 0}</td>
                    <td className="text-center">{e?.stock ? e?.stock : 0}</td>
                    <td className="text-center">
                      {formatCurrencys(
                        e?.total_import_price ? e?.total_import_price : 0
                      )}{" "}
                      <sup className="">đ</sup>
                    </td>
                    <td className="text-center">
                      {formatCurrencys(
                        e?.total_export_price ? e?.total_export_price : 0
                      )}{" "}
                      <sup className="">đ</sup>
                    </td>
                    <td className="text-center">
                      {formatCurrencys(e?.turnover ? e?.turnover : 0)}{" "}
                      <sup className="">đ</sup>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Pagination
            defaultCurrent={1}
            // total={post?.Sliders.count}
            pageSize={10}
            onChange={(pages) => {
              dispatch(setPage(pages));
            }}
          />
        </main>
      </div>
      <div className="pb-20">
        <div className={styles.contents}>
          <main className="flex flex-col justify-between ">
            <table>
              <thead>
                <tr>
                  <td className="text-center">Tổng số sản phẩm nhập vào</td>
                  <td className="text-center">Tổng số sản phẩm bán ra</td>
                  <td className="text-center">Tổng số tiền nhập vào</td>
                  <td className="text-center">Tổng số tiền bán ra</td>
                  <td className="text-center">Tổng số doang thu</td>
                </tr>
              </thead>
              <tbody>
                <tr key="index">
                  <td className="text-center">
                    {product?.products?.total?.quantity}
                  </td>
                  <td className="text-center">
                    {product?.products?.total?.sold}
                  </td>

                  <td className="text-center">
                    {formatCurrencys(
                      product?.products?.total?.total_export_price
                    )}{" "}
                    <sup className="">đ</sup>
                  </td>

                  <td className="text-center">
                    {formatCurrencys(
                      product?.products?.total?.total_export_price
                    )}{" "}
                    <sup className="">đ</sup>
                  </td>

                  <td className="text-center">
                    {formatCurrencys(product?.products?.total?.doanhthu)}{" "}
                    <sup className="">đ</sup>
                  </td>
                </tr>
              </tbody>
            </table>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
