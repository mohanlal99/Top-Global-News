import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-1/2">
      <h2>404 Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link
        className="bg-primary text-primary-900 px-2 py-1 rounded-md border"
        href="/"
      >
        Return Home
      </Link>
    </div>
  );
}
