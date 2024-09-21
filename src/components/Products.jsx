import PropTypes from "prop-types";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";

const Products = ({ title, backgroundClass, data }) => {
  return (
    <div className="text-black w-full h-[800px] flex flex-col">
      <div className="flex justify-between relative">
        <div className="space-x-4 pt-[200px] p-2">
          <button className="rounded-full p-2 px-6 space-x-4 bg-black/90 text-white font-bold cursor-pointer">
            {title}
          </button>
          <button className="rounded-full border border-[#000] p-2 px-6 space-x-4 text-black font-bold cursor-pointer">
            Sản phẩm bán chạy
          </button>
        </div>
        <a
          href="#"
          className="text-black font-normal absolute bottom-0 right-0 text-[14px]"
        >
          Xem Thêm
        </a>
      </div>

      {/* Product cards */}
      <div className="flex items-center justify-center space-x-4 p-4 w-full">
        <div className="grid 2xl:grid-cols-6 grid-cols-5 gap-5">
          {data &&
            data.length > 0 &&
            data.map((item) => (
              <>
                <div
                  key={item.id}
                  className="flex flex-col w-[260px] h-[350px] relative group"
                >
                  <img
                    // src={item.image}
                    src="https://media3.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/April2024/QKK.EC.XANHDAM8.jpg"
                    alt="Quần Dài Nam Kaki Excool"
                    className="rounded-xl group-hover:hidden"
                  />
                  <img
                    src="https://media3.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/December2021/1-copy-2_99.jpg"
                    alt="Quần Dài Nam Kaki Excool"
                    className="rounded-xl hidden group-hover:block"
                  />

                  <div className="flex justify-between text-sm font-medium absolute top-2 left-2 right-2">
                    <p>4.9(903)</p>
                    <button className="px-[10px] py-[2px] bg-black text-white text-[10px] rounded-md font-bold">
                      Đáng mua
                    </button>
                  </div>
                  <div className="w-[220px] h-[130px] absolute bottom-0 mx-auto box-border left-0 right-0 rounded-md bg-gradient-to-r bg-[#0000001a] from-[#ffffff66] z-2 p-3 hidden group-hover:block">
                    <div className="flex flex-col space-y-2 justify-center items-center">
                      <p className="text-black font-medium text-sm">
                        Thêm nhanh vào giỏi hàng +
                      </p>
                      <div className="items-center grid grid-cols-4 gap-3">
                        <button className="w-9 h-9 bg-white rounded-lg flex items-center justify-center hover:bg-black hover:text-white">
                          M
                        </button>
                        <button className="w-9 h-9 bg-white rounded-lg flex items-center justify-center hover:bg-black hover:text-white">
                          L
                        </button>
                        <button className="w-9 h-9 bg-white rounded-lg flex items-center justify-center hover:bg-black hover:text-white">
                          XL
                        </button>
                        <button className="w-9 h-9 bg-white rounded-lg flex items-center justify-center hover:bg-black hover:text-white">
                          2XL
                        </button>
                        <button className="w-9 h-9 bg-white rounded-lg flex items-center justify-center hover:bg-black hover:text-white">
                          3XL
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-start space-y-6">
                    <span
                      className={`${backgroundClass} w-[24px] h-[18px] absolute bottom-[-56px] left-2 px-4 rounded-xl`}
                    ></span>
                    <div className="text-sm font-medium px-2">
                      Quần dài Nam Kaki Excool
                      <div className="flex space-x-2 text-sm font-bold">
                        <p>449.000đ</p>
                        <span className="px-[8px] text-[10px] text-white bg-blue-800 rounded-lg">
                          -7%
                        </span>
                        <p className="text-[#c4c4c4] line-through font-medium">
                          299.000đ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>

        {/* <div className="w-full h-full">
          <p className="text-sm font-normal relative top-[335px]"></p>
          <span className="text-black absolute bottom-0.5"></span>
        </div> */}
      </div>
    </div>
  );
};

export default Products;

Products.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
  backgroundClass: PropTypes.string,
};
