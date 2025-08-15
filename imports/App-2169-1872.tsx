import svgPaths from "./svg-ihc0zh01yq";

function CloseAdmin() {
  return (
    <div className="relative shrink-0 size-4" data-name="close admin">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="close admin">
          <path
            d="M12 4L4 12M4 4L12 12"
            id="Icon"
            stroke="var(--stroke-0, #FAEEE6)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </g>
      </svg>
    </div>
  );
}

function Title() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[15px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="title"
    >
      <div className="basis-0 font-['Cormorant:Bold_Italic',_sans-serif] font-bold grow italic leading-[0] min-h-px min-w-px relative shrink-0 text-[#faeee6] text-[22.5px] text-left">
        <p className="block leading-[1.426]">Literary Aviary</p>
      </div>
      <CloseAdmin />
    </div>
  );
}

function Moon() {
  return (
    <div className="relative shrink-0 size-[14.049px]" data-name="Moon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15 15"
      >
        <g id="Moon">
          <path
            d={svgPaths.pf849e00}
            id="Icon"
            stroke="var(--stroke-0, #FAEEE6)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.40488"
          />
        </g>
      </svg>
    </div>
  );
}

function Avatar() {
  return (
    <div
      className="bg-[#8b7ec8] box-border content-stretch flex flex-row gap-[7.805px] items-center justify-center p-0 relative rounded-[34.341px] shrink-0 size-8"
      data-name="avatar"
    >
      <Moon />
    </div>
  );
}

function Info() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-0.5 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-left"
      data-name="Info"
    >
      <div className="flex flex-col font-['Crimson_Text:Bold',_sans-serif] justify-center relative shrink-0 text-[#ccae9d] text-[0px] text-nowrap">
        <p className="leading-[1.4] whitespace-pre">
          <span className="font-['Crimson_Text:Bold',_sans-serif] not-italic text-[#faeee6] text-[15.75px]">{`username `}</span>
          <span className="text-[15.75px]"> </span>
          <span className="font-['Crimson_Text:Bold',_sans-serif] not-italic text-[11px] uppercase">
            Admin
          </span>
        </p>
      </div>
      <div
        className="flex flex-col font-['Crimson_Text:SemiBold',_sans-serif] justify-center min-w-full relative shrink-0 text-[#9c7c6b] text-[12.5px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.4]">useremail@email.com</p>
      </div>
    </div>
  );
}

function AvatarBlock() {
  return (
    <div
      className="relative rounded-[10px] shrink-0 w-full"
      data-name="Avatar Block"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[11px] items-center justify-start px-4 py-[7px] relative w-full">
          <Avatar />
          <Info />
        </div>
      </div>
    </div>
  );
}

