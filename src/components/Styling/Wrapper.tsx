import { Box } from "@mui/material";

interface Props {
  children : any 
}

const Wrapper : React.FC<Props> = ( props : Props ) : React.ReactElement => {

  return (                
    <Box
      sx={{
        width:"90%",
        position: "relative",
        maxWidth: "750px",
        minHeight: "100vh",
        height: "100%",
        margin:"0 auto",
        display:"flex",
        flexDirection: "column"      
      }}
    >{props.children}</Box>
 );
}

export default Wrapper;