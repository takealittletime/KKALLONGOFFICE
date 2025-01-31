export default function ExperienceSideBar() {
  return (
    <div>
      <div className="absolute left-5 mt-3 flex h-[80dvh] flex-col bg-none">
        <p className="cursor-pointer text-[7rem] font-bold hover:text-[rgba(250,250,250,0.5)]">
          All
        </p>
        <p className="cursor-pointer text-[7rem] font-bold hover:text-[rgba(250,250,250,0.5)]">
          PERSONAL
        </p>
        <p className="cursor-pointer text-[7rem] font-bold hover:text-[rgba(250,250,250,0.5)]">
          BRANDS
        </p>
      </div>
    </div>
  );
}
