import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header>
      <Link href="/">
        <Image
          src="/images/disney_logo.png"
          alt="Disney Logo"
          width={120}
          height={100}
          className="cursor-pointer"
        />
      </Link>
      <div className="flex space-x-2 ">
        {/* GenreDropdown */}
        {/* SearchInput */}
        {/* Themetoggler */}
      </div>
    </header>
  );
}

export default Header;
