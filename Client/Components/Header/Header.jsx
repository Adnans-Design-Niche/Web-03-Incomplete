import "./Header.scss";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import Searchbar from "../Searchbar/Searchbar";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <header className="header">
        <div className="header_logo">
          <img
            src="./EcoReads-Logo.svg"
            alt="EcoReads-Logo"
            className="header_logo--img"
          />
        </div>
        <div className="header_navbar">

          {/* If user is logged in, show navbar, else show login button, handled using useStates */}

          {isLoggedIn ? (
            <Navbar />
          ) : (
            <button className="header_navbar--login" onClick={handleLogin}>Login</button>
          )}
        </div>
      </header>
        <div className="Searchbar">
          <Searchbar />
        </div>
    </>
  );
};

export default Header;
