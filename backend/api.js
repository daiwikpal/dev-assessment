import express from 'express';
import { database } from './database.js';
import cors from 'cors'

const app = express();
const port = 5000;
let currentIdVal = 100; 


app.use(express.json());
app.use(cors()); 

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/bog/users', (req, res) => {
    res.json(database).status(200);
});

app.get('/api/bog/users/:id', (req, res) => {
    const user = database.filter((user) => user.id === req.params.id)[0]
    res.json(user).status(200)
});

app.get('/api/bog/usersByPage/:page', (req, res) => {
  const users = database.slice(0 + 10 * (req.params.page - 1), 9 + 10 * (req.params.page - 1) + 1 )

  let result = {
    "total-pages": Math.ceil(database.length / 10), 
    "current-page": req.params.page, 
    "users": []
  }

  result.users = users; 
 
  res.json(result).status(200); 
});

app.post('/api/addUser', (req, res) => {
    let data = req.body; 
    data["id"] = JSON.stringify(currentIdVal + 1); 
    currentIdVal++; 
    database.push(data); 
    res.json({"message" : "User Added"}).status(200); 
});  

app.put('/api/modifyUser/:id', (req, res) => {
  let data = req.body;
  let currentUser = database.find((user) => user.id === req.params.id); 
  database[database.indexOf(currentUser)] = data;  
  res.json({"message" : "User Modified"}).status(200); 
}); 

app.delete('/api/removeUser/:id', (req, res) =>{
  let userToDelete = database.find((user) => user.id === req.params.id); 
  database.splice(database.indexOf(userToDelete), 1);
  res.json({"message" : "User Deleted"}).status(200); 
}); 

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
