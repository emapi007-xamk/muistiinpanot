import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CircleIcon from '@mui/icons-material/Circle';
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { SystemStyleObject } from '@mui/system';
import { useEffect, useState } from "react";
import { Link, NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { colors } from "../Colors/Colors";
import Container from "../Styling/Container";

interface Props{
  notes : Note[]
  setNotes : (ar0 : Note[]) => void
}

const buttonStyle : SystemStyleObject = {
  padding: "1rem",
  minWidth: "6rem",
  height: "3rem",
  borderRadius: "50px",
  letterSpacing: "1.5px",
  textTransform: "none",
  border: "solid 2px",
  boxShadow: 5
}

const EditView: React.FC<Props> = ({ notes, setNotes }) : React.ReactElement => {

  const navigate : NavigateFunction = useNavigate();

  const { id } = useParams<any>();

  const noteToEdit : Note | undefined = notes.find((note : Note) => note.id === id);  

  const [color, setColor] = useState<string>(noteToEdit!.color);
  const [title, setTitle] = useState<string>(noteToEdit!.title);
  const [content, setContent] = useState<string>(noteToEdit!.contents);

  const [wordCount,setWordCount] = useState<number>(content.trim().split(/\s+/).length);

  //Sanalaskuri
  useEffect(() => {

    Boolean(!content) ? setWordCount(0) : setWordCount(content.trim().split(/\s+/).length);

  }, [content]);

  //Muutosten tallentaminen
  const handleSave = () : void => {

    let editedNote : Note = {
        date : new Date(),
        title : title,
        contents : content,
        color : `${color}`,
        id: noteToEdit!.id
    };
      
    setNotes([...notes.filter((note : Note) => note.id !== id), editedNote!]);
    navigate("/");  

  }

return (
  <Container
    backgroundColor={color}
  >
    {/*Takaisin-painike*/}
    <IconButton
      type="button"
      component={Link}
      to="/"
      sx={{
        position: "absolute",
        top: "1rem",
        left: "0.5rem"
      }}
    >
      <ArrowBackIosNewIcon
        fontSize="large"
        sx={{
          color: "#2d3239",
          opacity: "80%"
        }}/>
    </IconButton>
    {/*Textboxien keskitys*/}
    <Box
      sx={{
        display:"flex",
        width: "90%",
        maxWidth: "500px",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        height: "80vh",
      }}
    >
      {/*Värin valinta -painikkeet*/}
      <Box sx={{ margin : "0 auto", marginBottom: "0.3rem" }}>
          {colors.map( (color : Color, idx: number) =>
            <IconButton
              key={idx}
              onClick={() => setColor(color.code)}
            >
              <CircleIcon
                fontSize="large"
                sx={{
                  color: `${color.code}`,
                  margin: "0 0.5rem 0 0.5rem",
                  border: "1px solid #434b56",
                  borderRadius: "50px"
                }}
              />
            </IconButton>
          )}
      </Box>
      {/*Otsikko-textbox*/}
      <TextField
        name="title"
        defaultValue={noteToEdit!.title}
        variant="filled"
        fullWidth
        autoComplete="off"
        onChange={(e) => {setTitle(e.target.value)}}
        sx={{
          input: {
            color: "#434b56",
            fontSize: "1.5rem",
            fontWeight: "bold",
            "&::placeholder": {
              color: "#434b56",
              fontSize: "1.5rem",
              fontWeight: "bold"
            }
          }
        }}
      />
      {/*Sisältö-textbox*/}
      <TextField
        name="content"
        defaultValue={noteToEdit!.contents}
        variant="filled"
        fullWidth
        multiline
        rows={12}
        onChange={(e) => {setContent(e.target.value)}}
        sx={{ marginTop : "1rem" }}
      />
      {/*Sanalaskuri*/}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "end"
        }}>
        {Boolean(wordCount === 1)
          ? <Typography>{wordCount} sana</Typography>
          : <Typography>{wordCount} sanaa</Typography>
        }
      </Box>      
    </Box>                                   
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        marginTop: "2rem",
      }}>
      {/*Tallenna-painike*/}
      <Button
        variant="contained"
        onClick={handleSave}
        sx={{
          ...buttonStyle,
          backgroundColor: "#2d3239",
          color: {color},
        }}
      >Tallenna</Button>
    </Box>
  </Container>             
)
}


export default EditView