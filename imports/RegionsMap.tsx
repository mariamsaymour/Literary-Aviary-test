import svgPaths from "./svg-l7ojupj1pz";

export default function RegionsMap() {
  return (
    <div className="relative size-full" data-name="Regions map">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 413 226"
      >
        <g clipPath="url(#clip0_2023_21)" id="Regions map">
          <path
            d={svgPaths.p6db8780}
            fill="var(--fill-0, #EFE1DF)"
            id="Australia"
          />
          <path
            d={svgPaths.p258c44c0}
            fill="var(--fill-0, #EFE1DF)"
            id="South America"
          />
          <path
            d={svgPaths.p3fb51ec0}
            fill="var(--fill-0, #C59C96)"
            id="North America"
          />
          <path
            d={svgPaths.p3b8fdf00}
            fill="var(--fill-0, #9B7B77)"
            id="Europe"
          />
          <g id="Asia">
            <path d={svgPaths.p186b3df0} fill="var(--fill-0, #E3C7C3)" />
            <path d={svgPaths.p16690840} fill="var(--fill-0, #E3C7C3)" />
            <path d={svgPaths.p1e688d00} fill="var(--fill-0, #E3C7C3)" />
            <path d={svgPaths.p2d3f2b80} fill="var(--fill-0, #E3C7C3)" />
            <path d={svgPaths.p2f33e500} fill="var(--fill-0, #E3C7C3)" />
          </g>
          <g id="Africa">
            <path d={svgPaths.pd169980} fill="var(--fill-0, #EFE1DF)" />
            <path d={svgPaths.p13755c0} fill="var(--fill-0, #EFE1DF)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2023_21">
            <rect fill="white" height="225.869" width="412.412" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}