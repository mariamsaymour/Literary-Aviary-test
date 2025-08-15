import svgPaths from "./svg-6df1xovfyx";

function Grid() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Grid">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="Grid">
          <g id="Icon">
            <path
              d="M7.5 2.25H2.25V7.5H7.5V2.25Z"
              stroke="var(--stroke-0, #160E0C)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
            <path
              d={svgPaths.p17cb2000}
              stroke="var(--stroke-0, #160E0C)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
            <path
              d={svgPaths.p3d937300}
              stroke="var(--stroke-0, #160E0C)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
            <path
              d={svgPaths.p29783680}
              stroke="var(--stroke-0, #160E0C)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ManageBirds() {
  return (
    <div
      className="bg-[#bec97e] box-border content-stretch flex flex-row gap-2.5 h-full items-center justify-center p-[10px] relative rounded-[10px] shrink-0"
      data-name="Manage Birds"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[#cdd597] border-solid inset-0 pointer-events-none rounded-[10px]"
      />
      <Grid />
    </div>
  );
}

function Table() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Table">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="Table">
          <path
            d={svgPaths.p14b18400}
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
      className="box-border content-stretch flex flex-row gap-2.5 h-full items-center justify-center p-[10px] relative rounded-[10px] shrink-0"
      data-name="Manage Birds"
    >
      <Table />
    </div>
  );
}

function Frame109() {
  return (
    <div className="bg-[#faeee6] box-border content-stretch flex flex-row items-center justify-start p-px relative rounded-[10px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#dec7ba] border-solid inset-[-1px] pointer-events-none rounded-[11px]"
      />
      <div className="flex flex-row items-center self-stretch">
        <ManageBirds />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <ManageBirds1 />
      </div>
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Plus">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="Plus">
          <path
            d={svgPaths.p19cf40}
            id="Icon"
            stroke="var(--stroke-0, #FAEEE6)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </g>
      </svg>
    </div>
  );
}

function ManageBirds2() {
  return (
    <div
      className="bg-[#66800b] box-border content-stretch flex flex-row gap-1.5 items-center justify-center pl-2 pr-3 py-[7px] relative rounded-[10px] shrink-0"
      data-name="Manage Birds"
    >
      <Plus />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#faeee6] text-[17.75px] text-left text-nowrap">
        <p className="block leading-[1.426] whitespace-pre">Add a Quote</p>
      </div>
    </div>
  );
}

export default function Frame108() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[22px] items-center justify-start p-0 relative size-full">
      <Frame109 />
      <ManageBirds2 />
    </div>
  );
}