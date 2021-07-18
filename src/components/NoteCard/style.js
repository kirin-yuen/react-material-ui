import {
  makeStyles
} from "@material-ui/core";
import {
  yellow,
  green,
  pink,
  blue
} from "@material-ui/core/colors";

export default makeStyles({
  clsAvatar: {
    backgroundColor: (note) => {
      switch (note.category) {
        case "work":
          return yellow[700];
        case "money":
          return green[700];
        case "todos":
          return pink[700];
        default:
          return blue[500];
      }
    },
  },
});