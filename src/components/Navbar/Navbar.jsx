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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";
import AuthForm from "../AuthForm/AuthForm";
import { useEffect, useState } from "react";
import axios from "axios";

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

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use await to get the resolved data from the promise
        const response = await axios.get("/api/users/details");
        setUser(response.data.data);
      } catch (error) {
        console.error("Error fetching user details:", error.message);
      }
    };

    fetchData();
  }, []);
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

          {user ? (
            <Dialog>
              <DialogTrigger asChild>
                <Button>Login/Signup</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader className='flex flex-col items-center justify-center my-2'>
                  <DialogTitle className='text-2xl'>Next Community</DialogTitle>
                  <DialogDescription>
                    A Community for Developers
                  </DialogDescription>
                </DialogHeader>
                <AuthForm />
              </DialogContent>
            </Dialog>
          ) : (
            <span className='text-2xl font-bold text-white'>
              {console.log(user)}
            </span>
          )}
          <ModeToggle />
        </div>
      </div>
    </>
  );
};

export default Navbar;
