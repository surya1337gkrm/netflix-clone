import React, {Component} from "react";

import {getData} from "./../api/api";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const imageBaseUrl = "https://image.tmdb.org/t/p/original";
class Row extends Component {
  state = {
    movies: [],
    trailerUrl: "",
  };
  componentDidMount() {
    this.getService();
  }
  getService = async () => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3${this.props.fetchUrl}`,
    };
    let tempData = await getData(options);
    this.setState({movies: tempData.data.results});
  };
  handleClick = (movie) => {
    console.log('hey')
    if (this.state.trailerUrl) {
      console.log("empty");
      this.setState({trailerUrl: ""});
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          this.setState({trailerUrl: urlParams.get("v")});
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    const {title, isLargeRow} = this.props;
    const {movies, trailerUrl} = this.state;
    const opts = {
      height: "390",
      width: "100%",
      playerVars: {
        autoplay: 1,
      },
    };
    return (
      <div className="row">
        <h2>{title}</h2>
        <div className="row-posters">
          {movies.map((movie) => {
            return (
              <img
                onClick={() => this.handleClick(movie)}
                className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                src={`${imageBaseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                key={movie.id}
              />
            );
          })}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    );
  }
}

export default Row;
