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
    <main>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between px-4 md:px-[215px] py-8 md:py-[131px] gap-8 md:gap-0">
        {/* Main content section */}
        <Card className="flex flex-col w-full md:w-[516px] items-start gap-8 md:gap-20 border-0 bg-transparent order-2 md:order-1">
          <CardContent className="flex flex-col items-start gap-6 md:gap-[30px] relative self-stretch w-full flex-[0_0_auto] p-0">
            {/* Headline section */}
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-bold text-white text-2xl md:text-[35px] tracking-[0] leading-tight md:leading-[normal] text-center md:text-left">
                  Want to Turn Social Media Into a Profitable Career?
                </h1>
                <h2 className="relative self-stretch [text-shadow:0px_4px_4px_#fc004e] [font-family:'Urbanist',Helvetica] font-bold text-[#00e7f9] text-2xl md:text-[35px] tracking-[0] leading-tight md:leading-[normal] text-center md:text-left">
                  Discover your way to success with Fametonic:
                </h2>
              </div>

              {/* Feature list */}
              <ul className="flex flex-col items-start gap-3 md:gap-[13px] relative self-stretch w-full flex-[0_0_auto]">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]"
                  >
                    <span className="mt-1 md:mt-[-1.00px] relative w-fit [font-family:'Nunito',Helvetica] font-medium text-white text-lg md:text-[22px] text-center tracking-[0] leading-[normal] whitespace-nowrap flex-shrink-0">
                      ✨
                    </span>
                    <span className="relative flex-1 mt-[-1.00px] [font-family:'Figtree',Helvetica] font-semibold text-white text-sm md:text-base tracking-[0] leading-[20px] md:leading-[22px]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA section */}
            <div className="flex flex-col w-full md:w-[313px] items-start gap-2.5 relative flex-[0_0_auto]">
              <Button className="flex items-center justify-center gap-2.5 px-8 md:px-10 py-3 md:py-2 relative self-stretch w-full flex-[0_0_auto] bg-[#fc004e] rounded-[10px] shadow-[2px_2px_10px_#00e7f9] hover:bg-[#e0004a] transition-colors">
                <span className="relative w-fit [font-family:'Figtree',Helvetica] font-bold text-white text-lg md:text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                  GET STARTED
                </span>
                <Image
                  src={arrowRight}
                  alt="arrowRight"
                  className="relative w-4 h-4 md:w-2 md:h-[13px]"
                />
              </Button>
              <p className="relative self-stretch [font-family:'Figtree',Helvetica] font-normal text-white text-xs text-center tracking-[0] leading-4">
                1-minute quiz for personalized Insights
              </p>
            </div>

            {/* Footer text */}
            <div className="flex flex-col items-center justify-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] [font-family:'Figtree',Helvetica] font-medium text-[#aaaaaa] text-xs tracking-[0] leading-[normal] text-center">
                By clicking "Get Started", you agree with Terms and Conditions,
                Privacy Policy, Subscription Terms
              </p>
              <p className="relative self-stretch [font-family:'Figtree',Helvetica] font-medium text-[#aaaaaa] text-[10px] tracking-[0] leading-[normal] text-center">
                Fametonic 2025 ©All Rights Reserved.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Mobile app mockup image */}
        <div className="relative w-full max-w-[400px] md:max-w-[666px] h-[300px] md:h-[679px] order-1 md:order-2 flex-shrink-0">
          <Image
            className="absolute inset-0 w-full h-full object-contain md:object-cover"
            alt="Influe mobile mockup"
            src={heroImage}
          />
        </div>
      </div>
    </main>
  );
}
