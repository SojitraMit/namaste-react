import React from "react";
import ReactDOM from "react-dom/client";

/* 
<div id="parent">
    <div id="child1">
        <h1>hello world1</h1>
        <h2>hello world2 </h2?
    </div>
    <div id="child2">
        <h1>hello world1</h1>
        <h2>hello world2 </h2?
    </div>
</div> 
*/

//React
const heading = React.createElement("h1", { id: "heading" }, "hello");

//JSX
const headingJSX = (
  <h1 id="heading" className="class">
    hello
  </h1>
);

//React functional component

const Title = () => <h1>hello1</h1>;

const HeadingComponent = () => {
  return <h1>hello component</h1>;
};

const HeadingComponent1 = () => <h1>hello</h1>;



//Component composition
const HeadingComponent2 = () => (
  <div>
    <Title />
    <h1>hello2</h1>
    {10000 + 100}
    <h1>10000</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />);

console.log(parent);
