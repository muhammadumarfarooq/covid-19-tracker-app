import './styles/navbar.css';

const Navbar = () => {
  
  return (
    <nav className="navbar">
      <div className="navbar--text-box">
        <h1 className="navbar--text">Covid-19</h1>
        <h2 className="navbar--text">Dashboard</h2>
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
