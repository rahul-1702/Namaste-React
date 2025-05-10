import React from "react";
import { Link } from "react-router";

class ClassComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      theme: "dark",
    };
    console.log(this.props.name + " ClassComp Contructor");
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ theme: this.state.theme === "light" ? "dark" : "light" });
    }, 1000);
    console.log(this.props.name + " ClassComp Component did mount");
  }

  componentDidUpdate(){
    console.log(this.props.name + " yes updated");
  }

  componentWillUnmount(){
    console.log(this.props.name + " Component will unmount");
  }

  render() {
    const { name, age } = this.props;
    const { count, theme } = this.state;

    console.log(name + " ClassComp Render method");

    return (
      <>
        <h1>Theme is {theme}</h1>
        <div>
        <Link to={"/about"}>About Page</Link>
        <hr />
        </div>
        <button
          onClick={() => {
            // this.setState({ theme: theme === "light" ? "dark" : "light" });
          }}
        >
          Toggle Theme
        </button>
        <h2>Class Based Component - {count} times rendered</h2>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Increase Count
        </button>
        <p>Name : {name}</p>
        <p>Age : {age}</p>
      </>
    );
  }
}

// const ClassComp = ({ name, age }) => {
//   const [count, setCount] = useState(0);
//   const [theme, setTheme] = useState("dark");

//   return (
//     <>
//       <h1>Theme is {theme}</h1>
//       <button
//         onClick={() => {
//           setTheme((prev) => (prev === "light" ? "dark" : "light"));
//         }}
//       >
//         Toggle Theme
//       </button>
//       <h2>Class Based Component - {count} times rendered</h2>
//       <p>Name : {name}</p>
//       <p>Age : {age}</p>
//     </>
//   );
// };

export default ClassComp;
