import Link from 'next/link';
import React from 'react';
import {links} from './links';

function NavBar() {
  return (
    <div>
      <Link href={'/'}>Demopedia</Link>
      <div>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
