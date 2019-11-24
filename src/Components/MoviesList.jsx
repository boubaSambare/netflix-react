import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import MoviesItem from "./MoviesItem";

class MoviesList extends Component {
  state = {
    movies: []
  };

 
  render() {
    let { movies} = this.state;
    console.log(movies)
    return (
      <div>
        {movies.map((item,i) => (
          <div key={i}> 
            <h1 className="text-white">{item.title}</h1>
            <Row>
              {item.allMovies.map((element,k) => (
                  <Col className="col-md-3" key={k}>
                  <MoviesItem movie={element} key={i} selectMovies={this.props.selectMovie}></MoviesItem>
                </Col>
              ))}
            </Row>
            </div>
        ))}
        
      </div>
    );
  }
              
              

  componentDidMount = async () => {
    let moviesNames = [
      "Harry potter",
      "Beauty and the Beast",
      "Star Wars",
      "Alice in Wonderland",
      "Beyond the Sea "
    ];
    for (let movieName of moviesNames) {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=17d07cb2&s=" + movieName
      );
      let results = await response.json();

      this.setState({
        movies: [
          ...this.state.movies,
          { allMovies: results.Search, title: movieName }
        ]
      });
    }
  };
}

export default MoviesList;
