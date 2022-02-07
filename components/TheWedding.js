import Typography from "@mui/material/Typography";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Banner() {
  return (
    <Box
      sx={{
        minHeight: "200vh",
        width: "99vw",
        background:'rgba(255, 221, 221, 0.7)',
        color: "#aaa",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3">THE WEDDING</Typography>
      <img
        src="https://www.w3schools.com/w3images/wedding_location.jpg"
        alt=""
        style={{
          objectFit: "contain",
          filter: "grayscale(80%)",
        }}
      />

      <Box
        sx={{
          color: "black",
          width: "75%",
          paddingLeft: "52px",
          paddingRight: "52px",
          paddingTop: "16px",
          paddingBottom: "16px",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={6}
            sx={{
              height: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6" sx={{ margin: "12px" , fontSize:'24px' }}>
              THE WEDDING
            </Typography>
            <Typography variant="p" sx={{ margin: "8px" , fontSize:'18px'}}>
              Wedding Ceremony - 2:00pm
            </Typography>
            <Typography variant="p" sx={{ margin: "8px" , fontSize:'18px'}}>
              Reception & Dinner - 5:00pm
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              height: "150px",
              display: "flex",
              justifyContent: "CENTER",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6" sx={{ margin: "12px" , fontSize:'24px' }}>
              WHERE
            </Typography>
            <Typography variant="p" sx={{ margin: "8px", fontSize:'18px' }}>
            Some place, an address
            </Typography>
            <Typography variant="p" sx={{ margin: "8px" , fontSize:'18px'}}>
            Some where, an address
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
