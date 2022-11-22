import { SubmitHandler, useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { addComment, getComment, removeComemnt } from "../../api-cilent/User";
import avatablack from "./assets/img/avatar-blank.png";
import { useParams } from "react-router-dom";
import moment from "moment";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import { readUserLocal } from "../../redux/slices/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
type Props = {};
type Inputs = {
  content: string;
};

const Comment = (props: Props) => {
  const [dataComment, setDatacomment] = useState([]);
  // console.log(dataComment);

  const user = useSelector((state: any) => state?.auth.currentUser);
  // console.log(user.users);
  const product = useSelector((state: any) => state.product.product);
  // console.log("sản phẩm",product.name);
  

  const { id } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(readUserLocal());

    // setUser(JSON.parse(localStorage.getItem("user") as any));
  }, [dispatch]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  useEffect(() => {
    (async () => {
      const { data } = await getComment(id);
      setDatacomment(data);
    })();
  }, [dataComment.length]);

  const Sendcomment: SubmitHandler<Inputs> = async (datas: Inputs) => {
    addComment({
      content: datas?.content,
      productId: id,
      userId: user.users.id,
    }).then((result: any) => {
      setDatacomment((prev: any) => {
        return [...prev, result];
      });
    });
  };
  const handleremove = (id: any) => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn xóa không?",
      text: "Không thể hoàn tác sau khi xóa",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result: any) => {
      console.log(id);

      if (result.isConfirmed) {
        await removeComemnt(id);
        Swal.fire("Thành công!", "Xóa thành công.", "success");
        setDatacomment(dataComment.filter((item) => item._id != id));
      }
    });
  };
  return (
    <div>
      <div className="containerx">
        <h2 className="heading-title">Bình luận về : {product.name}</h2>
        {user?.users && (
          <form
            action=""
            className="form_comment"
            onSubmit={handleSubmit(Sendcomment)}
          >
            <textarea
              id=""
              {...register("content", {
                required: "Vui lòng nhập tên bài viết",
              })}
              cols={30}
              placeholder="Mời bạn để lại bình luận..."
              rows={6}
              defaultValue={""}
            />
            <div className="text-sm mt-0.5 text-red-500">
              {errors.content?.message}
            </div>
            <button type="submit">GỬI</button>
          </form>
        )}
        <div className="list-comments_wrapper">
          <div className="comments_wrapper">
            {dataComment?.map((e: any, index) => {
              var date1 = moment();
              var date2 = moment(e.createdAt);
              var diffYear = date1.diff(date2, "year");
              var diffMonth = date1.diff(date2, "month");
              var diffHour = date1.diff(date2, "hour");
              var diffDay = date1.diff(date2, "day");
              var difMinute = date1.diff(date2, "minute");
              var diffSecond = date1.diff(date2, "second");
              let text = "";
              if (diffYear) {
                text = diffYear + " Năm";
              } else if (diffMonth) {
                text = diffMonth + " Tháng";
              } else if (diffDay) {
                text = diffDay + " Ngày";
              } else if (diffHour) {
                text = diffHour + " Giờ";
              } else if (difMinute) {
                text = difMinute + " Phút";
              } else if (diffSecond) {
                text = diffSecond + " Giây";
              } else {
                text = 1 + " Giây";
              }

              //   moment(endTimes).format("HH:mm")
              return (
                  <div className="item" key={index} >
                    <div className="user dp-flex">
                      <img
                        src={e?.user?.img || avatablack}
                        alt=""
                        className="avata"
                      />
                      <div className="info">
                        <h3 className="name">{e?.user?.fullname}</h3>
                        <span className="time-comment">{text} trước</span>
                      </div>
                    </div>
                    <span className="content">{e?.content} </span>
                    {e?.userId == user?.users?.id && (
                      <div className="icon">
                        <span onClick={() => handleremove(e?.id)}>
                          <FontAwesomeIcon
                            className="font_icon"
                            icon={faTrash}
                          />
                          Xóa
                        </span>
                        <span>
                          <FontAwesomeIcon className="font_icon" icon={faPen} />
                          Sửa
                        </span>
                      </div>
                    )}
                  </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
