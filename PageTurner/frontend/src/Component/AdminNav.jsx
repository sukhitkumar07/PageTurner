import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
const AdminNavBar = () => {
  let data = JSON.parse(localStorage.getItem("Admin"));

  return (
    <div className="flex justify-between items-center px-2 py-1 bg-yellow-400">
      <div className="hover:font-bold text-center">
        <Link to={"/adminHome"}>
          <AutoStoriesIcon /> PageTurner
        </Link>
      </div>
      <div>
        <Link
          className=" font-serif font-bold hover:text-amber-100"
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
          className="font-serif font-bold hover:text-amber-100"
          to={"/adminHome/registeredUsers"}
        >
          View Users
        </Link>
        {/* <Link to={"/adminHome/editBook/:id"}></Link> */}
      </div>
      <div className="flex items-center">
        <h1>Welcome</h1>
        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            {data.name}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Link className="w-fit" to={`/adminHome/editAccount/`}>
              Edit account
            </Link>
          </Dropdown.Menu>
        </Dropdown>
        <Link
          to={`/Signup`}
          className="btn hover:font-bold hover:bg-blue-950 hover:text-amber-100"
        >
          Sign out
        </Link>
      </div>
    </div>
  );
};

export default AdminNavBar;
