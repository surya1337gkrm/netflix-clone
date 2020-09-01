import React, {Component} from "react";
import requests from "./../api/requests";
import {getData} from "./../api/api";
import "./Banner.css";
class Banner extends Component {
  state = {
    bannerMovie: [],
  };
  componentDidMount() {
    this.bannerService();
  }
  bannerService = async () => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`,
    };
    let tempBanner = await getData(options);
    this.setState({
      bannerMovie:
        tempBanner.data.results[
          Math.floor(Math.random() * tempBanner.data.results.length - 1)
        ],
    });
  };
  truncateDescription = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  render() {
    const {bannerMovie} = this.state;
    // console.log(bannerMovie);
    return (
        <header
          className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original${bannerMovie?.backdrop_path}")`,
            backgroundPosition: "center center",
          }}
        >
          <div className="banner-content">
            <h1 className="banner-title">
              {bannerMovie?.title ||
                bannerMovie?.name ||
                bannerMovie?.original_name}
            </h1>
            <div className="banner-buttons">
              <button className="banner-button">PLAY</button>
              <button className="banner-button">WATCHLIST</button>
            </div>
            <h1 className="banner-description">
              {this.truncateDescription(bannerMovie?.overview, 150)}
            </h1>
          </div>
          <div className="banner--fadeBottom" />
        </header>
    );
  }
}

export default Banner;
