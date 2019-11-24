import React, { Component } from 'react';
import NavComponent from './NavComponent';
import { Container, Row, Col } from "reactstrap";
import MoviesList from './MoviesList';
import MoviePage  from './MoviePage'

class MainComponent extends Component {
   
    state ={
        selectedMovie: undefined
    }

    selectMovie = movie => {
        this.setState({
          selectedMovie: movie
        });
      };
    
    render() {
        return (
            <>
               <NavComponent></NavComponent>
               <Container>
                  {this.state.selectedMovie &&  <MoviePage selectMovie={this.state.selectedMovie}></MoviePage>}
                  {!this.state.selectedMovie &&  <MoviesList selectMovie={this.selectMovie}/>}
               </Container>
            </>
        );
    }

    
}

export default MainComponent;