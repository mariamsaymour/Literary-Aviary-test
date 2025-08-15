import svgPaths from "./svg-20szs8gs40";

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

export default function ManageBirds() {
  return (
    <div
      className="bg-[#faeee6] relative rounded-[10px] size-full"
      data-name="Manage Birds"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start pl-4 pr-[78px] py-[7px] relative size-full">
          <Search />
          <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#856658] text-[17.75px] text-left text-nowrap">
            <p className="block leading-[1.426] whitespace-pre">Search</p>
          </div>
        </div>
      </div>
    </div>
  );
}