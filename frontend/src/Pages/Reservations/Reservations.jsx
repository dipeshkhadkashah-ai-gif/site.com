import React, { useState } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  Box,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import styles from "./styles.module.css";

const Reservations = () => {
  const persons = [
    { name: "Rejina", position: "BOD", post: "Portriat" },
    { name: "Deepesh", position: "MD", post: "Wild-Life" },
    { name: "Eunice", position: "Assistant", post: "Landscape" },
    { name: "Sonu", position: "Owner", post: "Videography" },
    { name: "William", position: "Senior", post: "Senior.Photographer" },
    { name: "John", position: "Junior", post: "Photographer" },
  ];
  return (
    <div style={{margin:'50px'}}>
      <h3 style={{ textAlign: "center" }}>Reservation</h3>
      <Grid container spacing={2}>
        {persons.map((person) => (
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 500 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="h3.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {person.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   {person.position}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   {person.post}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="large" color="primary">
                  Hire
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Reservations;
