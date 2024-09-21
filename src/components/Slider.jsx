import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // Màn hình rất lớn
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    // Màn hình desktop
    breakpoint: { max: 3000, min: 1200 },
    items: 1,
  },
  tablet: {
    // Màn hình tablet
    breakpoint: { max: 1200, min: 600 },
    items: 1,
  },
  mobile: {
    // Màn hình mobile
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const Slider = () => {
  return (
    <div className="w-full h-[460px] relative bg-center bg-cover p-4 mt-32">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        arrows
      >
        <div className="absolute flex items-center justify-center">
          <img
            loading="lazy"
            src="https://media3.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/September2024/Hero_Banner_-_UNDERWEAR_-_Desktop.jpg"
            alt="Home banner slide"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://media3.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/September2024/Hero_Banner_-_COOLMATE_SPORTS_-_Desktop1.jpg"
            alt="Home banner slide"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-gray-200 text-center p-10">
          <img
            loading="lazy"
            src="https://media3.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/September2024/Hero_Banner_-_Desktop.jpg"
            alt="Home banner slide"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-gray-200 text-center p-10">
          <img
            loading="lazy"
            src="https://media3.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/September2024/Hero_Banner_-_Desktop.jpg"
            alt="Home banner slide"
            className="w-full h-full object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
