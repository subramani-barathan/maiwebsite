import { Link } from "react-router-dom";
import { productDetails } from "../../../dummyData";


const Home = () => {
  return (
      <section className="service_section layout_padding ">
        <div className="container">
          <h2 className="custom_heading">Our Products</h2>
          <p className="custom_heading-text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have
          </p>
          <div className=" layout_padding2">
            <div className="card-deck">

                {productDetails.map(product => {
                    
              return (product.setHome && <div className="card">
              <img
                className="card-img-top"
                src={product.image}
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                  {product.details}
                </p>
              </div>
            </div>);
                })}
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Link to="/products" className="custom_dark-btn">
              Read More
            </Link>
          </div>
        </div>
      </section>
  );
};

export default Home;
