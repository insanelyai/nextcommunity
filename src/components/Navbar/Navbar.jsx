"use client";
import { ModeToggle } from "@/components/ui/modeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const navLinks = [
    {
      key: "00",
      label: "Home",
      path: "/",
    },
    {
      key: "01",
      label: "Docs",
      path: "/docs",
    },
    {
      key: "03",
      label: "Blog",
      path: "/blog",
    },
  ];

  return (
    <>
      <div className='w-[100%] h-[100px] px-20  flex items-center justify-between'>
        <h1 className='font-semibold text-3xl'>Next Community</h1>
        <div className='flex gap-5 items-center justify-end'>
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((navlink) => (
                <NavigationMenuItem key={navlink.key}>
                  <NavigationMenuLink
                    href={navlink.path}
                    className={`${navigationMenuTriggerStyle()} + text-base  px-2`}>
                    {navlink.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <ModeToggle />
        </div>
      </div>
    </>
  );
};

export default Navbar;
