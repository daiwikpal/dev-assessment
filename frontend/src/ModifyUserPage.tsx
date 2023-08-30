import AddUserForm from "./components/AddUserInput";
import ModifyUserInput from "./components/ModifyUserInput";
import TopBar from "./components/TopBar";

function ModifyUserPage(){
    return( 
        <div>  
            <TopBar />
            <ModifyUserInput /> 
        </div>
    ); 
}

export default ModifyUserPage(); 