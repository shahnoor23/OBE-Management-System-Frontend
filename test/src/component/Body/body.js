import React from "react";
import { Carousel } from "react-bootstrap";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { Table } from "reactstrap";
import Slide1 from "../../slide1.jpeg";
import Slide2 from "../../slide2.jpg";
import Slide3 from "../../slide3.jpg";

class BodyComponent extends React.Component {
  state = {
    index: null,
  };

  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Carousel activeIndex={this.state.index} onSelect={this.handleSelect}>
          <Carousel.Item>
            <img className="d-block w-50" src={Slide1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-50" src={Slide2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-50" src={Slide3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </React.Fragment>
    );
  }
}

export default withRouter(BodyComponent);
