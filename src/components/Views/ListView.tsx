import { useState } from "react";
import Container from "../Styling/Container";
import Wrapper from "../Styling/Wrapper";
import AddButton from "./ListViewElements/AddButton";
import Filters from "./ListViewElements/Filters";
import Header from "./ListViewElements/Header";
import NotesList from "./ListViewElements/NotesList";

interface Props {
  notes : Note[]
  setNotes : (ar0 : Note[]) => void
  category : string
  setCategory : (arg0 : string) => void
}

const ListView : React.FC<Props> = ({ notes, setNotes, category, setCategory }) : React.ReactElement => {

  const [order, setOrder] = useState<string>("Uusin ensin");
  const [searchText, setSearchText] = useState<string>("");

  return (
    <Container backgroundColor="#eceef9">
      <Wrapper>             
        <Header/>
        <Filters
          category={category}
          setCategory={setCategory}
          searchText={searchText}
          setSearchText={setSearchText}
          order={order}
          setOrder={setOrder}
        />
        <NotesList
          notes={notes}
          setNotes={setNotes}
          category={category}
          searchText={searchText}
          order={order}
        />
      </Wrapper>
      <AddButton/>
    </Container>
 );
}

export default ListView;