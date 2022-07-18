import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import NotFound from "../assets/NotFound.png";
import { useNavigate } from "react-router-dom";
import {useState} from "react";


export default function ActionAreaCard({ itemm }) {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const { title, poster_path: path, overview } = itemm;

  return (
    <Card
      onClick={() => navigate("/Main")}
      onMouseOver={() => setShow(false)}
      onMouseOut={() => setShow(true)}
      sx={{ height: "450px", overflow: "hidden" }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={path ? `https://image.tmdb.org/t/p/w300/${path}` : NotFound}
        />
        <CardContent sx={{ bgcolor: "#3f51b5" }}>
          <Typography
            gutterBottom
            mb={2}
            variant="h5"
            component="div"
            color="white"
            sx={{height: "100px"}}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
                  position: "absolute",
                  bottom:"0px",
                  overflow: "hidden",
                  backgroundColor: "white",
                  transform: `translateY(-100px)`,
                  margin: "1rem",
                  transition: "2s all ease",
                  maxHeight:
                    show === true 
                    ? "0px"
                    : "500px",
                }}
          >
            {overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
