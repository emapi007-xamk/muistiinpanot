import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import theme from "./components/Styling/Theme";
import AddView from "./components/Views/AddView";
import EditView from "./components/Views/EditView";
import ListView from "./components/Views/ListView";

const App : React.FC = () : React.ReactElement => {

  const [category, setCategory] = useState<string>("#eceef9");

  //Local storageen tallennettujen tietojen haku
  const [notes, setNotes] = useState<Note[]>(() => {

    const notesFromStorage = localStorage.getItem("notes");

    return Boolean(notesFromStorage)
      ? JSON.parse(String(notesFromStorage)).map((note : Note) => {
          return {
            ...note,
            date : new Date(note.date)
          }
        })
      : []
  });

  //Tietojen tallentaminen local storage
  useEffect(() => {

    localStorage.setItem("notes", JSON.stringify(notes));

  }, [notes]);

  return (
  <CssBaseline>
    <ThemeProvider theme={ theme }>
        <Routes>
          <Route
            path="/"
            element={
              <ListView
                notes={notes}
                setNotes={setNotes}
                category={category}
                setCategory={setCategory}
              />
            }
          />
          <Route
            path="/addnew"
            element={
              <AddView
                notes={notes}
                setNotes={setNotes}
                setCategory={setCategory}
              />
            }
          />
          <Route
            path="/edit/:id"
            element={
              <EditView
                notes={notes}
                setNotes={setNotes}
              />
            }
          />
        </Routes>
    </ThemeProvider>
  </CssBaseline>
  );
}

export default App;