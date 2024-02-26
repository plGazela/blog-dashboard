import { getServerSession } from "next-auth/next"
import { config } from "@/lib/auth";

export default async function Page() {
  const session = await getServerSession(config)

  return(
    <>
      <h1 className="mb-10 text-3xl font-bold">Admin dashboard</h1>
      <pre>{ JSON.stringify(session, null, 2) }</pre>
    </>
  );
}