function Feather() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Feather">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_2167_644)" id="Feather">
          <path
            d={svgPaths.p1527c880}
            id="Icon"
            stroke="var(--stroke-0, #FAEEE6)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </g>
        <defs>
          <clipPath id="clip0_2167_644">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ManageBirds() {
  return (
    <div
      className="bg-[#3d4c07] relative rounded-[10px] shrink-0 w-full"
      data-name="Manage Birds"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-[7px] relative w-full">
          <Feather />
          <div className="basis-0 font-['Crimson_Text:SemiBold',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#faeee6] text-[17.75px] text-left">
            <p className="block leading-[1.426]">Manage Birds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BarChart() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Bar chart">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="Bar chart">
          <path
            d={svgPaths.p25fee280}
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

function AnalyzeData() {
  return (
    <div className="relative shrink-0 w-full" data-name="Analyze data">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-[7px] relative w-full">
          <BarChart />
          <div className="basis-0 font-['Crimson_Text:SemiBold',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ccae9d] text-[17.75px] text-left">
            <p className="block leading-[1.426]">Analyze Data</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FileText() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="File text">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="File text">
          <path
            d={svgPaths.pd1341c0}
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

function ShareData() {
  return (
    <div className="relative shrink-0 w-full" data-name="Share Data">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-[7px] relative w-full">
          <FileText />
          <div className="basis-0 font-['Crimson_Text:SemiBold',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ccae9d] text-[17.75px] text-left">
            <p className="block leading-[1.426]">Share Data</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Settings">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_2167_653)" id="Settings">
          <g id="Icon">
            <path
              d={svgPaths.p24e27900}
              stroke="var(--stroke-0, #CCAE9D)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
            <path
              d={svgPaths.p1de49d00}
              stroke="var(--stroke-0, #CCAE9D)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2167_653">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame70() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-[7px] relative w-full">
          <Settings />
          <div className="basis-0 font-['Crimson_Text:SemiBold',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ccae9d] text-[17.75px] text-left">
            <p className="block leading-[1.426]">Account Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[11px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="navigation"
    >
      <ManageBirds />
      <AnalyzeData />
      <ShareData />
      <Frame70 />
    </div>
  );
}

function SidebarLinks() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[15.75px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="sidebar links"
    >
      <Title />
      <div className="h-0 relative shrink-0 w-full" data-name="divider">
        <div
          className="absolute bottom-0 left-0 right-0 top-[-1px]"
          style={{ "--stroke-0": "rgba(48, 36, 32, 1)" } as React.CSSProperties}
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            role="presentation"
            viewBox="0 0 224 1"
          >
            <line
              id="divider"
              stroke="var(--stroke-0, #302420)"
              x2="224"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <AvatarBlock />
      <div className="h-0 relative shrink-0 w-full" data-name="divider">
        <div
          className="absolute bottom-0 left-0 right-0 top-[-1px]"
          style={{ "--stroke-0": "rgba(48, 36, 32, 1)" } as React.CSSProperties}
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            role="presentation"
            viewBox="0 0 224 1"
          >
            <line
              id="divider"
              stroke="var(--stroke-0, #302420)"
              x2="224"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <Navigation />
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="relative shrink-0 size-[13.53px]" data-name="Arrow left">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Arrow left">
          <path
            d={svgPaths.p2d7c2780}
            id="Icon"
            stroke="var(--stroke-0, #FAEEE6)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.35304"
          />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[#422e27] box-border content-stretch flex flex-row gap-[6.765px] items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <ArrowLeft />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#faeee6] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Back to gallery</p>
      </div>
    </div>
  );
}

function LogOut() {
  return (
    <div className="relative shrink-0 size-[13.53px]" data-name="Log out">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Log out">
          <path
            d={svgPaths.p2573cb00}
            id="Icon"
            stroke="var(--stroke-0, #FAEEE6)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.35304"
          />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="bg-[#422e27] box-border content-stretch flex flex-row gap-[6.765px] items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <LogOut />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#faeee6] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Logout</p>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3.5 items-start justify-start px-4 py-0 relative w-full">
          <div className="h-0 relative shrink-0 w-full">
            <div
              className="absolute bottom-0 left-0 right-0 top-[-2px]"
              style={
                { "--stroke-0": "rgba(34, 24, 22, 1)" } as React.CSSProperties
              }
            >
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                role="presentation"
                viewBox="0 0 192 2"
              >
                <line
                  id="Line 1"
                  stroke="var(--stroke-0, #221816)"
                  strokeWidth="2"
                  x2="192"
                  y1="1"
                  y2="1"
                />
              </svg>
            </div>
          </div>
          <Button />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div
      className="bg-[#160e0c] box-border content-stretch flex flex-col gap-[61px] h-full items-start justify-start overflow-clip px-2.5 py-[17px] relative shrink-0 w-[244px]"
      data-name="sidebar"
    >
      <SidebarLinks />
      <Frame71 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[15.75px] items-start justify-start leading-[0] p-0 relative shrink-0 text-left w-full">
      <div className="css-1gp955 font-['Cormorant:Bold_Italic',_sans-serif] font-bold italic relative shrink-0 text-[#252d09] text-[25.25px] w-full">
        <p className="block leading-[1.426]">Manage Bird Quotes</p>
      </div>
      <div className="font-['Crimson_Text:Regular',_sans-serif] not-italic relative shrink-0 text-[#856658] text-[15.75px] w-full">
        <p className="block leading-[1.426]">
          Add, edit, and organize the library of literary bird references.
        </p>
      </div>
    </div>
  );
}

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

function ManageBirds1() {
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

function ManageBirds2() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-[7px] relative rounded-[10px] shrink-0"
      data-name="Manage Birds"
    >
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#856658] text-[17.75px] text-left text-nowrap">
        <p className="block leading-[1.426] whitespace-pre">Emotion</p>
      </div>
      <ChevronDown />
    </div>
  );
}

function ChevronDown1() {
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

function ManageBirds3() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-[7px] relative rounded-[10px] shrink-0"
      data-name="Manage Birds"
    >
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#856658] text-[17.75px] text-left text-nowrap">
        <p className="block leading-[1.426] whitespace-pre">Author</p>
      </div>
      <ChevronDown1 />
    </div>
  );
}

function ChevronDown2() {
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

function ManageBirds4() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-[7px] relative rounded-[10px] shrink-0"
      data-name="Manage Birds"
    >
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#856658] text-[17.75px] text-left text-nowrap">
        <p className="block leading-[1.426] whitespace-pre">Region</p>
      </div>
      <ChevronDown2 />
    </div>
  );
}

function ChevronDown3() {
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

function ManageBirds5() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-[7px] relative rounded-[10px] shrink-0"
      data-name="Manage Birds"
    >
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#856658] text-[17.75px] text-left text-nowrap">
        <p className="block leading-[1.426] whitespace-pre">Family</p>
      </div>
      <ChevronDown3 />
    </div>
  );
}

function Frame107() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#856658] text-[17.75px] text-left text-nowrap">
        <p className="block leading-[1.426] whitespace-pre">Filter by:</p>
      </div>
      <ManageBirds2 />
      <ManageBirds3 />
      <ManageBirds4 />
      <ManageBirds5 />
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="List">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="List">
          <path
            d={svgPaths.p3041e680}
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

function ManageBirds6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 h-full items-center justify-center p-[10px] relative rounded-[10px] shrink-0"
      data-name="Manage Birds"
    >
      <List />
    </div>
  );
}

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

function ManageBirds7() {
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

function ManageBirds8() {
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
        <ManageBirds6 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <ManageBirds7 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <ManageBirds8 />
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

function ManageBirds9() {
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

function Frame108() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[22px] items-center justify-start p-0 relative shrink-0">
      <Frame109 />
      <ManageBirds9 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[31px] items-center justify-start p-0 relative shrink-0 w-full">
      <ManageBirds1 />
      <Frame107 />
      <Frame108 />
    </div>
  );
}

function Frame126() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0 w-full">
      <div className="font-['Cormorant:SemiBold_Italic',_sans-serif] font-semibold italic leading-[0] relative shrink-0 text-[#160e0c] text-[28px] text-center w-full">
        <p className="block leading-[1.17]">
          The raven himself is hoarse That croaks the fatal entrance of Duncan
          Under my battlements.
        </p>
      </div>
    </div>
  );
}

function PenTool() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Pen tool">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g clipPath="url(#clip0_2169_804)" id="Pen tool">
          <path
            d={svgPaths.p37a62100}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_804">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <PenTool />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">William Shakespeare</p>
      </div>
    </div>
  );
}

function Book() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Book">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Book">
          <path
            d={svgPaths.p22acf700}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Book />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Macbeth</p>
      </div>
    </div>
  );
}

function Circle() {
  return (
    <div className="relative shrink-0 size-2.5" data-name="Circle">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10 10"
      >
        <g clipPath="url(#clip0_2169_783)" id="Circle">
          <path
            d={svgPaths.p26db7700}
            fill="var(--fill-0, #A699D0)"
            id="Icon"
            stroke="var(--stroke-0, #A699D0)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_783">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div
      className="bg-[#f0eaec] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Circle />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#3c2a62] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Fear</p>
      </div>
    </div>
  );
}

