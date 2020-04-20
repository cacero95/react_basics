import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// el metodo createElement se encarga de crear un elemento para renderizar
// para ello encesita un elemento a renderizar como h1, div html elements
// las propiedades del elemento y los hijos del elemento
//const element = React.createElement(element, {className:"container"}, childrens)
// const element = Reatc.createElement("h1", {className:"container"}, "hi world")
//// el render necesita un elemento a renderizar y en donde se va renderizar
//ReactDOM.render(element, where)
//const element = React.createElement("h1", {className:"container"}, "hi world")
//ReactDOM.render(element,
//  document.getElementById('root')
//);
/**
 * otra forma de importar un element, pero en este caso importando un component
 * 
  <React.StrictMode>
    <App />
  </React.StrictMode>
 */
ReactDOM.render(<React.StrictMode>
  <App />
</React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
