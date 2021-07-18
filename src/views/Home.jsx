import Masonry from "react-masonry-css";
import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
const URI = "http://localhost:9999/notes";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [updateCount, forceUpdate] = useState({});
  // 模拟 forceUpdate

  console.log("Home render================");

  const handleRemove = (id) => {
    fetch(`${URI}/${id}`, {
      method: "delete",
    })
      .then(({ ok, url, status }) => {
        if (ok) {
          forceUpdate({});
        } else {
          throw new Error(`${url} ${status}`);
          // return Promise.reject(`${url} ${status}`);
          //   const a = 2;
          //   a++;
          console.log("能看到这里？");
        }
      })
      .catch((error) => console.error(error));
  };

  // componentDidMount & componentDidUpdate
  useEffect(() => {
    fetch(URI)
      .then((resp) => resp.json())
      .then((data) => setNotes(data));
  }, [updateCount]);

  const breakpoints = {
    default: 3,
    1100: 2,
    800: 1,
  };

  return (
    <Container maxWidth="xl">
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div key={note.id}>
            <NoteCard note={note} remove={handleRemove}></NoteCard>
          </div>
        ))}
      </Masonry>
    </Container>
  );
}
