import Link from "next/link";
import { FC } from "react";

const DrawerItem: FC<{ text: string; linkVal: string, onSelect: () => void }> = ({
  text,
  linkVal,
  onSelect
}) => {
  return (
    <Link
      onClick={onSelect}
      className="font-medium transition-colors duration-200 px-4 py-2 hover:bg-[#27272A]"
      href={linkVal}
    >
      {text}
    </Link>
  );
};

export default DrawerItem;
