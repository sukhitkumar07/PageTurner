import { useNavigate } from "react-router-dom";
const AdminReg = () => {
  let navi = useNavigate();
  let check = (e) => {
    e.preventDefault();
    let ip = document.getElementsByTagName("input");
    if (ip[4].value == ip[5].value) {
      ip[5].style.outlineWidth = "0px";
      navi("/Signup");
    } else {
      ip[5].style.outlineWidth = "1px";
      ip[5].style.outlineColor = `red`;
    }
  };
  return (
    <div className=" flex justify-center my-8 md:my-40">
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 items-center border-2 border-yellow-400 rounded-md px-4 py-4 text-center ">
        <h1 className="font-bold font-serif text-blue-950">
          Admin Registration Page
        </h1>{" "}
        <hr className="bg-blue-950" />
        <form onSubmit={check}>
          <input
            type="text"
            placeholder="Enter Name"
            className="px-1 py-0.5 rounded-md my-1 w-full md:w-52 border-none outline-none focus:outline-1 focus:outline-blue-950 placeholder:text-blue-950"
            required
          />{" "}
          <br />
          <input
            type="tel"
            minLength={10}
            maxLength={10}
            placeholder="Enter Phone"
            className="px-1 py-0.5 rounded-md my-1 w-full md:w-52 border-none outline-none focus:outline-1 focus:outline-blue-950 placeholder:text-blue-950"
            required
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Enter Pan Number"
            minLength={11}
            maxLength={11}
            className="px-1 py-0.5 rounded-md my-1 w-full md:w-52 border-none outline-none focus:outline-1 focus:outline-blue-950 placeholder:text-blue-950"
            required
          />{" "}
          <br />
          <input
            type="email"
            placeholder="Enter Email id"
            className="px-1 py-0.5 rounded-md my-1 w-full md:w-52 border-none outline-none focus:outline-1 focus:outline-blue-950 placeholder:text-blue-950"
            required
          />{" "}
          <br />
          <input
            type="password"
            placeholder="Enter pasword"
            className="px-1 py-0.5 rounded-md my-1 w-full md:w-52 border-none outline-none focus:outline-1 focus:outline-blue-950 placeholder:text-blue-950"
            required
          />{" "}
          <br />
          <input
            type="password"
            placeholder="Confirm pasword"
            className="px-1 py-0.5 rounded-md my-1 w-full md:w-52 outline-none focus:outline-1 focus:outline-blue-950 placeholder:text-blue-950"
            required
          />{" "}
          <br />
          <button className="px-1 py-0.5 rounded-md text-blue-950 border-2 border-blue-950 font-medium hover:bg-blue-950 hover:text-white font-serif my-1">
            Register
          </button>
          <br />
        </form>
      </div>
    </div>
  );
};

export default AdminReg;
