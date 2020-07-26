import React from "react";
import axios from "axios";
import User from "./user";
import { connect } from "react-redux";

class App extends React.Component {
  getData() {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((resp) => {
        console.log(resp);
        this.props.dispatch({
          type: "upload",
          payload: resp.data.data,
        });
      })
      .catch((err) => {
        console.log({ message: err });
      });
  }
  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <User />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    firstName: state.firstName,
    lastname: state.lastname,
    email: state.email,
  };
};
export default connect(mapStateToProps)(App);
