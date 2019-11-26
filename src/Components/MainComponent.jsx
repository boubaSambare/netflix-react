import React, { Component } from "react";
import NavComponent from "./NavComponent";
import { Container, Row, Col } from "reactstrap";
import MoviePage from "./MoviePage";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route} from "react-router-dom";

class MainComponent extends Component {
  


  render() {
    return (
      <>
        <Router>
          <NavComponent></NavComponent>
          <Container>
            <Route path="/" exact component={HomePage}/>
            <Route path="/details/:movieId" component={MoviePage} />
           
          </Container>
        </Router>
      </>
    );
  }
}

export default MainComponent;
