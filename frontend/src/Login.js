import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Register from "./Register";
import axios from "axios";

const Login = ({ open, handleClose, setUsername }) => {
  // State to store username and password
  //const [username, setLocalUsername] = useState("");
  //const [password, setPassword] = useState("");
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [studentDetails, setStudentDetails] = useState({
    firstName: "",
    lastName: "",
    gid: "",
    email: "",
    password: "",
  });

  const handleRegister = () => {
    setIsRegisterOpen(true);
  };

  const handleRegisterClose = () => {
    setIsRegisterOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleLogin = async () => {
    // Implement login logic here
    try {
      const response = await axios.post(
        "http://localhost:8080/api/students/login",
        studentDetails
      );
      const userData = response.data;
      console.log(userData);
      setUsername(userData);
      console.log("Username:", userData);
      console.log("Password:", studentDetails.password);

      setStudentDetails({
        firstName: "",
        lastName: "",
        gid: "",
        email: "",
        password: "",
      });
      handleClose();
    } catch (error) {
      console.log("Error retrieving login details :", error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        {/* Username Field */}
        <TextField
          autoFocus
          margin="dense"
          label="G No."
          name="gid"
          type="text"
          fullWidth
          variant="outlined"
          value={studentDetails.gid}
          onChange={handleInputChange}
        />

        {/* Password Field */}
        <TextField
          margin="dense"
          label="Password"
          name="password"
          type="password"
          fullWidth
          variant="outlined"
          value={studentDetails.password}
          onChange={handleInputChange}
        />
      </DialogContent>

      <DialogActions style={{ justifyContent: "space-between" }}>
        <Box>
          <Button color="secondary" onClick={handleRegister}>
            Register Here
          </Button>
        </Box>
        <Box>
          <Button
            style={{ marginRight: "10px" }}
            onClick={handleClose}
            color="error"
            variant="contained"
          >
            Cancel
          </Button>
          <Button onClick={handleLogin} color="success" variant="contained">
            Login
          </Button>
        </Box>
      </DialogActions>
      <Register
        open={isRegisterOpen}
        handleClose={handleRegisterClose}
      ></Register>
    </Dialog>
  );
};

export default Login;
