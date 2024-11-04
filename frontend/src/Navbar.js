import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/material";
import Login from "./Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setUsername }) => {
  const [openLogin, setOpenLogin] = useState(false);

  const navigate = useNavigate();

  const goToPayments = () => {
    navigate("/payments");
  };

  const goToHome = () => {
    navigate("/");
  };

  const handleOpenLogin = () => {
    setOpenLogin(true);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#333333" }}>
      <Toolbar>
        {/* Icon Button for Menu */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        {/* Title of the Website */}
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Fest Management
        </Typography>

        {/* Navigation Buttons */}
        <Box>
          <IconButton
            color="inherit"
            onClick={goToPayments}
            aria-label="add to cart"
          >
            <ShoppingCartIcon />
          </IconButton>
          <Button color="inherit" onClick={goToHome}>
            Home
          </Button>
          <Button color="inherit">Events</Button>
          <Button color="inherit" onClick={handleOpenLogin}>
            Login
          </Button>
        </Box>
      </Toolbar>
      <Login
        open={openLogin}
        handleClose={handleCloseLogin}
        setUsername={setUsername}
      ></Login>
    </AppBar>
  );
};

export default Navbar;
