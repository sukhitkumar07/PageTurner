import { Link } from "react-router-dom";
import img from "../Images/Bookbg.jpg";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
const Landing = () => {
  return (
    <div>
      <div className="flex justify-between px-2 py-1 bg-yellow-400">
        <div className="font-bold text-center">
          <AutoStoriesIcon /> PageTurner
        </div>
        <div>
          <Link to={"/Signup"} className="mx-2 font-bold hover:text-amber-100">
            Home
          </Link>
          <Link to={"/Signup"} className="mx-2 font-bold hover:text-amber-100">
            Books
          </Link>
          <Link to={"/Signup"} className="mx-2 font-bold hover:text-amber-100">
            Catagories
          </Link>
          <Link to={"/about"} className="mx-2 font-bold hover:text-amber-100">
            About
          </Link>
          <Link to={"/Signup"} className="mx-2 font-bold hover:text-amber-100">
            Login/Signup
          </Link>
        </div>
      </div>
      <img src={img} alt="" className="w-full h-[563px] opacity-80" />
      <h1 className="font-bold font-sans text-center absolute top-10 left-[33%] text-blue-950 text-3xl underline">
        Welcome to PageTurner Application
      </h1>
      <h1 className="font-bold font-sans absolute top-80 left-4 text-blue-950 text-7xl">
        “A reader lives a thousand lives before he dies , The man who never
        reads lives only one.”
      </h1>
    </div>
  );
};

export default Landing;
