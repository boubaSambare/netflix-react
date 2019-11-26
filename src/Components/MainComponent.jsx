import React, { Component } from 'react';
import NavComponent from './NavComponent';
import { Container, Row, Col } from "reactstrap";
import MoviesList from './MoviesList';
import MoviePage  from './MoviePage'

class MainComponent extends Component {
   
    state ={
        selectedMovieId: undefined
    }

    selectMovie = movie => {
        this.setState({
          selectedMovieId: movie
        });
      };
    
    render() {

        return (
            <>
               <NavComponent></NavComponent>
               <Container>
                  {this.state.selectedMovieId !== undefined &&  <MoviePage selectMovie={this.state.selectedMovieId}></MoviePage>}
                  {!this.state.selectedMovieId &&  <MoviesList selectMovie={this.selectMovie}/>}
               </Container>
            </>
        );
    }

    
}

export default MainComponent;