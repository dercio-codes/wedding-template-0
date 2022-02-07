import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


const JaneJoe = () => {
  return (
    <Box
      sx={{
        width: "99vw",
        background: "rgba(255, 221, 221, 0.7)",
        color: "#aaa",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: " 90px 220px"
      }}
    >
      <Typography variant="h4">Jane & John</Typography>
      <img
        src="JaneJohn.jpg"
        style={{
          objectFit: "contain",
          filter: "grayscale(80%)",
          marginTop: 40,
        }}
      />

      <Typography style={{ color: "black", margin: "40px 0" }}>
        You all know us. And we all know you. We are getting married lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </Typography>

      <button
        style={{
          background: "black",
          color: "white",
          width: 185,
          height: 60,
          outline: "none",
          border: "none",
          borderRadius: "3px",
          fontSize: 20,
        }}
      >
        Wedding Details
      </button>
    </Box>
  );
};

export default JaneJoe;
