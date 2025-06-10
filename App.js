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

const parent=React.createElement("div",{id : "parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"hello world1"),
        React.createElement("h2",{},"hello world2")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"hello world1"),
        React.createElement("h2",{},"hello world2")
    ])
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


console.log(parent);