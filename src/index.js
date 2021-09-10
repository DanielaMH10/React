import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Header from './Header';
//import Footer from './Footer';
//import Contenedor from './Contenedor';


 ReactDOM.render(
   <React.StrictMode>
     <App />
   </React.StrictMode>,
   document.getElementById('header')
 );

// ReactDOM.render(
//   <React.StrictMode>
//     <Header />
//   </React.StrictMode>,
//   document.getElementById('header')
// );

// ReactDOM.render(
//   <React.StrictMode>
//   <Footer />
//   </React.StrictMode>,
//   document.getElementById('footer')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <Contenedor />
//   </React.StrictMode>,
//   document.getElementById('contentMain')
// );





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
