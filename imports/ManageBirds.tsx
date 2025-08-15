function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Chevron down">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="Chevron down">
          <path
            d="M4.5 6.75L9 11.25L13.5 6.75"
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

export default function ManageBirds() {
  return (
    <div
      className="bg-[#faeee6] relative rounded-[10px] size-full"
      data-name="Manage Birds"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-[7px] relative size-full">
          <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#856658] text-[17.75px] text-left text-nowrap">
            <p className="block leading-[1.426] whitespace-pre">Family</p>
          </div>
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}