function Feather1() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Feather">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g clipPath="url(#clip0_2169_792)" id="Feather">
          <path
            d={svgPaths.p333ffb00}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_792">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Feather1 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Corvidae</p>
      </div>
    </div>
  );
}

function Compass() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Compass">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g clipPath="url(#clip0_2169_780)" id="Compass">
          <g id="Icon">
            <path
              d={svgPaths.p253def00}
              stroke="var(--stroke-0, #CCAE9D)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.4"
            />
            <path
              d={svgPaths.p247c4e80}
              stroke="var(--stroke-0, #CCAE9D)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.4"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2169_780">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Compass />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Europe</p>
      </div>
    </div>
  );
}

function Frame113() {
  return (
    <div className="[flex-flow:wrap] box-border content-start flex gap-2.5 items-start justify-center p-0 relative shrink-0 w-full">
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start pb-6 pt-0 px-6 relative size-full">
          <Frame126 />
          <Frame113 />
        </div>
      </div>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="relative shrink-0 size-6" data-name="checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="checkbox">
          <path
            d={svgPaths.p11d16a80}
            fill="var(--fill-0, #FFF8F2)"
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </div>
  );
}

function ManageBirds10() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Manage Birds"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[22px] py-2.5 relative size-full">
          <Checkbox />
        </div>
      </div>
    </div>
  );
}

function Edit2() {
  return (
    <div className="relative shrink-0 size-6" data-name="Edit 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#clip0_2169_789)" id="Edit 2">
          <path
            d={svgPaths.p35fd4b00}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_789">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ManageBirds11() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Manage Birds"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#f2dfd3] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[22px] py-2.5 relative size-full">
          <Edit2 />
        </div>
      </div>
    </div>
  );
}

function Trash2() {
  return (
    <div className="relative shrink-0 size-6" data-name="Trash 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Trash 2">
          <path
            d={svgPaths.p1ea5da80}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </div>
  );
}

function ManageBirds12() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Manage Birds"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#f2dfd3] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[22px] py-2.5 relative size-full">
          <Trash2 />
        </div>
      </div>
    </div>
  );
}

function Frame115() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative w-full">
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <ManageBirds10 />
        </div>
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <ManageBirds11 />
        </div>
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <ManageBirds12 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#f2dfd3] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Card() {
  return (
    <div
      className="[grid-area:1_/_1] bg-[#fffcfa] relative rounded-xl shrink-0"
      data-name="Card"
    >
      <div className="box-border content-stretch flex flex-col gap-3 items-center justify-center overflow-clip pb-0 pt-[21px] px-0 relative size-full">
        <div className="font-['Crimson_Text:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#856658] text-[17.75px] text-left text-nowrap uppercase">
          <p className="block leading-[1.426] whitespace-pre">raven</p>
        </div>
        <Frame121 />
        <Frame115 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#f2dfd3] border-solid inset-[-1px] pointer-events-none rounded-[13px]"
      />
    </div>
  );
}

function Frame127() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0 w-full">
      <div className="font-['Cormorant:SemiBold_Italic',_sans-serif] font-semibold italic leading-[0] relative shrink-0 text-[#160e0c] text-[28px] text-center w-full">
        <p className="block leading-[1.17]">
          Once upon a midnight dreary, while I pondered, weak and weary…
        </p>
      </div>
    </div>
  );
}

function PenTool1() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Pen tool">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g clipPath="url(#clip0_2169_804)" id="Pen tool">
          <path
            d={svgPaths.p37a62100}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_804">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <PenTool1 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Edgar Allan Poe</p>
      </div>
    </div>
  );
}

function Book1() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Book">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Book">
          <path
            d={svgPaths.p22acf700}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Book1 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">The Raven</p>
      </div>
    </div>
  );
}

function Feather2() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Feather">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g clipPath="url(#clip0_2169_792)" id="Feather">
          <path
            d={svgPaths.p333ffb00}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_792">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Feather2 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Corvidae</p>
      </div>
    </div>
  );
}

function Compass1() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Compass">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g clipPath="url(#clip0_2169_780)" id="Compass">
          <g id="Icon">
            <path
              d={svgPaths.p253def00}
              stroke="var(--stroke-0, #CCAE9D)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.4"
            />
            <path
              d={svgPaths.p247c4e80}
              stroke="var(--stroke-0, #CCAE9D)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.4"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2169_780">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Compass1 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">North America</p>
      </div>
    </div>
  );
}

function Circle1() {
  return (
    <div className="relative shrink-0 size-2.5" data-name="Circle">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10 10"
      >
        <g clipPath="url(#clip0_2169_771)" id="Circle">
          <path
            d={svgPaths.p26db7700}
            fill="var(--fill-0, #66A0C8)"
            id="Icon"
            stroke="var(--stroke-0, #66A0C8)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_771">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div
      className="bg-[#e1eceb] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Circle1 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#163b66] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Sadness</p>
      </div>
    </div>
  );
}

function Frame114() {
  return (
    <div className="[flex-flow:wrap] box-border content-start flex gap-2.5 items-start justify-center p-0 relative shrink-0 w-full">
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
      <Button11 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start pb-8 pt-0 px-[21px] relative size-full">
          <Frame127 />
          <Frame114 />
        </div>
      </div>
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="relative shrink-0 size-6" data-name="checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="checkbox">
          <path
            d={svgPaths.p11d16a80}
            fill="var(--fill-0, #FFF8F2)"
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </div>
  );
}

function ManageBirds13() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Manage Birds"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[22px] py-2.5 relative size-full">
          <Checkbox1 />
        </div>
      </div>
    </div>
  );
}

function Edit3() {
  return (
    <div className="relative shrink-0 size-6" data-name="Edit 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#clip0_2169_789)" id="Edit 2">
          <path
            d={svgPaths.p35fd4b00}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_789">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ManageBirds14() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Manage Birds"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#f2dfd3] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[22px] py-2.5 relative size-full">
          <Edit3 />
        </div>
      </div>
    </div>
  );
}

