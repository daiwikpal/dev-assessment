import AddUserButon from "./buttons/AddUserButton";
import ModifyUserButon from "./buttons/ModifyUserButton";
import RemoveUserButon from "./buttons/RemoveUserButton";
import { useNavigate, Link } from "react-router-dom";


function TopBar() {

    return (

        <nav className="navbar">
            <div className="navbar-brand">HaHa Heroes Volunteer List</div>
            <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" to="/"> Home </Link></li>
                <li className="nav-item"><Link className="nav-link" to="/addUser"> Add Volunteer </Link></li>
                <li className="nav-item"><Link className="nav-link" to="/modifyUser"> Modify Volunteer </Link></li>
                <li className="nav-item"><Link className="nav-link" to="/removeUser"> Delete Volunteer </Link></li>
            </ul>
        </nav>

    )

}

export default TopBar; 