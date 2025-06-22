const TopNavbar = () => {
  return (
    <nav className="flex w-full items-center justify-center gap-2.5 px-4 md:px-[200px] py-2.5 bg-[linear-gradient(90deg,rgba(252,0,78,1)_0%,rgba(16,203,824,1)_100%)]">
      <div className="relative w-fit text-center [font-family:'Figtree',Helvetica] font-normal text-transparent text-sm md:text-[22px] tracking-[0] leading-[normal]">
        <span className="font-extrabold text-[#00e7f9]">
          🚀 FRESH BEGINNINGS SALE
        </span>
        <span className="font-semibold text-white">:</span>
        <span className="font-bold text-white">
          {" "}
          Extra 25% OFF, Limited Spots - start your journey today
        </span>
        <span className="[font-family:'Nunito',Helvetica] font-semibold text-white">
          !
        </span>
      </div>
    </nav>
  );
};

export default TopNavbar;
