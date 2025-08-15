import svgPaths from "./svg-fzcpfsohae";

function Frame181() {
  return (
    <div className="absolute left-[13px] size-[19px] top-0">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 19 19"
      >
        <g id="Frame 181">
          <rect
            fill="var(--fill-0, #856658)"
            height="19"
            rx="6.00808"
            width="19"
          />
          <path d={svgPaths.pb734e00} fill="var(--fill-0, #FFF8F2)" id="â" />
        </g>
      </svg>
    </div>
  );
}

function Group52() {
  return (
    <div className="h-[21.414px] relative w-[24.459px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 25 22"
      >
        <g id="Group 52">
          <path
            d={svgPaths.p25bf2200}
            fill="var(--fill-0, #DEC7BA)"
            id="Rectangle 1039"
          />
          <g id="Group 51">
            <path
              d={svgPaths.p2b105400}
              fill="var(--fill-0, #DEC7BA)"
              id="Vector 3"
            />
            <path
              d={svgPaths.p2cdff600}
              fill="var(--fill-0, #DEC7BA)"
              id="Vector 4"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame182() {
  return (
    <div className="bg-[#856658] overflow-clip relative rounded-bl-[2px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 size-8">
      <Frame181 />
      <div className="absolute flex h-[22.433px] items-center justify-center left-[-6.2px] top-[15.76px] w-[25.346px]">
        <div className="flex-none rotate-[357.548deg]">
          <Group52 />
        </div>
      </div>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Chevron right">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="Chevron right">
          <path
            d="M6.75 13.5L11.25 9L6.75 4.5"
            id="Icon"
            stroke="var(--stroke-0, #856658)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[6.765px] items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <ChevronRight />
    </div>
  );
}

function Title() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[15px] items-center justify-start p-0 relative shrink-0"
      data-name="title"
    >
      <Frame182 />
      <Button />
    </div>
  );
}

function Info() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Info">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 22 22"
      >
        <g clipPath="url(#clip0_2209_205)" id="Info">
          <path
            d={svgPaths.p294a0500}
            id="Icon"
            stroke="var(--stroke-0, #856658)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.2"
          />
        </g>
        <defs>
          <clipPath id="clip0_2209_205">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[6.765px] items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Info />
    </div>
  );
}

function Send() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Send">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 22 22"
      >
        <g clipPath="url(#clip0_2209_202)" id="Send">
          <path
            d={svgPaths.p3ab2f880}
            id="Icon"
            stroke="var(--stroke-0, #856658)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.2"
          />
        </g>
        <defs>
          <clipPath id="clip0_2209_202">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div
      className="bg-[#fff8f2] box-border content-stretch flex flex-row gap-[6.765px] items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0 w-[40.041px]"
      data-name="Button"
    >
      <Send />
    </div>
  );
}

function Frame71() {
  return (
    <div className="[flex-flow:wrap] box-border content-start flex gap-3.5 items-start justify-center p-0 relative shrink-0 w-full">
      <Button1 />
      <Button2 />
    </div>
  );
}

export default function Sidebar() {
  return (
    <div className="bg-[#faeee6] relative size-full" data-name="sidebar">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between px-2.5 py-[17px] relative size-full">
          <Title />
          <Frame71 />
        </div>
      </div>
    </div>
  );
}