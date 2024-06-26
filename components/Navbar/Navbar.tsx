import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const Navbar = () => {
  return (
    <header className="main__header border-b border-[#27272A] flex items-center justify-between p-4">
      <Link href="/" className="main__header__logo">
        <span className="text-2xl font-semibold">Yusubov</span>
      </Link>
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="hamburger__button">
              <Menu size={30} />
            </button>
          </TooltipTrigger>
          <TooltipContent>Open menu</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </header>
  );
};

export default Navbar;
