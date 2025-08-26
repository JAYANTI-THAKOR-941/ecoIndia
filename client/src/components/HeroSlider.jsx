// src/components/HeroSlider.jsx
import Slider from "react-slick";
import "./main.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    title: "Explore India's Environmental Diversity",
    subtitle: "From the Himalayas to the Western Ghats, know your ecosystem.",
    image: "https://worldview.unc.edu/wp-content/uploads/sites/433/2020/05/WED-706x420.jpg",
  },
  {
    title: "Join Local Eco Initiatives",
    subtitle: "Be the change in your state and spread awareness.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/054/880/166/small_2x/thriving-tree-in-lush-green-environment-nature-conservation-and-protection-concept-free-photo.jpeg",
  },
  {
    title: "EcoIndia: Learn. Act. Inspire.",
    subtitle: "Your platform to promote sustainability in every corner of India.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/022/318/808/small_2x/concept-save-the-world-save-environment-the-world-is-in-the-grass-of-the-green-bokeh-background-photo.jpg",
  },
];

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next-arrow" onClick={onClick}>
    &#9654;
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev-arrow" onClick={onClick}>
    &#9664;
  </div>
);

const HeroSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="hero-slider">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slider-slide">
            <img src={slide.image} alt={slide.title} className="slider-image" />
            <div className="slider-content">
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
              <button className="explore-btn">Explore Now</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
