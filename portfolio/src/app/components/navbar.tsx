import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/about">Page 1</Link>
        </li>
        <li>
          <Link href="/projects">Page 2</Link>
        </li>
        <li>
          <Link href="/build-with-me">Page 3</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;