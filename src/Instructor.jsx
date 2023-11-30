import React from "react";

class Instructor extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Instructor - Mounted");
  }

  componentDidUpdate() {
    console.log("Instructor - Updated");
  }

  componentWillUnmount() {
    console.log("Instructor - Unmounted");
  }

  render() {
    console.log("Render - Instructor");
    return (
      <div>
        Name: {this.props.instructor.name} <br />
        Email: {this.props.instructor.email} <br />
        Phone: {this.props.instructor.phone} <br />
      </div>
    );
  }
}

export default Instructor;