function Trash3() {
  return (
    <div className="relative shrink-0 size-6" data-name="Trash 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Trash 2">
          <path
            d={svgPaths.p1ea5da80}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </div>
  );
}

function ManageBirds15() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Manage Birds"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#f2dfd3] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[22px] py-2.5 relative size-full">
          <Trash3 />
        </div>
      </div>
    </div>
  );
}

function Frame116() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative w-full">
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <ManageBirds13 />
        </div>
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <ManageBirds14 />
        </div>
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <ManageBirds15 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#f2dfd3] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Card1() {
  return (
    <div
      className="[grid-area:1_/_2] bg-[#fffcfa] relative rounded-xl shrink-0"
      data-name="Card"
    >
      <div className="box-border content-stretch flex flex-col gap-3 items-center justify-center overflow-clip pb-0 pt-[21px] px-0 relative size-full">
        <div className="font-['Crimson_Text:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#856658] text-[17.75px] text-left text-nowrap uppercase">
          <p className="block leading-[1.426] whitespace-pre">raven</p>
        </div>
        <Frame122 />
        <Frame116 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#f2dfd3] border-solid inset-[-1px] pointer-events-none rounded-[13px]"
      />
    </div>
  );
}

function Frame124() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0 w-full">
      <div className="font-['Cormorant:SemiBold_Italic',_sans-serif] font-semibold italic leading-[0] relative shrink-0 text-[#160e0c] text-[28px] text-center text-nowrap">
        <p className="block leading-[1.17] whitespace-pre">
          A crow o’ the same colour.
        </p>
      </div>
    </div>
  );
}

function PenTool2() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Pen tool">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g clipPath="url(#clip0_2169_804)" id="Pen tool">
          <path
            d={svgPaths.p37a62100}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_804">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <PenTool2 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">William Shakespeare</p>
      </div>
    </div>
  );
}

function Book2() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Book">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Book">
          <path
            d={svgPaths.p22acf700}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Book2 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Twelfth Night</p>
      </div>
    </div>
  );
}

function Feather3() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Feather">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g clipPath="url(#clip0_2169_792)" id="Feather">
          <path
            d={svgPaths.p333ffb00}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_792">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Feather3 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Corvidae</p>
      </div>
    </div>
  );
}

function Compass2() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Compass">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g clipPath="url(#clip0_2169_780)" id="Compass">
          <g id="Icon">
            <path
              d={svgPaths.p253def00}
              stroke="var(--stroke-0, #CCAE9D)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.4"
            />
            <path
              d={svgPaths.p247c4e80}
              stroke="var(--stroke-0, #CCAE9D)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.4"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2169_780">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Compass2 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Europe</p>
      </div>
    </div>
  );
}

function Circle2() {
  return (
    <div className="relative shrink-0 size-2.5" data-name="Circle">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10 10"
      >
        <g clipPath="url(#clip0_2169_801)" id="Circle">
          <path
            d={svgPaths.p26db7700}
            fill="var(--fill-0, #5ABDAC)"
            id="Icon"
            stroke="var(--stroke-0, #5ABDAC)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_801">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div
      className="bg-[#ddf1e4] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Circle2 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#164f4a] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Calm</p>
      </div>
    </div>
  );
}

function Frame117() {
  return (
    <div className="[flex-flow:wrap] box-border content-start flex gap-2.5 items-start justify-center p-0 relative shrink-0 w-full">
      <Button12 />
      <Button13 />
      <Button14 />
      <Button15 />
      <Button16 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start pb-8 pt-0 px-[21px] relative size-full">
          <Frame124 />
          <Frame117 />
        </div>
      </div>
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="relative shrink-0 size-6" data-name="checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="checkbox">
          <path
            d={svgPaths.p11d16a80}
            fill="var(--fill-0, #FFF8F2)"
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </div>
  );
}

function ManageBirds16() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Manage Birds"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[22px] py-2.5 relative size-full">
          <Checkbox2 />
        </div>
      </div>
    </div>
  );
}

function Edit4() {
  return (
    <div className="relative shrink-0 size-6" data-name="Edit 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#clip0_2169_789)" id="Edit 2">
          <path
            d={svgPaths.p35fd4b00}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_789">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ManageBirds17() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Manage Birds"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#f2dfd3] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[22px] py-2.5 relative size-full">
          <Edit4 />
        </div>
      </div>
    </div>
  );
}

function Trash4() {
  return (
    <div className="relative shrink-0 size-6" data-name="Trash 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Trash 2">
          <path
            d={svgPaths.p1ea5da80}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </div>
  );
}

function ManageBirds18() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Manage Birds"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#f2dfd3] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[22px] py-2.5 relative size-full">
          <Trash4 />
        </div>
      </div>
    </div>
  );
}

function Frame118() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative w-full">
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <ManageBirds16 />
        </div>
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <ManageBirds17 />
        </div>
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <ManageBirds18 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#f2dfd3] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Card2() {
  return (
    <div
      className="[grid-area:1_/_3] bg-[#fffcfa] relative rounded-xl shrink-0"
      data-name="Card"
    >
      <div className="box-border content-stretch flex flex-col gap-3 items-center justify-center overflow-clip pb-0 pt-[21px] px-0 relative size-full">
        <div className="font-['Crimson_Text:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#856658] text-[17.75px] text-left text-nowrap uppercase">
          <p className="block leading-[1.426] whitespace-pre">crow</p>
        </div>
        <Frame123 />
        <Frame118 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#f2dfd3] border-solid inset-[-1px] pointer-events-none rounded-[13px]"
      />
    </div>
  );
}

