import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Banner() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundImage:
          "url(https://www.w3schools.com/w3images/wedding_couple.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "grayscale(50%)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:'column'
      }}
    >
      <Typography variant="h1">Jane & John</Typography>
      <Typography variant="h4">Are getting married</Typography>
      <Typography variant="h2">17.07.2017</Typography>
    </Box>
  );
}
