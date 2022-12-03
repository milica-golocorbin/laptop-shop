import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <main className="flex-1 w-full min-h-[calc(100vh-5rem)]">{children}</main>
  );
};

export default Layout;
