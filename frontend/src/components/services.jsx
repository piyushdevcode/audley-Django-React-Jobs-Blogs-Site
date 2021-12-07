import React, { Component } from "react";
import { ReactComponent as recicon } from "../img/recruitIcon.svg";
export default class Service extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Iycon = this.props.icon;

    return (
      <div className="services">
        <Iycon classname="service-icon" />
        <div className="service-title">{this.props.title}</div>
        <div className="service-subtitle">{this.props.subtitle}</div>
      </div>
    );
  }
}
