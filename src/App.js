import React from "react";
import Dropdown from "./components/Dropdown";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
const items = [
  {
    title: "What is react?",
    content: "React is a component based js framework",
  },
  {
    title: "why use react?",
    content: "React uses modular components that do only one thing well",
  },
  { title: "How do you use react", content: "By creating components" },
];
const App = () => {
  return (
    <div>
      <Dropdown />
    </div>
  );
};
export default App;
