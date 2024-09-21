const Diary = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 mt-2 mb-[80px]">
      <div className="p-2 mb-2">
        <h1 className="uppercase text-2xl text-black px-[50px] font-medium">
          Nhật ký coolmate
        </h1>
        <p className="text-sm font-normal">
          Chia sẻ diện mạo mới nhất của bạn cùng với #Coolmate.
        </p>
      </div>
      <div className="grid grid-cols-5 gap-10">
        <div className="w-[240px] h-[250px]">
          <img
            src="/diary_1.png"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="w-[240px] h-[250px]">
          <img
            src="/diary_2.png"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="w-[240px] h-[250px]">
          <img
            src="/diary_3.png"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="w-[240px] h-[250px]">
          <img
            src="/diary_4.png"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="w-[240px] h-[250px]">
          <img
            src="/diary_5.png"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Diary;
