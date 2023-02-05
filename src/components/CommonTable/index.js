import React, { useEffect, useMemo } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
  Checkbox,
  FormControlLabel,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/reducers/productSlice";
const TableHeader = styled(Typography)({
  color: "blueviolet",
  textAlign: "center",
  marginTop: "20px",
  fontSize: "22px",
  fontWeight: "bold",
});

const filterValues = (filterVal, mainData) => {
  let sortType = [];
  for (let i = 0; i < filterVal.length; i++) {
    if (filterVal[i]) {
      sortType.push(i);
    }
  }
  let orgArr = [];
  for (let j = 0; j < mainData.length; j++) {
    if (sortType.includes(mainData[j].type)) {
      orgArr.push(mainData[j]);
    }
  }
  return orgArr;
};

const TYPE_COLORS = {
  0: "#48BEFF",
  1: "#3DFAFF",
  2: "#43C59E",
  3: "#3D7068",
  4: "#14453D",
};

const CommonTable = ({ data }) => {
  const [checked, setChecked] = React.useState([
    true,
    false,
    true,
    false,
    false,
  ]);
  const filterData = useMemo(() => {
    return filterValues(checked, data);
  });
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <FormControlLabel
            label="All"
            control={
              <Checkbox
                checked={
                  checked[0] &&
                  checked[1] &&
                  checked[2] &&
                  checked[3] &&
                  checked[4]
                }
                onChange={(e) => {
                  setChecked([
                    e.target.checked,
                    e.target.checked,
                    e.target.checked,
                    e.target.checked,
                    e.target.checked,
                  ]);
                }}
              />
            }
          />
          <FormControlLabel
            label="Type1"
            control={
              <Checkbox
                checked={checked[0]}
                onChange={(e) => {
                  setChecked([
                    e.target.checked,
                    checked[1],
                    checked[2],
                    checked[3],
                    checked[4],
                  ]);
                }}
              />
            }
          />
          <FormControlLabel
            label="Type2"
            control={
              <Checkbox
                checked={checked[1]}
                onChange={(e) => {
                  setChecked([
                    checked[0],
                    e.target.checked,
                    checked[2],
                    checked[3],
                    checked[4],
                  ]);
                }}
              />
            }
          />
          <FormControlLabel
            label="Type3"
            control={
              <Checkbox
                checked={checked[2]}
                onChange={(e) => {
                  setChecked([
                    checked[0],
                    checked[1],
                    e.target.checked,
                    checked[3],
                    checked[4],
                  ]);
                }}
              />
            }
          />
          <FormControlLabel
            label="Type4"
            control={
              <Checkbox
                checked={checked[3]}
                onChange={(e) => {
                  setChecked([
                    checked[0],
                    checked[1],
                    checked[2],
                    e.target.checked,
                    checked[4],
                  ]);
                }}
              />
            }
          />
          <FormControlLabel
            label="Type5"
            control={
              <Checkbox
                checked={checked[4]}
                onChange={(e) => {
                  setChecked([
                    checked[0],
                    checked[1],
                    checked[2],
                    checked[3],
                    e.target.checked,
                  ]);
                }}
              />
            }
          />
        </Box>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "100px" }}>#</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right" style={{ fontWeight: "100px" }}>
                  Wallet 1
                </TableCell>
                <TableCell align="right">Wallet 2</TableCell>
                <TableCell align="right">Wallet 3</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filterData.map((val) => {
                return (
                  <TableRow>
                    <TableCell align="right" sx={{ backgroundColor: TYPE_COLORS[val.type] }}>
                      {val.type}
                    </TableCell>
                    <TableCell align="right">{val.email}</TableCell>
                    <TableCell align="right">{val.fullName}</TableCell>
                    <TableCell align="right">{val.wallet1}</TableCell>
                    <TableCell align="right">{val.wallet2}</TableCell>
                    <TableCell align="right">{val.wallet3}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default CommonTable;
