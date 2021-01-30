import React, { Component } from "react";
import ReactGA from "react-ga";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Blog from "./Components/Blog";
import Testimonials from "./Components/Testimonials";
import { Switch, Route } from "react-router-dom";
import BlogPost from "./Components/BlogPost";

class App extends Component {
  constructor(props) {
    super(props);

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <div>
                <Header {...props} data={this.props.data.main} />
                <About {...props} data={this.props.data.main} />
                <Blog {...props} data={this.props.data.blogs} />
                <Resume {...props} data={this.props.data.resume} />
                <Testimonials {...props} data={this.props.data.testimonials} />
                <Footer {...props} data={this.props.data.main} />
              </div>
            )}
          />
          {this.props.data.blogs.posts.map((post) => {
            var url = "/" + post.title.toLowerCase().split(" ").join("-");
            return (
              <Route
                exact
                key={post.id}
                path={url}
                render={(props) => (
                  <div>
                    <BlogPost {...props} id={post.id} />
                    <Footer {...props} data={this.props.data.main} />
                  </div>
                )}
              />
            );
          })}
        </Switch>
      </div>
    );
  }
}

export default App;
