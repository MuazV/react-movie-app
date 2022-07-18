import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Alert from '@mui/material/Alert';
import { Grid, Button, TextField } from "@material-ui/core";
import { Typography } from "@mui/material";
import regis from "../assets/Register.jpg";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError("")
    try {
      await signUp(email,password);
      navigate("/Main")
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}
      style={{
        backgroundImage: `url(${regis})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "87vh",
        overflow: "hidden"
      }}
    >
      <Grid
        container
        spacing={2}
        direction="column"
        alignContent="center"
        alignItems="center"
      >
        <Typography gutterBottom mt={5} variant="h4">
          Register
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <Grid item>
          <p style={{ fontSize: "1.5rem" }}>Email</p>
          <TextField
            focused
            type="email"
            placeholder="Enter your Email..."
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item>
          <p style={{ fontSize: "1.5rem" }}>Password</p>
          <TextField
            focused
            type="password"
            placeholder="Enter Your Password..."
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Grid>
        <Typography variant="body2" component="div" >
          Already have an account ? <Link style={{textDecoration: "none", color:"#0D65D9"}} to="/Login">Log In</Link>
        </Typography>
      </Grid>
    </form>
  );
};

export default Signup;
