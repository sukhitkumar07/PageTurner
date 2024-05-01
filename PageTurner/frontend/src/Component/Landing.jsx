import { Link } from "react-router-dom";
import CarouselFadeExample from "./CarouselFadeExample";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
const Landing = () => {
  return (
    <div>
      <div className="flex justify-between px-2 py-1 bg-yellow-400 sticky top-0 z-10">
        <div className="font-bold text-center">
          <AutoStoriesIcon /> PageTurner
        </div>
        <div>
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
      <CarouselFadeExample />
    </div>
  );
};

export default Landing;
