import { useMediaQuery } from "@/hooks/useMediaQuery";
import { navToSection } from "@/lib";
import { NavLinkProps } from "@/types";

function NavLink({ link, index, onClick }: NavLinkProps) {
  const isMobile = useMediaQuery("(max-width: 556px)");

  const handleClick = () => {
    navToSection(link.href, "smooth", index === 0 ? "start" : "center");

    if (isMobile) onClick?.();
  };

  return (
    <li
      key={link.name}
      role="button"
      className="cursor-pointer max-sm:py-2.5"
      onClick={handleClick}
    >
      {link.name}
    </li>
  );
}

export default NavLink;
