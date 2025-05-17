import React, { useContext, useEffect } from "react";
import { type UserContextValue, UserContext } from "../context/UserContext";

interface AboutPageProps {
  page: string;
}

const About: React.FC<AboutPageProps> = ({ page }) => {
  const { userInfo, setUserInfo, finalName } = useContext<UserContextValue>(UserContext);

  useEffect(() => {
    // API call for change the user name =====

    // const data = {
    //     newName: "React Dev"
    // }

    // setUserInfo((prev) => (
    //     {...prev, name: data.newName}
    // ))

  }, []);

  return (
    <div>
      <h1>This is {page} Page</h1>
      <h2>
        User is : <span>{userInfo.name} or {finalName}</span>
      </h2>
    </div>
  );
};

export default About;
