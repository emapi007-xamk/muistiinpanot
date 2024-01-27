import { Box, Typography } from "@mui/material";

const Header : React.FC = () : React.ReactElement => {

  return (                
    <Box sx={{
          width: "100%",
          display:"flex",
          flexDirection: "column"
         }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontFamily: "Permanent Marker, cursive",
          letterSpacing: "5px",
          fontSize: "2.4rem",
          marginBottom: "1rem",
          marginTop: "1rem",
          marginLeft: "0.7rem"
        }}
      >Muistio.</Typography>
    </Box>
 );
}

export default Header;