import Link from "next/link"

import { Button } from "@/components/ui/button"

const isLogged = false;

export default function Menu() {
  return (
    <nav className="flex items-center gap-1">
      { isLogged && <Link href="/admin" className="px-4 py-2 font-medium hover:text-slate-600">Admin</Link> }
      <Link href="/login">
        <Button>Log in</Button>
      </Link>
    </nav>
  );
}