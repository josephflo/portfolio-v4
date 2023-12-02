import { NavLinks } from "@/constants/NavLinks";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex bg-white justify-center items-center py-5 px-8 border-b border-nav-border">
      <div className="flex-1 flexStart gap-10">
        <Link href="/" >
          <Image
            src= "/next.svg"
            alt="logo"
            width={110}
            height={110}
            className="object-contain"
          />
        </Link>
      </div>
      <ul className="md:flex text-small md:gap-7">
        {NavLinks.map((link) => (
          <Link href={link.href} key={link.key} className="flex justify-center items-center">
            <li>{link.text}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
