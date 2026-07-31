import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';
import { useState } from 'react';


function App() {
  const n = 15;
  const [name] = useState("matheus")
  const redTitle = true
  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent/>
      <p>este é o paragrafo do app js</p>
      {/* Inline CSS */}
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>este elemento foi estilizado de forma inline</p>
      {/* Inline dinamico CSS */}
      <h2 style={n<10 ? {color: "purple"}:{color: "pink"}}> CSS dinamico </h2>
      <h2 style={n>10 ? {color: "purple"}:{color: "pink"}}> CSS dinamico </h2>
      <h2 style={name === "matheus" ? {color: "green", background: "#000"}:null }> Teste Nome : {name} </h2>
      {/* Classe dinamica CSS */}
      <h2 className={redTitle ? "red-title" : "title"}> Este titulo tera classe dinamica</h2>
      {/* CSS Modules */}
      <Title/>
      <h2 className="my_title">testando</h2>

    </div>
  );
}

export default App;
