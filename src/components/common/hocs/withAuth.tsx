/* eslint-disable react/display-name */
import { ComponentType, useEffect } from "react";
import { NavigationUtil } from "../../../utils/navigation";
import { useNavigate } from "react-router";

export const withAuth = (Component: ComponentType) => (props: any) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      alert("please login first");
      navigate(NavigationUtil.auth);
    }
  }, []);

  return <Component {...props} />;
};
