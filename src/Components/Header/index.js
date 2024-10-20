import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const Header = () => {
  const [showServices, setShowServices] = useState(false);
  const [showTools, setShowTools] = useState(false);

  return (
    <>
      <div className="top-bar">
        <div className="container">
          <span>Free Shipping on orders above 999/-</span>
          <span>Call us on: +91 98768 05120</span>
        </div>
      </div>
      <header>
        <div className="main-header container">
          <div className="logo-section">
            <img
              src="https://s3-alpha-sig.figma.com/img/7220/1328/eefc66cd70960daab6449206c3540858?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IZj9rZ8pk0DIPcS2gKzcDeslH6xchJ--XbU~C~owkS5n12psMSHEc5JLnmtBqZj7Vn~PDRKvvfd3LMAAqOLeS8rUSTIaBpqfw1IH~RarF6TEPIpWDQcLG4mPhvhaGl52L0aF7TV5uyRtFDsS3r0eqIy6sM8vBwxGiPHU0NUoV9ryEbIuJz4StnWANiDRBUP5-niwgRODOkPjFHOLb-2mnal4LB9Gz104NjhXPLD4qI-l79aNCrAfVhZAMCsyksp6liOQ5gM1cl-KIp2J0o6gs6SOhmmHmrjz25yGvb9mNGsWoUxa25a6sLeVS4mYChjxGFOL0rsZ-GZ663dYfGLLNg__"
              alt="Chaperone"
              className="logo"
            />
            <span className="brand-name">Chaperone</span>
          </div>

          <nav className="main-nav">
            <ul>
              <li>
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/plants-pots" className="nav-link active">
                  Plants & Pots
                </a>
              </li>
              <li className="dropdown">
                <a
                  href="/tools"
                  className="nav-link"
                  onMouseEnter={() => setShowTools(true)}
                  onMouseLeave={() => setShowTools(false)}
                >
                  Tools <span className="arrow">▼</span>
                </a>
                {showTools && (
                  <ul className="dropdown-menu">
                    <li>
                      <a href="/tools/gardening">Gardening Tools</a>
                    </li>
                    <li>
                      <a href="/tools/accessories">Accessories</a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="dropdown">
                <a
                  href="/services"
                  className="nav-link"
                  onMouseEnter={() => setShowServices(true)}
                  onMouseLeave={() => setShowServices(false)}
                >
                  Our Services <span className="arrow">▼</span>
                </a>
                {showServices && (
                  <ul className="dropdown-menu">
                    <li>
                      <a href="/services/maali">Book Maali</a>
                    </li>
                    <li>
                      <a href="/services/daycare">Plant Day Care</a>
                    </li>
                    <li>
                      <a href="/services/rent">Rent Plants</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href="/blog" className="nav-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="/our-story" className="nav-link">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/faqs" className="nav-link">
                  FAQs
                </a>
              </li>
            </ul>
          </nav>

          <div className="user-actions">
            <a className="profile-link">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <span>My Profile</span>
            </a>
            <a className="cart-link">
              <FontAwesomeIcon icon={faShoppingCart} className="icon" />
              <span>Cart</span>
              <span className="cart-count">3</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
