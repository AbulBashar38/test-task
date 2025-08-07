const TopNavbar = () => {
  return (
    <nav className="flex w-full items-center justify-center gap-2.5 px-4 md:px-200px py-2.5 bg-[linear-gradient(90deg,rgba(252,0,78,1)_0%,rgba(16,203,824,1)_100%)] z-10">
      <div className=" text-center font-normal text-sm md:text-top-bar-size leading-normal container">
        <span className="font-extrabold text-aqua">
          🚀 FRESH BEGINNINGS SALE:
        </span>

        <span className="font-bold text-white">
          {" "}
          Extra 25% OFF, Limited Spots - start your journey today!
        </span>
      </div>
    </nav>
  );
};

export default TopNavbar;
