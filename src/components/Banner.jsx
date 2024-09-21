import PropTypes from "prop-types";
const Banner = ({ title, backgroundClass }) => {
  return (
    <div
      className={`w-full h-[500px] ${backgroundClass} bg-center bg-cover bg-no-repeat`}
    >
      <div className="w-[50%] h-full flex flex-col items-start justify-center px-8 space-y-4">
        <h1 className="uppercase text-7xl font-bold">{title}</h1>
        <p className="text-base font-normal">
          Nhập <span className="font-bold">CMSPORTS </span>tặng Áo thun thể thao
          đơn từ 399k
        </p>
        <button className="bg-blue-600 text-white p-3 px-8 rounded-full font-semibold">
          Khám phá ngay
        </button>
      </div>
    </div>
  );
};

export default Banner;
Banner.propTypes = {
  title: PropTypes.string,
  backgroundClass: PropTypes.string,
};
