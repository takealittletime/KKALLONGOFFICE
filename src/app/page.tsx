import ExperienceContents from "./experience/_components/ExperienceContents/page";
import ExperienceHeader from "./experience/_components/ExperienceHeader/page";

export default function Home() {
  return (
    <div className="custom-scrollbar h-screen overflow-auto">
      <ExperienceHeader />
      <ExperienceContents />
    </div>
  );
}
