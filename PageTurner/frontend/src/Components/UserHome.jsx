import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Books from "./Books";
import About from "./About";
import Catagory from "./Catagory";
import UserEdit from "./UserEdit";

const UserHome = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/catagory" element={<Catagory />} />
        <Route path="/about" element={<About />} />
        <Route path="/editAccount/:id" element={<UserEdit />} />
      </Routes>
    </div>
  );
};
export default UserHome;
