import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { useUserAuth } from "../context/UserAuthContext";

export default function ButtonAppBar() {

  const {user, logOut} =useUserAuth();
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Box>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
          }}
        >
          <Typography variant="h6" component="div" sx={{ cursor: "pointer" }}>
            <Link style={{textDecoration: "none", color: "#fefefe"}} to="/">React Movie App</Link>
          </Typography>
          <Stack spacing={2} direction="row">
            {user ? <Typography variant="h6" color="lightgreen">Hoşgeldiniz {user.email}</Typography> : <Button variant="contained" color="primary"><Link to="/Login" style={{textDecoration: "none", color: "#fefefe"}}>Login</Link></Button>}
            {user ? <Button variant="contained" color="primary" onClick={handleLogout}><Link to="/Main" style={{textDecoration: "none", color: "#fefefe"}}>Logout</Link></Button> : <Button variant="contained" color="primary"><Link to="/Register" style={{textDecoration: "none", color: "#fefefe"}}>Register</Link></Button>}
            
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
