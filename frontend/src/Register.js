import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

const Register = ({ open, handleClose }) => {
  // State as a JSON object for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gid: "",
    email: "",
    password: "",
  });

  // Handle changes for each form field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle registration submission
  const handleRegister = async () => {
    try {
      // Send POST request to backend
      const response = await axios.post(
        "http://localhost:8080/api/students/register",
        formData
      );
      console.log("Registration successful:", response.data);

      // Clear form data or show a success message
      setFormData({
        firstName: "",
        lastName: "",
        gid: "",
        email: "",
        password: "",
      });
      handleClose();
    } catch (error) {
      console.error("Error during registration:", error);
      // Optionally, handle error by showing a message to the user
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Register</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="First Name"
          name="firstName"
          type="text"
          fullWidth
          variant="outlined"
          value={formData.firstName}
          onChange={handleChange}
        />
        <TextField
          autoFocus
          margin="dense"
          label="Last Name"
          name="lastName"
          type="text"
          fullWidth
          variant="outlined"
          value={formData.lastName}
          onChange={handleChange}
        />
        <TextField
          autoFocus
          margin="dense"
          label="G No."
          name="gid"
          type="text"
          fullWidth
          variant="outlined"
          value={formData.gid}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Email"
          name="email"
          type="email"
          fullWidth
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Password"
          name="password"
          type="password"
          fullWidth
          variant="outlined"
          value={formData.password}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary" variant="contained">
          Cancel
        </Button>
        <Button onClick={handleRegister} color="primary" variant="contained">
          Register
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Register;
