import { Menu } from "lucide-react";
import Image from "next/image";

export default function ExperienceHeader() {
  return (
    <div
      className="
      sticky 
      top-5 m-4 
      flex 
      h-[60px] 
      justify-between 
      bg-none 
      p-3
      text-white
      "
    >
      <div>
        <Image
          src="/logo/small_logo.png"
          alt="small logo"
          width={40}
          height={40}
          className="cursor-pointer"
        />
      </div>
      <div>
        <Image
          src="/logo/logo_white.png"
          alt="logo"
          width={266}
          height={40}
          className="cursor-pointer"
        />
      </div>
      <div>
        <Menu className="cursor-pointer" size={40} />
      </div>
    </div>
  );
}
