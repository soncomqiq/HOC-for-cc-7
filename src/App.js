import React, { Component, PureComponent } from 'react';
import './App.css';
import RenderOnlyName from './components/RenderOnlyName';
import TableRow from './components/TableRow';

class App extends Component {
  constructor(props) {
    super();
    console.log("[App.js] Constructor");
    this.state = {
      announcement: "This is announcement.",
      students: [
        {
          "name": "Colby Gallagher",
          "email": "elit.pellentesque.a@pharetrafeliseget.co.uk",
          "age": 39
        },
        {
          "name": "Norman Britt",
          "email": "fringilla@tempor.ca",
          "age": 68
        },
        {
          "name": "Isaac Jacobs",
          "email": "eros.Proin@ametfaucibus.org",
          "age": 25
        },
      ],
      isShow: true,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[App.js] getSnapshotBeforeUpdate");
    return { x: 5, y: 10 };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[App.js] componentDidUpdate", snapshot);
  }

  changeName = () => {
    const newStudentList = [...this.state.students];
    newStudentList[0].age = 65;
    this.setState({ students: newStudentList });
  };

  setName = (name) => () => {
    this.setState({ announcement: name });
  };

  updateFirstPersonsAge = () => {
    // const newStdList = this.state.students; // Bad practices
    const newStdList = [...this.state.students]; // Best practices
    newStdList[0].name = "google";
    this.setState({ students: newStdList });
  };

  render() {
    console.log("[App.js] render");
    const studentList = this.state.students;
    const isShow = this.state.isShow;

    return (
      <div className="App" >
        <button onClick={this.updateFirstPersonsAge}>Change The first person's age</button>
        <button onClick={this.setName("Sonter")}>Set The Name</button>
        <h1>{this.state.announcement}</h1>
        <input
          value={this.state.announcement}
          onChange={(e) => this.setState({ announcement: e.target.value })}
          style={{ fontSize: "25px" }} />
        <button onClick={() => this.setState({ announcement: "" })} style={{ fontSize: "25px" }}>RESET</button>
        <button onClick={() => this.setState({ isShow: !isShow })} style={{ fontSize: "25px" }}>Hide</button>
        <table style={{ width: "100% ", fontSize: "24px" }}>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Announcement</th>
          </tr>
          {isShow && studentList.map((student, idx) =>
            <TableRow
              key={idx}
              email={student.email}
              name={student.name}
              age={student.age}
              bgColor="#DCD3FF"
              setName={this.setName}
            />
          )}
        </table>
        <RenderOnlyName stdList={this.state.students} />
      </div>
    );
  }
}

export default App;
