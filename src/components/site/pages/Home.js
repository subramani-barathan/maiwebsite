import { Link } from "react-router-dom";

import cardItemOne from "../../../assets/images/card-item-1.png";
import cardItemTwo from "../../../assets/images/card-item-2.png";
import cardItemThree from "../../../assets/images/card-item-3.png";

import client from "../../../assets/images/client.png";
import Slider from "../section/Slider";
import FirstFooter from "../section/FirstFooter";
const Home = () => {
  return (
    <>
      <div className="hero_area">
        <Slider />
      </div>
      <section className="service_section layout_padding ">
        <div className="container">
          <h2 className="custom_heading">Our Products</h2>
          <p className="custom_heading-text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have
          </p>
          <div className=" layout_padding2">
            <div className="card-deck">
              <div className="card">
                <img
                  className="card-img-top"
                  src={cardItemOne}
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Roasted Peanuts</h5>
                  <p className="card-text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top"
                  src={cardItemTwo}
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Splited Peanuts</h5>
                  <p className="card-text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top"
                  src={cardItemThree}
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Peanut Butter</h5>
                  <p className="card-text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Link to="" className="custom_dark-btn">
              Read More
            </Link>
          </div>
        </div>
      </section>
      <section className="tasty_section">
        <div className="container_fluid">
          <h2>Very tasty fruits</h2>
        </div>
      </section>
      <section className="client_section layout_padding">
        <div className="container">
          <h2 className="custom_heading">Testimonial</h2>
          <p className="custom_heading-text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have
          </p>
          <div>
            <div
              id="carouselExampleControls-2"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="client_container layout_padding2">
                    <div className="client_img-box">
                      <img src={client} alt="" />
                    </div>
                    <div className="client_detail">
                      <h3>Johnhex</h3>
                      <p className="custom_heading-text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are <br />
                        going to use a passage of Lorem Ipsum, you need to be
                        sure
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="client_container layout_padding2">
                    <div className="client_img-box">
                      <img src={client} alt="" />
                    </div>
                    <div className="client_detail">
                      <h3>Johnhex</h3>
                      <p className="custom_heading-text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are <br />
                        going to use a passage of Lorem Ipsum, you need to be
                        sure
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="client_container layout_padding2">
                    <div className="client_img-box">
                      <img src={client} alt="" />
                    </div>
                    <div className="client_detail">
                      <h3>Johnhex</h3>
                      <p className="custom_heading-text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are <br />
                        going to use a passage of Lorem Ipsum, you need to be
                        sure
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="custom_carousel-control">
                <Link
                  className="carousel-control-prev"
                  to="#carouselExampleControls-2"
                  role="button"
                  data-slide="prev"
                >
                  <span className="" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </Link>
                <Link
                  className="carousel-control-next"
                  to="#carouselExampleControls-2"
                  role="button"
                  data-slide="next"
                >
                  <span className="" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact_section layout_padding">
        <div className="container">
          <h2 className="font-weight-bold">Contact Us</h2>
          <div className="row">
            <div className="col-md-8 mr-auto">
              <form action="">
                <div className="contact_form-container">
                  <div>
                    <div>
                      <input type="text" placeholder="Name" />
                    </div>
                    <div>
                      <input type="text" placeholder="Phone Number" />
                    </div>
                    <div>
                      <input type="email" placeholder="Email" />
                    </div>

                    <div className="mt-5">
                      <input type="text" placeholder="Message" />
                    </div>
                    <div className="mt-5">
                      <button type="submit">send</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="map_section">
        <div id="map" className="h-100 w-100 "></div>
      </section>
      <FirstFooter />
    </>
  );
};

export default Home;
