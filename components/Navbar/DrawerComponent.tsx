"use client";
import { useEffect, useState } from "react";
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
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import DrawerItem from "./DrawerItem";
import { drawerItems } from "./Navbar";
const DrawerComponent = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 767) {
        setDrawerOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} direction="right">
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <DrawerTrigger asChild>
            <TooltipTrigger asChild>
              <button className="hamburger__button md:hidden">
                <Menu size={30} />
              </button>
            </TooltipTrigger>
          </DrawerTrigger>
          <TooltipContent>Open menu</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DrawerContent className="h-svh max-w-[300px] ms-auto">
        <DrawerHeader className="flex items-center justify-between">
          <DrawerTitle>Yusubov</DrawerTitle>
          <DrawerClose>
            <X className="stroke-white/50 hover:stroke-white/70 active:ring rounded-lg" />
          </DrawerClose>
        </DrawerHeader>
        <div className="flex flex-col">
          {drawerItems.map((item) => (
            <DrawerItem
              onSelect={() => setDrawerOpen(false)}
              key={item.text}
              text={item.text}
              linkVal={item.linkVal}
            />
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
