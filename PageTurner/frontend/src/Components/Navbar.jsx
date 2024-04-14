import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between px-2 py-1 bg-yellow-400">
      <div className="font-bold">
        <img src="#" alt="" />
        Logo
      </div>
      <div>
        <Link to={"/userHome"} className="mx-2 font-bold hover:text-white">
          Home
        </Link>
        <Link
          to={"/userHome/books"}
          className="mx-2 font-bold hover:text-white"
        >
          Books
        </Link>
        <Link
          to={"/userHome/catagory"}
          className="mx-2 font-bold hover:text-white"
        >
          Catagories
        </Link>
        <Link
          to={"/userHome/about"}
          className="mx-2 font-bold hover:text-white"
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
