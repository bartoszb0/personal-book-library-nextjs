import { UserMenu } from "@/app/(app)/components/user-menu";
import { Spinner } from "@/components/loading-spinner";
import Link from "next/link";
import { Suspense } from "react";

export default function Header() {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
        <div className="flex gap-5 items-center font-semibold">
          <Link href={"/"}>Personal Books Library</Link>
        </div>
        <Suspense fallback={<Spinner />}>
          <UserMenu />
        </Suspense>
      </div>
    </nav>
  );
}
