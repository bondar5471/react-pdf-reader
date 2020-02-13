import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Container } from "@material-ui/core";
import PDFContainer from "./components/PDFContainer";
import Header from "./components/Header";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  main: {
    paddingLeft: "200px",
    paddingRight: "24px",
    paddingTop: "70px"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <Header />
      <Container className={classes.main}>
        <Switch>
          <Route exact path="/news/:slug" component={PDFContainer} />
          <Redirect to="/news/newsPDF" />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
