import { Route, Routes } from "react-router-dom";
import AdminNavBar from "./AdminNav";
import AdminAddBook from "./AdminAddBook";
import AdminViewBook from "./AdminViewBooks";
import AllUsers from "./AllUsers";
import AdminEdit from "./AdminEdit";

const AdminHome = () => {
  return (
    <div>
      <AdminNavBar />
      <Routes>
        <Route path="/addBook" element={<AdminAddBook />} />
        <Route path="/viewBooks" element={<AdminViewBook />} />
        <Route path="/registeredUsers" element={<AllUsers />} />
        <Route path="/editAccount/:id" element={<AdminEdit />} />
      </Routes>
    </div>
  );
};

export default AdminHome;
