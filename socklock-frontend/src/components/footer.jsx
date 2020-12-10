import React from "react";
import "./../assets/css/components/footer.scss";

const date = new Date();

const Footer = () => {
  return (
    <footer className="footer mt-5 pt-5 pb-2">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center">
            <p className="h3">Useful Links</p>
            <ul className="footer-list">
              <li className="footer-link">
                <a href=""> FAQ</a>
              </li>
              <li className="footer-link">
                <a href=""> Search</a>
              </li>
              <li className="footer-link">
                <a href=""> About us</a>
              </li>
              <li className="footer-link">
                <a href=""> Our Store</a>
              </li>
              <li className="footer-link">
                <a href=""> Privacy Policy</a>
              </li>
              <li className="footer-link">
                <a href=""> Shipping</a>
              </li>
              <li className="footer-link">
                <a href=""> Refund Policy</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 text-center">
            <p className="h3">Follow us</p>
            <ul className="footer-list">
              <li className="footer-link">
                <a href="">
                  <i class="fab fa-facebook-square social-link"></i>
                </a>
              </li>
              <li className="footer-link">
                <a href="">
                  <i class="fab fa-instagram social-link"></i>
                </a>
              </li>
              <li className="footer-link">
                <a href="">
                  <i class="fab fa-twitter social-link"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 text-center">
            <p className="h3">Contact us</p>
            <ul className="footer-list">
              <br />
              <li className="footer-link">
                <a href="" className="contact-link">
                  <i className="fas fa-phone"></i> 010 0000 0000
                </a>
              </li>
              <br />
              <li className="footer-link">
                <a href="" className="contact-link">
                  <i className="fas fa-envelope"></i> info@socklock.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p>All Rights Reserved &copy; 2020</p>
      </div>
    </footer>
  );
};

export default Footer;
