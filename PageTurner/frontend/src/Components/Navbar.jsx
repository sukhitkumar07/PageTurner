import { Link, useParams } from "react-router-dom";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Dropdown from "react-bootstrap/Dropdown";
import { useEffect, useState } from "react";
import axios from "axios";
const Navbar = () => {
  let uid = useParams();
  let [name, setname] = useState("Sukhit Kumar");
  // useEffect(() => {
  //   axios.get(`http://localhost:8080/admin/${uid.id}`).then((res) => {
  //     setname(res.data.body.name);
  //   });
  // }, []);

  return (
    <div className="flex justify-around items-center px-2 py-1 bg-yellow-400">
      <div className="font-bold text-center">
        <Link to={"/userHome"}>
          <AutoStoriesIcon /> PageTurner
        </Link>
      </div>
      <div>
        <Link
          to={"/userHome/books"}
          className="mx-2 font-bold hover:text-amber-100"
        >
          Books
        </Link>
        <Link
          to={"/userHome/catagory"}
          className="mx-2 font-bold hover:text-amber-100"
        >
          Catagories
        </Link>
        <Link
          to={"/userHome/about"}
          className="mx-2 font-bold hover:text-amber-100"
        >
          About
        </Link>
      </div>
      <div className="flex items-center font-bold">
        <Dropdown
          data-bs-theme="dark"
          className="flex items-center text-black font-bold"
        >
          <h1>Welcome</h1>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            {name}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Link to={`/userHome/editAccount/${uid.id}`}>Edit account</Link>
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
