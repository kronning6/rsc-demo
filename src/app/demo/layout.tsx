import 'server-only';
import React, { PropsWithChildren } from 'react';
import Link from 'next/link';

export default function DemoLayout(props: PropsWithChildren) {
  return (
    <div className="p-5 flex h-full flex-col bg-[#24283B] text-[#bb9af7]">
      <ul className="flex m-0 absolute top-0 left-0 right-0 pl-10">
        <li className="p-2"><Link href="/demo/main">Main</Link></li>
        <li className="p-2"><Link href="/demo/other">Other</Link></li>
      </ul>
      <div className="h-full pt-10 w-auto">{props.children}</div>
    </div>
  );
}
