import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Alert from "@mui/material/Alert";
import { Grid, Button, TextField } from "@material-ui/core";
import { Typography } from "@mui/material";
import log from "../assets/Login.jpg";
import GoogleButton from "react-google-button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate(-1);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/Main");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#F2F2F2",
        height: "85vh",
        overflow: "hidden",
        display: "flex",
        justifyContent:"center",
        alignItems: "flex-start",
        paddingTop: "1rem"

      }}
    >
      <Grid item md={6} xs={6}>
        <img src={log} alt="img" width="100%" />
      </Grid>
      <Grid
        container
        spacing={2}
        direction="column"
        alignContent="center"
        alignItems="center"
        md={6} xs={6}
      >
        <Typography gutterBottom mt={5} variant="h4">
          Login
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
        <Typography variant="body2" component="div">
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </Typography>
        <Typography variant="body2" component="div">
        Don't have an account ?
          <Link
            style={{ textDecoration: "none", color: "#0D65D9" }}
            to="/Register"
          >
            Sign Up
          </Link>
        </Typography>
      </Grid>
    </form>
  );
};

export default Login;
