type Props = {};

const Waitting = (props: Props) => {

  return (
    <main>
      <section className="container max-w-6xl mx-auto px-3 mt-10 grid grid-cols-12 mb-9">
          <>
            <form action="" method="POST" id="cart__detail-form" className="col-span-12 lg:col-span-8 lg:pr-6">
              <table className="table-auto w-full text-left border-collapse" id="cart__detail">
                <thead>
                  <tr className="uppercase border-b-2">
                    <th className="pb-1 uppercase text-sm text-gray-500" colSpan={3}>
                      Sản phẩm
                    </th>
                    <th className="pb-1 uppercase text-sm text-gray-500">Giá</th>
                    <th className="pb-1 uppercase text-sm text-gray-500">Số lượng</th>
                    <th className="pb-1 uppercase text-sm text-gray-500 text-right">Tạm tính</th>
                  </tr>
                </thead>
                <tbody>
                    <tr className="border-b" >
                      <td>
                        <button
                          type="button"
                          className="p-2 text-gray-400 text-xl transition ease-linear duration-200 hover:text-black"
                        >
                        </button>
                      </td>
                      <td className="p-2">
                          <div className="w-16 h-16 relative">
                            <img className="block w-16 object-cover absolute" src="https://res.cloudinary.com/assignment22/image/upload/v1666345878/Ass-reactjs/test_ey6hrr.webp" alt="" />
                          </div>
                      </td>
                      <td className="p-2">
                        <a className="font-semibold" href="">
                          linh
                        </a>
                      </td>
                      <td className="font-bold">100</td>
                      <td>1</td>
                      <td className="font-bold text-right">100</td>
                    </tr>
                </tbody>
              </table>
              <ul className="flex mt-6 items-center">
                <li>
                    <button
                      type="button"
                      className="select-none uppercase h-8 text-primary font-semibold text-sm border-[#4d8a54] border-2 px-3 transition ease-linear duration-300 hover:bg-[#4d8a54] hover:text-white"
                    >
                      <span> Tiếp tục xem sản phẩm</span>
                    </button>
                </li>
              </ul>
            </form>
          </>
          <section className="text-center col-span-12 py-12">
            <p>Chưa có sản phẩm nào</p>
              <div className="block mt-4">
                <button className="uppercase h-8 text-[#4d8a54] font-semibold text-sm border-[#4d8a54] border-2 px-3 transition ease-linear duration-300 hover:bg-[#4d8a54] hover:text-white">
                  <span> Tiếp tục mua hàng</span>
                </button>
              </div>
          </section>
     
      </section>
    </main>
  );
};

export default Waitting;
