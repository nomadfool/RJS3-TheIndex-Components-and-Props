import React, { Component } from "react";

//Components
import AuthorCard from "./AuthorCard";

class AuthorList extends Component {
  render() {
    let author = this.props.authors.map(author => (
      <AuthorCard author={author} key={author.first_name} />
    ));
    return (
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">{author}</div>
      </div>
    );
  }
}
export default AuthorList;
