import React, { useState } from "react";
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
const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "A shade of blue",
    value: "blue",
  },
];
const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Dropdown
        options={options}
        onSelectedChange={setSelected}
        selected={selected}
      />
    </div>
  );
};
export default App;
