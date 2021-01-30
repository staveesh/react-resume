import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Blog extends Component {
  render() {
    if (this.props.data) {
      var blogs = this.props.data.posts.map(function (blog) {
        var blogImage = `images/blog-${blog.id}/${blog.image}`;
        var url = "/" + blog.title.toLowerCase().split(" ").join("-");
        return (
          <div key={blog.title} className="columns blog-item">
            <div className="item-wrap">
              <Link to={url} title={blog.title}>
                <img alt={blog.title} src={blogImage} />
                <div className="overlay">
                  <div className="blog-item-meta">
                    <h5>{blog.title}</h5>
                    <p>{blog.category}</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="blog">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of my blog posts.</h1>

            <div id="blog-wrapper" className="bgrid-thirds s-bgrid-halves cf">
              {blogs}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
