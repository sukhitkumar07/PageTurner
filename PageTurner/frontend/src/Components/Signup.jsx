import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  let forgotNav = useNavigate();
  let admNav = useNavigate();
  let usrNav = useNavigate();
  let sub = (e) => {
    e.preventDefault();
    console.log("Done");
  };
  let forgot = () => {
    forgotNav("/resetPassword");
  };
  let admin = () => {
    admNav("/adminHome");
  };
  let user = () => {
    usrNav("/userHome");
  };
  return (
    <div className="flex flex-col md:flex-row justify-evenly py-8 md:py-52 ">
      <div className="mb-8 md:mb-0 md:w-1/2 items-center border-2 border-yellow-400 rounded-md px-4 py-4 text-center ">
        <h1 className="font-bold font-serif">Admin Login</h1>
        <form action="">
          <input
            type="email"
            placeholder="Enter Email id"
            className="border border-black px-1 py-0.5 rounded-md my-1 w-full md:w-52 border-none outline-none focus:outline-2 focus:outline-blue-950 placeholder:text-blue-950"
            required
          />
          <br />
          <input
            type="password"
            placeholder="Enter pasword"
            className="border border-black px-1 py-0.5 rounded-md my-1 w-full md:w-52 border-none outline-none focus:outline-2 focus:outline-blue-950 placeholder:text-blue-950"
            required
          />{" "}
          <br />
          <button
            onClick={admin}
            className="px-1 py-0.5 rounded-md text-blue-950 border-2 border-blue-950 font-medium hover:bg-blue-950 hover:text-white font-serif my-1"
          >
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
        <form action="">
          <input
            type="email"
            placeholder="Enter Email id"
            className="border border-black px-1 py-0.5 rounded-md my-1 w-full md:w-52 border-none outline-none focus:outline-2 focus:outline-blue-950 placeholder:text-blue-950"
            required
          />{" "}
          <br />
          <input
            type="password"
            placeholder="Enter pasword"
            className="border border-black px-1 py-0.5 rounded-md my-1 w-full md:w-52 border-none outline-none focus:outline-2 focus:outline-blue-950 placeholder:text-blue-950"
            required
          />{" "}
          <br />
          <button
            onClick={user}
            className="px-1 py-0.5 rounded-md text-blue-950 border-2 border-blue-950 font-medium hover:bg-blue-950 hover:text-white font-serif my-1"
          >
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
