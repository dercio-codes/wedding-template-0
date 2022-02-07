import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BottomNav() {
  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: "0",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={3}
          sx={{
            height: "70px",
            background: "#eee",
            padding: "16px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              "&:hover": {
                backgroundColor: "#ddd",
              },
            }}
          >
            Home
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            height: "70px",
            background: "#eee",
            padding: "16px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              "&:hover": {
                backgroundColor: "#ddd",
              },
            }}
          >
            Jane & John
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            height: "70px",
            background: "#eee",
            padding: "16px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              "&:hover": {
                backgroundColor: "#ddd",
              },
            }}
          >
            Wedding
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            height: "70px",
            background: "#eee",
            padding: "16px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              "&:hover": {
                backgroundColor: "#ddd",
              },
            }}
          >
            RSVP
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
