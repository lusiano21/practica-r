import { Link } from "react-router-dom";
const Navbar = () => {
    return(
        <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand"><Link to="/">Bon gust</Link></a>
          <a className="navbar-brand"><Link to="/gustos/1">Clasicos</Link></a>
          <a className="navbar-brand"><Link to="/gustos/2">Cremas</Link></a>
          <a className="navbar-brand" href="#">Quienes somos</a>
        </div>
      </nav>
    )
  }

  export default Navbar;  