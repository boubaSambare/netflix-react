import React, { Component } from "react";
import { Row ,Col} from "reactstrap";
import MoviesItem from "./MoviesItem";

class MoviesList extends Component {
  render() {
    let { title, movies } = this.props;
    return (
      <>
        <h2 className="text-white"> {title}</h2>
        <Row className="my-4">
            
           {movies.map((item,i) =>  <Col className="col-md-3" key={i} > <MoviesItem movie={item}  key={i}></MoviesItem> </Col>)}
        </Row>
      </>
    );
  }
}

export default MoviesList;
