import { useState } from 'react';
import axios from 'axios';

function DeleteUserForm() {
    const [formData, setFormData] = useState({
        id:''
    });


    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(formData);


        try {
            const res = axios.delete("http://localhost:5000/api/removeUser/" + formData.id);
            console.log(res);

        } catch (e) {
            console.log(e);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <center>
                <h3>Delete a volunteer: </h3>
                <div className="form-group">
                    <label> Volunteer ID:</label>
                    <input
                        type="text"
                        name="id"
                        // value={formData.name}
                        className="input"
                        onChange={handleInputChange}
                    />
                </div>
            
                <button type="submit" className="button">Submit</button>
            </center>
        </form>
    );
}

export default DeleteUserForm;