import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Books from "./Books";
import About from "./About";
import Catagory from "./Catagory";
import UserEdit from "./UserEdit";
import Hero from "./Hero";
import BookByName from "./BookByName";
import BookByCategory from "./BookByCategory";

const UserHome = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/books" element={<Books />} />
        <Route path="/about" element={<About />} />
        <Route path="/editAccount/:id" element={<UserEdit />} />
        <Route path="/FindByName" element={<BookByName />} />
        <Route path="/FindByCategory" element={<BookByCategory />} />
      </Routes>
    </div>
  );
};
export default UserHome;
