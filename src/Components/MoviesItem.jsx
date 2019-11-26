import React, { Component } from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";

class MoviesItem extends Component {
    state = {}
  render() {
      const {movie,selectMovies} = this.props
      //console.log(movie.imdbID)
    return (
      <>
        <Card className="m-2" onClick={() => selectMovies(movie.imdbID)} inverse>
          <CardImg
            
            width="100%"
            src={movie.Poster}
            alt="Card image cap"
            style={{backgroundColor: 'transparent'}}
            
          />
          <CardImgOverlay>
            <CardTitle>{movie.Title}</CardTitle>
            <CardText>
            </CardText>
            <CardText>
    <small className="text-muted">{movie.Year}</small>
            </CardText>
          </CardImgOverlay>
        </Card>
      </>
    );
  }
}

export default MoviesItem;
