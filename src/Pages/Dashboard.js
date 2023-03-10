import { Checkbox, FormControlLabel } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHeaderToken } from "../api/client";
import CommonTable from "../components/CommonTable";
import { fetchProducts } from "../redux/reducers/productSlice";
import Header from "./Header";
const Dashboard = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    const userLocal = localStorage.getItem("token");
    setHeaderToken(userLocal);
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <CommonTable data={products} />
    </>
  );
};

export default Dashboard;
