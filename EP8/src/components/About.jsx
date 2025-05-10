import React from "react";
import { Link } from "react-router";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.setState = {
      one: 1,
      two: 2,
    };

    console.log("About Contructor");
  }

  componentDidMount() {
    // We can make API call here =====

    console.log("About Component did mount");
    this.timer = setInterval(() => {
      console.log("its running");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.one !== prevState.one) {
      // do something - one useEffect in FC
    }

    if (this.state.two !== prevState.two) {
      // do something - another useEffect in FC
    }

    // or =========

    // if(this.state.one !== prevState.one || this.state.two !== prevState.two){
    //     // this is like single useEffect with multiple values inside dependcies array
    // }

    console.log("About yes updated");
  }

  componentWillUnmount() {
    // cleanup your code here like clear interval, clear timeuot ====
    clearInterval(this.timer);

    console.log("About Component will unmount");
  }

  render() {
    console.log("About Render method");

    return (
      <>
        <Link to="/">Home Page</Link>
        <hr />
        <h1>This is About Page - {this.props.course}</h1>
      </>
    );
  }
}

export default About;
