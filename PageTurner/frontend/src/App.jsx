import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Component/Landing";
import Error from "./Component/Error";
import Signup from "./Component/Signup";
import AdminReg from "./Component/AdminReg";
import UserReg from "./Component/UserReg";
import Forgot from "./Component/Forgot";
import AdminHome from "./Component/AdminHome";
import UserHome from "./Component/UserHome";
import About from "./Component/About";
function App() {
  return (
    <div className="bg-gray-50">
      {/* gold->-yellow-400,pink->-pink-500,darkblue->-blue-950,purple->bg-purple-900,cream->text-amber-100 */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/*" element={<Error />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/adminReg" element={<AdminReg />} />
          <Route path="/userReg" element={<UserReg />} />
          <Route path="/resetPassword" element={<Forgot />} />
          <Route path="/adminHome/*" element={<AdminHome />} />
          <Route path="/userHome/*" element={<UserHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
