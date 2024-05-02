import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signup = () => {
  let forgotNav = useNavigate();
  let admNav = useNavigate();
  let usrNav = useNavigate();
  let [aemail, setaemail] = useState("");
  let [apass, setapass] = useState("");
  let [uemail, setuemail] = useState("");
  let [upass, setupass] = useState("");
  let ip = document.getElementsByTagName("input");
  let forgot = () => {
    forgotNav("/resetPassword");
  };
  let admin = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:8080/admin/verify-by-email?email=${aemail}&password=${apass}`
      )
      .then((res) => {
        localStorage.setItem("Admin", JSON.stringify(res.data.body));
        alert("Login successfully");
        toast.success("Login Successfully...!!!");
        admNav(`/adminHome`);
      })
      .catch((err) => {
        ip[0].style.outlineWidth = "1px";
        ip[1].style.outlineColor = `red`;
      });
  };

  let user = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:8080/users/verify-by-email?email=${uemail}&password=${upass}`
      )
      .then((res) => {
        localStorage.setItem("User", JSON.stringify(res.data.body));
        alert("Login successfully");
        usrNav(`/userHome`);
      })
      .catch(() => {
        ip[2].style.outlineWidth = "1px";
        ip[3].style.outlineColor = `red`;
      });
  };

  return (
    <div className="flex flex-col md:flex-row justify-evenly py-8 md:py-52 ">
      <div className="mb-8 md:mb-0 md:w-1/2 items-center border-2 border-yellow-400 rounded-md px-4 py-4 text-center ">
        <h1 className="font-bold font-serif">Admin Login</h1>
        <form onSubmit={admin}>
          <input
            type="email"
            placeholder="Enter Email id"
            value={aemail}
            onChange={(e) => {
              setaemail(e.target.value);
            }}
            className="border border-black px-1 py-0.5 rounded-md my-1 w-full md:w-52 outline-none focus:outline-2 focus:border-none focus:outline-blue-950 placeholder:text-blue-950"
            required
          />
          <br />
          <input
            type="password"
            placeholder="Enter pasword"
            className="border border-black px-1 py-0.5 rounded-md my-1 w-full md:w-52 border-none outline-none focus:outline-2 focus:outline-blue-950 placeholder:text-blue-950"
            required
            value={apass}
            onChange={(e) => {
              setapass(e.target.value);
            }}
          />{" "}
          <br />
          <button className="px-1 py-0.5 rounded-md text-blue-950 border-2 border-blue-950 font-medium hover:bg-blue-950 hover:text-white font-serif my-1">
            Submit
          </button>{" "}
          <span> | </span>
          <button
            onClick={forgot}
            className="px-1 py-0.5 rounded-md text-blue-950 border-2 border-blue-950 font-medium hover:bg-blue-950 hover:text-white font-serif my-1"
          >
            Forget Password
          </button>
          <br /> <hr />
          <span>Create Admin if doesn't exist | </span>
          <Link
            to={"/adminReg"}
            className="text-blue-950 hover:underline font-bold font-serif"
          >
            Create Admin?
          </Link>
        </form>
        <ToastContainer />
      </div>
      <div className="md:w-1/2 items-center border-2 border-yellow-400 rounded-md px-4 py-4 text-center ">
        <h1 className="font-bold font-serif">User Login</h1>
        <form onSubmit={user}>
          <input
            type="email"
            placeholder="Enter Email id"
            className="border border-black px-1 py-0.5 rounded-md my-1 w-full md:w-52 border-none outline-none focus:outline-2 focus:outline-blue-950 placeholder:text-blue-950"
            required
            value={uemail}
            onChange={(e) => {
              setuemail(e.target.value);
            }}
          />{" "}
          <br />
          <input
            type="password"
            placeholder="Enter pasword"
            className="border border-black px-1 py-0.5 rounded-md my-1 w-full md:w-52 border-none outline-none focus:outline-2 focus:outline-blue-950 placeholder:text-blue-950"
            required
            value={upass}
            onChange={(e) => {
              setupass(e.target.value);
            }}
          />{" "}
          <br />
          <button className="px-1 py-0.5 rounded-md text-blue-950 border-2 border-blue-950 font-medium hover:bg-blue-950 hover:text-white font-serif my-1">
            Submit
          </button>{" "}
          <span> | </span>
          <button
            onClick={forgot}
            className="px-1 py-0.5 rounded-md text-blue-950 border-2 border-blue-950 font-medium hover:bg-blue-950 hover:text-white font-serif my-1"
          >
            Forget Password
          </button>
          <br /> <hr />
          <span>Create User if doesn't exist | </span>
          <Link
            to={"/userReg"}
            className="text-blue-950 hover:underline font-bold font-serif"
          >
            Create User?
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Signup;
