(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{25:function(e,t,n){e.exports=n(67)},30:function(e,t,n){},31:function(e,t,n){},49:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),o=n.n(c),i=(n(30),n(31),n(3)),l=n.n(i),s=n(4),u=n(5),v=n(6),m=n(8),h=n(7),d=n(20),p=n.n(d),f=function(){var e=Object(s.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p()(t);case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),b=(n(49),n(21)),g=n(24),w=n.n(g),E=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],trailerUrl:""},e.getService=Object(s.a)(l.a.mark((function t(){var n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"GET",url:"https://api.themoviedb.org/3".concat(e.props.fetchUrl)},t.next=3,f(n);case 3:a=t.sent,e.setState({movies:a.data.results});case 5:case"end":return t.stop()}}),t)}))),e.handleClick=function(t){console.log("hey"),e.state.trailerUrl?(console.log("empty"),e.setState({trailerUrl:""})):w()((null===t||void 0===t?void 0:t.name)||"").then((function(t){var n=new URLSearchParams(new URL(t).search);console.log(n),e.setState({trailerUrl:n.get("v")})})).catch((function(e){return console.log(e)}))},e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.getService()}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,a=t.isLargeRow,c=this.state,o=c.movies,i=c.trailerUrl;return r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,n),r.a.createElement("div",{className:"row-posters"},o.map((function(t){return r.a.createElement("img",{onClick:function(){return e.handleClick(t)},className:"row-poster ".concat(a&&"row-posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original").concat(a?t.poster_path:t.backdrop_path),alt:t.name,key:t.id})}))),i&&r.a.createElement(b.a,{videoId:i,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}))}}]),n}(a.Component),k="bbe702b28dea3714bf604a719907b1a0",y={fetchTrending:"/trending/all/week?api_key=".concat(k,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(k,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(k,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(k,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(k,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(k,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(k,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(k,"&with_genres=99")},N=(n(65),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={bannerMovie:[]},e.bannerService=Object(s.a)(l.a.mark((function t(){var n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"GET",url:"https://api.themoviedb.org/3".concat(y.fetchNetflixOriginals)},t.next=3,f(n);case 3:a=t.sent,e.setState({bannerMovie:a.data.results[Math.floor(Math.random()*a.data.results.length-1)]});case 5:case"end":return t.stop()}}),t)}))),e.truncateDescription=function(e,t){return(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e},e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.bannerService()}},{key:"render",value:function(){var e=this.state.bannerMovie;return r.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original'.concat(null===e||void 0===e?void 0:e.backdrop_path,'")'),backgroundPosition:"center center"}},r.a.createElement("div",{className:"banner-content"},r.a.createElement("h1",{className:"banner-title"},(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.original_name)),r.a.createElement("div",{className:"banner-buttons"},r.a.createElement("button",{className:"banner-button"},"PLAY"),r.a.createElement("button",{className:"banner-button"},"WATCHLIST")),r.a.createElement("h1",{className:"banner-description"},this.truncateDescription(null===e||void 0===e?void 0:e.overview,150))),r.a.createElement("div",{className:"banner--fadeBottom"}))}}]),n}(a.Component)),O=(n(66),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showNav:!1},e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",(function(){window.scrollY>50?e.setState({showNav:!0}):e.setState({showNav:!1})}))}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("scroll",(function(){e.setState({showNav:!1})}))}},{key:"render",value:function(){var e=this.state.showNav;return r.a.createElement("div",{className:"nav ".concat(e&&"nav-black")},r.a.createElement("img",{className:"nav-logo",src:"https://truecostmovie.com/img/TTC/wp-content/uploads/2015/10/netflix_logo_digitalvideo-1.png",alt:"Netflix Logo"}),r.a.createElement("img",{className:"nav-avatar",src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png",alt:"Netflix User"}))}}]),n}(a.Component));var M=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,null),r.a.createElement(N,null),r.a.createElement(E,{title:"NETFLIX ORIGINALS",fetchUrl:y.fetchNetflixOriginals,isLargeRow:!0}),r.a.createElement(E,{title:"TOP TRENDING",fetchUrl:y.fetchTrending}),r.a.createElement(E,{title:"TOP RATED",fetchUrl:y.fetchTopRated}),r.a.createElement(E,{title:"ACTION MOVIES",fetchUrl:y.fetchActionMovies}),r.a.createElement(E,{title:"COMEDY MOVIES",fetchUrl:y.fetchComedyMovies}),r.a.createElement(E,{title:"HORROR MOVIES",fetchUrl:y.fetchHorrorMovies}),r.a.createElement(E,{title:"ROMANTIC MOVIES",fetchUrl:y.fetchRomanceMovies}))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.00ba30d9.chunk.js.map