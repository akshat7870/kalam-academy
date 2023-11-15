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

        {/* <div id="burger-menu">
          <span></span>
        </div>

        <div id="menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div> */}
        <div class="resp-nav">
                <svg class="close-bar" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">! Font
                    Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License -
                    https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.
                    <path
                        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
                <a href="">Home</a>
                <a href="">Shop</a>
                <a href="">Product</a>
                <a href="">services</a>
                <p>We Are Hiring!</p>
            </div>
      </nav>
      <script src="Script.js"></script>
    </>

  );
}
