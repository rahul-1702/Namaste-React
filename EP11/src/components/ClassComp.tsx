import { Component, type Context } from "react";
import { type UserContextValue, UserContext } from "../context/UserContext";

interface ClassCompProps {
  page: string;
}

interface ClassCompState {
  color: string;
}

export default class ClassComp extends Component<
  ClassCompProps,
  ClassCompState
> {
  static contextType: Context<UserContextValue> = UserContext;
  constructor(props: ClassCompProps) {
    super(props);
    this.state = {
      color: "red",
    };
  }

  componentDidMount(): void {
    const context = this.context as UserContextValue;
    if (context && context.setUserInfo) {
      context.setUserInfo((prev) => ({ ...prev, name: "Elon Musk" }));
    }
  }

  render() {
    return (
      <div>
        <h2>
          This is {this.props.page} with color {this.state.color} with <span>{(this.context as UserContextValue).userInfo.name}</span>
        </h2>
        <UserContext.Consumer>
          {(data: UserContextValue) => {
            return (
              <h3>
                User is : <span>{data.userInfo.name} and {data.finalName}</span>
              </h3>
            );
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}
