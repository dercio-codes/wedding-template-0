import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "../styles/Home.module.css"

const Hope = () => {
  return(
    <Box style={{background:'#ffdddd',width:'100vw',height:400,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',paddingBottom:30}}>
        <Typography variant="h4" align="center">
        HOPE YOU CAN MAKE IT!
        </Typography>

        <Typography align="center" style={{margin:'20px 0'}}>
        Kindly Respond By January, 2017
        </Typography>

        <button 
        className={styles.btn}
        style={{
          background: "rgb(236, 114, 135)",
          color: "white",
          width: 181,
          height: 64,
          outline: "none",
          border: "none",
          borderRadius: "3px",
          fontSize: 25,
          cursor:'pointer'
        }}
        
        >
            RSVP
        </button>
    </Box>
  );
};

export default Hope;
