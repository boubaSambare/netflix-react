import React, { Component } from 'react';
import NavComponent from './NavComponent';
import { Container, Row, Col } from "reactstrap";
import MoviesList from './MoviesList';

class MainComponent extends Component {
    state = {
        movies: []
    }
    render() {
        return (
            <>
               <NavComponent></NavComponent>
               <Container>
                   {this.state.movies.map((item,i) => <MoviesList movies={item.allMovies} title={item.title} key={i}></MoviesList>)}
               </Container>
            </>
        );
    }

    componentDidMount = async () => {
        let moviesNames = ["Harry potter", "Beauty and the Beast", "Star Wars", "Alice in Wonderland","Beyond the Sea "]
        for (let movieName of moviesNames) {
            let response = await fetch("http://www.omdbapi.com/?apikey=17d07cb2&s=" +movieName)
            let results = await response.json()

            this.setState({
                movies: [...this.state.movies, {allMovies: results.Search, title: movieName}]
            })
        }

    }
}

export default MainComponent;