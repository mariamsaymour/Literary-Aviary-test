function Frame17() {
  return (
    <div className="bg-[#e186be] relative rounded-[127.5px] shrink-0 size-[255px]">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-[89px] py-[118px] relative size-[255px]">
          <div className="font-['Crimson_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">Love</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#e2a35f] relative rounded-[127.5px] shrink-0 size-[255px]">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-[89px] py-[118px] relative size-[255px]">
          <div className="font-['Crimson_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">Happy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#ded97a] relative rounded-[127.5px] shrink-0 size-[255px]">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-[89px] py-[118px] relative size-[255px]">
          <div className="font-['Crimson_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">Surprised</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#c9bdba] relative rounded-[127.5px] shrink-0 size-[255px]">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-[89px] py-[118px] relative size-[255px]">
          <div className="font-['Crimson_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">Neutral</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#96a5cc] relative rounded-[127.5px] shrink-0 size-[255px]">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-[89px] py-[118px] relative size-[255px]">
          <div className="font-['Crimson_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">Sad</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#9f76ac] relative rounded-[127.5px] shrink-0 size-[255px]">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-[89px] py-[118px] relative size-[255px]">
          <div className="font-['Crimson_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">Afraid</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#d88282] relative rounded-[127.5px] shrink-0 size-[255px]">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-[89px] py-[118px] relative size-[255px]">
          <div className="font-['Crimson_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">Angry</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ColourPalette() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="Colour palette">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start px-[132px] py-[118px] relative size-full">
          <Frame17 />
          <Frame11 />
          <Frame16 />
          <Frame15 />
          <Frame12 />
          <Frame14 />
          <Frame13 />
        </div>
      </div>
    </div>
  );
}