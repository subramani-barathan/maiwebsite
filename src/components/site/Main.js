import "./siteindex.css";
import Header from "./template/Header";
import Footer from "./template/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
const Main = (props) => {
  return (
    <>
      <Header />
      {props.page === "Home" && <Home />}
      {props.page === "About" && <About />}
      {props.page === "Product" && <Product />}
      {props.page === "Contact" && <Contact />}
      <Footer />
    </>
  );
};

export default Main;
