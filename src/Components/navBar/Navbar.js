import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://usercontent.one/wp/www.kalamacademy.org/wp-content/uploads/2020/10/cropped-KA-1.png?media=1694937337"
            alt="logo"
          />
        </div>
        <div className="links">
        <a href="/">Home</a>
        <a href="/">Course</a>
        <a href="/">Service</a>
        <a href="/">Product</a>
        <div className="offer">WE ARE HIRING</div>
      </div>

        {/* <div className="hamburger-menu" onclick="toggleMenu()">
          <div className="line"></div>
          <div classNmae="line"></div>
          <div className="line"></div>
        </div>
        <nav className="menu">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav> */}
      </nav>

      
    </>
  );
}
