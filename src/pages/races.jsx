import React from 'react';
import Link from 'next/link';

export default function races() {
  return (
    <>
      <div className="h-[500px]">races</div>
      <Link href="/hermanovarvet">Hermanövarvet</Link>
      <Link href="/trail">Hermanövarvet Trail</Link>
      <Link href="/barn">Hermanövarvet Barn</Link>
    </>
  );
}
