import { Link } from "react-router-dom";
const Navbar = () => {
    return(
        <nav className="navbar bg-light">
        <div className="container-fluid">
        <Link to="/">  <h1 className="navbar-brand">Bon gust</h1></Link>
         <Link to="/gustos/1"><h2 className="navbar-brand">Clasicos</h2></Link>
        <Link to="/gustos/2">  <h2 className="navbar-brand">Cremas</h2></Link>
          <h2 className="navbar-brand" href="#">Quienes somos</h2>
        </div>
      </nav>
    )
  }

  export default Navbar;  