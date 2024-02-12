import React from "react";
import ReactDOM from "react-dom";

//React.createElemt => object => HTMLElement(render)
// JSX => Babel traspiled it to  react.createElement => ReactElement-JS object => HTMLElement(render)

//React Element

const elem = <span>Hello element inside element</span>;

const heading = <h1 className="head">
  {elem} <br></br>
  Namaste React</h1>;
console.log(heading);


//Normal JS function
const Title = function() {
  return (
     <div id="container">
   <h1 className="head">Title React component</h1>
   </div>); 
}
 const num = 1000;

//React Functional component(with arrow function)
// component Composition
const Heading = () =>{
  return <div id="container">
  {/* React Element */}
    {heading} 

    {/*React Component inside another component  */}
    <Title />
    {Title()}
    <Title></Title>
    {num + 200}
   <h1 className="head">Namaste React Functional component{num}</h1>
   </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
//syntax to render react-element

// root.render(heading);

//syntax to render react-componet
root.render(<Heading />)