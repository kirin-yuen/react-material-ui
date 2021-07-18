import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import Note from "./views/Note";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: "#fefefe",
  //   },
  //   secondary: purple,
  // },
  // typography: {
  //   fontFamily: "Quicksand",
  //   fontWeightLight: 400,
  //   fontWeightRegular: 500,
  //   fontWeightMedium: 600,
  //   fontWeightBold: 700,
  // },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/create" component={Note}></Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
