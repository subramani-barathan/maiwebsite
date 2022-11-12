import { useState } from "react";
import { Link } from "react-router-dom";
import slideImg from "../../../assets/images/slide-img.png";
const sliderContent = [
  {
    slideID: 0,
    slideImg: slideImg,
    slideTitle: "Welcome to Our Shop",
    slideContent:
      "We, Mai Natural Foods has Started our journey in 2022 in Tamilnadu which is called as Culture of India. Now we are fast growing peanut butter, peanut spreads and semi processed peanut producing unit.we have started our production with the commitment of giving Health and Nutrition through delicious peanut butter.",
    slideBtnTxt: "More details",
    slideBtnUri: "/slide0"
  },
  {
    slideID: 1,
    slideImg: slideImg,
    slideTitle: "Welcome to  Our Shop",
    slideContent:
      "We are found globally in the form of peanut butter which is made of hand picked peanuts(HPS). and lots of Love. MAI Natural Foods is known for its strict Quality and Food Safety policies.",
    slideBtnTxt: "More details",
    slideBtnUri: "/slide1"
  },
  {
    slideID: 2,
    slideImg: slideImg,
    slideTitle: "Welcome to  Our Shop",
    slideContent:
      "Peanut Butter is an excellent source of potassium, phosphorous and magnesium. It also contains very good amounts of calcium and sodium. Peanut butter contains good amounts of iron, zinc, manganese and selenium. Mother Nutri Foods is committed to its responsibility for the health and wellness of its consumers. As a leading food manufacturing company, we recognize the importance of providing meals that are both tasty and nutritious. We at Mother Nutri Foods are applying our commitment to help our consumers enjoy happier, healthier, and tastier lives.",
    slideBtnTxt: "More details",
    slideBtnUri: "/slide2"
  }
];
const Slider = () => {
  let [slide, setSlide] = useState(0);
  const slideNextEventHandler = () => {
    if (slide < sliderContent.length - 1) {
      setSlide(slide + 1);
    }
  };
  const slidePrevEventHandler = () => {
    if (slide > 0) {
      setSlide(slide - 1);
    }
  };
  return (
    <section className=" slider_section position-relative">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner  row-slider">
          {sliderContent.map((content) => {
            return (
              <div
                className={
                  content.slideID === slide
                    ? "carousel-item active"
                    : "carousel-item"
                }
                key={content.slideID}
              >
                <div className="slider_item-box">
                  <div className="slider_item-container">
                    <div className="container">
                      <div className="row row-slider">
                        <div className="col-md-6">
                          <div className="slider_item-detail">
                            <div>
                              <h1>{content.slideTitle}</h1>
                              <p>{content.slideContent}</p>
                              <div className="d-flex">
                                <Link
                                  to={content.slideBtnUri}
                                  className="text-uppercase custom_orange-btn mr-3"
                                >
                                  {content.slideBtnTxt}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="slider_img-box">
                            <div>
                              <img src={content.slideImg} alt="" className="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="custom_carousel-control">
          <div
            className={
              slide === 0
                ? "carousel-control-prev hide"
                : "carousel-control-prev"
            }
            role="button"
            data-slide="prev"
            onClick={slidePrevEventHandler}
          >
            <span className="sr-only">Previous</span>
          </div>
          <div
            className={
              slide === sliderContent.length - 1
                ? "carousel-control-next hide"
                : "carousel-control-next"
            }
            role="button"
            data-slide="next"
            onClick={slideNextEventHandler}
          >
            <span className="sr-only">Next</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
