import React, { Component } from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";
import { Link } from "react-router-dom";

class MoviesItem extends Component {
  state = {};
  render() {
    const { movie } = this.props;
    //console.log(movie.imdbID)
    return (
      <>
        <Link to={`/details/${movie.imdbID}`}>
          <Card className="m-2" inverse>
            <CardImg
              width="100%"
              src={movie.Poster}
              alt="Card image cap"
              style={{ backgroundColor: "transparent"}}
            />

            <CardImgOverlay>
              <CardText>
              
              </CardText>
            </CardImgOverlay>
          </Card>
        </Link>
      </>
    );
  }
}

export default MoviesItem;
