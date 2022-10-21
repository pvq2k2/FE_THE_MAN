import React from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

type PrivateRouterProps = {
  children: JSX.Element;
};
const { users } = JSON.parse(localStorage.getItem("user") ?? "{}");

const PrivateRouter = (props: PrivateRouterProps) => {
  if (users) {
    if (users.role != 1) {
      toast.success("Yêu cầu đăng nhập bằng tài khoản Admin !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return <Navigate to={"/signin"} />;
    } else {
      <Navigate to={"/admin"} />;
    }
  }
  return props.children;
};

export default PrivateRouter;
