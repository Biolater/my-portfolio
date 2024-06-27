import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
const Navbar = () => {
  return (
    <header className="main__header border-b border-[#27272A] flex items-center justify-between p-4">
      <Link href="/" className="main__header__logo">
        <span className="text-2xl font-semibold">yusubov</span>
      </Link>
      <Drawer direction="right">
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <DrawerTrigger asChild>
              <TooltipTrigger asChild>
                <button className="hamburger__button">
                  <Menu size={30} />
                </button>
              </TooltipTrigger>
            </DrawerTrigger>
            <TooltipContent>Open menu</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <DrawerContent className="h-screen max-w-[300px] ms-auto">
          <DrawerHeader className="flex items-center justify-between">
              <DrawerTitle>Yusubov</DrawerTitle>
              <DrawerClose>
                <X className="stroke-white/50 hover:stroke-white/70 active:ring rounded-lg" />
              </DrawerClose>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </header>
  );
};

export default Navbar;
