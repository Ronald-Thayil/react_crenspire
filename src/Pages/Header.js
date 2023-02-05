import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  Tooltip,
} from "@mui/material";
import { Avatar, Link, MenuItem } from "@mui/material";
import Logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(null);
  const navigate = useNavigate()
  const handleOpenUserMenu = (event) => {
    setIsOpenMenu(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setIsOpenMenu(null);
  };

  return (
    <AppBar
      position="static"
      style={{
        backgroundImage: "linear-gradient(to right, #6666ff, #ff99ff)",
      }}
    >
      <Container maxWidth="false">
        <>
          <Toolbar sx={{ display: "flex", justifyContent: "end" }}>
            <Box sx={{ flexGrow: 0, display: "flex" }}>
              <Tooltip title="logout">
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="user" src="" onClick={handleOpenUserMenu} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={isOpenMenu}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(isOpenMenu)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  primaryText="Logout"
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/login");
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </>
      </Container>
    </AppBar>
  );
};
export default Header;