function Frame125() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0 w-full">
      <div className="font-['Cormorant:SemiBold_Italic',_sans-serif] font-semibold italic leading-[0] relative shrink-0 text-[#160e0c] text-[28px] text-center w-full">
        <p className="block leading-[1.17]">
          The bulbul sang of love so sweetly that even the roses wept with
          longing.
        </p>
      </div>
    </div>
  );
}

function PenTool3() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Pen tool">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g clipPath="url(#clip0_2169_804)" id="Pen tool">
          <path
            d={svgPaths.p37a62100}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_804">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <PenTool3 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Anonymous</p>
      </div>
    </div>
  );
}

function Book3() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Book">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Book">
          <path
            d={svgPaths.p22acf700}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Book3 />
      <div className="css-qdxwx0 font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">1001 Nights</p>
      </div>
    </div>
  );
}

function Feather4() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Feather">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g clipPath="url(#clip0_2169_792)" id="Feather">
          <path
            d={svgPaths.p333ffb00}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_792">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button19() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Feather4 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Pycnonotidae</p>
      </div>
    </div>
  );
}

function Compass3() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Compass">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g clipPath="url(#clip0_2169_780)" id="Compass">
          <g id="Icon">
            <path
              d={svgPaths.p253def00}
              stroke="var(--stroke-0, #CCAE9D)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.4"
            />
            <path
              d={svgPaths.p247c4e80}
              stroke="var(--stroke-0, #CCAE9D)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.4"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2169_780">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button20() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Compass3 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Asia</p>
      </div>
    </div>
  );
}

function Circle3() {
  return (
    <div className="relative shrink-0 size-2.5" data-name="Circle">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10 10"
      >
        <g clipPath="url(#clip0_2169_786)" id="Circle">
          <path
            d={svgPaths.p26db7700}
            fill="var(--fill-0, #E47DA8)"
            id="Icon"
            stroke="var(--stroke-0, #E47DA8)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_786">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button21() {
  return (
    <div
      className="bg-[#fee4e5] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Circle3 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#641f46] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Love</p>
      </div>
    </div>
  );
}

function Frame119() {
  return (
    <div className="[flex-flow:wrap] box-border content-start flex gap-2.5 items-start justify-center p-0 relative shrink-0 w-full">
      <Button17 />
      <Button18 />
      <Button19 />
      <Button20 />
      <Button21 />
    </div>
  );
}

function Frame128() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start pb-8 pt-0 px-[21px] relative size-full">
          <Frame125 />
          <Frame119 />
        </div>
      </div>
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="relative shrink-0 size-6" data-name="checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="checkbox">
          <path
            d={svgPaths.p11d16a80}
            fill="var(--fill-0, #FFF8F2)"
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </div>
  );
}

function ManageBirds19() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Manage Birds"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[22px] py-2.5 relative size-full">
          <Checkbox3 />
        </div>
      </div>
    </div>
  );
}

function Edit5() {
  return (
    <div className="relative shrink-0 size-6" data-name="Edit 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#clip0_2169_789)" id="Edit 2">
          <path
            d={svgPaths.p35fd4b00}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_789">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ManageBirds20() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Manage Birds"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#f2dfd3] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[22px] py-2.5 relative size-full">
          <Edit5 />
        </div>
      </div>
    </div>
  );
}

function Trash5() {
  return (
    <div className="relative shrink-0 size-6" data-name="Trash 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Trash 2">
          <path
            d={svgPaths.p1ea5da80}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </div>
  );
}

function ManageBirds21() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Manage Birds"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#f2dfd3] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[22px] py-2.5 relative size-full">
          <Trash5 />
        </div>
      </div>
    </div>
  );
}

function Frame120() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative w-full">
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <ManageBirds19 />
        </div>
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <ManageBirds20 />
        </div>
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <ManageBirds21 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#f2dfd3] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Card3() {
  return (
    <div
      className="[grid-area:1_/_4] bg-[#fffcfa] relative rounded-xl shrink-0"
      data-name="Card"
    >
      <div className="box-border content-stretch flex flex-col gap-3 items-center justify-center overflow-clip pb-0 pt-[21px] px-0 relative size-full">
        <div className="font-['Crimson_Text:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#856658] text-[17.75px] text-left text-nowrap uppercase">
          <p className="block leading-[1.426] whitespace-pre">bulbul</p>
        </div>
        <Frame128 />
        <Frame120 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#f2dfd3] border-solid inset-[-1px] pointer-events-none rounded-[13px]"
      />
    </div>
  );
}

function Frame129() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start p-0 relative shrink-0 w-full">
      <div className="font-['Cormorant:SemiBold_Italic',_sans-serif] font-semibold italic leading-[0] relative shrink-0 text-[#160e0c] text-[28px] text-center w-full">
        <p className="block leading-[1.17]">
          Once upon a midnight dreary, while I pondered, weak and weary…
        </p>
      </div>
    </div>
  );
}

function PenTool4() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Pen tool">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g clipPath="url(#clip0_2169_804)" id="Pen tool">
          <path
            d={svgPaths.p37a62100}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_804">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button22() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <PenTool4 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Edgar Allan Poe</p>
      </div>
    </div>
  );
}

function Book4() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Book">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Book">
          <path
            d={svgPaths.p22acf700}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </g>
      </svg>
    </div>
  );
}

function Button23() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Book4 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">The Raven</p>
      </div>
    </div>
  );
}

function Feather5() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Feather">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g clipPath="url(#clip0_2169_792)" id="Feather">
          <path
            d={svgPaths.p333ffb00}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_792">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button24() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Feather5 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Corvidae</p>
      </div>
    </div>
  );
}

function Compass4() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Compass">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g clipPath="url(#clip0_2169_780)" id="Compass">
          <g id="Icon">
            <path
              d={svgPaths.p253def00}
              stroke="var(--stroke-0, #CCAE9D)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.4"
            />
            <path
              d={svgPaths.p247c4e80}
              stroke="var(--stroke-0, #CCAE9D)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.4"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2169_780">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button25() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Compass4 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">North America</p>
      </div>
    </div>
  );
}

