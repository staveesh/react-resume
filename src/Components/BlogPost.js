import React, { Component } from "react";
import "../BlogPost.css";
import marked from "marked";
import $ from "jquery";

export default class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { markdown } = this.state;
    return (
      <div className="post">
        <article dangerouslySetInnerHTML={{ __html: markdown }}></article>
      </div>
    );
  }

  getBlogData() {
    $.ajax({
      url: `./blog/blog-${this.props.id}.md`,
      dataType: "text",
      cache: false,
      success: function (text) {
        this.setState({ markdown: marked(text) });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getBlogData();
  }
}
