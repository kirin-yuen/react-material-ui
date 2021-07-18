import { Avatar, Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";
import React from "react";
import style from "./style";

export default function NoteCard({ note, remove }) {
  const { clsAvatar } = style(note);

  return (
    <Card elevation={5}>
      <CardHeader
        avatar={<Avatar className={clsAvatar}>{note.category[0].toUpperCase()}</Avatar>}
        action={<DeleteOutline onClick={() => remove(note.id)} />}
        title={note.title}
        subheader={note.category}
      ></CardHeader>
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
}
