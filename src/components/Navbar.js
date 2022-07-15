import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";

export default function ButtonAppBar() {
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
            <Link to="/">React Movie App</Link>
          </Typography>
          <Stack spacing={2} direction="row">
            <Button variant="outlined" color="success">Login</Button>
            <Button variant="outlined" color="success">Logout</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
