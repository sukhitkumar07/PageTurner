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
      <div className="hover:font-bold font-medium hover:text-amber-100 text-center">
        <Link to={"/userHome"}>
          <AutoStoriesIcon /> PageTurner
        </Link>
      </div>
      <div className="flex items-center">
        <Link
          to={"/userHome/books"}
          className=" hover:font-bold font-medium hover:text-blue-950"
        >
          Books
        </Link>
        <Dropdown className="mx-4 hover:font-bold font-medium bg-transparent outline-none hover:text-blue-950">
          <Dropdown.Toggle
            id="dropdown-basic"
            className="bg-transparent font-medium border-none text-black"
          >
            Search books
          </Dropdown.Toggle>
          <Dropdown.Menu className="border-none rounded-t-none bg-yellow-400">
            <Dropdown.Item>
              <Link to={"/userHome/FindByName"}>Search by name</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"/userHome/FindByCategory"}>Search by category</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Link
          to={"/userHome/about"}
          className="hover:font-bold font-medium hover:text-blue-950"
        >
          About
        </Link>
      </div>
      <div className="flex items-center">
        <Dropdown className="flex items-center font-medium text-black">
          <h1>Welcome</h1>
          <Dropdown.Toggle
            className="font-medium border-none"
            variant=""
            id="dropdown-basic"
          >
            {data.name}
          </Dropdown.Toggle>
          <Dropdown.Menu className="border-none bg-transparent">
            <Link to={`/userHome/editAccount/`}>Edit account</Link>
          </Dropdown.Menu>
        </Dropdown>
        <Link
          to={`/Signup`}
          className="btn font-medium hover:bg-blue-950 hover:text-amber-100"
        >
          Sign out
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
