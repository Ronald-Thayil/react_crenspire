import * as React from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { api } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../redux/reducers/authSlice";
import { addUser } from "../redux/reducers/userSlice";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formValues = new FormData(event.currentTarget);
    let param = {
      phoneNo: formValues.get("PhoneNo"),
      password: formValues.get("password"),
    };
    try {
      
      const { data } = await api.user.login(param);
      if (data.success) {
        localStorage.setItem("token", data.data.token);
        dispatch(addToken(data.data.token));
        let userValue = data.data;
        delete userValue.token;
        dispatch(addUser(userValue));
        enqueueSnackbar(data.message, { variant: 'success' });
        navigate('/dashboard')
  
      }
      else{
        enqueueSnackbar(data.message, { variant: 'error' });
      }
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  console.log(token, "tokentoken",user);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="PhoneNo"
            label="Mobile No"
            name="PhoneNo"
            autoComplete="PhoneNo"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
