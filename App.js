// <div id="parent">
//     <div id="child1">
//         <h1>IM a hi Tag</h1>
//         <h2>im a h2 tag</h2>
//     </div>
//     <div id="child2">
//         <h1>IM a hi Tag</h1>
//         <h2>im a h2 tag</h2>
//     </div>
// </div>

// ReactElement(object) => HTML(Browser Understands)


const parent = React.createElement("div",{ id: "parent"},
    [
        React.createElement("div",{ id: "child"},
        [
          React.createElement("h1",{},"im an h1 tag"),
          React.createElement("h2",{},"im an h2 tag")
        ]),
        React.createElement("div",{ id: "child2"},
        [
          React.createElement("h1",{},"im an h1 tag"),
          React.createElement("h2",{},"im an h2 tag")
        ]),
    ]
)

//JSX

console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);