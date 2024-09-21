import { useState, useEffect, memo } from "react";

const Header = () => {
  const [isVisibleHeader, setIsVisibleHeader] = useState(false);

  useEffect(() => {
    let prevScroll = window.scrollY;
    const controlHeader = () => {
      const currentScroll = window.scrollY;

      console.log({ prevScroll, currentScroll });
      setIsVisibleHeader(currentScroll > prevScroll && currentScroll > 60);
      prevScroll = currentScroll;
    };
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, []);
  return (
    <div
      className={`container-fluid w-full fixed top-0 transition z-10 ${
        !isVisibleHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="p-1 px-6 text-sm bg-white flex items-center justify-between">
        <nav className="flex items-center space-x-4">
          <a href="#" className="text-black font-normal">
            84RISING*
          </a>
          <a href="#" className="text-black text-xs font-medium">
            COOLXPRINT
          </a>
        </nav>
        <div className="flex items-center space-x-4 font-normal">
          <nav className="flex items-center space-x-4">
            <a href="#" className="text-black">
              Tham gia CoolClub
            </a>
            <a href="#" className="text-black">
              Blog
            </a>
            <a href="#" className="text-black">
              Về Coolmate
            </a>
            <a href="#" className="text-black">
              Trung tâm CSKH
            </a>
            <a href="#" className="text-black">
              Đăng nhập
            </a>
          </nav>
        </div>
      </div>

      <div className="flex justify-center items-center w-full h-[33px] bg-[#525252] space-x-4">
        <h2 className="text-sm text-white">
          GIẢM THÊM 5% KHI MUA 2 SẢN PHẨM BẤT KỲ{" "}
          <span className="text-white text-xs font-medium">Mua ngay</span>
        </h2>
      </div>

      <div className="px-6 flex items-center justify-between bg-[#212121] w-full h-16">
        <a href="#">
          <img
            src="https://www.coolmate.me/images/logo-coolmate-new.svg?v=1"
            alt="Logo Coolmate"
          />
        </a>

        <div className="flex justify-center items-center h-16">
          <nav className="uppercase text-sm space-x-4 ">
            <a
              href="#"
              className="px-2 ml-4 text-white bg-orange-600 h-full p-6"
            >
              sale
            </a>
            <a href="#" className="text-white">
              sản phẩm
            </a>
            <a href="#" className="text-white">
              đồ lót
            </a>
            <a href="#" className="text-white">
              đồ thể thao
            </a>
            <a href="#" className="text-white">
              mặc hằng ngày
            </a>
            <a href="#" className="text-white">
              sản xuất riêng
            </a>
            <a href="#" className="text-white">
              care & share
            </a>
          </nav>
        </div>

        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            className="rounded-full h-10 p-6"
          />
          <div className="flex justify-center items-center space-x-4 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="size-7"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clipRule="evenodd"
              />
            </svg>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="size-7"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="border boder-solid rounded-full px-1 py-0 bg-yellow-200 absolute bottom-[-8px] right-[-4px] text-[10px] font-bold">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