function Circle4() {
  return (
    <div className="relative shrink-0 size-2.5" data-name="Circle">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10 10"
      >
        <g clipPath="url(#clip0_2169_771)" id="Circle">
          <path
            d={svgPaths.p26db7700}
            fill="var(--fill-0, #66A0C8)"
            id="Icon"
            stroke="var(--stroke-0, #66A0C8)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_771">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button26() {
  return (
    <div
      className="bg-[#e1eceb] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Circle4 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#163b66] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Sadness</p>
      </div>
    </div>
  );
}

function Frame130() {
  return (
    <div className="[flex-flow:wrap] box-border content-start flex gap-2.5 items-start justify-center p-0 relative shrink-0 w-full">
      <Button22 />
      <Button23 />
      <Button24 />
      <Button25 />
      <Button26 />
    </div>
  );
}

function Frame131() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between px-[21px] py-8 relative size-full">
          <Frame129 />
          <Frame130 />
        </div>
      </div>
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="relative shrink-0 size-6" data-name="checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="checkbox">
          <path
            d={svgPaths.p11d16a80}
            fill="var(--fill-0, #FFF8F2)"
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </div>
  );
}

function ManageBirds22() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Manage Birds"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[22px] py-2.5 relative size-full">
          <Checkbox4 />
        </div>
      </div>
    </div>
  );
}

function Edit6() {
  return (
    <div className="relative shrink-0 size-6" data-name="Edit 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#clip0_2169_789)" id="Edit 2">
          <path
            d={svgPaths.p35fd4b00}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_789">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ManageBirds23() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Manage Birds"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#f2dfd3] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[22px] py-2.5 relative size-full">
          <Edit6 />
        </div>
      </div>
    </div>
  );
}

function Trash6() {
  return (
    <div className="relative shrink-0 size-6" data-name="Trash 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Trash 2">
          <path
            d={svgPaths.p1ea5da80}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </div>
  );
}

function ManageBirds24() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Manage Birds"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#f2dfd3] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[22px] py-2.5 relative size-full">
          <Trash6 />
        </div>
      </div>
    </div>
  );
}

function Frame132() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative w-full">
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <ManageBirds22 />
        </div>
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <ManageBirds23 />
        </div>
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <ManageBirds24 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#f2dfd3] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Card4() {
  return (
    <div
      className="[grid-area:2_/_3] bg-[#fffcfa] relative rounded-xl shrink-0"
      data-name="Card"
    >
      <div className="box-border content-stretch flex flex-col gap-3 items-center justify-center overflow-clip pb-0 pt-[21px] px-0 relative size-full">
        <div className="font-['Crimson_Text:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#856658] text-[17.75px] text-left text-nowrap uppercase">
          <p className="block leading-[1.426] whitespace-pre">raven</p>
        </div>
        <Frame131 />
        <Frame132 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#f2dfd3] border-solid inset-[-1px] pointer-events-none rounded-[13px]"
      />
    </div>
  );
}

function Frame133() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0 w-full">
      <div className="font-['Cormorant:SemiBold_Italic',_sans-serif] font-semibold italic leading-[0] relative shrink-0 text-[#160e0c] text-[28px] text-center text-nowrap">
        <p className="block leading-[1.17] whitespace-pre">
          A crow o’ the same colour.
        </p>
      </div>
    </div>
  );
}

function PenTool5() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Pen tool">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g clipPath="url(#clip0_2169_804)" id="Pen tool">
          <path
            d={svgPaths.p37a62100}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_804">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button27() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <PenTool5 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">William Shakespeare</p>
      </div>
    </div>
  );
}

function Book5() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Book">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Book">
          <path
            d={svgPaths.p22acf700}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </g>
      </svg>
    </div>
  );
}

function Button28() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Book5 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Twelfth Night</p>
      </div>
    </div>
  );
}

function Feather6() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Feather">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g clipPath="url(#clip0_2169_792)" id="Feather">
          <path
            d={svgPaths.p333ffb00}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_792">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button29() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Feather6 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Corvidae</p>
      </div>
    </div>
  );
}

function Compass5() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Compass">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g clipPath="url(#clip0_2169_780)" id="Compass">
          <g id="Icon">
            <path
              d={svgPaths.p253def00}
              stroke="var(--stroke-0, #CCAE9D)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.4"
            />
            <path
              d={svgPaths.p247c4e80}
              stroke="var(--stroke-0, #CCAE9D)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.4"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2169_780">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button30() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Compass5 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Europe</p>
      </div>
    </div>
  );
}

function Circle5() {
  return (
    <div className="relative shrink-0 size-2.5" data-name="Circle">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10 10"
      >
        <g clipPath="url(#clip0_2169_801)" id="Circle">
          <path
            d={svgPaths.p26db7700}
            fill="var(--fill-0, #5ABDAC)"
            id="Icon"
            stroke="var(--stroke-0, #5ABDAC)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_801">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button31() {
  return (
    <div
      className="bg-[#ddf1e4] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Circle5 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#164f4a] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Calm</p>
      </div>
    </div>
  );
}

function Frame134() {
  return (
    <div className="[flex-flow:wrap] box-border content-start flex gap-2.5 items-start justify-center p-0 relative shrink-0 w-full">
      <Button27 />
      <Button28 />
      <Button29 />
      <Button30 />
      <Button31 />
    </div>
  );
}

function Frame135() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start pb-8 pt-0 px-[21px] relative size-full">
          <Frame133 />
          <Frame134 />
        </div>
      </div>
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="relative shrink-0 size-6" data-name="checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="checkbox">
          <path
            d={svgPaths.p11d16a80}
            fill="var(--fill-0, #FFF8F2)"
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </div>
  );
}

function ManageBirds25() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Manage Birds"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[22px] py-2.5 relative size-full">
          <Checkbox5 />
        </div>
      </div>
    </div>
  );
}

