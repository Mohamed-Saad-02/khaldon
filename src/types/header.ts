export type LinkType = {
  name: string;
  href: string;
};

export type NavLinkProps = {
  link: LinkType;
  index: number;
  onClick?: () => void;
};
