import '../App.css';
import useSWR from 'swr';
import axios from 'axios';
import PaginationRow from './PagnationRow';


const fetcher = async (url: string) => {
  const res = await axios.get(url)
  return res.data
}
 
function UserTable() {
  const { data, error, isLoading, isValidating } = useSWR("http://localhost:5000/api/bog/users/", fetcher);
  if (isLoading) return <div>Loading</div>;
  if (isValidating) return <div> Validating </div>
  let database = data;
  // console.log(database)

  return (
    <div className="user-table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>ID #</th>
            <th>Name</th>
            <th>Hero Project</th>
            <th>Notes</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Rating</th>
            <th>Status</th>
          </tr>
          </thead>
        <tbody>
          {database.map((val: any, key: any) => {
            return (
              <tr key={key}>
                <td>{val.id}</td>
                <td> <img src={val.avatar} alt="Avatar" /> {val.name}</td>
                <td>{val.hero_project}</td>
                <td>{val.notes}</td>
                <td>{val.email}</td>
                <td>{val.phone}</td>
                <td>{val.rating}</td>
                <td>{val.status ? <p> True </p> : <p> False </p>}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable; 