function Edit7() {
  return (
    <div className="relative shrink-0 size-6" data-name="Edit 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#clip0_2169_789)" id="Edit 2">
          <path
            d={svgPaths.p35fd4b00}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_789">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ManageBirds26() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Manage Birds"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#f2dfd3] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[22px] py-2.5 relative size-full">
          <Edit7 />
        </div>
      </div>
    </div>
  );
}

function Trash7() {
  return (
    <div className="relative shrink-0 size-6" data-name="Trash 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Trash 2">
          <path
            d={svgPaths.p1ea5da80}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </div>
  );
}

function ManageBirds27() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Manage Birds"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#f2dfd3] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[22px] py-2.5 relative size-full">
          <Trash7 />
        </div>
      </div>
    </div>
  );
}

function Frame136() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative w-full">
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <ManageBirds25 />
        </div>
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <ManageBirds26 />
        </div>
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <ManageBirds27 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#f2dfd3] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Card5() {
  return (
    <div
      className="[grid-area:2_/_1] bg-[#fffcfa] relative rounded-xl shrink-0"
      data-name="Card"
    >
      <div className="box-border content-stretch flex flex-col gap-3 items-center justify-center overflow-clip pb-0 pt-[21px] px-0 relative size-full">
        <div className="font-['Crimson_Text:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#856658] text-[17.75px] text-left text-nowrap uppercase">
          <p className="block leading-[1.426] whitespace-pre">crow</p>
        </div>
        <Frame135 />
        <Frame136 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#f2dfd3] border-solid inset-[-1px] pointer-events-none rounded-[13px]"
      />
    </div>
  );
}

function Frame137() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start p-0 relative shrink-0 w-full">
      <div className="font-['Cormorant:SemiBold_Italic',_sans-serif] font-semibold italic leading-[0] relative shrink-0 text-[#160e0c] text-[28px] text-center w-full">
        <p className="block leading-[1.17]">
          The bulbul sang of love so sweetly that even the roses wept with
          longing.
        </p>
      </div>
    </div>
  );
}

function PenTool6() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Pen tool">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g clipPath="url(#clip0_2169_804)" id="Pen tool">
          <path
            d={svgPaths.p37a62100}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_804">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button32() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <PenTool6 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Anonymous</p>
      </div>
    </div>
  );
}

function Book6() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Book">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Book">
          <path
            d={svgPaths.p22acf700}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </g>
      </svg>
    </div>
  );
}

function Button33() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Book6 />
      <div className="css-qdxwx0 font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">1001 Nights</p>
      </div>
    </div>
  );
}

function Feather7() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Feather">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g clipPath="url(#clip0_2169_792)" id="Feather">
          <path
            d={svgPaths.p333ffb00}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_792">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button34() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Feather7 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Pycnonotidae</p>
      </div>
    </div>
  );
}

function Compass6() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Compass">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g clipPath="url(#clip0_2169_780)" id="Compass">
          <g id="Icon">
            <path
              d={svgPaths.p253def00}
              stroke="var(--stroke-0, #CCAE9D)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.4"
            />
            <path
              d={svgPaths.p247c4e80}
              stroke="var(--stroke-0, #CCAE9D)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.4"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2169_780">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button35() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Compass6 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Asia</p>
      </div>
    </div>
  );
}

function Circle6() {
  return (
    <div className="relative shrink-0 size-2.5" data-name="Circle">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10 10"
      >
        <g clipPath="url(#clip0_2169_786)" id="Circle">
          <path
            d={svgPaths.p26db7700}
            fill="var(--fill-0, #E47DA8)"
            id="Icon"
            stroke="var(--stroke-0, #E47DA8)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_786">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button36() {
  return (
    <div
      className="bg-[#fee4e5] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Circle6 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#641f46] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Love</p>
      </div>
    </div>
  );
}

function Frame138() {
  return (
    <div className="[flex-flow:wrap] box-border content-start flex gap-2.5 items-start justify-center p-0 relative shrink-0 w-full">
      <Button32 />
      <Button33 />
      <Button34 />
      <Button35 />
      <Button36 />
    </div>
  );
}

function Frame139() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between px-[21px] py-8 relative size-full">
          <Frame137 />
          <Frame138 />
        </div>
      </div>
    </div>
  );
}

function Checkbox6() {
  return (
    <div className="relative shrink-0 size-6" data-name="checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="checkbox">
          <path
            d={svgPaths.p11d16a80}
            fill="var(--fill-0, #FFF8F2)"
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </div>
  );
}

function ManageBirds28() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Manage Birds"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[22px] py-2.5 relative size-full">
          <Checkbox6 />
        </div>
      </div>
    </div>
  );
}

function Edit8() {
  return (
    <div className="relative shrink-0 size-6" data-name="Edit 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#clip0_2169_789)" id="Edit 2">
          <path
            d={svgPaths.p35fd4b00}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_789">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ManageBirds29() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Manage Birds"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#f2dfd3] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[22px] py-2.5 relative size-full">
          <Edit8 />
        </div>
      </div>
    </div>
  );
}

function Trash8() {
  return (
    <div className="relative shrink-0 size-6" data-name="Trash 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Trash 2">
          <path
            d={svgPaths.p1ea5da80}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </div>
  );
}

function ManageBirds30() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Manage Birds"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#f2dfd3] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[22px] py-2.5 relative size-full">
          <Trash8 />
        </div>
      </div>
    </div>
  );
}

function Frame140() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative w-full">
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <ManageBirds28 />
        </div>
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <ManageBirds29 />
        </div>
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <ManageBirds30 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#f2dfd3] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Card6() {
  return (
    <div
      className="[grid-area:2_/_2] bg-[#fffcfa] relative rounded-xl shrink-0"
      data-name="Card"
    >
      <div className="box-border content-stretch flex flex-col gap-3 items-center justify-center overflow-clip pb-0 pt-[21px] px-0 relative size-full">
        <div className="font-['Crimson_Text:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#856658] text-[17.75px] text-left text-nowrap uppercase">
          <p className="block leading-[1.426] whitespace-pre">bulbul</p>
        </div>
        <Frame139 />
        <Frame140 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#f2dfd3] border-solid inset-[-1px] pointer-events-none rounded-[13px]"
      />
    </div>
  );
}

