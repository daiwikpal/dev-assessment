import AddUserPage from './AddUserPage';
import './App.css';
import TopBar from './components/TopBar';
import UserTable from "./components/UserTable";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



function App() {
  return (
    <div>
      <TopBar />
    </div>
  )
}

export default App;
