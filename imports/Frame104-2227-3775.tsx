import svgPaths from "./svg-xnl6kpayx8";
import imgImage18 from "figma:asset/1cc3580d7dcf9d76032997ff2085c6436c87bfb7.png";

function Binoculars() {
  return (
    <div className="relative shrink-0 size-4" data-name="Binoculars">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Binoculars">
          <path
            d={svgPaths.p6b0f100}
            fill="var(--fill-0, #695046)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-[#f2dfd3] box-border content-stretch flex flex-row gap-[6.765px] items-center justify-center p-[9.02px] relative rounded-[9.02px] shrink-0">
      <Binoculars />
      <div className="css-y5an0i font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#695046] text-[14px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Explore Flocks</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-0 relative shrink-0 w-full">
      <Frame44 />
      <div className="css-neuwzv font-['Cormorant:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#302420] text-[20px] text-left text-nowrap">
        <p className="leading-[normal] whitespace-pre">
          <span>{`All authors, works, regions, emotions `}</span>
          <span className="css-12oyv2 font-['Cormorant:Italic',_sans-serif] font-normal italic">{`& `}</span>
          birds
        </p>
      </div>
    </div>
  );
}

function Frame185() {
  return <div className="h-[31.571px] shrink-0 w-[154.907px]" />;
}

export default function Frame104() {
  return (
    <div className="bg-[#fff8f2] relative size-full">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-between px-[25.25px] py-[17.75px] relative size-full">
          <Frame28 />
          <div
            className="bg-center bg-cover bg-no-repeat h-[469.5px] shrink-0 w-[349px]"
            data-name="image 18"
            style={{ backgroundImage: `url('${imgImage18}')` }}
          />
          <Frame185 />
        </div>
      </div>
    </div>
  );
}