import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";
import Movie from "../components/Movie";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Main = () => {
  const [input, setInput] = useState("baby");
  const [movies, setMovies] = useState([]);
  const [state, setState] = useState(true);

  const {user} =useUserAuth();

  const navigate = useNavigate();

  let apiKey = process.env.REACT_APP_API_KEY;
  let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${input}`;

  const getData = async () => {
    const { data } = await axios.get(url);
    console.log(data);
    setMovies(data.results);
  };
  useEffect(() => {
    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <Container sx={{backgroundColor: "#94BDF2"}}>
      <Box sx={{padding:"1rem", textAlign:"center" }}>
        <TextField
          placeholder="Search a Movie"
          variant="standard"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          sx={{marginRight:"2rem"}}
          focused
        />
        <Button variant="contained" onClick={() => (user ? setState(!state) : alert("Hoooop Giriş yapmadan olmaz...")
        )}>
          Search
        </Button>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {movies?.map((itemm) => {
          const { id} = itemm
          return (<Grid item xs={2} sm={4} md={3} key={id}>
            <Item 
            onClick={() => {user ? navigate(`/Main/${id}`, { state: itemm }) : alert("Giriş Yapmadan Nasıl içerigi Görcen Birader")}}>
              {<Movie itemm={itemm} />}
            </Item>
          </Grid>)
        })}
      </Grid>
    </Container>
  );
};

export default Main;
