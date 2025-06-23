import arrowRight from "@/assets/icons/arrow-right.svg";
import heroImage from "@/assets/images/heroImage.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
export default function Home() {
  const features = [
    "Start growing your influence right away—no waiting required!",
    "Create viral TikToks and Reels step by step with easy-to-follow lessons",
    "Use a Personal AI Worker to boost your content",
    "Learn from expert-led courses designed for aspiring influencers",
  ];
  return (
    <main className="flex justify-center items-center w-full max-w-screen overflow-hidden">
      <section className="container lg:pl-context-padding p-5 flex flex-col-reverse lg:flex-row">
        <Card className="flex flex-col w-full lg:w-hero-content items-start gap-8 lg:gap-20 border-0 bg-transparent lg:mt-14 z-10 p-0">
          <CardContent className="flex flex-col items-start gap-6 md:gap-8 self-stretch w-full p-0">
            <section className="flex flex-col items-start gap-4 self-stretch w-full ">
              <div className="flex flex-col items-start relative self-stretch w-full ">
                <h1 className=" self-stretch  font-bold text-white text-2xl lg:text-hero-size tracking-[0] leading-tight lg:leading-[normal] text-center lg:text-left px-4 md:px-0">
                  Want to Turn Social Media Into a Profitable Career?
                </h1>
                <h2 className="relative self-stretch text-shadow-hero  font-bold text-aqua text-2xl lg:text-hero-size tracking-[0] leading-tight lg:leading-[normal] text-center lg:text-left">
                  Discover your way to success with Fametonic:
                </h2>
              </div>

              <ul className="flex flex-col items-center gap-3 md:gap-3.5 relative self-stretch w-full ">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2.5 relative self-stretch w-full mt-1"
                  >
                    <span className=" relative w-fit font-nunito font-medium text-white text-lg md:text-top-bar-size text-center tracking-[0] leading-[normal] whitespace-nowrap flex-shrink-0">
                      ✨
                    </span>
                    <span className="relative flex-1  font-figtree font-semibold text-white text-sm md:text-base tracking-[0] leading-5 md:leading-6">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="flex flex-col-reverse md:flex-col  items-start md:gap-4 self-stretch w-full ">
              <div className="flex flex-col w-full lg:w-[313px] items-start gap-2.5 ">
                <Button className="flex items-center justify-center gap-2.5 px-8 lg:px-10 py-3 lg:py-2 relative self-stretch w-full  bg-top-bar-red rounded-[10px] shadow-[2px_2px_10px_#00e7f9] hover:bg-[#e0004a] transition-colors">
                  <span className="relative w-fit font-figtree font-bold text-white text-lg lg:text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                    GET STARTED
                  </span>
                  <Image
                    src={arrowRight}
                    alt="arrowRight"
                    className="relative w-4 h-4 lg:w-2 lg:h-[13px]"
                  />
                </Button>
                <p className=" self-stretch font-figtree font-normal text-white text-xs text-center tracking-[0] leading-4">
                  1-minute quiz for personalized Insights
                </p>
              </div>

              <div className="flex flex-col items-center justify-center md:gap-3  self-stretch w-full ">
                <p className=" self-stretch mt-[-1.00px] font-figtree font-medium text-[#aaaaaa] text-xs tracking-[0] leading-[normal] text-center md:text-start">
                  By clicking &quot;Get Started&quot;, you agree with Terms and
                  Conditions, Privacy Policy, Subscription Terms
                </p>
                <p className=" self-stretch mt-5 mb-8 md:mb-0 md:mt-0 font-figtree font-medium text-[#aaaaaa] text-[10px] tracking-[0] leading-[normal] md:text-start text-center">
                  Fametonic 2025 ©All Rights Reserved.
                </p>
              </div>
            </section>
          </CardContent>
        </Card>

        <div className="relative ">
          <div className=" lg:absolute w-full h-[320px]  md:h-[660px] lg:w-[660px] lg:h-[700px] lg:-left-[60px] lg:-top-8    ">
            <Image
              className=" w-full h-full object-cover"
              alt="hero image"
              src={heroImage}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
