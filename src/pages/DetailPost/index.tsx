import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const DetailPost = (props: Props) => {
  return (
    <div className="w-10/12 m-auto py-5">
      <nav className="lg:relative top-[67px] lg:top-0 left-0 right-0 w-full lg:w-auto h-screen lg:h-full transition-transform duration-200">
        <ul className="flex font-semibold gap-5 lg:gap-0 pt-4 lg:pt-0 flex-col lg:flex-row w-[320px] lg:w-auto bg-white border lg:border-none border-r-gray-300 h-screen lg:h-full transition-transform duration-200">
          <li className="group block relative mx-1 mt-1 text-slate-200 hover:text-blue-400 transition duration-400 ease-in-out">
            Trang chủ
          </li>
          <li className=" block relative mx-1 mt-1 text-slate-200 duration-400">
            |
          </li>
          <li className=" block relative mx-1 mt-1 text-slate-200 transition duration-400">
            Bài viết
          </li>
          <li className=" block relative mx-1 mt-1 text-slate-200 duration-400">
            |
          </li>
          <li className=" block relative mx-1 mt-1 transition duration-400">
            Sơ mi phá cách cho nam giới
          </li>
        </ul>
      </nav>
      <div className="content mt-5 grid grid-cols-3 gap-6  ">
        <div className="col-span-2">
          <img
            className="w-full"
            src="https://hidanz.com/wp-content/uploads/2021/05/phong-cach-thoi-trang-nam-1.jpg"
            alt=""
          />
          <div>
            <h3 className="text-xl mt-5 font-semibold ">
              Nhà thiết kế Nguyễn Trường Duy sử dụng sắc trắng đen để mang đến
              bộ sưu tập thời trang ứng dụng cho phái mạnh.
            </h3>
            <p className="indent-5 mt-2 text-base">
              Thời trang là một trong những yếu tố quyết định thành công và hiểu
              được tầm quan trọng của thời trang nam sẽ giúp chúng ta đặt bước
              chân vững chắc đến với thành công. Như chúng ta thấy hiện nay,
              những dòng thời trang cho nữ giới ngày càng nhiều, những cửa hàng
              quần áo phần lớn đều dành cho nữ giới, cửa hàng trang phục dành
              cho nam giới chiếm số lượng ít hơn hẳn. Mua sắm là căn bệnh chung
              của chị em phụ nữ, tuy nhiên nam giới cũng cần có thời trang cho
              riêng mình để thể hiện đẳng cấp. Một bộ trang phục chuyên nghiệp
              sẽ góp phần xây dựng thành công cho cả phái mạnh và phái đẹp. Đối
              với nữ giới các trang phục thiên về nhẹ nhàng, tươi tắn,.. luôn
              tạo cảm giác thoải mái cho người đối diện. Đối với nam giới quan
              điểm thời trang lại khác, sự tinh tế, sang trọng, chuyên nghiệp là
              cái mà thời trang nam giới hướng đến. Khi bạn đi phỏng vấn, một bộ
              trang phục gọn gàng, lịch sự sẽ luôn tạo ấn tượng cho người phỏng
              vấn. Khi bạn gặp khách hàng một bộ trang phục chuyên nghiệp sẽ
              luôn cho khách hàng yên tâm về công ty, tỷ lệ hợp tác sẽ cao hơn.
              Khi bạn hẹn hò một bộ trang phục tinh tế sẽ làm nổi bật tính cách
              và sự ngọt ngào trong bạn, gây ấn tượng mạnh với bạn gái. Nhìn
              trung trong cuộc sống, trang phục nói riêng và diện mạo nói chung
              luôn là yếu tố quan trọng quyết định thành công của bạn.
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <h3 className="text-2xl">Bài viết nổi bật</h3>
        
            <div className="grid gap-3 grid-cols-2 border-b-2 h-36 mt-4">
                <div className="h-4/6">
                <img
                className="w-full h-full"
                src="https://hidanz.com/wp-content/uploads/2021/05/phong-cach-thoi-trang-nam-7.jpg"
                alt=""
              />
                </div>
             
              <div className="flex items-center h-4/6">
                <h3 className="font-medium sm:truncate lg:whitespace-normal">
                  <Link to={``}>
                    LÀM VIỆC NĂNG SUẤT HƠN KHI MẶC TRANG PHỤC CÔNG SỞ
                  </Link>
                </h3>
              </div>
            </div>
            <div className="grid gap-3 grid-cols-2 border-b-2 h-36 mt-4">
            <div className="h-4/6">
                <img
                className="w-full h-full"
                src="https://bizweb.dktcdn.net/100/396/594/files/ao-polo-nam-trung-nien.png?v=1665020319266"
                alt=""
              />
                </div>
              <div className="flex items-center h-4/6">
                <h3 className="">
                  <Link to={``}>
                    LÀM VIỆC NĂNG SUẤT HƠN KHI MẶC TRANG PHỤC CÔNG SỞ
                  </Link>
                </h3>
              </div>
            </div>
            <div className="grid gap-3 grid-cols-2 border-b-2 h-36 mt-4">
              <img
                className="w-full h-4/6"
                src="https://hidanz.com/wp-content/uploads/2021/05/phong-cach-thoi-trang-nam-7.jpg"
                alt=""
              />
              <div className="flex items-center h-4/6">
                <h3 className="">
                  <Link to={``}>
                    LÀM VIỆC NĂNG SUẤT HƠN KHI MẶC TRANG PHỤC CÔNG SỞ
                  </Link>
                </h3>
              </div>
            </div>
            <div className="grid gap-3 grid-cols-2 border-b-2 h-36 mt-4">
              <img
                className="w-full h-4/6"
                src="https://hidanz.com/wp-content/uploads/2021/05/phong-cach-thoi-trang-nam-7.jpg"
                alt=""
              />
              <div className="flex items-center h-4/6">
                <h3 className="">
                  <Link to={``}>
                    LÀM VIỆC NĂNG SUẤT HƠN KHI MẶC TRANG PHỤC CÔNG SỞ
                  </Link>
                </h3>
              </div>
            </div>
            
          </div>
       
      </div>
    </div>
  );
};

export default DetailPost;
