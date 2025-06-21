"use client";

import { routes } from "@/routes";
import { navToSection } from "@/lib";
import Signup from "./buttons/Signup";

type Link = {
  name: string;
  href: string;
};

const navLinks: Link[] = [
  { name: "Who We Are", href: routes.whoWeAre },
  { name: "Why Us", href: routes.whyUs },
  { name: "Try Now", href: routes.tryNow },
];

function Nav() {
  return (
    <nav className="hidden md:block">
      <ul className="text-link flex items-center gap-5 text-xs font-semibold sm:text-sm">
        {navLinks.map((link, index) => (
          <li
            key={link.name}
            role="button"
            onClick={() =>
              navToSection(
                link.href,
                "smooth",
                index === 0 ? "start" : "center",
              )
            }
            className="cursor-pointer"
          >
            {link.name}
          </li>
        ))}
        <li>
          <Signup />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
