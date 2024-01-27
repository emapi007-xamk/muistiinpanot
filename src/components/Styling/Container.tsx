import { Box } from "@mui/material";

interface Props {
  children : any
  backgroundColor : string
}

const Container : React.FC<Props> = ( props : Props ) : React.ReactElement => {

  return (                
    <Box
      sx={{
          overflow: "hidden",
          position: "relative",
          display:"flex",
          width: "100vw",
          maxWidth: "100%",
          flexDirection:"column",
          alignItems:"center",
          justifyContent:"center",
          minHeight: "100vh",
          height: "100%",
          backgroundColor: `${props.backgroundColor}`,
        }}
    >{props.children}</Box>
 );
}

export default Container;