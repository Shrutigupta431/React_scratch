import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";

//css styling
// const styleCard = {
//    backgroundColor: "#f0f0f0"
// }



const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//syntax to render react-element

// root.render(heading);

//syntax to render react-componet
root.render(<Applayout />);
