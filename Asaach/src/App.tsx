import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppProviders } from "./Provider/AppProviders";
import Application from "./Component/application/application";
import Counter from "./Component/counter/counter";
import Skills from "./Component/Skill/skill";
import { MuiMode } from "./Component/mui/MuiMode";
import { CounterTwo } from "./Component/counter-two/counter-two";
import Users from "./Component/users/users";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Application />
        <Counter />
        <Skills skills={["HTML", "CSS"]} />
        <MuiMode />
        <CounterTwo count={0} />
        <Users />
      </div>
    </AppProviders>
  );
}

export default App;
