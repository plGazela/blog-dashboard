import Link from "next/link";

export default function Page() {
  return(
    <>
      <h1 className="mb-10 text-3xl font-bold">404</h1>
      <p className="my-4 text-justify">This page could not be found.</p>
      <Link href="/" className="underline hover:text-slate-700">Back to home</Link>
    </>
  );
}