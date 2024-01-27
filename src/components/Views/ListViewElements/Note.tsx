import CloseIcon from '@mui/icons-material/Close';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Divider, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface Props {
  note : Note
  notes : Note[]
  setNotes : (ar0 : Note[]) => void
}

const Header : React.FC<Props> = ({ note, notes, setNotes }) : React.ReactElement => {

  const navigate : NavigateFunction = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    //Poisto
    const handleDelete = (id : string) => {

      setNotes([...notes.filter((note : Note) => note.id !== id)]);
      navigate("/");
  
    }

  return (                
    <motion.div
      transition={{ type: "spring", bounce: 0.3 }}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      style={{
        minWidth: "150px",
        minHeight: "100px",
        maxHeight: "550px",
        display:"flex",
        flexDirection: "column",
        position: "relative",
        backgroundColor: `${note.color}`,
        borderRadius: "15px",
        padding: "1.1rem",
        }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between"
        }}
      >
        {/*Otsikko*/}
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize:"1.3rem",
            marginBottom: "0.9rem",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden"
          }}
        >{note.title}</Typography>

        {/*Muokkausvalikko*/}
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ marginLeft: 2 }}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            sx: {
              overflow: 'visible',
              marginTop: 1,
              borderRadius: "15px",
              backgroundColor: "#383e47",
              opacity: "99%",
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "#383e47",
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={() => navigate(`/edit/${note.id}`)}>
            <Typography sx={{ color: "#eceef9" }}>
              Muokkaa
            </Typography>
          </MenuItem>
          <MenuItem onClick={() => handleDelete(note.id)}>
            <Typography sx={{ color: "#eceef9" }}>
              Poista
            </Typography>
          </MenuItem>
          <Divider sx={{ backgroundColor: "#7e899a" }} />
          <MenuItem onClick={handleClose}>
            <CloseIcon
              fontSize='small'
              sx={{
                marginRight: "5px",
                color: "#eceef9"
              }}
            />
            <Typography sx={{ color: "#eceef9" }}>
              Sulje
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
      {/*Sisältö*/}
      <Typography
          sx={{
            maxWidth: '100%',
            fontSize: "0.9rem",
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 9,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'pre-line'
          }}
      >{note.contents}</Typography>
      {/*Päiväys ja aika*/}
      <Typography
        sx={{
          marginTop: "0.9rem",
          fontSize: "0.8rem",
          textAlign: "end",
        }}
      >{format(note.date, "d.M.Y HH.mm")}</Typography>
    </motion.div>
 );
}

export default Header;