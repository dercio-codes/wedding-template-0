import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const YouAreInvited = () => {
  return (
    <Box
    sx={{
      height: "100vh",
      width: "100vw",
      backgroundImage:
        "url(./flowers.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection:'column'
    }}
  >
    <Typography variant="h2" style={{marginBottom:40}}>You Are Invited</Typography>
    
    <Typography style={{fontSize:30}}>Of course..</Typography>
  </Box>
  )
};

export default YouAreInvited;
