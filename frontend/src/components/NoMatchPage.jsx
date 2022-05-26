import React, { Component } from "react";

export default class NoMatchPage extends Component {
  render() {
    return (
      <div>
        <h4>404: Page Not Found</h4>
      </div>
    );
  }
  componentDidMount() {
    document.title = "404-Audley";
  }
}
