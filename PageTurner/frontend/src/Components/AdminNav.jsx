import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
const AdminNavBar = () => {
  let aid = useParams();
  let [name, setname] = useState("Raja Kumar");
  // useEffect(() => {
  //   axios.get(`http://localhost:8080/admin/${aid.id}`).then((res) => {
  //     setname(res.data.body.name);
  //   });
  // }, []);

  return (
    <div className="flex justify-around items-center px-2 py-1 bg-yellow-400">
      <div className="font-bold text-center">
        <Link to={"/adminHome"}>
          <AutoStoriesIcon /> PageTurner
        </Link>
      </div>
      <div>
        <Link
          className="mx-6 font-serif font-bold hover:text-amber-100"
          to={"/adminHome/addBook"}
        >
          Add Book
        </Link>
        <Link
          className="mx-6 font-serif font-bold hover:text-amber-100"
          to={"/adminHome/viewBooks"}
        >
          View Books
        </Link>
        <Link
          className="mx-6 font-serif font-bold hover:text-amber-100"
          to={"/adminHome/registeredUsers"}
        >
          View Users
        </Link>
        {/* <Link to={"/adminHome/editBook/:id"}></Link> */}
      </div>
      <div className="flex items-center font-bold">
        <h1>Welcome</h1>
        <Dropdown data-bs-theme="dark">
          <Dropdown.Toggle variant="" id="dropdown-basic">
            {name}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Link to={`/adminHome/editAccount/${aid.id}`}>Edit account</Link>
          </Dropdown.Menu>
        </Dropdown>
        <Link
          to={`/Signup`}
          className="btn font-bold hover:bg-red-600 hover:text-amber-100"
        >
          Sign out
        </Link>
      </div>
    </div>
  );
};

export default AdminNavBar;
