export default function ExperienceSideBar() {
  return (
    <ul className="pointer-events-none absolute left-5 z-50 mt-3 inline-flex flex-col items-start bg-none">
      <li className="pointer-events-auto cursor-pointer text-[7rem] font-bold hover:text-[rgba(250,250,250,0.5)]">
        All
      </li>
      <li className="pointer-events-auto cursor-pointer text-[7rem] font-bold hover:text-[rgba(250,250,250,0.5)]">
        PERSONAL
      </li>
      <li className="pointer-events-auto cursor-pointer text-[7rem] font-bold hover:text-[rgba(250,250,250,0.5)]">
        BRANDS
      </li>
    </ul>
  );
}
