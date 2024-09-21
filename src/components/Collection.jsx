import PropTypes from "prop-types";

const Collection = ({ backgroundClass }) => {
  return (
    <div>
      <div className="flex items-center justify-center p-4 mb-9">
        <div
          className={`w-full h-[400px] ${backgroundClass} bg-center bg-cover bg-no-repeat`}
        ></div>
      </div>
      <div className="flex items-center justify-center p-4 mb-9">
        <div className="w-[50%] p-2 relative">
          <img
            src="/collection_1.png"
            alt=""
            className="w-full h-[460px] object-cover"
          />
          <div className="absolute bottom-[25%] left-10">
            <h1 className="uppercase text-5xl w-8 text-white font-medium">
              Gym collection
            </h1>
            <button className="text-black bg-white p-4 px-6 rounded-full mt-10">
              Khám phá ngay
            </button>
          </div>
        </div>
        <div className="w-[50%] p-2 relative">
          <img
            src="/collection_2.png"
            alt=""
            className="w-full h-[460px] object-cover"
          />
          <div className="absolute top-[25%] left-10">
            <h1 className="uppercase text-5xl w-8 text-white font-medium">
              Racquet sports collection
            </h1>
            <button className="text-black bg-white p-4 px-6 rounded-full mt-10">
              Khám phá ngay
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-4 mb-8">
        <div className="grid lg:grid-cols-4 mx-1 gap-4 w-full">
          <div className="hover:scale-105 transition-transform duration-500">
            <img src="/collection_3.png" className="rounded-3xl" />
          </div>
          <div className="hover:scale-105 transition-transform duration-500">
            <img src="/collection_4.png" className="rounded-3xl" />
          </div>
          <div className="hover:scale-105 transition-transform duration-500">
            <img src="/collection_5.png" className="rounded-3xl" />
          </div>
          <div className="hover:scale-105 transition-transform duration-500">
            <img src="/collection_6.png" className="rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;

Collection.propTypes = {
  backgroundClass: PropTypes.string,
};
