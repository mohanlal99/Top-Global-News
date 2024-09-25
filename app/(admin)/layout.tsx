import { ReactNode } from "react";

import AdminNavbar from "./components/AdminNavbar";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section className="flex flex-col gap-2 py-2 px-3">
      <AdminNavbar />
      {children}
    </section>
  );
};

export default Layout;
