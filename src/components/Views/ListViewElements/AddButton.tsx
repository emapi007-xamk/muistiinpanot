import { Fab } from '@mui/material';
import Box from '@mui/material/Box';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { Link } from 'react-router-dom';

const AddButton : React.FC = () : React.ReactElement => {
  
  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        width: "100%",
        justifyContent: "center",
        bottom: "3rem",
      }}
    >
      <Fab
        type="button"
        component={Link}
        to={"/addnew"}
        sx={{
          background: "#383e47",
          opacity: "97%",
          borderRadius: "100%",
          border: "solid #f1eff5 1.9px",
          boxShadow: 6
        }}
      ><SpeedDialIcon sx={{ color: "#eceef9" }}/></Fab>
    </Box>


  );
}
  
export default AddButton;