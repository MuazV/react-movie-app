import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";

const Main = () => {
  const [input, setInput] = useState("");

  let apiKey = process.env.REACT_APP_API_KEY;
  let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${input}`
 


  const getData = async() => {
    const {data} = await axios.get(url)
    console.log(data)
  }

  useEffect(() => {
    getData()
  },[])

  const handleClick = () => {
    getData()
    setInput('')
  }
  


  return (
    <div>
      <Box sx={{ bgcolor: "lightgray" }}>
        <TextField
          id="standard-basic"
          placeholder="Search a Movie"
          variant="standard"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="contained" onClick={handleClick}>Search</Button>
      </Box>
    </div>
  );
};

export default Main;
