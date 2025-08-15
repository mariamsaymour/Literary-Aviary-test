import svgPaths from "./svg-am6aq9ttj6";

function Eye() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Eye">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_2183_48)" id="Eye">
          <g id="Icon">
            <path
              d={svgPaths.p28d0a200}
              stroke="var(--stroke-0, #856658)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
            <path
              d={svgPaths.p24e27900}
              stroke="var(--stroke-0, #856658)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2183_48">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function ManageBirds() {
  return (
    <div
      className="bg-[#faeee6] relative rounded-[10px] size-full"
      data-name="Manage Birds"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-4 py-[7px] relative size-full">
          <Eye />
          <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#856658] text-[17.75px] text-left text-nowrap">
            <p className="block leading-[1.426] whitespace-pre">Columns</p>
          </div>
        </div>
      </div>
    </div>
  );
}