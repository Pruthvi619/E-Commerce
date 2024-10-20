import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faPinterest,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
          <p>
            Lorem Ipsum Dolor Sit Amet. Aut Ipsam Illum Et Nostrum Quidem Aut
            Necesbus Enim
          </p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter Your Email Address" />
          </div>
          <button className="subscribe-btn">SUBSCRIBE</button>
        </div>
        <div className="footer-section">
          <h3>ABOUT US</h3>
          <ul>
            <li>Our Story</li>
            <li>Blogs</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Help & Support</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>OUR SERVICES</h3>
          <ul>
            <li>Book Maali</li>
            <li>Plant Day Care</li>
            <li>Rent Plants</li>
            <li>Plants & Pots</li>
            <li>Gardening Tools</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>USEFUL LINKS</h3>
          <ul>
            <li>My Account</li>
            <li>Orders & Returns</li>
            <li>Track Order</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Return, Refund & Replacement Policy</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>GET IN TOUCH</h3>
          <p>
            Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57,
            Gurgaon, Haryana, India 122003
          </p>
          <p>Call: +919958287272</p>
          <p>Email: care@chaperoneplants.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-brand">
          <h3>CHAPERONE</h3>
          <p>
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
            necessitatibus enim ut internos accusantium a numquam autem ab rerum
            omnis. Non molestiae ratione et laborum doloribus aut molestiae
            voluptates ut porro excepturi sit molestiae obcaecati qui quis
            beatae est voluptatem eius. Et architecto nihil id labore omnis hic
            iste deleniti et porro aspernatur.
          </p>
          <div className="footer-social">
            <h4>Follow us on</h4>
            <div className="social-icons">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              </a>
              <a
                href="https://www.pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faPinterest} className="social-icon" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} className="social-icon" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="footer-separator" />
      <p className="copyright">© 2023, chaperone.com All rights reserved.</p>
    </footer>
  );
};

export default Footer;
