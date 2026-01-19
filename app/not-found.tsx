import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col text-center mt-20">
      <h1 className="text-9xl mt-20">404</h1>
      <p className="text-4xl">Page not found</p>
      <Link href="/" className="mt-10">
        Navigate to Homepage
      </Link>
    </div>
  );
}
