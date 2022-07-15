import Link from "next/link";

interface NavItemProps{
    text: string;
    href: string;
    active: any;
}
const NavItem = ({ text, href, active }: NavItemProps ) => {
  return (
    <Link href={href}>
      <a
        className={`nav__item ${
          active ? "active" : ""
        }`}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavItem;