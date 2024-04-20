import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Signup = () => {
  let forgotNav = useNavigate();
  let admNav = useNavigate();
  let usrNav = useNavigate();
  let [admins, setadmins] = useState([]);
  let [aemail, setaemail] = useState("");
  let [apass, setapass] = useState("");
  let [users, setusers] = useState([]);
  let [uemail, setuemail] = useState("");
  let [upass, setupass] = useState("");
  let forgot = () => {
    forgotNav("/resetPassword");
  };
  useEffect(() => {
    axios
      .get("http://localhost:8080/admin")
      .then((res) => {
        setadmins(res.data.body);
      })
      .catch((err) => {
        {
          <div
            className="modal show"
            style={{ display: "block", position: "initial" }}
          >
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <p>Modal body text goes here.</p>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </div>;
        }
      });
  }, []);
  let admin = (e) => {
    e.preventDefault();
    {
      admins.map((x) => {
        if (x.email === aemail && x.password === apass) {
          admNav(`/adminHome/${x.id}`);
        } else {
          let ip = document.getElementsByTagName("input");
          ip[0].style.outlineWidth = "1px";
          ip[1].style.outlineColor = `red`;
        }
      });
    }
  };
  useEffect(() => {
    axios
      .get("http://localhost:8080/users")
      .then((res) => {
        setusers(res.data.body);
      })
      .catch(() => {
        console.log("not found");
      });
  }, []);
  let user = (e) => {
    e.preventDefault();
    {
      users.map((x) => {
        if (x.email === uemail && x.password === upass) {
          admNav(`/userHome/${x.id}`);
        } else {
          let ip = document.getElementsByTagName("input");
          ip[2].style.outlineWidth = "1px";
          ip[3].style.outlineColor = `red`;
        }
      });
    }
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
      <Link to={"/adminHome"}>Admin</Link>
      <Link to={"/userHome"}>User</Link>
    </div>
  );
};
export default Signup;
