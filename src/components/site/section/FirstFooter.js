import { Link } from "react-router-dom";
import fb from "../../../assets/images/fb.png";
import twitter from "../../../assets/images/twitter.png";
import linkedIn from "../../../assets/images/linkedin.png";
import instagram from "../../../assets/images/instagram.png";

const Slider = () => {
  return (
    <section className="info_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Products</h5>
            <ul>
              <li>
                <Link to="">Peanut Butter Smooth</Link>
              </li>
              <li>
                <Link to="">Peanut Butter Crunchy</Link>
              </li>
              <li>
                <Link to="">Peanut Butter Natural</Link>
              </li>
              <li>
                <Link to="">Peanut Butter Chocolate</Link>
              </li>
              <li>
                <Link to="">Peanut Butter Honey</Link>
              </li>
              <li>
                <Link to="">Peanut Butter Less Fat</Link>
              </li>
              <li>
                <Link to="">Peanut Butter Whole Nut</Link>
              </li>
              <li>
                <Link to="">Peanut Butter Sugar Free</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Products</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="col-md-3">
            <div className="social_container">
              <h5>Follow Us</h5>
              <div className="social-box">
                <Link to="">
                  <img src={fb} alt="" />
                </Link>

                <Link to="">
                  <img src={twitter} alt="" />
                </Link>
                <Link to="">
                  <img src={linkedIn} alt="" />
                </Link>
                <Link to="">
                  <img src={instagram} alt="" />
                </Link>
              </div>
            </div>
            <div className="subscribe_container">
              <h5>Mail me</h5>
              <div className="form_container">
                <form action="">
                  <input type="email" />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
