import React from "react";
import ReactDOM from 'react-dom'
// const heading = React.createElement("h1", {id:"header" , xyz:"abc"}, "Hello world");

// const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"I am a h1 tag")))
// const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"I am a h1 tag"),React.createElement("h2",{},"I am a h2 tag")]))
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),

    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "Namaste React"),
      React.createElement("h2", {}, "I am a h2 tag"),
    ]),
  ]),
]);
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
