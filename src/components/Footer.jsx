const Footer = () => {
  return (
    <div className="flex flex-wrap bg-black justify-center items-center h-full pb-[30px]">
      <div className="flex flex-col justify-center items-center bg-blue-700 h-[130px] w-full">
        <h1 className="text-2xl text-white mb-5 font-bold">
          Tham gia coolclub - nhận ngay Voucher 15%. +Hoàn tiền khi mua sắm
        </h1>
        <div className="flex justify-center items-center m-2 space-x-4">
          <button className="uppercase text-blue-700 text-sm py-2 px-6 bg-white rounded-full font-medium">
            Đăng ký miễn phí{" "}
            <span className="text-blue-700 text-sm hyphens-none">hoặc</span>{" "}
            đăng nhập
          </button>
          <button className="text-white rounded-full font-medium py-2 px-6 border border-solid">
            Tìm hiểu đặc quyền Hội viên CoolClub
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full h-full p-4 bg-black">
        <div className="grid grid-cols-3">
          <div className="flex flex-col text-white">
            <h1 className="text-xl font-bold mb-2">COOLMATE lắng nghe bạn!</h1>
            <p className="text-xs mb-7">
              Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng
              góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản
              phẩm tốt hơn nữa.
            </p>
            <button className="text-sm rounded-full bg-blue-600 hover:bg-blue-200 p-3 w-[165px]">
              Đóng góp ý kiến
            </button>
          </div>
          <div className="grid grid-cols-1 relative">
            <div className="my-4 space-y-10 flex flex-col items-center w-10">
              <img
                src="https://www.coolmate.me/images/footer/icon-hotline.svg"
                alt="Footer Icon Phone"
              />
              <img
                src="https://www.coolmate.me/images/footer/icon-email.svg"
                alt="Footer Icon Email"
              ></img>
            </div>
            <div className="text-white absolute top-1 left-[50px] font-medium">
              <p className="text-sm">Hotline</p>
              <p>1900.272737 - 028.7777.2737</p>
              <p className="mb-2">(8:30 - 22:00)</p>

              <p className="text-sm">Email</p>
              <p>Cool@coolmate.me</p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-8 px-10">
            <img
              src="https://mcdn.coolmate.me/image/June2023/mceclip1_43.png"
              alt="Footer Icon facebook"
              className="w-[30px] h-[30px]"
            />
            <img
              src="https://mcdn.coolmate.me/image/June2023/mceclip2_68.png"
              alt="Footer Icon Zalo"
              className="w-[30px] h-[30px]"
            />
            <img
              src="https://mcdn.coolmate.me/image/June2023/mceclip0_62.png"
              alt="Footer Icon tiktok"
              className="w-[30px] h-[30px]"
            />
            <img
              src="https://www.coolmate.me/images/footer/icon-instar.svg"
              alt="Footer Icon instar"
              className="w-[30px] h-[30px]"
            />
            <img
              src="https://www.coolmate.me/images/footer/icon-youtube.svg"
              alt="Footer Icon youtube"
              className="w-[30px] h-[30px]"
            />
          </div>
        </div>

        <hr className="mb-5 mt-5 w-full line-clamp-1 opacity-25" />

        <div className="grid grid-cols-5 text-xs text-white">
          <div className="space-y-4">
            <p className="font-bold text-sm">COOLCLUB</p>
            <p>Đăng kí thành viên</p>
            <p>Ưu đãi & Đặc quyền</p>
          </div>

          <div className="space-y-3">
            <p className="uppercase font-bold text-sm">Chính sách</p>
            <p>Chính sách đổi trả 60 ngày</p>
            <p>Chính sách khuyến mãi</p>
            <p>Chính sách bảo mật</p>
            <p>Chính sách giao hàng</p>

            <p className="font-bold uppercase pt-5 text-sm">Coolmate.me</p>
            <p>Lịch sử thay đổi website</p>
          </div>

          <div className="space-y-4">
            <p className="uppercase font-bold text-sm">Chăm sóc khách hàng</p>
            <p>Trải nghiệm mua sắm 100% hài lòng</p>
            <p>Hỏi đáp - FAQs</p>

            <p className="uppercase font-bold text-sm pt-5">
              Kiến thức mặc đẹp
            </p>
            <p>Hướng dẫn chọn size</p>
            <p>Blog</p>
          </div>

          <div className="space-y-4">
            <p className="uppercase font-bold text-sm">Tài liệu - Tuyển dụng</p>
            <p>Tuyển dụng</p>
            <p>Đăng ký bản quyền</p>

            <p className="uppercase font-bold text-sm pt-5">Về COOLMATE</p>
            <p>Coolmate 101</p>
            <p>DVKH xuất sắc</p>
            <p>Câu chuyện về Coolmate</p>
            <p>Nhà máy</p>
            <p>Care & Share</p>
          </div>

          <div className="space-y-3">
            <p className="uppercase font-bold text-sm">Địa chỉ liên hệ</p>
            <p>
              Văn phòng Hà Nội: Tầng 3 Tòa nhà BMM, KM2, Đường Phùng Hưng,
              Phường Phúc La, Quận Hà Đông, TP Hà Nội
            </p>
            <p>
              Trung tâm vận hành Hà Nội: Lô C8, KCN Lại Yên, Xã Lại Yên, Huyện
              Hoài Đức, Thành phố Hà Nội
            </p>
            <p>
              Văn phòng và Trung tâm vận hành TP. HCM: Lô C3, đường D2, KCN Cát
              Lái, Thạnh Mỹ Lợi, TP. Thủ Đức, TP. Hồ Chí Minh.
            </p>
            <p>
              Trung tâm R&D: T6-01, The Manhattan Vinhomes Grand Park, Long
              Bình, TP. Thủ Đức
            </p>
          </div>
        </div>

        <hr className="mb-5 mt-5 w-full line-clamp-1 opacity-25" />

        <div className="grid grid-cols-2 w-full h-full">
          <div className="float-left text-xs text-white space-y-3 font-bold">
            <p>@ CÔNG TY TNHH FASTECH ASIA</p>
            <p className="text-[10px]">
              Mã số doanh nghiệp: 0108617038. Giấy chứng nhận đăng ký doanh
              nghiệp do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày
              20/02/2019.
            </p>
          </div>
          <div className="flex justify-end items-center space-x-3">
            <img
              src="https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/March2022/handle_cert.png"
              alt="Chung nhan Tin Nhiem Mang"
              className="w-[100px]"
            />
            <img
              src="https://media3.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/March2022/dmca_protected_15_120.png"
              alt="DMCA.com Protection Status"
              className="w-[80px]"
            />
            <img
              src="https://www.coolmate.me/images/footer/Coolmate-info.png"
              alt="Coolmate info"
              className="w-[40px]"
            />
            <img
              src="https://www.coolmate.me/images/footer/logoSaleNoti.png"
              alt="Coolmate info"
              className="w-[110px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
