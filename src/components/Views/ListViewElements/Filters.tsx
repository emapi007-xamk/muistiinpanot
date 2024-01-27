import CircleIcon from '@mui/icons-material/Circle';
import ClearIcon from '@mui/icons-material/Clear';
import { Box, Button, Divider, FormControl, Grid, IconButton, InputBase, Menu, MenuItem, Select } from "@mui/material";
import { SystemStyleObject } from '@mui/system';
import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { colors } from "../../Colors/Colors";

interface Props{
  category : string,
  setCategory : (arg0 : string) => void
  searchText : string
  setSearchText : (arg0 : string) => void
  order : string
  setOrder : (arg0 : string) => void
}

const buttonStyle : SystemStyleObject = {
  padding: "1rem",
  height: "3rem",
  borderRadius: "50px",
  letterSpacing: "1.5px",
  textTransform: "none",
  border: "1px solid white",
  background: "#eceef9",
  boxShadow:  "6px 6px 8px #babcc5, -4px -4px 8px #ffffff"
}

const Filters : React.FC<Props> = ({ category, setCategory, searchText, setSearchText, order, setOrder }) : React.ReactElement => {

  const navigate : NavigateFunction = useNavigate();

  //Menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {

    navigate("/");

    setAnchorEl(event.currentTarget);

  };

  const handleClose = () => {

    setAnchorEl(null);

  };

  return (               
    <Grid
      container
      spacing={2}
      rowSpacing={2}
      sx={{ marginBottom: "1.5rem" }}
    >
      {/*Hakupalkki*/}
      <Grid item xs={12}>
        <Box
          sx={{
               ...buttonStyle,
               display: "flex",
               alignItems: "center"
          }}
        > 
          <InputBase
            placeholder="Etsi muistiinpanoista"
            value={searchText}
            onChange={ (e) => {setSearchText(e.target.value)}} 
            sx={{
              flex: 1,
              marginLeft: "1rem",
              input: {
                "&::placeholder": {
                  color: "#000000",
                  letterSpacing: "1px",
                }
              }
            }}
          />
          <Divider
            orientation="vertical"
            sx={{ height: 28, margin: 0.5 }}
          />
          <IconButton
            type="button"
            onClick={() => setSearchText("")}
            sx={{ padding: '10px' }}
          ><ClearIcon/></IconButton>
        </Box>
      </Grid>
      {/*Värikategorian valinta*/}
      <Grid item xs={4}>
        <Button
            variant="text"
            fullWidth
            onClick={handleMenu}
            sx={{ ...buttonStyle }}
        >
        <CircleIcon
          fontSize="small"
          sx={{
            color: `${category}`,
            marginRight: "0.5rem",
            border: "1px solid #000000",
            borderRadius: "50px"
          }}
        />
        Väri
        </Button>
        {/*Väri-menu*/}
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            style: {
              marginTop: "0.5rem",
              borderRadius: "15px",
              backgroundColor: "#383e47",
              opacity: "99%"
            }
            }}
        >
          <MenuItem
            onClick={() => {setCategory("#eceef9"); handleClose()}}
            sx={{color: "#eceef9"}}
          >Kaikki</MenuItem>
        {colors.map( (color : Color, idx: number) =>
          <MenuItem
            key={idx}
            onClick={() => {setCategory(color.code); handleClose()}}
          ><CircleIcon sx={{color: `${color.code}`, margin: "0 auto"}}/>
          </MenuItem>
        )}
        </Menu>
      </Grid>
      {/*Aikajärjestyksen valinta*/}
      <Grid item xs={8}>
        <FormControl variant="standard" fullWidth>
          <Select
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            disableUnderline
            sx={{ ...buttonStyle, padding: "1rem" }}
            SelectDisplayProps={{ style: { padding: "1rem", transitionDuration: "0s !important" } }}
            MenuProps={{
              PaperProps:{
                style: {
                  marginTop: "0.5rem",
                  paddingLeft: "1rem",
                  borderRadius: "15px",
                  backgroundColor: "#383e47",
                  opacity: "99%"
                }
              }
            }}
          >
            <MenuItem 
              value={"Uusin ensin"}
              sx={{ color: "#eceef9" }}
            >Uusin ensin</MenuItem>
            <MenuItem
              value={"Vanhin ensin"}
              sx={{ color: "#eceef9" }}
            >Vanhin ensin</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
 );
}

export default Filters;