import {
  Container,
  FormControlLabel,
  Button,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  useTheme,
} from "@material-ui/core";
import { KeyboardArrowRight } from "@material-ui/icons";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const URI = "http://localhost:9999/notes";

export default function Note() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("reminders");
  const history = useHistory();
  const theme = useTheme(); //  useTheme 用法

  const handleSubmit = (e) => {
    e.preventDefault();

    title === "" ? setTitleError(true) : setTitleError(false);
    details === "" ? setDetailsError(true) : setDetailsError(false);
    // ? titleError,detailsError 此时输出是 false，为何
    // console.log(titleError,detailsError);

    if (title && details) {
      fetch(URI, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      })
        .then(({ ok, url, status }) => {
          if (ok) {
            history.push("/home");
          } else {
            throw new Error(`${url} ${status}`);
          }
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <Container>
      <Typography variant="h4" color="textSecondary" component="h2" gutterBottom>
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
          <FormControlLabel label="money" value="money" control={<Radio />} />
          <FormControlLabel label="todos" value="todos" control={<Radio />} />
          <FormControlLabel label="reminders" value="reminders" control={<Radio />} />
        </RadioGroup>
        <TextField
          error={titleError}
          onChange={(e) => setTitle(e.target.value)}
          label="Note Title"
          fullWidth
          color="primary"
        />
        <TextField
          error={detailsError}
          onChange={(e) => setDetails(e.target.value)}
          label="Note Details"
          fullWidth
          color="primary"
          rows={2}
          maxRows={4}
          multiline
        />
        <Button
          style={{ marginTop: theme.spacing(3) }}
          color="primary"
          type="submit"
          variant="contained"
          endIcon={<KeyboardArrowRight />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
