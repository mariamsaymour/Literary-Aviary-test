function Frame49() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row font-semibold items-center justify-between leading-[0] p-0 relative text-[#341818] text-left text-nowrap w-full">
        <div className="font-['Crimson_Pro:SemiBold',_sans-serif] relative shrink-0 text-[16px]">
          <p className="block leading-[normal] text-nowrap whitespace-pre">
            TOTAL BIRDS
          </p>
        </div>
        <div className="font-['Cormorant:SemiBold_Italic',_sans-serif] italic relative shrink-0 text-[36px]">
          <p className="block leading-[normal] text-nowrap whitespace-pre">
            40
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative w-full">
        <div className="font-['Crimson_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#5a3636] text-[16px] text-left w-[133px]">
          <p className="block leading-[normal]">Nightingale</p>
        </div>
        <div className="bg-[#a98f89] h-[9px] rounded-[11px] shrink-0 w-[185.075px]" />
        <div className="font-['Crimson_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#977676] text-[16px] text-left w-[9px]">
          <p className="block leading-[normal]">4</p>
        </div>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative w-full">
        <div className="font-['Crimson_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#5a3636] text-[16px] text-left w-[133px]">
          <p className="block leading-[normal]">Raven</p>
        </div>
        <div className="bg-[#a98f89] h-[9px] rounded-[11px] shrink-0 w-[133.214px]" />
        <div className="font-['Crimson_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#977676] text-[16px] text-left w-2">
          <p className="block leading-[normal]">3</p>
        </div>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative w-full">
        <div className="font-['Crimson_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#5a3636] text-[16px] text-left w-[133px]">
          <p className="block leading-[normal]">Crow</p>
        </div>
        <div className="bg-[#a98f89] h-[9px] rounded-[11px] shrink-0 w-[133.214px]" />
        <div className="font-['Crimson_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#977676] text-[16px] text-left w-2">
          <p className="block leading-[normal]">3</p>
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative w-full">
        <div className="font-['Crimson_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#5a3636] text-[16px] text-left w-[133px]">
          <p className="block leading-[normal]">Lark</p>
        </div>
        <div className="bg-[#a98f89] h-[9px] rounded-[11px] shrink-0 w-[133.214px]" />
        <div className="font-['Crimson_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#977676] text-[16px] text-left w-2">
          <p className="block leading-[normal]">3</p>
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative w-full">
        <div className="font-['Crimson_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#5a3636] text-[16px] text-left w-[133px]">
          <p className="block leading-[normal]">Eagle</p>
        </div>
        <div className="bg-[#a98f89] h-[9px] rounded-[11px] shrink-0 w-[133.214px]" />
        <div className="font-['Crimson_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#977676] text-[16px] text-left w-2">
          <p className="block leading-[normal]">3</p>
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-[15px] items-start justify-start p-0 relative w-full">
        <div className="font-['Crimson_Pro:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#977676] text-[16px] text-left w-[341px]">
          <p className="block leading-[normal]">Top 5 Species</p>
        </div>
        <Frame50 />
        <Frame51 />
        <Frame52 />
        <Frame53 />
        <Frame54 />
      </div>
    </div>
  );
}

export default function Frame48() {
  return (
    <div className="bg-[#fffcfa] relative rounded-[20px] size-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[38px] items-start justify-start overflow-clip p-[36px] relative size-full">
          <Frame49 />
          <Frame55 />
        </div>
      </div>
      <div className="absolute border border-[#f2eae4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}