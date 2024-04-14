import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";
import Error from "./Components/Error";
import Signup from "./Components/Signup";
import AdminReg from "./Components/AdminReg";
import UserReg from "./Components/UserReg";
import Forgot from "./Components/Forgot";
import AdminHome from "./Components/AdminHome";
import UserHome from "./Components/UserHome";
import About from "./Components/About";
function App() {
  return (
    <div>
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
