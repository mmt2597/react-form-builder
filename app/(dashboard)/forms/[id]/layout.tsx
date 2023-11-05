import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function layout({ children }: LayoutProps) {
  return (
    <div className="flex w-full flex-col flex-grow mx-auto">{children}</div>
  );
}
