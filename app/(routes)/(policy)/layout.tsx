import React from "react";

import BreadPage from "./components/Bread";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col gap-3 item-center justify-center px-3 ">
      <BreadPage />
      {children}
    </section>
  );
};

export default Layout;
