import * as React from "react";
import AppBar from "@mui/material/AppBar";
import ButtonGroup from "@mui/material/ButtonGroup";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {Link } from 'react-router-dom';



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
          <Typography variant="h6" component="div" sx={{cursor:"pointer"}}>
            <Link to="/">React Movie App</Link>
          </Typography>
          <ButtonGroup spacing={3} >
            <Button color="inherit" sx={{mr: 2, 
            
            
            borderLeftColor: 'primary.main', borderLeftStyle: 'solid', borderLeftWidth: '0.1em',
            cursor:"pointer"
            }}>Login</Button>
            <Button
              color="inherit"
              sx={{
                mr: 3,
                borderLeftColor: 'primary.main', 
                borderLeftStyle: 'solid', 
                borderLeftWidth: '0.1em',
                borderRightWidth: '0.1em',
                borderRightColor: 'primary.main', 
                borderRightStyle: 'solid',
                cursor:"pointer"
              }}
            >
              Register
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
