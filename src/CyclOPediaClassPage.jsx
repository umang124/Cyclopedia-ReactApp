import React from "react";
import { getRandomUser } from "./Utility/api";

class CyclOPediaClassPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
      inputName: "Name...",
      inputFeedback: "",
    };
  }
  componentDidMount = async () => {
    console.log("Component Did Mount");
    const response = await getRandomUser();
    console.log(response);
    this.setState((prevState) => {
      return {
        instructor: {
          name: response.data.first_name + " " + response.data.last_name,
          email: response.data.email,
          phone: response.data.phone_number,
        },
      };
    });
  };
  componentDidUpdate() {
    console.log("Component Did Update");
  }
  componentWillUnmount() {
    console.log("Component Did Unmount");
  }

  handleAddStudent = () => {
    this.setState((prevState) => {
      return {
        studentCount: prevState.studentCount + 1,
      };
    });
  };

  handleRemoveAllStudents = () => {
    this.setState((prevState) => {
      return {
        studentCount: 0,
      };
    });
  };

  render() {
    console.log("Render Component");
    return (
      <div>
        {this.state.instructor && (
          <div className="p-3">
            <span className="h4 text-success">Instructor</span>
            <i className="bi bi-toggle-off btn btn-success btn-sm"></i>
            <br />
            Name: {this.state.instructor.name} <br />
            Email: {this.state.instructor.email} <br />
            Phone: {this.state.instructor.phone} <br />
          </div>
        )}
        <div className="p-3">
          <span className="h4 text-success">Feedback</span>
          <br />
          <input
            type="text"
            value={this.state.inputName}
            onChange={(e) => this.setState({ inputName: e.target.value })}
            placeholder="Name..."
          />
          <br />
          <textarea
            value={this.state.inputFeedback}
            onChange={(e) => this.setState({ inputFeedback: e.target.value })}
            placeholder="Feedback"
          />
        </div>
        <div className="p-3">
          <span className="h4 text-success">Students</span>
          <br />
          <div>Student Count : {this.state.studentCount}</div>
          <button
            onClick={this.handleAddStudent}
            className="btn btn-success btn-sm"
          >
            Add Student
          </button>{" "}
          &nbsp;
          <button
            onClick={this.handleRemoveAllStudents}
            className="btn btn-danger btn-sm"
          >
            Remove All Students
          </button>
        </div>
      </div>
    );
  }
}
export default CyclOPediaClassPage;
