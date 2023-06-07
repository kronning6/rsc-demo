import 'server-only';
import React, { PropsWithChildren } from 'react';

export default function DemoLayout(props: PropsWithChildren) {
  return (
    <div className="p-5 flex h-full flex-col bg-[#24283B] text-[#bb9af7]">
      {props.children}
    </div>
  );
}
