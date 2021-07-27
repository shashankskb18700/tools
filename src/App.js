import React from 'react';
import Accordion from './component/Accordion';
import Search from "./component/Search";
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

const App = () => {
  return (
    <div>
      
      <Search/>
   </div>
  )
}

export default App;
