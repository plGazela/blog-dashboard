import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="mb-10 text-3xl font-bold">Recent blog posts</h1>
      <section className="grid gap-10 grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3">
        <Card className="border-0 shadow-none">
          <CardHeader className="px-0">
            <Link href="#" className="hover:text-slate-700">
              <CardTitle>My first post</CardTitle>
            </Link>
            <CardDescription>10 January 2024</CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aliquam nesciunt fuga molestias qui totam aperiam dolores atque aut necessitatibus ipsa vero, similique libero explicabo rem nostrum itaque rerum. Dolores...</p>
          </CardContent>
          <CardFooter className="px-0 pb-0">
            <Link href="#" className="underline hover:text-slate-700">Read more</Link>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}
