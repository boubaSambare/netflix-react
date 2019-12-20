import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class Review extends Component {
  render() {

    const { comments } = this.props;
    return (
      <ListGroup className="my-2">
        <ListGroupItem>
          <strong>Author:</strong>{" "}
          {comments.author ? comments.author : "Anonymous"}{" "}
        </ListGroupItem>
        <ListGroupItem>
          <strong>Comment:</strong> {comments.comment}
        </ListGroupItem>
        <ListGroupItem>
          <strong>Rate:</strong>
          {comments.rate}
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default Review;
