export const domain = "https://bookstore.eraasoft.pro/api"


// check token
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const useCheckToken = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);
};
