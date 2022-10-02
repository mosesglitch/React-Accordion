import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
import Translate from "./components/Translate";
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
  return (
    <div>
      <Translate />
      {console.log("why")}
    </div>
  );
};
export default App;

// const [selected, setSelected] = useState(options[0]);
// const [showDropdown, setShowDropdown] = useState(true);
// return (
//   <div>
//     <button onClick={() => setShowDropdown(!showDropdown)}>
//       Toggle Dropdown
//     </button>
//     {showDropdown ? (
//       <Dropdown
//         options={options}
//         onSelectedChange={setSelected}
//         selected={selected}
//       />
//     ) : null}
//   </div>
// );
// };
// export default App;
