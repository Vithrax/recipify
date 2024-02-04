import { Button } from "@/components/ui/button";
import { unstable_noStore as noStore } from "next/cache";
import { PartyPopper, LinkIcon, ChevronDown } from "lucide-react";
import Link from "next/link";
import LandingPagePriceCalculator from "@/components/landing-page-price-calc";
import { footerLinks } from "@/config";
import LoginDrawer from "@/components/login-drawer";
import { getServerAuthSession } from "@/server/auth";
import AppPreviewCarousel from "@/components/landing-page-app-preview";

export default async function Home() {
  noStore();
  const session = await getServerAuthSession();

  return (
    <main>
      {/* hero section */}
      <section className="relative px-3 pt-12 text-center" id="hero">
        <h1 className="mb-16 font-logo text-5xl text-primary">Recipify</h1>
        <header className="space-y-4">
          <Link href="https://github.com/Vithrax/recipify" target="_blank">
            <div className="mx-auto flex w-fit items-center justify-center gap-2 rounded-md border bg-primary/5 px-2 py-0.5">
              <PartyPopper className="h-4 w-4 text-primary" />
              <p className="text-sm">We are now open sourced!</p>
              <LinkIcon className="h-3 w-3" />
            </div>
          </Link>
          <h2 className="text-3xl font-extrabold leading-8 tracking-tight">
            The Ultimate Recipe Workshop App
          </h2>
          <p className="leading-5">
            Everything you need to perfect your recipies in{" "}
            <span className="underline">one place.</span>
          </p>
        </header>
        <div className="mt-10 flex items-center justify-center gap-2">
          {session ? (
            <>
              <Link href="/dashboard">
                <Button>Go to App</Button>
              </Link>
            </>
          ) : (
            <LoginDrawer>
              <Button>Become a chef</Button>
            </LoginDrawer>
          )}
          <Button variant="outline" asChild>
            <Link href="#about">Learn more</Link>
          </Button>
        </div>

        <AppPreviewCarousel />
      </section>
      <div className="bottom-0 mt-8 h-12 ">
        <Link href="#about">
          <ChevronDown className="mx-auto h-8 w-8 animate-bounce text-primary" />
        </Link>
      </div>

      {/* about section */}
      <section
        className="flex h-screen flex-col justify-around bg-primary/10 px-3 text-center"
        id="about"
      >
        <header className="space-y-3">
          <h2 className="text-3xl font-bold leading-6 tracking-tight">
            How <span className="font-logo text-primary">Recipify</span> works?
          </h2>
        </header>
        <ul className="space-y-10">
          <li className="grid grid-cols-[min-content,auto] text-left">
            <span className="w-min px-5 text-2xl font-bold text-primary">
              01
            </span>
            <h3 className="text-xl font-semibold">Sign up</h3>
            <p className="col-start-2 row-start-2">
              Create a free Recipify account. You can sign up using your Google
              account
            </p>
          </li>
          <li className="grid grid-cols-[min-content,auto] text-left">
            <span className="w-min px-5 text-2xl font-bold text-primary">
              02
            </span>
            <h3 className="text-xl font-semibold">Add a recipe</h3>
            <p className="col-start-2 row-start-2">
              Note your recipe. List ingredients and rate the result using
              provided metrics.
            </p>
          </li>
          <li className="grid grid-cols-[min-content,auto] text-left">
            <span className="w-min px-5 text-2xl font-bold text-primary">
              03
            </span>
            <h3 className="text-xl font-semibold">Experiment!</h3>
            <p className="col-start-2 row-start-2">
              Recreate your recipies using different ingredients! Compare the
              versions and find out the best one!
            </p>
          </li>
        </ul>
      </section>

      {/* Price */}
      <section
        className="flex h-screen flex-col justify-around px-3 pb-8 text-center"
        id="price"
      >
        <header className="space-y-4 pb-8">
          <h3 className="pt-24 text-4xl font-bold leading-8 tracking-tight">
            Want <span className="text-primary">Premium</span> experience?
          </h3>
          <p className="text-balance leading-5">
            We got your back. Select features you need. Paying for something you
            won&apos;t use is a waste!
          </p>
        </header>
        <LandingPagePriceCalculator session={!!session} />
      </section>

      <footer className="bg-primary/5 p-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-logo text-2xl text-primary">Recipify</h3>
            <p className="mt-4 text-xs text-muted-foreground">
              &copy; Adrian Gajdulewicz, 2024
            </p>
          </div>
          <ul>
            {footerLinks.map(({ href, text }) => (
              <li key={text}>
                <Button asChild variant="link" size="sm">
                  <Link href={href}>{text}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </main>
  );
}
