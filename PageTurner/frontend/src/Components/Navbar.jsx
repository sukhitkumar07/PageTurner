import { Link, useParams } from "react-router-dom";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Dropdown from "react-bootstrap/Dropdown";
import { useEffect, useState } from "react";
import axios from "axios";
const Navbar = () => {
  let data = JSON.parse(localStorage.getItem("User"));
  console.log(data.name);
  return (
    <div className="flex justify-between items-center px-2 py-1 bg-yellow-400">
      <div className="font-bold text-center">
        <Link to={"/userHome"}>
          <AutoStoriesIcon /> PageTurner
        </Link>
      </div>
      <div>
        <Link
          to={"/userHome/books"}
          className=" font-bold hover:text-amber-100"
        >
          Books
        </Link>
        <Link
          to={"/userHome/catagory"}
          className="mx-4 font-bold hover:text-amber-100"
        >
          Catagories
        </Link>
        <Link to={"/userHome/about"} className="font-bold hover:text-amber-100">
          About
        </Link>
      </div>
      <div className="flex items-center font-bold">
        <Dropdown className="flex items-center text-black font-bold">
          <h1>Welcome</h1>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            {data.name}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Link to={`/userHome/editAccount/`}>Edit account</Link>
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

export default Navbar;
