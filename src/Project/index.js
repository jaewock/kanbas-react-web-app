import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./Nav";
import Signin from "./Users/signin";
import Account from "./Users/account";
import UserTable from "./Users/table";
import Signup from "./Users/signup";
import Home from "./home";
function Project() {
  return (
    <div className="row">
      <div className="col-2">
        <Nav />
      </div>
      <div className="col-10">
        <Routes>
          <Route path="/" element={<Navigate to="/project/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/:id" element={<Account />} />
          <Route path="/admin/users" element={<UserTable />} />
        </Routes>
      </div>
    </div>
  );
}
export default Project;
