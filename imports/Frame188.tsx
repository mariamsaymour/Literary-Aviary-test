import svgPaths from "./svg-9vsxgqb12o";

function List() {
  return (
    <div className="relative shrink-0 size-6" data-name="List">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="List">
          <path
            d={svgPaths.p2136a900}
            fill="var(--fill-0, #856658)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame198() {
  return (
    <div className="relative shrink-0 size-[30px]">
      <div
        className="absolute bottom-0 left-0 right-[-3.75%] top-[-7.1%]"
        style={{ "--fill-0": "rgba(229, 209, 197, 1)" } as React.CSSProperties}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          role="presentation"
          viewBox="0 0 32 33"
        >
          <g id="Frame 198">
            <rect
              fill="var(--fill-0, #E5D1C5)"
              height="30"
              rx="9.02025"
              width="30"
              y="3"
            />
            <g id="Binoculars">
              <path
                d={svgPaths.p1829c100}
                fill="var(--fill-0, #302420)"
                id="Vector"
              />
            </g>
            <circle
              cx="26.5605"
              cy="5.43555"
              fill="var(--fill-0, #66800B)"
              id="Ellipse 36"
              r="4.06445"
              stroke="var(--stroke-0, #536907)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Frame188() {
  return (
    <div className="box-border content-stretch flex flex-row items-start justify-between p-0 relative size-full">
      <List />
      <Frame198 />
    </div>
  );
}