import svgPaths from "./svg-5721b2gscy";

function Search() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Search">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="Search">
          <path
            d={svgPaths.p3f3f9900}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </g>
      </svg>
    </div>
  );
}

function ManageBirds() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-4 py-[7px] relative rounded-[10px] shrink-0 w-[234px]"
      data-name="Manage Birds"
    >
      <Search />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#856658] text-[17.75px] text-left text-nowrap">
        <p className="block leading-[1.426] whitespace-pre">Search</p>
      </div>
    </div>
  );
}

function Filter() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Filter">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="Filter">
          <path
            d={svgPaths.p3a61f680}
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

function ManageBirds1() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-4 py-[7px] relative rounded-[10px] shrink-0 w-[101px]"
      data-name="Manage Birds"
    >
      <Filter />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#856658] text-[17.75px] text-left text-nowrap">
        <p className="block leading-[1.426] whitespace-pre">Filter</p>
      </div>
    </div>
  );
}

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

function ManageBirds2() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-2.5 h-full items-center justify-start px-4 py-[7px] relative rounded-[10px] shrink-0 w-[126px]"
      data-name="Manage Birds"
    >
      <Eye />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#856658] text-[17.75px] text-left text-nowrap">
        <p className="block leading-[1.426] whitespace-pre">Columns</p>
      </div>
    </div>
  );
}

export default function Frame172() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative size-full">
      <ManageBirds />
      <ManageBirds1 />
      <div className="flex flex-row items-center self-stretch">
        <ManageBirds2 />
      </div>
    </div>
  );
}