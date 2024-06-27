import { FC } from "react";

const DrawerItem: FC<{ text: string; linkVal: string }> = ({
  text,
  linkVal,
}) => {
  return (
    <a
      className="font-medium transition-colors duration-200 px-4 py-2 hover:bg-[#27272A]"
      href={linkVal}
    >
      {text}
    </a>
  );
};

export default DrawerItem;
