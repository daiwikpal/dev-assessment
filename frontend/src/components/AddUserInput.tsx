import { useState } from 'react';
import axios from 'axios';

function AddUserForm() {
    const [formData, setFormData] = useState({
        name: '',
        avatar: '',
        hero_project: '',
        notes: '',
        email: '',
        phone: '',
        rating: '',
        status: '',
    });


    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
        
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        
       

        const body = {
            name: formData.name,
            avatar: formData.avatar,
            hero_project: formData.hero_project,
            notes: formData.notes, 
            email: formData.email,
            phone: formData.phone,
            rating: formData.rating,
            status: false,
        }; 

        if(formData.status == "true"){
            body.status = true; 
        }

        


        try {
            const res = axios.post("http://localhost:5000/api/addUser", body);
            console.log(res);

        } catch (e) {
            console.log(e);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <center>
                <h3>Add a volunteer: </h3>
                <div className="form-group">
                    <label> Name (First and Last):</label>
                    <input
                        type="text"
                        name="name"
                        // value={formData.name}
                        className="input"
                        onChange={handleInputChange}
                    />
                </div>
                <br />

                <div className="form-group">
                    <label> Avatar Link: </label>
                    <input
                        type="text"
                        name="avatar"
                        // value={formData.avatar}
                        className="input"
                        onChange={handleInputChange}
                    />
                </div>

                <br />

                <div className="form-group">
                    <label> Email: </label>
                    <input
                        type="email"
                        name="email"
                        // value={formData.email}
                        className="input"
                        onChange={handleInputChange}
                    />
                </div>

                <br />

                <div className="form-group">
                    <label>
                        Hero Project:
                    </label>
                    <input
                        type="text"
                        name="hero_project"
                        // value={formData.hero_project}
                        className="input"
                        onChange={handleInputChange}
                    />
                </div>

                <br />

                <div className="form-group">
                    <label>
                        Notes
                    </label>
                    <input
                        type="text"
                        name="notes"
                        // value={formData.hero_project}
                        className="input"
                        onChange={handleInputChange}
                    />
                </div>
                
                <br /> 

                <div className="form-group">
                    <label>
                        Rating:
                    </label>
                    <input
                        type="text"
                        name="rating"
                        // value={formData.rating}
                        className="input"
                        onChange={handleInputChange}
                    />
                </div>

                <br />

                <div className="form-group">
                    <label>
                        Phone Number:
                    </label>
                    <input
                        type="text"
                        name="phone"
                        // value={formData.phone}
                        className="input"
                        onChange={handleInputChange}
                    />
                </div>

                <br />

                <div className="form-group">
                    <label>
                        Status (Enter "false" for false and "true" for true) :
                    </label>
                    <input
                        type="text"
                        name="status"
                        // value={formData.status}
                        className="input"
                        onChange={handleInputChange}
                    />
                </div>
                <br />
                <button type="submit" className="button">Submit</button>
            </center>
        </form>
    );
}

export default AddUserForm;