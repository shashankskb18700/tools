import React ,{useState} from 'react';
import Accordion from './component/Accordion';
import Search from "./component/Search";
import Dropdown from "./component/Dropdown"
import Translate from './component/Translate'
 const items=[ {
    title: "what is React",
    content: "React is a fornt end development framework",
  },
  {
    title: "why use React",
    content: "React is a favorite js  framework among enginners",
  },
  {
    title: "how do you use React",
    content: "you use react by creating components",
  },
 ];

const options = [
  {
    label: "the color Red",
    value: "red",
  },
  {
    label: "the color Blue ",
    value: "blue",
  },
  {
    label: "the color Green",
    value: "green",
  },
];

const App = () => { 
  return (
    <div>
     
      <Translate />
   </div>
  )
}

export default App;
