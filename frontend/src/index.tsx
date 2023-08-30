import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUserPage from './AddUserPage';
import ModifyUserPage from './ModifyUserPage';
import RemoveUserPage from './RemoveUserPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }></Route>
        <Route path="/addUser" element={ AddUserPage}></Route>
        <Route path="/modifyUser" element={ ModifyUserPage}></Route>
        <Route path="/removeUser" element={ RemoveUserPage}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  // document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
