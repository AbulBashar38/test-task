import checkIcon from "@/assets/icons/check.svg";
import Image from "next/image";
const ProgressPage = () => {
  return (
    <section className="min-w-screen min-h-screen bg-[#353535] flex justify-center">
      <section className=" px-[39.5px] py-[58.5px]">
        <h1 className="text-[64px] leading-[100%] text-center font-semibold">
          0%
        </h1>
        <h4 className="font-extrabold text-[20px] text-center leading-[100%]">
          Analyzing the profile!
        </h4>
        <p className="font-semibold mt-[10px]">
          It may take up to 30 sec, please be patient.
        </p>
        <div className="p-[20px] border border-white rounded-[10px] mt-[30px] w-[311px] bg-white/10">
          <p className="font-bold">
            Hold tight—we're diving deep into your profile. Your results are on
            the way… great things take a sec!
          </p>
          <ul className="flex flex-col gap-[15px] mt-[15px]">
            <li className="text-[14px] font-bold leading-[100%] flex gap-[10px] items-center">
              <div className="w-[20px] h-[20px] bg-[#FC004E] rounded-full flex items-center justify-center">
                <Image
                  src={checkIcon}
                  alt="checkIcon"
                  //   width={20}
                  //   height={20}
                  className="w-[10px]"
                ></Image>
              </div>
              <p>Analyzing your stats</p>
            </li>
            <li className="text-[14px] font-bold leading-[100%] flex gap-[10px] items-center">
              <div className="w-[20px] h-[20px] border-[2px] border-white rounded-full"></div>
              <p>Analyzing your stats</p>
            </li>
          </ul>
        </div>

        <button
          disabled
          className="bg-[linear-gradient(90deg,rgba(252,0,78,1)_0%,rgba(16,203,824,1)_100%)] w-full text-[24px] font-extrabold mt-[30px] text-white rounded-[16px] h-[54px] opacity-[40%]"
        >
          Continue
        </button>
      </section>
    </section>
  );
};

export default ProgressPage;
