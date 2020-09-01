import React, {Component} from "react";
import "./Nav.css";
class Nav extends Component {
  state = {
    showNav: false,
  };
  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        this.setState({showNav: true});
      } else this.setState({showNav: false});
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", () => {
      this.setState({showNav: false});
    });
  }
  render() {
    const {showNav} = this.state;
    return (
      <div className={`nav ${showNav && "nav-black"}`}>
        <img
          className="nav-logo"
          src="https://truecostmovie.com/img/TTC/wp-content/uploads/2015/10/netflix_logo_digitalvideo-1.png"
          alt="Netflix Logo"
        />
        <img
          className="nav-avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
          alt="Netflix User"
        />
      </div>
    );
  }
}

export default Nav;
