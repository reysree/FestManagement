import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/material";
import LoginDialog from "./Login";

const Navbar = ({ setUsername }) => {
  const [openLogin, setOpenLogin] = useState(false);

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
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Fest Management
        </Typography>

        {/* Navigation Buttons */}
        <Box>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Events</Button>
          <Button color="inherit" onClick={handleOpenLogin}>
            Login
          </Button>
        </Box>
      </Toolbar>
      <LoginDialog
        open={openLogin}
        handleClose={handleCloseLogin}
        setUsername={setUsername}
      ></LoginDialog>
    </AppBar>
  );
};

export default Navbar;
