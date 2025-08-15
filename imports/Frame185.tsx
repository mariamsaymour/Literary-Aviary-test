import svgPaths from "./svg-s61xatzvu3";

function Wind() {
  return (
    <div className="relative shrink-0 size-[13.53px]" data-name="Wind">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Wind">
          <path
            d={svgPaths.p1bed0b60}
            id="Icon"
            stroke="var(--stroke-0, #856658)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-[#faeee6] box-border content-stretch flex flex-row gap-[6.765px] items-center justify-center p-[9.02px] relative rounded-[9.02px] self-stretch shrink-0">
      <Wind />
      <div className="css-aaqoqq font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#856658] text-[12.5px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Reorder Flight</p>
      </div>
    </div>
  );
}

function VolumeX() {
  return (
    <div className="relative shrink-0 size-[13.53px]" data-name="Volume x">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g clipPath="url(#clip0_2213_173)" id="Volume x">
          <path
            d={svgPaths.p3292fe80}
            id="Icon"
            stroke="var(--stroke-0, #856658)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2213_173">
            <rect fill="white" height="13.5304" width="13.5304" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-[#faeee6] box-border content-stretch flex flex-row gap-[6.765px] items-center justify-center p-[9.02px] relative rounded-[9.02px] shrink-0">
      <VolumeX />
    </div>
  );
}

export default function Frame185() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-0 relative size-full">
      <Frame44 />
      <Frame45 />
    </div>
  );
}