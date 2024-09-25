import React from "react";

export default async function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">{children}</div>
    </section>
  );
}
