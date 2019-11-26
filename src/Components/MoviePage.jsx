import React, { Component } from "react";
import { Row, Col, ListGroup, ListGroupItem } from "reactstrap";

class MoviePage extends Component {
  state = {
    movie: undefined
  };
  render() {
    const { movie } = this.state;
    return (
      <div>
        {movie && (
          <Row>
            <Col className="col-md-6">
              <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
            </Col>
            <Col className="col-md-6">
              <h2 className="text-white">
                {movie.Title}({movie.Year})
              </h2>
              <ListGroup>
                <ListGroupItem>Plot: {movie.Plot}</ListGroupItem>
                <ListGroupItem>Actors: {movie.Actors}</ListGroupItem>
                <ListGroupItem>Genre: {movie.Genre}</ListGroupItem>
                <ListGroupItem>Runtime: {movie.Runtime}</ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        )}
      </div>
    );
  }

  componentDidMount = async () => {
    await this.getMovieDetail();
  };

  getMovieDetail = async () => {
    let response = await fetch(
      "http://www.omdbapi.com/?apikey=17d07cb2&i=" + this.props.selectMovie
    );
    let results = await response.json();
    this.setState({
      movie: results
    });
  };
}

export default MoviePage;