function Frame141() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start p-0 relative shrink-0 w-full">
      <div className="font-['Cormorant:SemiBold_Italic',_sans-serif] font-semibold italic leading-[0] relative shrink-0 text-[#160e0c] text-[28px] text-center w-full">
        <p className="block leading-[1.17]">
          The raven himself is hoarse That croaks the fatal entrance of Duncan
          Under my battlements.
        </p>
      </div>
    </div>
  );
}

function PenTool7() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Pen tool">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g clipPath="url(#clip0_2169_804)" id="Pen tool">
          <path
            d={svgPaths.p37a62100}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_804">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button37() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <PenTool7 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">William Shakespeare</p>
      </div>
    </div>
  );
}

function Book7() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Book">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="Book">
          <path
            d={svgPaths.p22acf700}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </g>
      </svg>
    </div>
  );
}

function Button38() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Book7 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Macbeth</p>
      </div>
    </div>
  );
}

function Circle7() {
  return (
    <div className="relative shrink-0 size-2.5" data-name="Circle">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 10 10"
      >
        <g clipPath="url(#clip0_2169_783)" id="Circle">
          <path
            d={svgPaths.p26db7700}
            fill="var(--fill-0, #A699D0)"
            id="Icon"
            stroke="var(--stroke-0, #A699D0)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_783">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button39() {
  return (
    <div
      className="bg-[#f0eaec] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Circle7 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#3c2a62] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Fear</p>
      </div>
    </div>
  );
}

function Feather8() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Feather">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g clipPath="url(#clip0_2169_792)" id="Feather">
          <path
            d={svgPaths.p333ffb00}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_792">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button40() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Feather8 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Corvidae</p>
      </div>
    </div>
  );
}

function Compass7() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Compass">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g clipPath="url(#clip0_2169_780)" id="Compass">
          <g id="Icon">
            <path
              d={svgPaths.p253def00}
              stroke="var(--stroke-0, #CCAE9D)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.4"
            />
            <path
              d={svgPaths.p247c4e80}
              stroke="var(--stroke-0, #CCAE9D)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.4"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2169_780">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button41() {
  return (
    <div
      className="bg-[#faeee6] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[9.02px] relative rounded-[9.02px] shrink-0"
      data-name="Button"
    >
      <Compass7 />
      <div className="font-['Crimson_Text:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#160e0c] text-[14px] text-left text-nowrap">
        <p className="block leading-none whitespace-pre">Europe</p>
      </div>
    </div>
  );
}

function Frame142() {
  return (
    <div className="[flex-flow:wrap] box-border content-start flex gap-2.5 items-start justify-center p-0 relative shrink-0 w-full">
      <Button37 />
      <Button38 />
      <Button39 />
      <Button40 />
      <Button41 />
    </div>
  );
}

function Frame143() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between px-[21px] py-8 relative size-full">
          <Frame141 />
          <Frame142 />
        </div>
      </div>
    </div>
  );
}

function Checkbox7() {
  return (
    <div className="relative shrink-0 size-6" data-name="checkbox">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="checkbox">
          <path
            d={svgPaths.p11d16a80}
            fill="var(--fill-0, #FFF8F2)"
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </div>
  );
}

function ManageBirds31() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Manage Birds"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[22px] py-2.5 relative size-full">
          <Checkbox7 />
        </div>
      </div>
    </div>
  );
}

function Edit9() {
  return (
    <div className="relative shrink-0 size-6" data-name="Edit 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#clip0_2169_789)" id="Edit 2">
          <path
            d={svgPaths.p35fd4b00}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_2169_789">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ManageBirds32() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Manage Birds"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#f2dfd3] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[22px] py-2.5 relative size-full">
          <Edit9 />
        </div>
      </div>
    </div>
  );
}

function Trash9() {
  return (
    <div className="relative shrink-0 size-6" data-name="Trash 2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Trash 2">
          <path
            d={svgPaths.p1ea5da80}
            id="Icon"
            stroke="var(--stroke-0, #CCAE9D)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </div>
  );
}

function ManageBirds33() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Manage Birds"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#f2dfd3] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[22px] py-2.5 relative size-full">
          <Trash9 />
        </div>
      </div>
    </div>
  );
}

function Frame144() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative w-full">
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <ManageBirds31 />
        </div>
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <ManageBirds32 />
        </div>
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <ManageBirds33 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#f2dfd3] border-[1px_0px_0px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Card7() {
  return (
    <div
      className="[grid-area:2_/_4] bg-[#fffcfa] relative rounded-xl shrink-0"
      data-name="Card"
    >
      <div className="box-border content-stretch flex flex-col gap-3 items-center justify-center overflow-clip pb-0 pt-[21px] px-0 relative size-full">
        <div className="font-['Crimson_Text:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#856658] text-[17.75px] text-left text-nowrap uppercase">
          <p className="block leading-[1.426] whitespace-pre">raven</p>
        </div>
        <Frame143 />
        <Frame144 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#f2dfd3] border-solid inset-[-1px] pointer-events-none rounded-[13px]"
      />
    </div>
  );
}

function Frame112() {
  return (
    <div className="box-border gap-11 grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[870px] p-0 relative shrink-0 w-full">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
      <Card7 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="basis-0 bg-[#fff8f2] grow h-full min-h-px min-w-px relative shrink-0">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[25.25px] items-start justify-start p-[25.25px] relative size-full">
          <Frame105 />
          <Frame106 />
          <Frame112 />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div
      className="bg-[#fff8f2] box-border content-stretch flex flex-row items-center justify-start p-0 relative size-full"
      data-name="App"
    >
      <Sidebar />
      <Frame104 />
    </div>
  );
}