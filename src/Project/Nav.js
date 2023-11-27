import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav nav-tabs mb-2">
      <Link className="nav-link" to="/project/home">
        Home
      </Link>
      <Link className="nav-link" to="/project/search">
        Search
      </Link>
      <Link className="nav-link" to="/project/signin">
        Signin
      </Link>
      <Link className="nav-link" to="/project/signup">
        Signup
      </Link>
      <Link className="nav-link" to="/project/account">
        Account
      </Link>
    </nav>
  );
}

export default Nav;
