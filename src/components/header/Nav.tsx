"use client";

import { useUser } from "@/context/UserContext";
import { routes } from "@/routes";
import { LinkType } from "@/types";
import Signup from "../buttons/Signup";
import NavLink from "./NavLink";
import ProfileAvatar from "./ProfileAvatar";
import { Skeleton } from "../ui/skeleton";
import { useState } from "react";
import { cn } from "@/lib";
import { Menu, X } from "lucide-react";

import { AnimatePresence, motion } from "motion/react";

const navLinks: LinkType[] = [
  { name: "Who We Are", href: routes.whoWeAre },
  { name: "Why Us", href: routes.whyUs },
  { name: "Try Now", href: routes.tryNow },
];

function Nav() {
  const [isNavActive, setIsNavActive] = useState(false);
  const { user, isUserReady } = useUser();

  const toggleNav = () => setIsNavActive((prev) => !prev);

  if (!isUserReady) return <Skeleton className="h-10 w-[285px]" />;

  return (
    <nav>
      <div className="flex items-center gap-5 text-xs font-semibold sm:text-sm">
        {/* Links */}
        <ul
          className={cn(
            "text-link max-sm: max-sm:shadow-land-price flex transition-all duration-300 max-sm:absolute max-sm:top-full max-sm:left-0 max-sm:w-full max-sm:flex-col max-sm:rounded-b-2xl max-sm:border-t max-sm:bg-white max-sm:px-6 max-sm:py-2.5 sm:items-center sm:gap-5",
            isNavActive
              ? "max-sm:visible max-sm:z-50 max-sm:opacity-100"
              : "max-sm:invisible max-sm:opacity-0",
          )}
        >
          {navLinks.map((link, index) => (
            <NavLink
              key={link.name}
              link={link}
              index={index}
              onClick={toggleNav}
            />
          ))}
        </ul>

        {/* Profile */}
        <div>{user ? <ProfileAvatar /> : <Signup />}</div>

        {/* Menu and X */}
        <button className="text-primary sm:hidden" onClick={toggleNav}>
          {isNavActive ? <X /> : <Menu />}
        </button>

        {/* Overlay */}
        <AnimatePresence>
          {isNavActive && (
            <motion.div
              className="absolute top-full left-0 z-40 h-screen w-full bg-black/15"
              role="button"
              onClick={toggleNav}
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Nav;
