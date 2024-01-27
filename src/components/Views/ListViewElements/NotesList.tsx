import { Masonry } from '@mui/lab';
import { Typography } from "@mui/material";
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from "react";
import Note from './Note';

interface Props {
  notes : Note[]
  setNotes : (ar0 : Note[]) => void
  category : string
  searchText : string
  order : string
}

const NotesList : React.FC<Props> = ({ notes, setNotes, category, searchText, order }) : React.ReactElement => {

  const [displayData, setDisplayData] = useState<Note[]>(notes);

  //Tulosten filtteröinti
  useEffect(() => {

  setDisplayData([]);

  setTimeout(() => {

    const searchResults = notes.filter((note: Note) => {
      return (
        note.contents.toLowerCase().includes(searchText.toLowerCase()) ||
        note.title.toLowerCase().includes(searchText.toLowerCase()) 
      );
    });

    const filteredData = () => {

      if(category === "#eceef9"){

        if(order === "Vanhin ensin"){
  
          return searchResults;
          
        }else{
  
          return searchResults.sort((a: Note, b: Note) => b.date.getTime() - a.date.getTime());
          
        }
      
      }else{

        if(order === "Vanhin ensin"){
  
          return searchResults.filter((note: Note) => note.color === category);
          
        }else{
  
         return searchResults.filter((note: Note) => note.color === category).sort((a: Note, b: Note) => b.date.getTime() - a.date.getTime());
          
        }
      }
    }

    setDisplayData(filteredData);

    }, 300);


  }, [category, searchText, order, notes]);


  useEffect(() => {
    window.addEventListener('error', e => {
        if (e.message === 'ResizeObserver loop limit exceeded') {
            const resizeObserverErrDiv = document.getElementById(
                'webpack-dev-server-client-overlay-div'
            );
            const resizeObserverErr = document.getElementById(
                'webpack-dev-server-client-overlay'
            );
            if (resizeObserverErr) {
                resizeObserverErr.setAttribute('style', 'display: none');
            }
            if (resizeObserverErrDiv) {
                resizeObserverErrDiv.setAttribute('style', 'display: none');
            }
        }
    });
  }, []);

  return (
    <>
     {Boolean(Object.keys(notes).length < 1)
      ? <Typography sx={{ marginTop: "1rem", textAlign: "center" }}>Lisää ensimmäinen muistiinpano.</Typography>
      : <Masonry
          columns={{ xs: 1, sm: 2, md: 3}}
          spacing={1}
          sx={{
            marginBottom: "5rem",         
            width: "100%",
            gap: "15",
            overflow: "hidden"
          }}
        >
          <AnimatePresence>        
            {displayData.map((note : Note, idx: number) =>
              <Note
                key={idx}
                note={note}
                notes={notes}
                setNotes={setNotes}
              />
            )}
          </AnimatePresence>  
        </Masonry>
     }             
  </>
 );
}

export default NotesList;