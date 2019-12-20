import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import MoviesItem from "./MoviesItem";
import Slider from 'react-slick'

class MoviesList extends Component {
  state = {
    movies: []
  };

 
  render() {
    const settings ={
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    let { movies} = this.state;
    console.log(movies)
    return (
      <div>
       
          <div > 
            <h1 className="text-white">Movies</h1>
            <Row>
            <Col className="col-md-12" >
              <Slider {...settings}>
                {movies.map((element,k) => (
                   
                    <MoviesItem movie={element} key={k} ></MoviesItem>
                 
                ))}
              </Slider>
              </Col>
            </Row>
            </div>
        
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
  
      let response = await fetch(
        "https://bk-netflix.herokuapp.com/media"
      );
      let results = await response.json();

      this.setState({
        movies: results
      });
    }
  
}

export default MoviesList;
