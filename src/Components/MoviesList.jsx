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
        {movies.map((item,i) => (
          <div key={i}> 
            <h1 className="text-white">{item.title}</h1>
            <Row>
            <Col className="col-md-12" >
              <Slider {...settings}>
                {item.allMovies.map((element,k) => (
                   
                    <MoviesItem movie={element} key={k} ></MoviesItem>
                 
                ))}
              </Slider>
              </Col>
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
