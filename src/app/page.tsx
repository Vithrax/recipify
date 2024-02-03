import { Button } from "@/components/ui/button";
import { unstable_noStore as noStore } from "next/cache";
import { PartyPopper, LinkIcon } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  noStore();

  return (
    <main className="space-y-8 px-4">
      <section className="h-screen pt-56" id="hero">
        <Link href="https://github.com/Vithrax/recipify" target="_blank">
          <div className="mx-auto flex w-fit items-center justify-center gap-2 rounded-full border px-2 py-0.5">
            <PartyPopper className="h-4 w-4" />
            <p className="text-sm">We are now open sourced!</p>
            <LinkIcon className="h-3 w-3" />
          </div>
        </Link>
        <h1 className="tracking mt-3 text-center text-4xl font-extrabold leading-8 tracking-tight">
          The Ultimate Recipe Workshop App
        </h1>
        <p className="mt-4 text-center leading-5">
          Everything you need to perfect your recipies in{" "}
          <span className="underline">one place.</span>
        </p>
        <div className="mt-10 flex items-center justify-center gap-2">
          <Button>Become a chef</Button>
          <Button variant="outline">Learn more</Button>
        </div>
      </section>
    </main>
  );
}
