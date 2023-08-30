import AddUserPage from './AddUserPage';
import './App.css';
import TopBar from './components/TopBar';
import UserTable from "./components/UserTable";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


// Create a nav bar where people can enter a new user 

function App() {
  return (
    <div>
      <TopBar />
      <UserTable />
    </div>
  )
}

export default App;
