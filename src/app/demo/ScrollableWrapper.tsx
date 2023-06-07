'use client';

import { PropsWithChildren } from 'react';

export default function ScrollableWrapper(
  props: PropsWithChildren,
): JSX.Element {
  return <div className="h-full overflow-scroll">{props.children}</div>;
}
