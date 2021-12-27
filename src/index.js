import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from './components/navigation bar/NavigationBar';
import Content1 from './pages/Contents/Content1';
import Content2 from './pages/Contents/Content2';
import Content3 from './pages/Contents/Content3';
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Content1" element={<Content1 />} />
        <Route path="/Content2" element={<Content2 />} />
        <Route path="/Content3" element={<Content3 />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
