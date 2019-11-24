import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class MoviePage extends Component {
  render() {
    const { selectMovie } = this.props;
    return (
      <div>
        <Row>
          <Col className="col-md-6">
            <img
              src={selectMovie.Poster}
              alt={selectMovie.Ttle}
              className="img-fluid"
            />
          </Col>
          <Col className="col-md-6">
            <h2 className="text-white">
              {selectMovie.Title}({selectMovie.Year})
            </h2>
            
          </Col>
        </Row>
      </div>
    );
  }
}

export default MoviePage;
