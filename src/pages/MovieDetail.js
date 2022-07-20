import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import NotFound from "./NotFound";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import Stack from "@mui/material/Stack";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const MovieDetail = () => {
  const [mov, setMov] = useState(null);
  const [error, setError] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=f0e3cd80d9792ddbd51d5414bb18040e`
        );
        setMov(data);
        console.log(data);
      } catch (error) {
        setError(true);
      }
    }
    getData();
  }, [id]);

 

  if (error) {
    return <NotFound />;
  } else if (!mov) {
    <Stack direction="row" spacing={2}>
      <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
        Fetch data
      </LoadingButton>
    </Stack>;
  } else {
    return (
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <Typography variant="h4" component="div">
          {mov.title}
        </Typography>
          <CardMedia
            sx={{ width: "30%" }}
            component="img"
            image={mov.poster_path ? `https://image.tmdb.org/t/p/w300/${mov.poster_path}` : NotFound}
          />
        <Typography variant="body2" component="div">
          {mov.overview}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
      </Container>
    );
  }
};
export default MovieDetail;
